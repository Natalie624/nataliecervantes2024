// This is the homepage of the site

import Image from "next/image";
import Link from "next/link";
import EmojiIntro from "@/components/EmojiIntro";

export default function Home() {
  return (
    <main className="relative">
      <div className="flex items-center w-full min-h-screen bg-cover bg-center bg-violet-950">
        {/* Content */}
        <div className="w-full">
          <div className="flex flex-col gap-6 z-[10] w-full max-w-[750px] px-6 md:px-20 text-left justify-center translate-y-[-40px] md:translate-y-0 transition-all duration-300">

            {/* Headline split for styling control */}
            <h1 className="text-[36px] md:text-[50px] text-white font-semibold leading-tight">
              Technical Programs
            </h1>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-tight">
              Seamless Execution
            </h2>

            {/* Paragraph */}
            <p className="text-gray-200 md:block">
              <EmojiIntro />
              {" "}I&apos;m an accomplished Senior Technical Program Manager and Engineering Leader, with nearly 20 years of experience delivering high-quality software solutions.
            </p>
        

            {/* Desktop / Tablet Button Row */}
            <div className="hidden md:flex gap-5 mt-4 self-center">
              <Link href="/products" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center">
                Products
              </Link>
              <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center">
                Skills
              </Link>
              <Link href="/blogs" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center">
                Blog
              </Link>
              <a href="mailto:natalie.cervantes@gmail.com" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view buttons */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/products"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center">
          Products
        </Link>
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          Skills
        </Link>
        <Link
          href="/blogs"
          className="rounded-[20px] group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          Blog
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          Contact
        </Link>
      </div>

      {/* Natalie image */}
      <div className="absolute bottom-20 left-5 md:bottom-30 md:right-10 md:left-auto z-[15]">
        <Image
          src="/main-natalie-photo.png"
          alt="natalie"
          width={480}
          height={480}
          className="w-[150px] h-auto sm:w-[180px] md:w-[250px] md:h-auto lg:w-[420px]"
        />
      </div>
    </main>
  );
}
