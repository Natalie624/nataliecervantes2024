import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[50] w-full h-[100px] bg-violet-950 flex  items-center px-10 md:px-20">
        <Link
            href={"/"}
        >
        <div className="flex flex-row gap-3 items-center">
            <div className='relative w-[28px] h-[28px]'>
                <Image
                    src="/nc-logo.png"
                    alt="logo"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain rounded-full"
                />
            </div>
            <h1 className="text-white text-[25px] font-semibold"> Natalie{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                     C.{" "}
                </span>
            </h1>
        </div>
        </Link>

       <div style={{right: "5%"}}
        className="flex flex-row gap-3 items-center  w-[28px] h-[28px] bg-transparent px-10 md:px-20"
        >
         <Navigation />
        </div>
        
    </div>
  )
}

export default Navbar
