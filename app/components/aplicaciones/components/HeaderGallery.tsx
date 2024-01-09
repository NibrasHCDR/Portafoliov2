"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

function HeaderGallery({}: Props) {

    const myImage = 'https://i.postimg.cc/7Z0bNfP4/logo.png'


    return (
        <div className="w-auto h-auto">
    
          <div className="h-auto w-auto grid justify-center items-center no-select">
    
            <motion.div className="grid md:flex md:space-x-6 md:space-y-0 space-y-4 justify-center items-center">
              
            <motion.button whileHover={{ borderBottomWidth: "1px", scaleX: 1.05}}
                 whileTap={{ borderBottomWidth: "1px" }}
                 transition={{ duration: 0.09 }}
                 className="text-white lg:text-lg text-xs font-cinzeldecorative border-b-0 border-white relative overflow-hidden">
              Exposiciones
           </motion.button>
    
           <motion.button whileHover={{ borderBottomWidth: "1px", scaleX: 1.05}}
                 whileTap={{ borderBottomWidth: "1px"  }}
                 transition={{ duration: 0.09 }}
                 className="text-white lg:text-lg text-xs font-cinzeldecorative border-b-0 border-white relative overflow-hidden">
              Galería
           </motion.button>
    
           <div className="no-select">
                    <Image className="lg:w-[280px] lg:h-[130px] xl:w-[300px] xl:h-[200px] w-[150px] h-[100px] no-select" 
                    src={myImage}
                    height={200}
                    width={300}
                    alt={''}
                    layout='cover'
                    objectFit="cover">
                    </Image>
            </div>
    
            <motion.button whileHover={{ borderBottomWidth: "1px", scaleX: 1.05}}
                 whileTap={{ borderBottomWidth: "1px" }}
                 transition={{ duration: 0.09 }}
                 className="text-white lg:text-lg text-xs font-cinzeldecorative border-b-0 border-white relative overflow-hidden">
              Exposiciones
           </motion.button>
           <motion.button whileHover={{ borderBottomWidth: "1px", scaleX: 1.05}}
                 whileTap={{ borderBottomWidth: "1px"  }}
                 transition={{ duration: 0.09 }}
                 className="text-white lg:text-lg text-xs font-cinzeldecorative border-b-0 border-white relative overflow-hidden">
              Contacto
           </motion.button>
    
            </motion.div>
    
          </div>
        </div>
      )
    }

export default HeaderGallery