import React from 'react'
import HeaderGallery from './HeaderGallery'

type Props = {}

function HomeGallery({}: Props) {
    return (
        <div className="mx-w-4xl mx-auto bg-black">

            
    
          <div className="min-h-screen h-auto min-w-screen">
            
            <div className="w-full min-h-screen h-auto bg-black/60 xl:p-24 lg:p-24 md:p-24 py-24 px-1">

            <HeaderGallery/>
            <div className="contenedor-inicio-aplicaciones-b w-full flex justify-center items-center pt-20 md:pt-48">
            
               <div className="inicio-aplicaciones-b-1 border-b-2 pb-4 grid">
    
                <h1 className="lg:text-8xl md:text-7xl text-4xl text-white font-tangerine grid justify-center items-center no-select">Manuel Molina Lopez</h1>
    
               </div>
    
               <div className="inicio-aplicaciones-b-2 grid">
    
               <h1 className="lg:text-2xl md:text-lg text-white font-cinzeldecorative grid justify-center items-center no-select">Galería de Arte</h1>

                <div className="flex justify-center items-center">

                <button className="lg:text-2xl md:text-lg text-white font-nunito p-3 border-2 border-white transition-all duration-500 mt-6 md:mt-12 no-select">
                 Proximamente...
               </button>
                </div>

    
               </div>
    
            </div>

            </div>
    
          </div>
            
        </div>
      )
    }

export default HomeGallery