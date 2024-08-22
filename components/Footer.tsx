import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="fixed bottom-0 z-[50] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-5 mb-2">
                    <a href='https://www.linkedin.com/in/nataliecervantes/'>
                        <Image
                        key="LinkedIn"
                        src="/LinkedIn_icon.svg"
                        alt="LinkedIn"
                        width={28}
                        height={28}
                        />
                    </a>
                    <a href='https://github.com/Natalie624'>
                        <Image
                            key="Github"
                            src="github-mark-white.svg"
                            alt="Github"
                            width={28}
                            height={28}
                        />
                    </a>
                </div>
            </div>    
        </div>
    )
}

export default Footer