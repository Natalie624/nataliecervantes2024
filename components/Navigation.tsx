"use client"
import { NavLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import Transition from './Transition';

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")

    useEffect(() => {
        
        if(prevPath !== path){
            setIsRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
        if(isRouting){
            setPrevPath(path)
            const timeout = setTimeout(() => {
                setIsRouting(false)
            }, 1200)

            return() => clearTimeout(timeout)
        }
    }, [isRouting, path])


  return (
   <>
        {isRouting && <Transition />}

            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    aria-label={nav.name}
                >
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`}/>
                </Link>
                ))}

    </>
  )
}

export default Navigation
