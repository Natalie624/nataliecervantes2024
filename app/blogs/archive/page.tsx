// This is the previous post listing page or archive page for links to previous blog posts
import Link from 'next/link'
import React from 'react'
import { getPastPosts } from '../../utils/contentful'

const BlogArchive = async () => {
  const blogs = await getPastPosts();

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-center bg-cover bg-violet-950'>
       <div className="flex flex-col items-center pt-20 pb-8">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold mt-4">
          Previous Articles
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-4 w-full px-4">
        {blogs.map((blog, index) => (
          <div key={index} className="w-full text-center">
            <Link href={`/blogs/${blog.slug}`} 
                  key={index} 
                  className="inline-block text-gray-200 font-semibold underline md:no-underline md:hover:underline md:hover:text-blue-500 transiton-colors">{blog.blogTitle}</Link>
          </div>        
        ))}
      </div>
    </div>
  )
}

export default BlogArchive