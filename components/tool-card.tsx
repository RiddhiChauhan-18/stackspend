import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { tools } from "@/lib/pricing/tools"

export function ToolCard() {
  return (
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            AI Tool
          </label>

          <Select>
            <SelectTrigger className="border-zinc-800 bg-zinc-900">
              <SelectValue placeholder="Select tool" />
            </SelectTrigger>

            <SelectContent>
              {tools.map((tool) => (
                <SelectItem key={tool.name} value={tool.name}>
                  {tool.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Monthly Spend ($)
          </label>

          <Input
            type="number"
            placeholder="200"
            className="border-zinc-800 bg-zinc-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Seats
          </label>

          <Input
            type="number"
            placeholder="5"
            className="border-zinc-800 bg-zinc-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Current Plan
          </label>

          <Input
            placeholder="Pro Plan"
            className="border-zinc-800 bg-zinc-900"
          />
        </div>
      </div>
    </div>
  )
}