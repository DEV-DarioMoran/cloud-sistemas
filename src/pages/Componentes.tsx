import { useState } from 'react'
import { Server, Container, Boxes, FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CodeBlock from '../components/CodeBlock'
import Screenshot from '../components/Screenshot'

type Bloque = { title: string; code: string }
type Seccion = {
  id: string
  label: string
  icon: LucideIcon
  resumen: string
  descripcion: string
  specs: string[]
  bloques: Bloque[]
  capturas: string[]
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
VBoxManage modifyvm "Fedora-VM1" --nic1 intnet --intnet1 "redos"
VBoxManage modifyvm "Fedora-VM2" --nic1 intnet --intnet1 "redos"

# Asignar IP estática (dentro de cada VM)
sudo nmcli con add type ethernet con-name red-interna ifname enp0s3 \\
  ip4 192.168.50.10/24
sudo nmcli con up red-interna`,
      },
      {
        title: 'instalar y habilitar SSH',
        code: `# En la VM servidor
sudo dnf install -y openssh-server
sudo systemctl enable --now sshd
sudo systemctl status sshd

# Verificar conexión desde la VM cliente
ssh usuario@192.168.50.10`,
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
      'VMs Fedora 41 corriendo en VirtualBox',
      'Particionamiento manual del disco',
      'Conexión SSH entre las dos VMs',
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
      'Contenedores en ejecución (docker ps)',
      'Frontend Nginx respondiendo en el navegador',
      'Volumen persistente conservando los datos',
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
      'Pods en ejecución (kubectl get pods)',
      'Service NodePort accesible desde el navegador',
      'Escalado a 3 réplicas confirmado',
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
git clone https://github.com/grupo3/arquitecto-cloud.git
cd arquitecto-cloud

# Instalar dependencias y ejecutar
npm install
npm run dev

# Generar build de producción
npm run build`,
      },
    ],
    capturas: [
      'Página de inicio del sitio web',
      'Miniatura del video en YouTube',
      'Repositorio del proyecto en GitHub',
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
              <Screenshot key={c} label={c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
