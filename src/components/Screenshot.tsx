import { ImageIcon } from 'lucide-react'

type Props = {
  label?: string
  ratio?: 'video' | 'wide'
}

export default function Screenshot({
  label = 'Captura de pantalla',
  ratio = 'video',
}: Props) {
  return (
    <figure
      className={[
        'flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-bg-soft text-ink-dim',
        ratio === 'video' ? 'aspect-video' : 'aspect-[21/9]',
      ].join(' ')}
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
