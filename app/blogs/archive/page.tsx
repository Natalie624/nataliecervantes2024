import Link from 'next/link'
import React from 'react'
import { Archive } from '@/constants'

const BlogArchive = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-center bg-cover bg-violet-950'>
        {Archive.map((blog, index) => (
            <Link href={`/blogs/${blog.slug}`} key={index} className="absolute justify-center bottom-20 text-white text-2xl">This is the archive page</Link>        
        ))}
    
    </div>
  )
}

export default BlogArchive