"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

function Habilidades({}: Props) {

    const nextjs13 = "https://i.postimg.cc/1zrq96P3/nextjs14-iconnew.png";
    const tailwindcss = 'https://i.postimg.cc/ht6Bf3DC/tailwindcssico.png'
    const javascript = 'https://i.postimg.cc/6qgtLzsc/javascript-icon.png'
    const typescript = 'https://i.postimg.cc/1zWTm93Y/typescript-icon.png'
    const java = 'https://i.postimg.cc/nhxL8trD/java-icon.png'
    const firebase = 'https://i.postimg.cc/kGr2BRJj/firebase-icon.png'
    const mongodb = 'https://i.postimg.cc/MKybyRLJ/mongodb-icon.png'
    const mysql = 'https://i.postimg.cc/nh5j6W8b/mysql-icon.png'
    const flutter = 'https://i.postimg.cc/0yn40h4v/flutter-icon.png'

    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          x: [0],
          y: [0],
          scale: 1,
        });
      }
    }, [controls, inView]);
    

  return (
    <div className="bg-[#293D50]">

        <motion.div 
         ref={ref}
         initial={{ opacity: 0, x: '-50%', y: '-50%', scale: 0.5 }}
         animate={controls}
         transition={{ duration: 1 , ease: [0.6, 0.05, 0.5, 0.95]}}

         className="w-full min-h-screen h-auto xl:px-24 lg:px-24 md:px-24">

            <div className="contenedor-habilidades myfilter h-full xl:p-24 lg:p-8 p-8 ">

                <div className="habilidades-1 xl:pb-8 pb-6">
                
                  <div className="text-center felx justify-center">  
                   <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald">
                     Conocimientos
                   </h1>
                  </div>

                </div>

                <div className="habilidades-2 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                   <div className="space-y-2">

                    <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">
                        
                        <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={nextjs13} width={600} height={600} alt={'nextjs'} objectFit='cover'>

                         </Image>

                    </div>

                    <div className="">
                     
                      <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">NextJS 14</h1>

                        <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                        Utilizo Next.js 14 de forma habitual en el desarrollo de aplicaciones web
                          </p>

                    </div>
                       
                   </div>

                </div>

                <div className="habilidades-3 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                <div className="space-y-2">

                  <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">
    
                     <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={tailwindcss} width={600} height={600} alt={'nextjs'} objectFit='cover'>

                      </Image>

                  </div>

              <div className="">
 
                  <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">TailwindCSS</h1>

                  <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                  Con Tailwind CSS  agilizo el proceso de diseño y estructuración de mis proyectos
                    </p>

                 </div>
   
            </div>

                </div>

                <div className="habilidades-4 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                <div className="space-y-2">

                 <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                   <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={javascript} width={600} height={600} alt={'nextjs'} objectFit='cover'>

                   </Image>

                </div>

                <div className="">

                       <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">JavaScript</h1>

                       <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                       Pilar fundamental en mi caja de herramientas para el desarrollo de mis aplicaciones web
                        </p>

                </div>

            </div>

                </div>

                <div className="habilidades-5 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                   <div className="space-y-2">

                   <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                   <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={typescript} width={600} height={600}  alt={'typescript'} objectFit='cover'>

                   </Image>

                   </div>

                   <div className="">

                   <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">TypeScript</h1>

                       <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                       Lenguaje que utilizo en combinación para escribir componentes y páginas
                       </p>

                    </div>

                  </div>
                </div>

                <div className="habilidades-6 min-min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                 <div className="space-y-2">

                  <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                    <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={flutter} width={600} height={600}  alt=  {'typescript'} objectFit='cover'>

                    </Image>

                  </div>

                  <div className="">

                    <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">Flutter</h1>

                    <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                    He utilizado este marco de trabajo para el desarrollo de aplicaciones móviles frontend
                      </p>

                  </div>

                </div>

                </div>

                <div className="habilidades-7 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                 <div className="space-y-2">

                    <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                      <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={java} width={600} height={600}  alt={'typescript'} objectFit='cover'>

                      </Image>

                    </div>

                    <div className="">

                        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">Java</h1>

                        <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                          Con Java Realicé multiples Apps Administrativas de Escritorio
                          </p>

                  </div>

                 </div>
                </div>

                <div className="habilidades-8 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">

                  <div className="space-y-2">

                    <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                      <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={firebase} width={600} height={600}  alt=  {'typescript'} objectFit='cover'>

                      </Image>
  
                    </div>

                    <div className="">

                      <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">Firebase</h1>

                       <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                       Confío en Firebase como una solución integral para diversas funcionalidades
                        </p>

                    </div>

                 </div>

                </div>

                <div className="habilidades-9 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                 <div className="space-y-2">

                   <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">
  
                     <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={mongodb} width={600} height={600}  alt=  {'typescript'} objectFit='cover'>

                     </Image>

                   </div>

                   <div className="">

                     <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">MongoDB</h1>

                     <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                     He empleado MongoDB como base de datos NoSQL para almacenar y gestionar datos
                      </p>

                   </div>

                </div>

                </div>

                <div className="habilidades-10 min-h-[270px] max-h-[270px] border-[2px] p-3 rounded-md border-white transition-all duration-300 hover:scale-105 no-select cursor-pointer">
                
                <div className="space-y-2">

                  <div className="relative xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10">

                   <Image className="xl:w-14 xl:h-14 lg:h-12 lg:w-12 md:w-12 md:h-12 w-10 h-10 rounded-xl"src={mysql} width={600} height={600}  alt=  {'typescript'} objectFit='cover'>

                     </Image>

                    </div>

                    <div className="">

                      <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-oswald">MySQL</h1>

                      <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-darkergrotesque">
                      Uyilizo MySQL en conjunto con Java para diversos proyectos de escritorio
                        </p>

                   </div>

                 </div>
                
                </div>

            </div>

        </motion.div>
        
    </div>
  )
}

export default Habilidades