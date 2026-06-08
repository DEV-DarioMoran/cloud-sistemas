import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Cloud, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/equipo', label: 'Equipo' },
  { to: '/componentes', label: 'Componentes' },
  { to: '/conclusiones', label: 'Conclusiones' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'text-accent bg-accent-soft'
        : 'text-ink-dim hover:text-ink-bright hover:bg-bg-elevated',
    ].join(' ')

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-border bg-accent-soft text-accent">
            <Cloud size={20} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-ink-bright">
              Arquitecto Cloud
            </span>
            <span className="font-mono text-[11px] text-accent">Grupo 3</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-dim hover:bg-bg-elevated hover:text-ink-bright md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg-soft px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
