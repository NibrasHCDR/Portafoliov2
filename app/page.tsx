import Image from 'next/image'
import Inicio from './components/Inicio'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import MiCamino from './components/MiCamino'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <section id="inicio">
      <Inicio />
    </section>
    
    <section id="hero">
        <Hero />
    </section>

    <section id="proyectos">
        <Proyectos />
    </section>

    <section id="micamino">
        <MiCamino />
    </section>

    <section id="habilidades">
        <Habilidades />
    </section>

    <section id="contacto">
        <Contacto />
    </section>

    <section id="footer">
        <Footer />
    </section>

      </>
  )
}
