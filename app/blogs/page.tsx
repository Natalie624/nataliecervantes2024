import BlogCard from '@/components/BlogCard'
import { Projects } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/Mountains.jpg)"}}  
    className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      {/* The below div houses all the blog cards */}
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <BlogCard key={index} image={project.src} title={project.title} text={project.text} />
        ))}

      </div>
      
    </div>
  )
}

export default page