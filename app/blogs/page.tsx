// This is the featured blog posts page with cards highlighting new blog posts

import BlogCard from '@/components/BlogCard';
import Script from 'next/script';
import { getNewestBlogPosts } from '../utils/contentful';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const blogs = await getNewestBlogPosts()

 const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Natalie's Blogs",
    "url": "https://nataliecervantes.com/blogs",
    "author": {
      "@type": "Person",
      "name": "Natalie Cervantes"
    },
    "blogPosts": blogs.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.blogTitle,
      "url": `https://nataliecervantes.com/blogs/${blog.slug}`,
    }))
  };


  return (
    <div className="w-screen h-screen  bg-center bg-cover bg-violet-950 overflow-y-auto">
      <div className="flex flex-col items-center pt-14 pb-2 md:pt-10 md:pb-4">
        <h1 className="mt-8 md:mt-12 pb-2 text-center text-[40px] md:text-[50px] text-white font-semibold">Featured Posts</h1>
      </div>
      
      {/* The below div houses all the blog cards for featured blogs or top 4 newest. May want to refactor based on date to map */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
          {blogs.map((blog, index) => (
            <div key={index}>
              <Link 
                href={`/blogs/${blog.slug}`}
                aria-label={blog.blogTitle}
                > 
                <BlogCard image={blog.image} title={blog.blogTitle} readTime={blog.readTime}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Script id="json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};
export default page