/* We are using the Contentful REST API here. client.getEntries method is part of Contentful's REST API and is used 
* to retrieve entries. The REST API is structured around entries and assets and it allows querying with certain parameters
* like 'content_type' and field value (ie; 'fields.slug[match]').
* 'getBlogPosts' function all blog posts. 'getEntryBySlug' function returns a single blog post when called with a given slug.
*/


import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';


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

// BlogPostFields must be structured based on the expected fields of Contentful entries
interface BlogPostFields extends EntrySkeletonType {
    fields: {
        blogTitle: string;
        slug: string;
        image?: Asset;
        publishedDate: string;
    }
}

// Get 4 newest blog posts here and use in the main blog page "Featured Blogs"
export const getNewestBlogPosts = async () => {
    const results = await client.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'], // Order by creation date, descending
      limit: 4, // Limit to top 4 entries
      include: 1, // Include linked assets (images)
  });
 
  const recentPosts = results.items.map((blog: Entry<BlogPostFields>) => {
    const { blogTitle, slug, image} = blog.fields;

    // Custom type guard function 'isAsset' to ensure that image is valid Asset object and that it has the necessary fields and file properties.
    // This type guard checks that if 'image' exits (is not null or undefined). If 'image' is an object. And if fields exists in image and  ontains a file field. 
    const isAsset = (img: unknown): img is Asset => {
      return !!img && typeof img === 'object' && 'fields' in img && 'file' in (img as Asset).fields;
    }
    
    const imageUrl = isAsset(image) ? `https:${image.fields.file?.url}`  : ''; // After verifying 'image' is a valid Asset we safely access file.url
    
    if (!imageUrl) {
        throw new Error('No image URL found');
      };

      return {
        blogTitle: String(blogTitle),
        slug,
        image: imageUrl,
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

export const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getBlogPosts = async () => {
  const results = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'], // Order by creation date, descending 
  });

  const blogPosts = results.items.map((blog: Entry<BlogPostFields>) => {
    const { blogTitle, slug } = blog.fields;
    
    return {
      blogTitle: String(blogTitle),
      slug,
    };
  });
return blogPosts;
};

export const getPastPosts = async () => {
  const results = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'], // Order by system creation date
  });

  const pastPosts = new Date();
  pastPosts.setDate(pastPosts.getDate() - 7); // may want to update to longer time period in the future

  // filter only posts older than a week 
  const archivedPosts = results.items
    .filter((blog) => {
      const blogDate = new Date(blog.fields.publishedDate);
      return blogDate < pastPosts;
    })
    .map((blog: Entry<BlogPostFields>) => {
      const { blogTitle, slug } = blog.fields;
      return {
        blogTitle: String(blogTitle),
        slug,
      };
      })

  return archivedPosts;
}
