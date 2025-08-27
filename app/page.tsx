// This is the homepage of the site

// import EmojiIntro from "@/components/EmojiIntro"; //optional emoji intro

// app/page.tsx — homepage

import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import HomepageSection from "@/components/HomepageSection";
import { getHomepageSections } from "../app/utils/contentful";

export default async function Home() {
  const sections = await getHomepageSections();

  return (
    <main className="relative">
      {/* HERO stays violet; now 'relative' so absolute kids anchor here */}
      <div className="relative flex items-center w-full min-h-screen bg-cover bg-center bg-violet-950">
        {/* Mobile buttons — keep absolute, but inside hero */}
        <div className="absolute bottom-10 right-5 z-[20] flex-col md:hidden gap-5 flex">
          <Link
            href="/products"
            className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
          >
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
            className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
          >
            Blog
          </Link>
          <CalendlyButton
            label="Book a Call"
            className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] w-full flex items-center justify-center"
          />
        </div>

        {/* Natalie image — also absolute inside hero */}
        <div className="absolute bottom-20 left-5 md:bottom-30 md:right-10 md:left-auto z-[15]">
          <Image
            src="/main-natalie-photo.png"
            alt="natalie"
            width={480}
            height={480}
            className="w-[150px] h-auto sm:w-[180px] md:w-[250px] md:h-auto lg:w-[420px]"
          />
        </div>

        {/* Hero content */}
        <div className="w-full">
          <div className="flex flex-col gap-6 z-[10] w-full max-w-[750px] px-6 md:px-20 text-left justify-center translate-y-[-40px] md:translate-y-0 transition-all duration-300">
            <h1 className="text-[36px] md:text-[50px] text-white font-semibold leading-tight">
              Technical Programs
            </h1>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-tight">
              Seamless Execution
            </h2>
            <p className="text-gray-200 md:block">
              Hi! I&apos;m Natalie, Fractional Head of Programs & Technical Delivery. I don&apos;t just manage programs, I build them - and then drive execution at scale.
            </p>

            {/* Desktop / Tablet Button Row */}
            <div className="hidden md:flex gap-5 mt-4 self-center">
              <Link
                href="/products"
                className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center"
              >
                Products
              </Link>
              <Link
                href="/my-skills"
                className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center"
              >
                Skills
              </Link>
              <Link
                href="/blogs"
                className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center"
              >
                Blog
              </Link>
              <CalendlyButton
                label="Book a Call"
                className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-4 py-2 text-base text-white min-w-[140px] flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sections below — each renders its own bg-zinc-950 */}
      <div className="relative z-0 w-full">
        {sections.map((s, idx) => (
          <HomepageSection key={`${s.header}-${idx}`} section={s} index={idx} />
        ))}
      </div>
    </main>
  );
}
