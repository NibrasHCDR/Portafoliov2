"use client"
import React from 'react'
import Image from 'next/image'

type Props = {}

const Inicio = (props: Props) => {

    const imagePersonal1 = "https://i.postimg.cc/MGnPYt6c/portafolio-Image1.png"

  return (
    <div className="bg-white">
        
        <div className="w-full min-h-screen h-auto xl:px-24 lg:px-24 md:px-24">
         
         <div className="contenedor-inicio h-screen">

             <div className="inicio-1 lg:px-32">

                <h1 className="xl:text-xl lg:text-lg md:text-md text-md text-[#EA1E63] font-oswald">
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

                <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-2 xl:px-20 lg:px-10 md:px-10 px-8">

                  <button className="xl:text-lg lg:text-lg md:text-md text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
                  Conóceme

                  </button>
                </div>
               
                

             </div>

             <div className="inicio-2 relative">
             
               <Image 
                src={imagePersonal1} 
                alt={'imagenpersonal'} 
                layout={'fill'} 
                objectFit={'fill'} 
                className="myfilter">

              </Image>
             
             </div>

         </div>
        
        </div>
        
    </div>
  )
}

export default Inicio