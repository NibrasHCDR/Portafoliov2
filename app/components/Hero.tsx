"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

type Props = {}

const Hero = (props: Props) => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [controls, inView]);

  
  return (
    <div className="bg-[#293D50]">

        <motion.div 
         ref={ref}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={controls}
         transition={{ duration: 1 , ease: [0.6, 0.05, 0.5, 0.95]}}

         className="w-full min-h-screen h-auto xl:px-24 lg:px-24 md:px-24 xl:flex xl:justify-center items-center">
          
          <div className="contenedor-hero h-full xl:p-24 lg:p-8 p-8 ">

             <div className="hero-1 space-y-3 lg:space-y-8">

              <div className="text-center">  
                <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald">
                  ¿Quien Soy?
                </h1>

                </div>

                <div className="text-start">

                <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                Ingeniero desarrollador proactivo y apasionado por la programación, con 1 año y medio de experiencia en proyectos web. Tuve mi primer acercamiento al mundo del desarrollo y programación hace más de 10 años. Me destaco por mis excelentes habilidades de adaptabilidad y mis conocimientos en el diseño de aplicaciones web Front-END con Nextjs, ReactJS, JAvaScript, TypeScript, TailwindCSS. También poseo conocimiento en desarrollo Back-END principalmente en el uso de librerías CMS como Sanity.io. Mi trabajo principal es el desarollo Front-End y Full Stack. Estoy siempre dispuesto a trabajar en equipo y a desarrollar mis habilidades en entornos profesionales.

                </p>

                </div>

             </div>

             <div className="hero-2 space-y-3 lg:space-y-8">
             
             <div className="text-center">  
                <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald">
                  Más acerca de mí
                </h1>

              </div>

              <div className="text-start">

              <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                Actualmente me desempeño como Freelancer, enfocado en la creación integral de aplicaciones web informativas, centrándome en el diseño, codificación, implementación de CMS, despliegue y seguimiento. Mi enfoque se traduce en el desarrollo de Landing Pages, diseñadas con interfaces gráficas tractivas, que incorporan un CMS de administración del contenido en su totalidad.
              </p>

              </div>

                <div className="flex space-x-2 justify-center items-center pt-8">

                   <h1 className="xl:text-7xl lg:text-7xl md:text-5xl text-2xl text-[#EA1E63] font-oswald">
                    +1.5
                   </h1>

                   <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-white font-oswald">
                    Años de <br />Experiencia
                   </h1>

                   <h1 className="xl:text-7xl lg:text-7xl md:text-5xl text-2xl text-[#EA1E63] font-oswald">
                    +10
                   </h1>

                   <h1 className="xl:text-xl lg:text-xl md:text-lg text-md text-white font-oswald">
                    Proyectos <br />Entregados
                   </h1>

                </div>

             </div>

          </div>
          
        </motion.div>
        
    </div>
  )
}

export default Hero