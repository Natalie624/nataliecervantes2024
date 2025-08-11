// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-violet-950 text-white flex items-center justify-center">
      <div className="w-full max-w-xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
          <span>Page not found</span>
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Message */}
        <p className="text-lg text-white/80 mb-8">
          Oops—looks like this page took a detour. Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-blue-500 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-violet-950 transition"
            aria-label="Go to homepage"
          >
            Go Home
          </Link>

          <Link
            href="/blogs"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white/10 hover:bg-white/15 backdrop-blur-sm ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-violet-950 transition"
            aria-label="Read the blog"
          >
            Read the Blog
          </Link>
        </div>

        {/* Subtle divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </main>
  );
}
