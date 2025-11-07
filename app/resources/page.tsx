// app/resources/page.tsx

import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-20 text-gray-800 pt-[120px]">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Resources
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Download helpful resources and materials.
        </p>
      </section>

      {/* Resource Tile */}
      <section className="max-w-3xl mx-auto mb-16">
        <a
          href="https://assets.ctfassets.net/ozh7tl5h55e7/SowniJHQdigvHRN4EhECJ/0ad44c50e120c7dff9b8fd3c403b7b69/When_to_Say_No__Building_a_Disciplined_Product_Vision_at_Scale.pdf"
          download
          className="block bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-8 text-white hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Building a Disciplined Product Vision at Scale</h2>
            <p className="text-lg">Click to download PDF</p>
          </div>
        </a>
      </section>
    </main>
  );
}
