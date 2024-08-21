import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
       {/* Backgound Image - change background on personal site */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(main-bg.webp)" }}
      >

        {/* Content */}
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make Anything Possible With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills & Tech
            </Link>
            <Link
              href="/blogs"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Blogs
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Skills & Tech
        </Link>
        <Link
          href="/blogs"
          className="rounded-[20px] group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Blogs
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
      </div>

      {/* can remove the below images for personal portfolio */}
      <div className="absolute bottom-0 right-0 z-[15]">
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="max-w-[240px] md:max-w-[480px]"
        />
        <Image
          src="/horse.png"
          alt="Picture of the author"
          width={300}
          height={300}
          className="absolute bottom-[38%] right-[10%] max-w-[150px] md:max-w-[300px]"
        />
      </div>

     
      {/* can remove the below image for personal portfolio */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>
      {/* can remove the below image for personal portfolio */}
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 left-0 z-[10] max-w-[150px] md:max-w-[300px]"
      />
    </main>
  );
}
