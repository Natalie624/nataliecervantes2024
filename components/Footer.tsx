import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="w-full h-[60px] bg-violet-950 flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-5 mb-2">
                    <a href='https://www.linkedin.com/in/nataliecervantes/'>
                        <Image
                        key="LinkedIn"
                        src="/LinkedIn_icon.svg"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        />
                    </a>
                    <a href='https://x.com/softwarenomad'>
                        <Image
                        key="X.com"
                        src="/X-logo-white.png"
                        alt="X.com"
                        width={28}
                        height={28}
                        />
                    </a>
                    <a href='https://github.com/Natalie624'>
                        <Image
                            key="Github"
                            src="github-mark-white.svg"
                            alt="Github"
                            width={32} // Set desired width
                            height={32} // Set height proportionally or same value for square
                            className="max-w-[28px] max-h-auto"
                        />
                    </a>
                </div>
                <div>
                    <p className="text-gray-400 text-[8px]">Site designed and developed by Natalie Cervantes ©2025</p>
                </div>
            </div>    
        </div>
    )
}

export default Footer