import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-violet-950 px-6 py-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        
        {/* Left side: Social links and site credit */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-5">
          <div className="flex flex-row gap-3">
            <a 
                href="https://www.linkedin.com/in/nataliecervantes/" 
                target="_blank" 
                rel="noopener noreferrer">
                <Image src="/LinkedIn_icon.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a 
                href="https://x.com/softwarenomad" 
                target="_blank" 
                rel="noopener noreferrer">
                <Image src="/X-logo-white.png" alt="X.com" width={28} height={28} />
            </a>
            <a 
                href="https://github.com/Natalie624" 
                target="_blank" 
                rel="noopener noreferrer">
                <Image src="/github-mark-white.svg" alt="Github" width={32} height={32} className="max-w-[28px]" />
            </a>
          </div>
          <p className="text-gray-400 text-[10px] md:text-[8px]">Site designed and developed by Natalie Cervantes ©2025</p>
        </div>

        {/* Right side: Legal links */}
        <div className="flex flex-row gap-4 text-gray-300 text-sm mt-2 md:mt-0">
          <Link href="/terms-of-service-pulsecheck" className="hover:underline">Terms</Link>
          <Link href="/privacy-policy-pulsecheck" className="hover:underline">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
