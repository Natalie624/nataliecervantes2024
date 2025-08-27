// utils/contentful.ts
/* We are using the Contentful REST API here. client.getEntries method is part of Contentful's REST API and is used 
 * to retrieve entries. The REST API is structured around entries and assets and it allows querying with certain parameters
 * like 'content_type' and field value (ie; 'fields.slug[match]').
 * 'getBlogPosts' function returns all blog posts. 'getEntryBySlug' function returns a single blog post when called with a given slug.
 */

import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

/* =====================================================================================
 * Client
 * ===================================================================================== */

export const createContentClient = () => {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Missing Contentful environment variables');
  }
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

const client = createContentClient();

/* =====================================================================================
 * Shared helpers / guards
 * ===================================================================================== */

const isAsset = (img: unknown): img is Asset => {
  return !!img && typeof img === 'object' && 'fields' in img && 'file' in (img as Asset).fields;
};

/* =====================================================================================
 * Blog types & queries (existing)
 * ===================================================================================== */

// BlogPostFields must be structured based on the expected fields of Contentful entries
interface BlogPostFields extends EntrySkeletonType {
  fields: {
    blogTitle: string;
    slug: string;
    image?: Asset;
    publishedDate: string;
    readTime: string;
  };
}

export interface LegalContent {
  slug: string;
  legalHeader: string;
  legalDescription: Document;
}

// Get Legal Content
export const getLegalContentBySlug = async (slug: string): Promise<LegalContent> => {
  const entries = await getEntryBySlug(slug, 'legalDocs');
  const entry = entries[0]; // still an Entry<any> — no cast needed

  return {
    slug: entry.fields.slug as string,
    legalHeader: entry.fields.legalHeader as string,
    legalDescription: entry.fields.legalDescription as Document,
  };
};

// Get 4 newest blog posts here and use in the main blog page "Featured Blogs"
export const getNewestBlogPosts = async () => {
  const results = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-sys.updatedAt', '-sys.createdAt'], // Order by updated & created date, descending
    include: 1, // Include linked assets (images)
  });

  const recentPosts = results.items.slice(0, 4).map((blog: Entry<BlogPostFields>) => {
    const { blogTitle, slug, image, readTime } = blog.fields;

    const imageUrl = isAsset(image) ? `https:${image.fields.file?.url}` : '';

    return {
      blogTitle: String(blogTitle),
      slug,
      image: imageUrl || '',
      readTime: String(readTime),
    };
  });
  return recentPosts;
};

export const getEntryBySlug = async (slug: string, type: string) => {
  const queryOptions = {
    content_type: type,
    include: 1, // Include linked assets (images)
    'fields.slug[match]': slug,
  };

  const queryResult = await client.getEntries(queryOptions);
  if (queryResult.items.length > 0) {
    return queryResult.items;
  } else {
    throw new Error(`No entries found for slug: ${slug}`);
  }
};

export const getPastPosts = async () => {
  const results = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'], // Order by system creation date
  });

  // Remove the newest 4 posts from past posts
  const pastPosts = results.items.slice(4).map((blog: Entry<BlogPostFields>) => {
    const { blogTitle, slug } = blog.fields;
    return {
      blogTitle: String(blogTitle),
      slug,
    };
  });

  // returns past posts beyond the newest 4 and adds return message if there are no pasts posts
  return pastPosts.length > 0
    ? pastPosts
    : [{ blogTitle: 'There are currently no archived posts to display', slug: ' ' }];
};

/* =====================================================================================
 * New: Homepage / Section types & query
 * ===================================================================================== */

// Content type id for the new sections is 'section'.
// HomePage content type (id: 'homePage') has a reference field 'homepageSection' that points to 'section'.

interface SectionFields extends EntrySkeletonType {
  fields: {
    sectionHeader: string;   // short text
    sectionBody: Document;   // rich text
    sectionAsset?: Asset;    // optional image
    sectionCTA?: string;     // optional URL
    ctaLabel?: string;       // optional CTA label
    slug?: string;           // optional
  };
}

interface HomePageFields extends EntrySkeletonType {
  fields: {
    homepageSection: Entry<SectionFields>[]; // ordered refs to 'section'
    slug?: string;                            // optional
  };
}

// Public shape consumed by the UI/components
export type HomepageSectionData = {
  header: string;
  body: Document;
  imageUrl?: string;
  ctaUrl?: string;
  ctaLabel?: string;
};

// Pull the (single) homePage entry and resolve its ordered homepageSection references.
export const getHomepageSections = async (): Promise<HomepageSectionData[]> => {
  const results = await client.getEntries<HomePageFields>({
    content_type: 'homePage',
    include: 2, // pull linked sections and their assets
    limit: 1,
    order: ['-sys.updatedAt', '-sys.createdAt'],
  });

  if (!results.items.length) return [];

  const home = results.items[0];
  const sections = (home.fields.homepageSection || []) as Entry<SectionFields>[];

  // Preserve the Contentful reference order
  return sections.map((sec) => {
    const { sectionHeader, sectionBody, sectionAsset, sectionCTA, ctaLabel } = sec.fields;

    const imageUrl = isAsset(sectionAsset)
      ? `https:${sectionAsset.fields.file?.url}`
      : undefined;

    return {
      header: String(sectionHeader),
      body: sectionBody as Document,
      imageUrl,
      ctaUrl: sectionCTA ? String(sectionCTA) : undefined,
      ctaLabel: ctaLabel ? String(ctaLabel) : undefined,
    };
  });
};
