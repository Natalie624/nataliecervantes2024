// This is the previous post listing page or archive page for links to previous blog posts
import Link from 'next/link'
import React from 'react'
import { getBlogPosts } from '../../utils/contentful'
//import { Archive } from '@/constants'

const BlogArchive = async () => {
  const blogs = await getBlogPosts();

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-center bg-cover bg-violet-950'>
       <div className="flex flex-col items-center pt-20 pb-10">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold mt-20">
          Previous Articles
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
        {blogs.map((blog, index) => (
            <Link href={`/blogs/${blog.slug}`} key={index} className="pl-8 pr-8 flex z-[10] text-gray-200 font-semibold">{blog.blogTitle}</Link>        
        ))}
      </div>
    </div>
  )
}

export default BlogArchive