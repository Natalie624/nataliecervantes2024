// This is the homepage of the site

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <div
        className="flex items-center w-full min-h-screen bg-cover bg-center bg-violet-950"
      >
        {/* Content */}
        <div className="pl-8 pr-8 pb-[150px] md:pl-40 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[40px] md:text-[50px] text-white font-semibold">
            Creative Enterprise
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "} Web Solutions
            </span>
          </h1>
          <p className="text-gray-200 md:block">
          Hi I&apos;m Natalie! I&apos;m an accomplished engineering leader and enterprise web developer, with over 10 years of experience delivering high-quality web solutions.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
            >
              Skills & Tech
            </Link>
            <Link
              href="/blogs"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Blog
            </Link>
            <a
              href="mailto:natalie.cervantes@gmail.com"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
            >
              Contact Me
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
            </a>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          Skills & Tech
        </Link>
        <Link
          href="/blogs"
          className="rounded-[20px] group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          My Blog
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
        >
          Contact Me
        </Link>
      </div>
      <div className="absolute bottom-20 left-5 md:bottom-30 md:right-10 md:left-auto z-[15]">
        <Image
          src="/main-natalie-photo.png"
          alt="natalie"
          width={480}
          height={480}
          className="max-w-[180px] max-h-auto md:max-w-[420px] md:max-h-auto"
        />
      </div>
    </main>
  );
}
