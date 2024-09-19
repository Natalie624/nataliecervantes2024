"use client"
// made a client component as we are using Motion here

import React, { useState } from 'react'
import {motion} from "framer-motion"

interface Props {
    image: string;
    title: string;
    text: string;
}
const BlogCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
        setIsFlipped(!isFlipped)
        setIsAnimating(true)
        }
    }
    

  return (
    <div 
        onClick={handleFlip}
        className="w-[270px] h-[168px] md:w-[450px] md:h-[280px] rounded-md cursor-pointer"
    >
        <motion.div
            className="flip-card-inner w-full h-full"
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition={{duration: 0.6, animationDirection: 'normal'}}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            {/* Frontside of card */}
            <div
                style={{backgroundImage: `url(${image})`}} 
                className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
            >
                <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
                <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
                    Learn More &gt;
                </div>

            </div>

            {/* change to click to blog post */}
            <div
                className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
            >
                <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
                <div className="flex flex-col gap-20 py-3 z-[30]">
                    <h1 className="text-white text-center md:text-2xl front-semibold">{title}</h1>  
                </div>
            </div>

        </motion.div>

    </div>
  )

}

export default BlogCard