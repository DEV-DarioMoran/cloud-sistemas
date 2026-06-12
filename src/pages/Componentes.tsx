import { useState } from 'react'
import type { ReactElement } from 'react'
import { Server, Container, Boxes, FileText, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Screenshot from '../components/Screenshot'

type IconProps = { size?: number; className?: string }

function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function DockerIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.95 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.91 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H8.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H5.2a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m5.83-2.72h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.91 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H8.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m14.69 1.37c-.4-.27-1.32-.37-2.03-.23-.09-.66-.46-1.24-1.13-1.76l-.23-.15-.15.22c-.3.46-.46 1.09-.42 1.7.02.34.13.94.46 1.46-.32.18-.95.42-1.78.4H.16l-.03.18c-.13.79-.13 3.26 1.46 5.16 1.21 1.44 3.02 2.17 5.39 2.17 5.13 0 8.93-2.36 10.71-6.66.7.01 2.2.01 2.98-1.49.05-.08.16-.31.5-1.01l.02-.06zm-9.83-7.36h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19h2.12a.19.19 0 0 0 .19-.19V2.56a.19.19 0 0 0-.19-.19" />
    </svg>
  )
}

type Bloque = { title: string; code: string }
type Captura = { label: string; src?: string }
type Enlace = {
  label: string
  href: string
  icon: (props: IconProps) => ReactElement
}
type Seccion = {
  id: string
  label: string
  icon: LucideIcon
  resumen: string
  descripcion: string
  specs: string[]
  bloques: Bloque[]
  capturas: Captura[]
  enlaces?: Enlace[]
}

