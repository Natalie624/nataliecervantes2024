/* We are using the Contentful REST API here. client.getEntries method is part of Contentful's REST API and is used 
* to retrieve entries. The REST API is structured around entries and assets and it allows querying with certain parameters
* like 'content_type' and field value (ie; 'fields.slug[match]').
* 'getBlogPosts' function returns all blog posts. 'getEntryBySlug' function returns a single blog post when called with a given slug.
*/


import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';


export const createContentClient = () => {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const usePreview = process.env.USE_CONTENTFUL_PREVIEW === 'true';

  // Check for required environment variables
  if (!space) {
    throw new Error('Missing CONTENTFUL_SPACE_ID');
  }
  
  if (usePreview) {
    const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
    if (!previewToken) {
      throw new Error('Missing CONTENTFUL_PREVIEW_ACCESS_TOKEN for Preview API');
    }
    return createClient({
      space,
      accessToken: previewToken,
      host: 'preview.contentful.com'
    });
  } else {
    const deliveryToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    if (!deliveryToken) {
    throw new Error('Missing CONTENTFUL_ACCESS_TOKEN for Delivery API');
  }

  return createClient({
    space,
    accessToken: deliveryToken,
    host: 'cdn.contentful.com'
    });
  }
};

const client = createContentClient();

// BlogPostFields must be structured based on the expected fields of Contentful entries
interface BlogPostFields extends EntrySkeletonType {
    fields: {
        blogTitle: string;
        slug: string;
        image?: Asset;
        publishedDate: string;
        readTime: string;

    }
}

// Get 4 newest blog posts here and use in the main blog page "Featured Blogs"
export const getNewestBlogPosts = async () => {
    const results = await client.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'], // Order by creation date, descending
      include: 1, // Include linked assets (images)
  });
 
  const recentPosts = results.items.slice(0,4).map((blog: Entry<BlogPostFields>) => {
    const { blogTitle, slug, image, readTime} = blog.fields;

    // Custom type guard function 'isAsset' to ensure that image is valid Asset object and that it has the necessary fields and file properties.
    // This type guard checks that if 'image' exits (is not null or undefined). If 'image' is an object. And if fields exists in image and  ontains a file field. 
    const isAsset = (img: unknown): img is Asset => {
      return !!img && typeof img === 'object' && 'fields' in img && 'file' in (img as Asset).fields;
    }
    
    const imageUrl = isAsset(image) ? `https:${image.fields.file?.url}`  : ''; // After verifying 'image' is a valid Asset we safely access file.url

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
    return queryResult.items
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
  return pastPosts.length > 0 ? pastPosts : [{ blogTitle: "There are currently no archived posts to display", slug: " "}];
};
