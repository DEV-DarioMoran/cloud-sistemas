import { Quote, Users, Lightbulb } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const integrantes = ['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4']

export default function Conclusiones() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <PageHeader
        eyebrow="Cierre"
        title="Conclusiones"
        description="Reflexiones individuales de cada integrante del Grupo 3 y una conclusión grupal sobre el desarrollo del proyecto Arquitecto Cloud."
      />

      {/* Conclusiones individuales */}
      <section className="mt-10">
        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-ink-bright">
          <Quote size={18} className="text-accent" />
          Conclusiones individuales
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {integrantes.map((nombre, i) => (
            <article
              key={i}
              className="card p-6 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-border bg-accent-soft font-mono text-sm text-accent">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-ink-bright">{nombre}</h3>
              </div>
              <p className="text-sm italic text-ink-dim">
                [ Placeholder — escribir aquí la conclusión individual de{' '}
                {nombre}: aprendizajes obtenidos, dificultades enfrentadas y
                aportes al proyecto durante el desarrollo de su componente. ]
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Reflexión grupal */}
      <section className="mt-12">
        <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-ink-bright">
          <Users size={18} className="text-accent" />
          Reflexión grupal
        </h2>
        <article className="relative overflow-hidden rounded-xl border border-accent-border bg-accent-soft p-7">
          <Lightbulb
            size={120}
            className="pointer-events-none absolute -right-6 -top-6 text-accent/10"
          />
          <p className="relative max-w-3xl text-pretty text-ink">
            [ Placeholder — redactar la reflexión grupal: cómo el proyecto
            integró los conceptos de virtualización, contenedores y orquestación
            en una sola arquitectura cloud, el trabajo en equipo, la
            organización de las tareas y la importancia de estos conocimientos
            para la formación en Sistemas Operativos. ]
          </p>
        </article>
      </section>
    </div>
  )
}
