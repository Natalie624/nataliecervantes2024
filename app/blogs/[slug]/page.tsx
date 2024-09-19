import React from 'react'


//TODO: add blog post template layout here
const BlogPost = ({params: {slug}}: {params: {slug: string}}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-center bg-cover bg-violet-950">
        <p className="text-center text-white text-[20px]">Showing a blog post for <strong>{slug}</strong></p>
    </div>
   
  )
}

export default BlogPost