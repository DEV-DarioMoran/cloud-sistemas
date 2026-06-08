import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: ReactNode
}

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="animate-fade-up">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-accent-border bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-ink-bright sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-ink-dim">{description}</p>
      )}
    </div>
  )
}
