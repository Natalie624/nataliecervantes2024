// This is the featured blog posts page with cards highlighting new blog posts

import BlogCard from '@/components/BlogCard'
import { getNewestBlogPosts } from '../utils/contentful'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const blogs = await getNewestBlogPosts()

  return (
    <div className="w-screen h-screen  bg-center bg-cover bg-violet-950">
      <div className="flex flex-col items-center pt-20 pb-2 md:pb-6">
        <h1 className="mt-12 pb-2 text-center text-[40px] md:text-[50px] text-white font-semibold">Featured Blogs</h1>
      </div>
      
      {/* The below div houses all the blog cards for featured blogs or top 4 newest. May want to refactor based on date to map */}
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {blogs.map((blog, index) => (
          <div key={index}>
          <Link href={`/blogs/${blog.slug}`}> 
            <BlogCard image={blog.image} title={blog.blogTitle}/>
          </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default page