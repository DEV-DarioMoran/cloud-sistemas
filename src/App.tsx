import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Equipo from './pages/Equipo'
import Componentes from './pages/Componentes'
import Conclusiones from './pages/Conclusiones'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/conclusiones" element={<Conclusiones />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
