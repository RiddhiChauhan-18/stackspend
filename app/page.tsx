export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
            AI Spend Optimization Platform
          </div>

          <h1 className="mt-8 text-6xl font-bold tracking-tight">
            Stop Overspending on AI Tools
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Audit your AI stack in under 60 seconds and uncover hidden SaaS waste
            across ChatGPT, Claude, Cursor, Copilot, Gemini, and more.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
              Run Free Audit
            </button>

            <button className="rounded-xl border border-zinc-800 px-6 py-3 font-medium text-white transition hover:bg-zinc-900">
              View Sample Report
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-sm text-zinc-500">
            <span>ChatGPT</span>
            <span>•</span>
            <span>Claude</span>
            <span>•</span>
            <span>Cursor</span>
            <span>•</span>
            <span>Copilot</span>
            <span>•</span>
            <span>Gemini</span>
          </div>
        </div>
      </section>
    </main>
  )
}