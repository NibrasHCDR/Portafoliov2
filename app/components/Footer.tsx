"use client"
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect } from 'react'

import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';

type Props = {}

function Footer({}: Props) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1,
        });
      }
    }, [controls, inView]);

    
  return (
    <div className="bg-[#293D50]">

        <motion.div
         ref={ref}
         initial={{ opacity: 1,  y: 92 , scale: 1 }}
         animate={controls}
         transition={{ duration: 1 , ease: [0.6, 0.05, 0.5, 0.95]}}

         className="w-full h-auto xl:p-24 lg:p-24 md:p-24">

            <div className="contenedor-footer">

                    <div className="footer-1">
                        
                         <div className="grid justify-center items-center p-4 space-x-4">
                            <h1 className="xl:text-3xl lg:text-lg md:text-md text-lg text-[#EA1E63] font-oswald">
                                Luis <span className="text-white">Eduardo</span>  
                            </h1>
                            <h2 className="xl:text-2xl lg:text-md md:text-sm text-md text-[#EA1E63] font-oswald">
                                Rivera <span className="text-white">Araya</span>
                            </h2>
                         </div>

                    </div>

                    <div className="footer-2">
                    
                             <div className="grid md:flex space-y-2 md:space-y-0 md:space-x-4 justify-center items-center h-full text-center">
                             <h2 className="xl:text-xl lg:text-lg md:text-md text-md text-white font-oswald">
                                Proyectos
                            </h2>
                            <h2 className="xl:text-xl lg:text-lg md:text-md text-md text-white font-oswald">
                                Planes
                            </h2>
                            <h2 className="xl:text-xl lg:text-lg md:text-md text-md text-white font-oswald">
                                Acerca De
                            </h2>
                            <h2 className="xl:text-xl lg:text-lg md:text-md text-md text-white font-oswald">
                                Créditos
                            </h2>
                             </div>
                    </div>

                    <div className="footer-3 flex px-2">
                    
                     <div className="flex space-x-2 items-center justify-center mx-auto">
                    
                            <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola%20Luis!%20vengo%20de%20tu%20portafolio%20y%20me%20gustaría%20preguntarte%20lo%20siguiente...'}>
                            <FaWhatsapp className="xl:w-12 xl:h-12 md:h-10 md:w-10 h-8 w-8 cursor-pointer hover:scale-105 text-white hover:text-[#51C85D] transition-all ease-in-out duration-300">
                             </FaWhatsapp>
                     </Link>

                           <Link href={'https://www.instagram.com/xplendev/?hl=es'}>
                          <FaInstagram className="xl:w-12 xl:h-12 md:h-10 md:w-10 h-8 w-8   cursor-pointer hover:scale-105 text-white hover:text-[#EA1E63] transition-all ease-in-out duration-300"></FaInstagram>
                         </Link>

                        <Link href={'https://www.linkedin.com/in/luis-rivera-araya-35202423b/'}>
                        <FaLinkedin className="xl:w-12 xl:h-12 md:h-10 md:w-10 h-8 w-8 cursor-pointer hover:scale-105 text-white hover:text-[#0274B3] transition-all ease-in-out duration-300"></FaLinkedin>
                </Link>
                     
                     </div>

                    </div>

                    <div className="footer-4 ">
                    
                        <div className="grid justify-center items-center">
                            <h1 className="xl:text-xl lg:text-lg md:text-md text-md text-white font-oswald">
                            © 2023 | By Luis Eduardo Rivera Araya
                            </h1>
                        </div>

                    </div>

            </div>

        </motion.div>
        
    </div>
  )
}

export default Footer