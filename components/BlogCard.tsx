"use client"

import { read } from 'fs';
import React from 'react'

interface Props {
    image: string;
    title: string;
    readTime: string;
}
const BlogCard = ({ image, title, readTime }: Props) => {
   
  return (
    <div className="w-[270px] h-[168px] md:w-[450px] md:h-[280px] rounded-md cursor-pointer">
        <div className="flip-card-inner w-full h-full">
            <div
                style={{backgroundImage: `url(${image})`}} 
                className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
            >
                {/* Overlay */}
                <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg" />
                {/* title over image */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white text-lg font-semibold">
                    {title}
                    <div className="right-4 text-[10px] text-gray-300"> • {readTime}</div> 
                </div>
                {/* read more */}
                <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
                <div className="hidden md:block">
                    <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
                    Read More
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )

}

export default BlogCard