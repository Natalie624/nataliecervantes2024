import BlogCard from '@/components/BlogCard'
import { Blogs } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div   
    className="w-screen h-screen flex items-center justify-center bg-center bg-cover bg-violet-950"
    >
      {/* The below div houses all the blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Blogs.map((blog, index) => (
          <BlogCard key={index} image={blog.src} title={blog.title} text={blog.text} />
        ))}

      </div>
      
    </div>
  )
}

export default page