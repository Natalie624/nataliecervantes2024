// This is the main page template for all blog posts
"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { getEntryBySlug } from '../../utils/contentful';
import Image from 'next/image';
import { Node } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS,Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { EntrySkeletonType } from 'contentful';
//import { LinkedinShare } from 'react-share-kit';
import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

interface BlogPostEntry extends EntrySkeletonType {
  blogTitle: string;
  subheader: string;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  slug: string;
  bodyContent: Document;
  associatedPostsUrl?: string;
  }

const BlogPost = ({params: {slug}}: {params: {slug: string}}) => {
  const [blogPost, setBlogPost] = useState<BlogPostEntry | null>(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const titleToShare = `Checkout this blog post by @nataliecervantes: ${blogPost?.blogTitle}`

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const entries = await getEntryBySlug(slug, 'blogPost');
        if (entries.length > 0) {
          const blogData = entries[0].fields as unknown as BlogPostEntry;
          setBlogPost(blogData);
      }
    } catch (err: unknown){
      if (err instanceof Error) {
        setError(err.message);
      }else {
        setError('Unknown error');
      }
    } finally {
      setloading(false);
    }
  };
    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!blogPost) {
    return <div>No blog post found</div>
  }

  const {blogTitle, subheader, image, bodyContent, associatedPostsUrl} = blogPost;
  const imageUrl = image ? `https:${image.fields.file.url}` : ''; 

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <b>{text}</b>,
      [MARKS.ITALIC]: (text: ReactNode) => <i>{text}</i>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const { blogTitle, file } = node.data.target.fields;
        const imageUrl = `https:${file.url}`;
        const altText = blogTitle || "Embedded asset";
        return (
          <Image
            src={imageUrl}
            alt={altText}
            width={500}
            height={500}
          />
        );
      },
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => <h1>{children}</h1>, 
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => <h2>{children}</h2>,
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => <p>{children}</p>,
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-violet-950 p-8 md:p-60 overflow-y-auto">
        <h1 className="md:mt-20 mt-20 text-center text-[28px] md:text-[50px] text-white font-semibold font-family-inter">{blogTitle}</h1>
        {subheader && <h2 className="pt-10 md:pt-20 md:pl-40 md:pr-40 italic text-center text-[10px] md:text-[18px] text-gray-200 font-family-inter">{subheader}</h2>}
        {imageUrl && <Image 
              src={imageUrl} 
              alt={blogTitle} 
              width={500}
              height={500}
              className="mt-14 mb-8 md:mt-20 md:mb-14"/>}
        <div className="pr-4 pl-4 mb-8 md:pl-40 md:pr-40 prose text-white font-family-inter">{documentToReactComponents(bodyContent, options)}
        {/* TODO: created teh associated posts URL as a seperate component and then import here to render */}
        {/*{associatedPostsUrl && <div className="pt-4 text-left text-[14px] md:text-[24px] text-blue-500">{associatedPostsUrl}</div>}*/}
          <div className="pt-4 text-[12px] md:text-[14px] text-white">If you enjoyed this post please share! {" "} {" "}
            <LinkedinShareButton url={`http://localhost:3000/blogs/${slug}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
    </div>
  )
}

export default BlogPost