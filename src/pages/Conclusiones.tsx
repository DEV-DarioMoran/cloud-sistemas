import { Quote, Users, Lightbulb } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const integrantes = [
  {
    nombre: 'Dario Moran',
    rol: 'Virtualización · Docker',
    texto:
      'Trabajar en la capa de virtualización y contenedores me permitió entender de forma práctica cómo el hipervisor abstrae el hardware y cómo Docker lleva esa idea un paso más allá compartiendo el kernel del host. La principal dificultad fue la configuración de la red interna y las particiones entre las máquinas virtuales, pero resolverla me dejó claro por qué los contenedores se volvieron el estándar: arrancan en segundos y consumen muchos menos recursos que una VM completa. Mi aporte fue dejar el entorno base funcionando para que el resto del equipo pudiera construir encima.',
  },
  {
    nombre: 'Adrian Valencia',
    rol: 'Kubernetes',
    texto:
      'Encargarme de la orquestación con Kubernetes fue el reto más grande del proyecto. Pasar de "tengo un contenedor corriendo" a "tengo un clúster que se auto-recupera, escala y balancea carga" cambió por completo mi forma de ver el despliegue de aplicaciones. Lo más complejo fue entender la relación entre Pods, Services y Deployments, pero al verlo funcionar comprendí el valor real de declarar el estado deseado y dejar que el orquestador se encargue de mantenerlo. Es un conocimiento que va directo a aplicarse en entornos profesionales.',
  },
  {
    nombre: 'Felipe Chavez',
    rol: 'Documentación',
    texto:
      'Mi rol en la documentación me obligó a entender cada componente del proyecto para poder explicarlo con claridad. Documentar la arquitectura cloud me hizo ver cómo encajan virtualización, contenedores y orquestación como piezas de un mismo flujo. Lo más difícil fue mantener la información ordenada y consistente a medida que el proyecto avanzaba, pero el resultado es una guía que permite a cualquiera reproducir lo que hicimos. Aprendí que una buena documentación es tan importante como el código que describe.',
  },
]

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
          {integrantes.map(({ nombre, rol, texto }, i) => (
            <article
              key={i}
              className="card p-6 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-border bg-accent-soft font-mono text-sm text-accent">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink-bright">{nombre}</h3>
                  <span className="text-xs text-accent">{rol}</span>
                </div>
              </div>
              <p className="text-sm text-ink-dim">{texto}</p>
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
            El proyecto Arquitecto Cloud nos permitió integrar en una sola
            arquitectura tres conceptos que habíamos estudiado por separado:
            la virtualización como base que abstrae el hardware, los
            contenedores como forma ligera y portable de empaquetar
            aplicaciones, y la orquestación con Kubernetes como capa que
            automatiza el despliegue, el escalado y la recuperación ante fallos.
            Ver cómo estas piezas se conectan en un flujo único nos dio una
            visión mucho más clara de cómo funciona la infraestructura cloud
            moderna. El trabajo en equipo fue clave: dividir las
            responsabilidades por componente nos permitió profundizar cada uno
            en su área y luego unir los resultados de forma coherente. Más allá
            de la nota, nos llevamos conocimientos directamente aplicables en el
            mundo profesional y una comprensión real de por qué estos temas son
            un pilar dentro de la materia de Sistemas Operativos.
          </p>
        </article>
      </section>
    </div>
  )
}
