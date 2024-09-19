import Link from 'next/link'
import React from 'react'
import { Archive } from '@/constants'

const BlogArchive = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-center bg-cover bg-violet-950'>
      <h1 className="text-[18px] md:text-[50px] text-white font-semibold mt-20">
        Previous Articles
      </h1>
      <div className="mt-6 flex flex-col items-center w-full max-w-[800px]">
        {Archive.map((blog, index) => (
            <Link href={`/blogs/${blog.slug}`} key={index} className="pl-8 pr-8 md:pl-40 flex z-[10] text-gray-200 font-semibold">Placeholder link to blog post</Link>        
        ))}
    </div>
    </div>
  )
}

export default BlogArchive