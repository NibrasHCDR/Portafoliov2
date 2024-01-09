"use client"
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {}

function MiCamino({}: Props) {

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

  const handleButtonClick = () => {
    const membershipsSection = document.getElementById('contacto');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const firstgame = 'https://i.postimg.cc/nz7YrRbP/controlgame-micamino.gif'
  const graduate = 'https://i.postimg.cc/W16jvjHD/mitutulacion-micamino.gif'
  const webpage = 'https://i.postimg.cc/J7bBkCfx/webpage-micamino.gif'
  const mimarca = 'https://i.postimg.cc/90pkFybj/freelancer-micamino.gif'

  return (
    <div className="bg-white">

        <motion.div 
         ref={ref}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={controls}
         transition={{ duration: 0.7 , ease: [0.6, 0.05, 0.5, 0.95]}}

        className="w-full min-h-screen h-auto xl:px-24 lg:px-24 md:px-24">

             <div className="contenedor-micamino h-full xl:px-[250px] xl:py-24 lg:p-8 p-8">

                    <div className="micamino-1 flex justify-center items-center lg:justify-end">
                        
                        <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald no-select">
                            Mi
                        </h1>

                    </div>
                    <div className="micamino-2 flex justify-center transition-all duration-300 hover:scale-105">

                        <div className="">

                            <Image
                                className="lg:w-[120px] lg::h-[120px] md:w-[120px] md:h-[120px] w-[85px] h-[85px] rounded-full border-2 border-black bg-white"
                                src={'https://i.postimg.cc/2SrBtp0g/Luis-Avatar-icon.png'} width={100} height={100} alt={'Luis'}>
                            </Image>

                        </div>
                        


                    </div>
                    <div className="micamino-3 flex justify-center items-center lg:justify-start">
                        
                          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-[#EA1E63] font-oswald no-select">
                            Camino
                          </h1>

                    </div>
                    <div className="micamino-4 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-r-2">
                        
                         <div className="flex justify-center items-center xl:justify-end">

                         <Image className="xl:w-[290px] xl:h-[290px] lg:w-[250px] lg:h-[250px] md:w-[160px] md:h-[160px] w-[110px] h-[110px] rounded-full border-2 border-white bg-white" src={firstgame} alt={''} width={100} height={100} objectFit='cover'>

                          </Image>

                         </div>

                    </div>
                    <div className="micamino-5 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-l-2 lg:grid lg:justify-center lg:items-center">
                        
                        <div className="flex-col justify-center items-center transition-all duration-300 hover:scale-105">

                             <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-oswald no-select">
                              Mi Primer Videojuego
                             </h1>

                             <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque no-select">
                               Año 2010, Con 16 años publiqué mi primer videojuego (AutoControl) para consola PSP en <br /> <span className="border-b-2 text-[#EA1E63] border-[#EA1E63]"><Link href={'https://psp.scenebeta.com/noticia/auto-control'}>scenebeta.com</Link></span> 
                             </p>

                        </div>

                    </div>
                    <div className="micamino-6 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-r-2 lg:grid lg:justify-center lg:items-center">

                    <div className="grid justify-center items-center transition-all duration-300 hover:scale-105">

                        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black  font-oswald no-select">
                        Mi Titulación
                          </h1>

                            <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black  font-darkergrotesque no-select">
                            Me gradué con distinción en Ingeniería en Informática en 2021, obteniendo mi primer título con honores
                       </p>

                  </div>
                    </div>
                    <div className="micamino-7 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-l-2">
                    <div className="flex justify-center items-center xl:justify-start">

                        <Image className="xl:w-[290px] xl:h-[290px] lg:w-[250px] lg:h-[250px] md:w-[160px] md:h-[160px] w-[110px] h-[110px] rounded-full border-2 border-white bg-white" src={graduate} alt={''} width={100} height={100} objectFit='cover'>

                        </Image>

                     </div>
                    </div>
                    <div className="micamino-8 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-r-2">
                    <div className="flex justify-center items-center xl:justify-end">

                         <Image className="xl:w-[290px] xl:h-[290px] lg:w-[250px] lg:h-[250px] md:w-[160px] md:h-[160px] w-[110px] h-[110px] rounded-full border-2 border-white bg-white" src={webpage} alt={''} width={100} height={100} objectFit='cover'>

                        </Image>

                   </div>
                    </div>
                    <div className="micamino-9 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-l-2 lg:grid lg:justify-center lg:items-center">
                    <div className="grid justify-center items-center transition-all duration-300 hover:scale-105">

                        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-oswald no-select">
                         Mis Primeras Webs Profesionales
                          </h1>

                            <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque no-select">
                            En 2021, inicié el desarrollo de aplicaciones web con tecnologías de vanguardia
                       </p>

                  </div>
                    </div>
                    <div className="micamino-10 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-r-2 lg:grid lg:justify-center lg:items-center">
                    <div className="grid justify-center items-center transition-all duration-300 hover:scale-105">

                      <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-oswald no-select">
                        Mi Propia Marca
                        </h1>

                              <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque no-select">
                              En 2023, como freelancer, inicié la creación de mi propio negocio y marca
                              <br /> <span className="border-b-2 text-[#EA1E63] border-[#EA1E63]"><Link href={'https://xplendev.com/'}>xplendev.com</Link></span>  
                      </p>

                  </div>
                    </div>
                    <div className="micamino-11 xl:p-12 xl:px-6 lg:p-10 lg:px-4 md:px-2 md:pt-10 px-2 pt-8 border-l-2">
                    <div className="flex justify-center items-center xl:justify-start">

                        <Image className="xl:w-[290px] xl:h-[290px] lg:w-[250px] lg:h-[250px] md:w-[160px] md:h-[160px] w-[110px] h-[110px] rounded-full border-2 border-white bg-white" src={mimarca} alt={''} width={100} height={100} objectFit='cover'>

                        </Image>

                      </div>
                    </div>
                    <div className="micamino-12">
                        <div className="flex justify-center items-center">

                        <button onClick={handleButtonClick} className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full transition-all ease-in-out hover:scale-105 duration-300">
                             Continuemos el viaje!
                        </button>

                        </div>

                    </div>

             </div>

        </motion.div>
        
    </div>
  )
}

export default MiCamino