const secciones: Seccion[] = [
  {
    id: 'virtualizacion',
    label: 'Virtualización',
    icon: Server,
    resumen: '2 VMs Fedora 41 · VirtualBox · red interna · SSH',
    descripcion:
      'Se crearon dos máquinas virtuales con Fedora 41 sobre VirtualBox, aplicando particionamiento manual del disco. Ambas VMs se conectan mediante una red interna que permite la comunicación entre ellas, y se habilita el acceso remoto por SSH para administrarlas desde la terminal.',
    specs: [
      '2 × VM Fedora 41',
      'VirtualBox',
      'Particionamiento manual',
      'Red interna (intnet)',
      'Acceso SSH',
    ],
    bloques: [
      {
        title: 'red interna — VirtualBox',
        code: `# Configurar red interna en ambas VMs

sudo nmcli con add type ethernet con-name red-interna ifname enp0s8 \\
  ip4 192.168.50.10/24
sudo nmcli con up red-interna`,
      },
      {
        title: 'habilitar SSH',
        code: `# En la VM servidor
sudo dnf install -y openssh-server
sudo systemctl enable --now sshd
sudo systemctl status sshd
ssh usuario@192.168.10.2`,
      },
      {
        title: 'verificar particiones',
        code: `# Revisar el esquema de particionamiento manual
lsblk
df -h
sudo fdisk -l /dev/sda`,
      },
    ],
    capturas: [
      { label: 'Montando Fedora en VirtualBox', src: '/vm-virtualbox.png' },
      { label: 'Instalación de Fedora 41', src: '/fedora-install.png' },
      {
        label: 'Instalación de Fedora Server',
        src: '/fedora-server-install.png',
      },
      { label: 'VM Fedora en ejecución', src: '/vm-fedora-running.png' },
      { label: 'Particionamiento manual del disco', src: '/particiones.png' },
      {
        label: 'Configurando la red interna entre máquinas',
        src: '/configurand-red-interna-maquinas.png',
      },
      { label: 'SSH configurado', src: '/ssh-configurado.png' },
      {
        label: 'Ping desde Fedora por SSH',
        src: '/ping-desde-fedora-grafica-ssh.png',
      },
    ],
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: Container,
    resumen: 'Nginx + Python · docker-compose · volúmenes · fedora:41',
    descripcion:
      'Se contenerizó una aplicación de dos servicios: un frontend servido con Nginx y un backend en Python, ambos construidos sobre la imagen base fedora:41. La orquestación local se realiza con docker-compose, e incluye volúmenes persistentes para mantener los datos entre reinicios de los contenedores.',
    specs: [
      'Imagen base fedora:41',
      'Frontend Nginx',
      'Backend Python',
      'docker-compose',
      'Volúmenes persistentes',
    ],
    bloques: [
      {
        title: 'docker-compose.yml',
        code: `version: "3.9"
services:
  frontend:
    build: ./frontend        # Nginx sobre fedora:41
    ports:
      - "8080:80"
    depends_on:
      - backend
  backend:
    build: ./backend         # Python sobre fedora:41
    ports:
      - "5000:5000"
    volumes:
      - datos:/app/data      # volumen persistente

volumes:
  datos:`,
      },
      {
        title: 'Dockerfile backend (Python / fedora:41)',
        code: `FROM fedora:41
RUN dnf install -y python3 python3-pip && dnf clean all
WORKDIR /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python3", "app.py"]`,
      },
      {
        title: 'comandos principales',
        code: `# Construir y levantar los servicios
docker-compose up --build -d

# Ver contenedores y volúmenes
docker ps
docker volume ls

# Logs y detener
docker-compose logs -f
docker-compose down`,
      },
    ],
    capturas: [
      {
        label: 'Build de los contenedores (docker-compose)',
        src: '/docker-build.png',
      },
      { label: 'Los 2 servicios corriendo', src: '/docker-servicios.png' },
      {
        label: 'Frontend respondiendo en localhost',
        src: '/docker-localhost.png',
      },
      { label: 'Contenedores en ejecución', src: '/docker-contenedores.png' },
      {
        label: 'Subiendo los contenedores a Docker Hub',
        src: '/subiendo-contendeodres-dockerhub.png',
      },
      { label: 'Imágenes publicadas en Docker Hub', src: '/docker-hub.png' },
    ],
    enlaces: [
      {
        label: 'grupo3-backend',
        href: 'https://hub.docker.com/r/dariomoran2003/grupo3-backend',
        icon: DockerIcon,
      },
      {
        label: 'grupo3-frontend',
        href: 'https://hub.docker.com/r/dariomoran2003/grupo3-frontend',
        icon: DockerIcon,
      },
    ],
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    icon: Boxes,
    resumen: 'Minikube · Deployment 2 réplicas · NodePort · escalado a 3',
    descripcion:
      'Sobre un clúster local con Minikube se desplegó un Deployment de Nginx con 2 réplicas, expuesto al exterior mediante un Service de tipo NodePort. Posteriormente se demostró el escalado horizontal aumentando el número de réplicas de 2 a 3 con un solo comando.',
    specs: [
      'Minikube',
      'Deployment Nginx',
      '2 réplicas → 3 réplicas',
      'Service NodePort',
      'Escalado horizontal',
    ],
    bloques: [
      {
        title: 'deployment.yaml',
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80`,
      },
      {
        title: 'service-nodeport.yaml',
        code: `apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080`,
      },
      {
        title: 'desplegar y escalar',
        code: `# Iniciar el clúster
minikube start

# Aplicar manifiestos
kubectl apply -f deployment.yaml
kubectl apply -f service-nodeport.yaml

# Verificar estado
kubectl get deployments
kubectl get pods
kubectl get services

# Escalar de 2 a 3 réplicas
kubectl scale deployment nginx-deployment --replicas=3

# Acceder al servicio
minikube service nginx-service --url`,
      },
    ],
    capturas: [
      { label: 'Arrancando Minikube', src: '/minikube-start.png' },
      {
        label: 'Desplegando los servicios en Kubernetes',
        src: '/k8s-deploy.png',
      },
      {
        label: 'Nginx en la URL del Service NodePort',
        src: '/k8s-nodeport.png',
      },
      { label: 'Escalado a 3 réplicas', src: '/k8s-escalado.png' },
    ],
  },
  {
    id: 'documentacion',
    label: 'Documentación',
    icon: FileText,
    resumen: 'Sitio web · video YouTube · repositorio GitHub',
    descripcion:
      'La documentación del proyecto se compone de tres entregables: este sitio web técnico construido con React y Tailwind CSS, un video explicativo publicado en YouTube que muestra el funcionamiento de cada componente, y un repositorio en GitHub con todo el código fuente, manifiestos y archivos de configuración.',
    specs: [
      'Sitio web (React + Vite)',
      'Video en YouTube',
      'Repositorio GitHub',
      'Tailwind CSS',
    ],
    bloques: [
      {
        title: 'levantar el sitio de documentación',
        code: `# Clonar el repositorio
git clone https://github.com/DEV-DarioMoran/cloud-sistemas.git
cd cloud-sistemas

# Instalar dependencias y ejecutar
bun install
bun run dev

# Generar build de producción
bun run build`,
      },
    ],
    capturas: [
      { label: 'Página de inicio del sitio web', src: '/inicio-pagina-web.png' },
      { label: 'Miniatura del video en YouTube' },
      {
        label: 'Repositorio del proyecto en GitHub',
        src: '/repor-github.png',
      },
    ],
    enlaces: [
      {
        label: 'DEV-DarioMoran/cloud-sistemas',
        href: 'https://github.com/DEV-DarioMoran/cloud-sistemas',
        icon: GithubIcon,
      },
    ],
  },
]

export default function Componentes() {
  const [activo, setActivo] = useState(secciones[0].id)
  const seccion = secciones.find((s) => s.id === activo)!

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <PageHeader
        eyebrow="Detalle técnico"
        title="Componentes del proyecto"
        description="Recorrido por las cuatro etapas de la arquitectura cloud, con su descripción, comandos principales y espacio para las capturas de pantalla del proceso."
      />

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-2 border-b border-line pb-px">
        {secciones.map(({ id, label, icon: Icon }) => {
          const isActive = id === activo
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActivo(id)}
              className={[
                'inline-flex items-center gap-2 rounded-t-lg border-b-2 px-4 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'border-accent text-accent'
                  : 'border-transparent text-ink-dim hover:text-ink-bright',
              ].join(' ')}
            >
              <Icon size={16} />
              {label}
            </button>
          )
        })}
      </div>

      {/* Contenido de la sección activa */}
      <section key={seccion.id} className="mt-8 animate-fade-up">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-border bg-accent-soft text-accent">
            <seccion.icon size={24} />
          </span>
          <div>
            <h2 className="text-2xl font-semibold text-ink-bright">
              {seccion.label}
            </h2>
            <p className="mt-1 font-mono text-xs text-accent">
              {seccion.resumen}
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-ink">{seccion.descripcion}</p>

        {/* Specs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {seccion.specs.map((spec) => (
            <span
              key={spec}
              className="rounded-md border border-line bg-bg-soft px-3 py-1 font-mono text-xs text-ink-dim"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Enlaces a repositorios */}
        {seccion.enlaces && (
          <div className="mt-6 flex flex-wrap gap-3">
            {seccion.enlaces.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-accent-border bg-accent-soft px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                <Icon size={18} />
                {label}
                <ExternalLink
                  size={14}
                  className="opacity-50 transition-opacity group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        )}

        {/* Comandos */}
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-dim">
            Comandos principales
          </h3>
          <div className="grid gap-5">
            {seccion.bloques.map((b) => (
              <CodeBlock key={b.title} title={b.title} code={b.code} />
            ))}
          </div>
        </div>

        {/* Capturas */}
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-dim">
            Capturas de pantalla
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {seccion.capturas.map((c) => (
              <Screenshot key={c.label} label={c.label} src={c.src} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
