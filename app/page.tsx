import { Button } from "@/components/ui/button"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_40%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              AI Spend Optimization Platform
            </div>

            <h1 className="mt-8 text-6xl font-bold tracking-tight sm:text-7xl">
              Stop Overspending on AI Tools
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Audit your AI stack in under 60 seconds and uncover hidden SaaS waste across ChatGPT, Claude, Cursor, Copilot, Gemini, and more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="rounded-xl bg-white px-6 py-6 text-black hover:bg-zinc-200">
  Run Free Audit
</Button>

              <Button
  variant="outline"
  className="rounded-xl border-zinc-800 bg-zinc-900/50 px-6 py-6 text-white hover:bg-zinc-800 hover:text-white"
>
  View Sample Report
</Button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
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

          <div className="mt-24 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-lg font-semibold">
                Instant AI Spend Audit
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Analyze your current AI tooling stack and uncover unnecessary spending in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-lg font-semibold">
                Smart Cost Recommendations
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Get actionable recommendations on cheaper plans, alternatives, and optimization opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-lg font-semibold">
                Shareable Savings Reports
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Generate clean public reports designed for teams, founders, and social sharing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}