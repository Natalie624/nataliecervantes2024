import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[50] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
        <div className="flex flex-row gap-3 items-center">
            <div className='relative w-[28px] h-[28px]'>
                <Link
                    href={"/"}
                >
                <Image
                    src="/nc-logo.png"
                    alt="logo"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain rounded-full"
                />
                </Link>
                
            </div>
            {/*update this text to your site name*/}
            <h1 className="text-white text-[25px] font-semibold">Webchain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "} 
                    Dev{" "}
                </span>
            </h1>
        </div>
        

        <div className="flex flex-row gap-5 mb-2">
            {Socials.map((social) => (
                <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                />
                
            ))}

        </div>    
    </div>
  )
}

export default Navbar
