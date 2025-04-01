// This is the main page template for all blog posts
"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import Script from 'next/script';
import { getEntryBySlug } from '../../utils/contentful';
import Image from 'next/image';
import { Node } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { EntrySkeletonType } from 'contentful';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
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
  publishedDate: string;
  readTime: string;
  }

const BlogPost = ({params: {slug}}: {params: {slug: string}}) => {
  const [blogPost, setBlogPost] = useState<BlogPostEntry | null>(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const entries = await getEntryBySlug(slug, 'blogPost');
        if (entries.length > 0) {
          const blogData = entries[0].fields as unknown as BlogPostEntry;
          console.log("Fetched bodyContent:", blogData.bodyContent); //debug log
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

  const {blogTitle, subheader, image, bodyContent, publishedDate, readTime} = blogPost;
  const imageUrl = image ? `https:${image.fields.file.url}` : '';
  
  const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nataliecervantes.com/blogs/${slug}`
  },
  "headline": blogTitle,
  "description": subheader || "",
  "image": imageUrl || "",
  "author": {
    "@type": "Person",
    "name": "Natalie Cervantes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Natalie's Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "./nc-logo.png"
    }
  },
  "datePublished": formattedDate
};

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <b className="text-[18px] text-violet-500">{text}</b>,
      [MARKS.ITALIC]: (text: ReactNode) => <i className="text-white font-semibold">{text}</i>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
        const url = node.data.uri;
        return (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{children}</a>
        );
      },
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
            className="mb-4 mt-4 block mx-auto"
          />
        );
      },
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="list-disc pl-8 mb-4 text-white ">{children}</ul>),
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => <h1 className="text-[28px] text-white">{children}</h1>, 
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => <h2 className="text-[24px] text-violet-500 mb-4 mt-8">{children}</h2>,
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => <p className="mb-4 text-white leading-relaxed">{children}</p>,
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-zinc-950 p-8 overflow-y-auto">
        <h1 className="md:mt-20 mt-20 text-center text-[28px] md:text-[50px] text-white font-semibold font-family-inter">{blogTitle}</h1>
        {subheader && <h2 className="pt-10 md:pt-20 md:pl-40 md:pr-40 italic text-center text-[16px] md:text-[18px] text-gray-200 font-family-inter">{subheader}</h2>}
        {imageUrl && <Image 
              src={imageUrl} 
              alt={blogTitle} 
              width={500}
              height={500}
              className="mt-14 mb-8 md:mt-20 md:mb-14"/>}
        
        <div className="mb-8 text-white font-family-inter max-w-[42.875rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {publishedDate && (
            <div className="text-sm text-gray-400 mt-4 mb-2 w-full max-w-2x1 text-left">
              {formattedDate}{" "} • {" "} {readTime}
            </div>
          )}
          {bodyContent && bodyContent.nodeType === BLOCKS.DOCUMENT 
          ? documentToReactComponents(bodyContent, options)
          : <p>Content not available </p>}
        {/* TODO: created the associated posts URL as a seperate component and then import here to render */}
        {/*{associatedPostsUrl && <div className="pt-4 text-left text-[14px] md:text-[24px] text-blue-500">{associatedPostsUrl}</div>}*/}
          <div className="pt-4 text-[12px] md:text-[14px] text-white flex items-center gap-4">Enjoyed this post? Share it with your friends! {" "}
            <LinkedinShareButton url={`https://nataliecervantes.netlify.app/blogs/${slug}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TwitterShareButton url={`https://nataliecervantes.netlify.app/blogs/${slug}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
    {/* JSON-LD for SEO) */}
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default BlogPost