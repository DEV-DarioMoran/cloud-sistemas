import { ImageIcon, Maximize2 } from 'lucide-react'

type Props = {
  label?: string
  src?: string
  ratio?: 'video' | 'wide'
}

export default function Screenshot({
  label = 'Captura de pantalla',
  src,
  ratio = 'video',
}: Props) {
  const aspect = ratio === 'video' ? 'aspect-video' : 'aspect-[21/9]'

  // Con imagen real
  if (src) {
    return (
      <figure className="group overflow-hidden rounded-lg border border-line bg-bg-soft">
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className={`relative block ${aspect} overflow-hidden`}
        >
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize2 size={22} className="text-ink-bright" />
          </span>
        </a>
        <figcaption className="border-t border-line px-3 py-2 text-left text-xs text-ink-dim">
          {label}
        </figcaption>
      </figure>
    )
  }

  // Placeholder (sin imagen)
  return (
    <figure
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-bg-soft text-ink-dim ${aspect}`}
    >
      <ImageIcon size={28} className="text-ink-dim/70" />
      <figcaption className="px-4 text-center text-xs">
        {label}
        <span className="mt-0.5 block text-[11px] text-ink-dim/60">
          [ Placeholder — insertar imagen ]
        </span>
      </figcaption>
    </figure>
  )
}
