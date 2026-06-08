import { Link } from 'react-router-dom'
import {
  Server,
  Container,
  Boxes,
  FileText,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react'

const componentes = [
  {
    icon: Server,
    title: 'Virtualización',
    desc: '2 VMs Fedora 41 en VirtualBox con particionamiento manual, red interna y acceso por SSH.',
    tags: ['VirtualBox', 'Fedora 41', 'SSH'],
  },
  {
    icon: Container,
    title: 'Docker',
    desc: 'Frontend Nginx y backend Python orquestados con docker-compose y volúmenes persistentes.',
    tags: ['docker-compose', 'Nginx', 'Python'],
  },
  {
    icon: Boxes,
    title: 'Kubernetes',
    desc: 'Minikube con Deployment de 2 réplicas Nginx, Service NodePort y escalado a 3 réplicas.',
    tags: ['Minikube', 'Deployment', 'NodePort'],
  },
  {
    icon: FileText,
    title: 'Documentación',
    desc: 'Sitio web técnico, video explicativo en YouTube y repositorio del proyecto en GitHub.',
    tags: ['Sitio web', 'YouTube', 'GitHub'],
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line grid-bg">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-4 py-1.5 font-mono text-xs text-accent animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Proyecto Final · Grupo 3
          </span>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-ink-bright sm:text-6xl animate-fade-up">
            Proyecto Final —{' '}
            <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
              Arquitecto Cloud
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-mono text-sm text-ink-dim sm:text-base animate-fade-up">
            Sistemas Operativos 750001C | Semestre 1 – 2026
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-dim animate-fade-up">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" />
              Universidad del Valle — Sede Norte del Cauca
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-accent" />
              Semestre 1 – 2026
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-ink animate-fade-up">
            Documentación técnica del proceso de construcción de una arquitectura
            cloud completa: desde la virtualización de servidores con máquinas
            virtuales, pasando por la contenerización de aplicaciones con Docker,
            hasta la orquestación y escalado de servicios con Kubernetes.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
            <Link
              to="/componentes"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              Ver componentes <ArrowRight size={16} />
            </Link>
            <Link
              to="/equipo"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg-card px-5 py-2.5 text-sm font-semibold text-ink-bright transition-colors hover:border-accent-border"
            >
              Conocer al equipo
            </Link>
          </div>
        </div>
      </section>

      {/* Componentes resumen */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Stack del proyecto
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-ink-bright sm:text-3xl">
            Cuatro componentes técnicos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-dim">
            Cada etapa construye sobre la anterior para conformar la arquitectura
            cloud completa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {componentes.map(({ icon: Icon, title, desc, tags }, i) => (
            <article
              key={title}
              className="card card-hover group flex flex-col p-6 text-left animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-border bg-accent-soft text-accent transition-transform group-hover:scale-110">
                <Icon size={22} />
              </span>
              <h3 className="text-base font-semibold text-ink-bright">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-dim">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-ink-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/componentes"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Explorar el detalle técnico <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
