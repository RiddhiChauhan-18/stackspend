import { Button } from "@/components/ui/button"
import { ToolCard } from "@/components/tool-card"

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
            AI Spend Audit
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Audit Your AI Stack
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
            Enter your current AI tools, plans, and monthly spend to uncover
            optimization opportunities.
          </p>

          <div className="mt-12">
            <ToolCard />
          </div>

          <Button
            variant="outline"
            className="mt-6 border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white"
          >
            + Add Another Tool
          </Button>

          <div className="mt-10 rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">
              Team Information
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Team Size
                </label>

                <input
                  type="number"
                  placeholder="10"
                  className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Primary Use Case
                </label>

                <select className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white outline-none">
                  <option>Coding</option>
                  <option>Writing</option>
                  <option>Research</option>
                  <option>Data Analysis</option>
                  <option>Mixed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 w-fit rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black">
            Generate Audit Report
          </div>
        </div>
      </div>
    </main>
  )
}