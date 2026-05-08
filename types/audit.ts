export type ToolOption =
  | "ChatGPT"
  | "Claude"
  | "Cursor"
  | "GitHub Copilot"
  | "Gemini"
  | "OpenAI API"
  | "Anthropic API"

export type UseCase =
  | "Coding"
  | "Writing"
  | "Research"
  | "Data Analysis"
  | "Mixed"

export interface ToolSpend {
  tool: ToolOption
  plan: string
  monthlySpend: number
  seats: number
}

export interface AuditFormData {
  tools: ToolSpend[]
  teamSize: number
  primaryUseCase: UseCase
}