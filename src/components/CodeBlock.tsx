import { useState } from 'react'
import { Check, Copy, TerminalSquare } from 'lucide-react'

type Props = {
  code: string
  title?: string
}

export default function CodeBlock({ code, title = 'bash' }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-bg-soft">
      <div className="flex items-center justify-between border-b border-line bg-bg-elevated px-4 py-2">
        <div className="flex items-center gap-2 text-xs font-medium text-ink-dim">
          <TerminalSquare size={15} className="text-accent" />
          <span className="font-mono">{title}</span>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs text-ink-dim transition-colors hover:bg-bg-card hover:text-ink-bright"
        >
          {copied ? (
            <>
              <Check size={14} className="text-accent" /> Copiado
            </>
          ) : (
            <>
              <Copy size={14} /> Copiar
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-left">
        <code className="font-mono text-[13px] leading-relaxed text-ink">
          {code}
        </code>
      </pre>
    </div>
  )
}
