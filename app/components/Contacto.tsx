"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { TbWorldWww } from "react-icons/tb";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {}

function Contacto({}: Props) {

  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(true);
    alert("Gracias por tu mensaje! Te responderé lo antes posible. Se redireccionará la página automaticamente al presionar ACEPTAR");
  };

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
    <div className="bg-white">

        <motion.div
         ref={ref}
         initial={{ opacity: 0, x: '-50%', y: '-50%', scale: 0.5 }}
         animate={controls}
         transition={{ duration: 1 , ease: [0.6, 0.05, 0.5, 0.95]}}
         
         className="w-full h-full xl:px-24 lg:px-24 md:px-24">

            <div className="contenedor-contacto h-full w-full xl:p-24 lg:p-8 p-8">

               <div className="contacto-1 ">
               
                <div className="">

                   <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-[#EA1E63] font-oswald">
                    Contáctame
                   </h1>

                   <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-2xl text-black font-oswald lg:pb-6">
                    Mantengamos <span className="text-[#EA1E63]">Contacto</span>
                   </h1>
                   <p className="xl:text-2xl lg:text-xl md:text-xl text-lg text-black font-darkergrotesque">
                   ¡Hola! Estoy emocionado de conectar contigo. Te invito a mantenernos en contacto. Mi objetivo es compartir información relevante, responder preguntas y colaborar en proyectos emocionantes. No dudes en contactarme para discutir ideas, oportunidades de colaboración o cualquier consulta que tengas. ¡Espero poder conectar contigo pronto!
                   </p>

                </div>

               </div>

               <div className="contacto-2 px-4 pt-2 xl:pt-8">      

                        <div className="grid space-y-4"> 

                        <div className="flex justify-start space-x-3">

                             <div className="flex justify-center items-center">
                         <FaPhone className="w-6 h-6 text-[#EA1E63]">

                        </FaPhone>
                             </div>

                         <div className="">
                         <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-[#EA1E63] font-oswald">
                            Contacto Directo
                         </h1>
                          <h2 className="xl:text-2xl lg:text-lg md:text-lg text-lg text-black font-darkergrotesque">
                           +569 40898950
                          </h2>

                         </div>
                            
                        </div>

                        <div className="flex justify-start space-x-3">

                             <div className="flex justify-center items-center">
                         <TfiEmail className="w-6 h-6 text-[#EA1E63]">

                        </TfiEmail>
                             </div>

                         <div className="">
                         <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-[#EA1E63] font-oswald">
                            E-Mail
                         </h1>
                          <h2 className="xl:text-2xl lg:text-lg md:text-lg text-lg text-black font-darkergrotesque">
                           l.riveraa664@gmail.com
                          </h2>

                         </div>
                            
                        </div>

                        </div>

               </div>

               <div className="contacto-3 px-4 pt-2 xl:pt-8">
               
                        <div className="grid space-y-4"> 

                        <div className="flex justify-start space-x-3">

                             <div className="flex justify-center items-center">
                         <TbWorldWww className="w-6 h-6 text-[#EA1E63]">

                        </TbWorldWww>
                             </div>

                         <div className="">
                         <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-[#EA1E63] font-oswald">
                            Mi Sitio
                         </h1>
                         <Link href={'https://xplendev.com/'}>
                          <h2 className="xl:text-2xl lg:text-lg md:text-lg text-lg font-darkergrotesque border-b-2 text-[#EA1E63] border-[#EA1E63]">
                           Xplendev.com
                          </h2>
                          </Link>

                         </div>
                            
                        </div>

                        <div className="flex justify-start space-x-3">

                             <div className="flex justify-center items-center">
                         <FaLocationDot className="w-6 h-6 text-[#EA1E63]">

                        </FaLocationDot>
                             </div>

                         <div className="">
                         <h1 className="xl:text-2xl lg:text-xl md:text-lg text-md text-[#EA1E63] font-oswald">
                            Residencia
                         </h1>
                          <h2 className="xl:text-2xl lg:text-lg md:text-lg text-lg text-black font-darkergrotesque">
                          La Serena, Chile
                          </h2>

                         </div>
                            
                        </div>

                        </div>
               
               </div>

               <div className="contacto-4 pt-8 w-full">

                  <form action="https://formsubmit.co/l.riveraa6642@hotmail.com" method="POST">

                     <div className="grid md:space-y-2 space-y-1">

                        <div className="flex space-x-2 justify-center">

                           <input placeholder="Nombre" type='text' name="nombre" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#EA1E63] w-full h-[34px] placeholder:text-[#EA1E63]" required>

                           </input>

                           <input placeholder="Telefono o Email" type='text' name="Email" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#EA1E63] w-full h-[34px] placeholder:text-[#EA1E63]" required>

                           </input>

                        </div>

                        <div className="grid xl:pt-2 xl:space-y-4 md:space-y-2 space-y-1">
                            
                           <input placeholder="Asunto" type='text' name="asunto" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-6 border-[#EA1E63] w-full h-[34px] placeholder:text-[#EA1E63]" required>

                           </input>

                             <textarea placeholder='Tu mensaje' name="mensaje" id="" className="border-2 rounded-md xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-darkergrotesque px-2 lg:py-1 border-[#EA1E63] placeholder:text-[#EA1E63] w-full h-[190px] min-h-[190px] max-h-[190px]" required>

                             </textarea>

                             <button onClick={handleClick} type='submit' className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full transition-all ease-in-out hover:scale-105 duration-300 mx-auto">
                                Enviar Mensaje
                             </button>

                             <input type="hidden" name="_next" value="https://portafolio-luisrivera-v2.web.app/" />

                             <input type="hidden" name="_captcha" value="false" />
                         
                        </div>

                     </div>

                  </form>
               
               </div>

            </div>

        </motion.div>
        
    </div>
  )
}

export default Contacto