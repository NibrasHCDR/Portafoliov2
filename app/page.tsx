import Image from 'next/image'
import Inicio from './components/Inicio'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'

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
      </>
  )
}