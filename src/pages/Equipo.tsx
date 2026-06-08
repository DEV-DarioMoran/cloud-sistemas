import { Code2, Mail } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const integrantes = [
  {
    nombre: 'Dario Moran',
    foto: '/moran.jpeg',
    roles: ['Virtualización', 'Docker'],
  },
  {
    nombre: 'Adrian Valencia',
    foto: '/valencia.jpeg',
    roles: ['Kubernetes'],
  },
  {
    nombre: 'Felipe Chavez',
    foto: '/chavez.jpeg',
    roles: ['Documentación'],
  },
]

export default function Equipo() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <PageHeader
        eyebrow="Grupo 3"
        title="Equipo de trabajo"
        description="Integrantes del Grupo 3 y su rol dentro del desarrollo del proyecto Arquitecto Cloud para la materia Sistemas Operativos."
      />

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {integrantes.map(({ nombre, foto, roles }, i) => (
          <article
            key={i}
            className="card card-hover group flex flex-col items-center p-6 text-center animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Foto del integrante */}
            <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-accent-border bg-bg-soft">
              <img
                src={foto}
                alt={`Foto de ${nombre}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <h3 className="text-base font-semibold text-ink-bright">{nombre}</h3>
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {roles.map((rol) => (
                <span
                  key={rol}
                  className="inline-flex items-center rounded-full border border-accent-border bg-accent-soft px-3 py-1 text-xs text-accent"
                >
                  {rol}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="rounded-md border border-line p-2 text-ink-dim transition-colors hover:border-accent-border hover:text-accent"
              >
                <Code2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Correo"
                className="rounded-md border border-line p-2 text-ink-dim transition-colors hover:border-accent-border hover:text-accent"
              >
                <Mail size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Tabla resumen */}
      <div className="mt-14">
        <h2 className="mb-4 text-lg font-semibold text-ink-bright">
          Distribución de responsabilidades
        </h2>
        <div className="overflow-hidden rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-elevated text-ink-dim">
              <tr>
                <th className="px-5 py-3 font-medium">Integrante</th>
                <th className="px-5 py-3 font-medium">Componente</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">
                  Entregable principal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {integrantes.map(({ nombre, roles }, i) => (
                <tr
                  key={i}
                  className="bg-bg-card transition-colors hover:bg-bg-elevated"
                >
                  <td className="px-5 py-3 font-medium text-ink-bright">
                    {nombre}
                  </td>
                  <td className="px-5 py-3 text-accent">{roles.join(' · ')}</td>
                  <td className="hidden px-5 py-3 text-ink-dim sm:table-cell">
                    Configuración y documentación del módulo
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
