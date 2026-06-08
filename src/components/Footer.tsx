import { FolderGit2, Video, GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-dim sm:flex-row">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <GraduationCap size={18} className="text-accent" />
          <span>
            Universidad del Valle — Sede Norte del Cauca · Sistemas Operativos
            750001C
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Repositorio GitHub"
            className="rounded-md border border-line p-2 transition-colors hover:border-accent-border hover:text-accent"
          >
            <FolderGit2 size={18} />
          </a>
          <a
            href="#"
            aria-label="Video en YouTube"
            className="rounded-md border border-line p-2 transition-colors hover:border-accent-border hover:text-accent"
          >
            <Video size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line/60 py-4 text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} Arquitecto Cloud · Grupo 3 · Semestre 1 –
        2026
      </div>
    </footer>
  )
}
