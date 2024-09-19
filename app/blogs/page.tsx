import BlogCard from '@/components/BlogCard'
import { Blogs } from '@/constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-screen h-screen  bg-center bg-cover bg-violet-950">
      <div className="flex flex-col items-center pt-8">
        <h1 className="mt-12 pb-2 text-center text-[18px] md:text-[50px] text-white font-semibold">Featured Blogs</h1>
      </div>
      
      {/* The below div houses all the blog cards for featured blogs or top 4 newest. May want to refactor based on date to map */}
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Blogs.map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index}>
            <BlogCard key={index} image={blog.src} title={blog.title} text={blog.text} />
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default page