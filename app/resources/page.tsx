// app/resources/page.tsx

import Link from "next/link";

interface Resource {
  id: number;
  title: string;
  description: string;
  downloadUrl: string;
  gradientClass: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Building a Disciplined Product Vision at Scale",
    description: "PDF Guide",
    downloadUrl: "https://assets.ctfassets.net/ozh7tl5h55e7/SowniJHQdigvHRN4EhECJ/0ad44c50e120c7dff9b8fd3c403b7b69/When_to_Say_No__Building_a_Disciplined_Product_Vision_at_Scale.pdf",
    gradientClass: "bg-gradient-to-r from-purple-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "PDF Guide",
    downloadUrl: "#",
    gradientClass: "bg-gradient-to-r from-purple-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "PDF Guide",
    downloadUrl: "#",
    gradientClass: "bg-gradient-to-r from-blue-500 to-teal-500",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "PDF Guide",
    downloadUrl: "#",
    gradientClass: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  // Uncomment below to add more resources (up to 8 total)
  // {
  //   id: 5,
  //   title: "Resource Title 5",
  //   description: "PDF Guide",
  //   downloadUrl: "#",
  //   gradientClass: "bg-gradient-to-r from-green-500 to-emerald-500",
  // },
  // {
  //   id: 6,
  //   title: "Resource Title 6",
  //   description: "PDF Guide",
  //   downloadUrl: "#",
  //   gradientClass: "bg-gradient-to-r from-red-500 to-pink-500",
  // },
  // {
  //   id: 7,
  //   title: "Resource Title 7",
  //   description: "PDF Guide",
  //   downloadUrl: "#",
  //   gradientClass: "bg-gradient-to-r from-yellow-500 to-orange-500",
  // },
  // {
  //   id: 8,
  //   title: "Resource Title 8",
  //   description: "PDF Guide",
  //   downloadUrl: "#",
  //   gradientClass: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
  // },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-20 text-gray-800 pt-[120px]">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Resources
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Download helpful resources and materials.
        </p>
      </section>

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-max">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.downloadUrl}
              download
              className={`block ${resource.gradientClass} rounded-lg p-6 text-white hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center h-full justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-4"
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
                <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                <p className="text-sm opacity-90">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
