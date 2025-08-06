// app/products/page.tsx

import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-20 text-gray-800 pt-[120px]">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Meet{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            PulseCheck
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          The AI-powered project update tool for crisp, clear, executive-ready reporting.
        </p>
      </section>

      {/* Feature Overview */}
      <section className="max-w-3xl mx-auto text-left mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why PulseCheck?</h2>
        <p className="mb-4">
          PulseCheck helps teams cut through the noise and ship polished project updates in seconds.
          Whether you’re reporting to leadership or syncing with your team, it has your back.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Free vs. Paid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-300 rounded-lg overflow-hidden">
          {/* Free */}
          <div className="bg-gray-50 p-6">
            <h3 className="text-xl font-bold mb-2">Free Version</h3>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Manual input or short prompts</li>
              <li>Tone selection: executive-ready, team chill, escalation mode</li>
              <li>Summarized sections: Wins, Risks, Blockers, Dependencies, Next Steps</li>
              <li>Polished markdown output</li>
            </ul>
          </div>

          {/* Paid */}
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-bold mb-2">Paid Version (Agentic AI)</h3>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Everything in Free version</li>
              <li>Memory/context persistence</li>
              <li>Multi-step orchestration (generate multiple sections in one go)</li>
              <li>Dynamic workflows (e.g. if blocker → suggest dependency follow-up)</li>
              <li>Export summaries to PDF or Markdown</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="flex flex-col md:flex-row justify-center gap-6 mb-20">
        <a
          href="https://www.getpulsecheck.ai"
          target="_blank"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-6 py-4 text-lg text-white text-center min-w-[200px]"
        >
          Use Free Version
        </a>
        <button
          disabled
          className="rounded-[20px] bg-gray-300 px-6 py-4 text-lg text-gray-500 cursor-not-allowed min-w-[200px]"
        >
          Coming Soon: Agentic AI
        </button>
      </section>
    </main>
  );
}
