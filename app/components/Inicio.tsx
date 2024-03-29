"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

const Inicio = () => {
  const imagePersonal1 = "https://i.postimg.cc/pVhx6Dr3/posible-2.png";
  const controlsInicio1 = useAnimation();
  const controlsInicio2 = useAnimation();

  const handleButtonClick = () => {
    const membershipsSection = document.getElementById('micamino');
    if (membershipsSection) {
      membershipsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const animateInicio1 = async () => {
      await controlsInicio2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.6, 0.05, 0.5, 0.95] },
      });
      await controlsInicio1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.6, 0.05, 0.5, 0.95] },
      });
    };
    animateInicio1();
  }, [controlsInicio1, controlsInicio2]);

  return (
    <div className="bg-white">
      <motion.div className="w-full min-h-screen h-screen xl:pl-24 lg:pl-24 md:pl-24">

      <div className="relative">

      
      <motion.div
         initial={{ opacity: 0, y: 0 }}
         animate={controlsInicio1}
         className="bg-transparent w-full h-[55px] flex space-x-4 mt-8 lg:pl-32 md:justify-start justify-center items-center absolute">

               <Link href={'https://api.whatsapp.com/send?phone=56940898950&text=Hola%20Luis!%20vengo%20de%20tu%20portafolio%20y%20me%20gustaría%20preguntarte%20lo%20siguiente...'}>
               <FaWhatsapp className="md:h-12 md:w-12 h-10 w-10 cursor-pointer hover:scale-105 hover:text-[#51C85D] transition-all ease-in-out duration-300">
               </FaWhatsapp>
               </Link>

               <Link href={'https://www.instagram.com/xplendev/?hl=es'}>
               <FaInstagram className="md:h-12 md:w-12 h-10 w-10 cursor-pointer hover:scale-105 hover:text-[#EA1E63] transition-all ease-in-out duration-300"></FaInstagram>
               </Link>

               <Link href={'https://www.linkedin.com/in/luis-rivera-araya-35202423b/'}>
               <FaLinkedin className="md:h-12 md:w-12 h-10 w-10 cursor-pointer hover:scale-105 hover:text-[#0274B3] transition-all ease-in-out duration-300"></FaLinkedin>
                </Link>

              

          </motion.div>

          </div>


        <div className="contenedor-inicio h-screen">

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={controlsInicio1}
            className="inicio-1 lg:px-32"
          >
            {/* Contenido de inicio-1 */}
            <h1 className="xl:text-2xl lg:text-xl md:text-lg text-lg text-[#EA1E63] font-oswald">
              Desarollador
            </h1>
            <div className="xl:space-x-20 lg:space-x-10 md:space-x-10 space-x-8">
              <h1 className="xl:text-7xl lg:text-4xl md:text-3xl text-3xl text-black font-oswald">
                Luis Eduardo
              </h1>
              <h1 className="xl:text-7xl lg:text-4xl md:text-3xl text-3xl text-black font-oswald">
                Rivera Araya
              </h1>
            </div>
            <div className="pt-2 xl:px-20 lg:px-10 md:px-10 px-8">
              <button 
              onClick={handleButtonClick}
              className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full transition-all ease-in-out hover:scale-105 duration-300">
                Conóceme
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={controlsInicio2}
            className="inicio-2 flex justify-end w-full h-full relative"
          >
            {/* Contenido de inicio-2 */}
            <Image
              src={imagePersonal1}
              alt={'imagen_'}
              height={2200}
              width={2500}
              layout={'cover'}
              objectFit={'cover'}
              className=" h-full w-full absolute myfilter"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Inicio;