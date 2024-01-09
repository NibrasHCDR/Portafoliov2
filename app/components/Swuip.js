/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-cards';

import style from '../../app/styles/swiper.module.css'

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App( { onSlideChange, onSwiper }) {
  return (
    <>
      <Swiper
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        effect={'cards'}
        modules={[EffectCards]}
        grabCursor={true}
        className="mySwiper"
      >

       
         <SwiperSlide className={` ${style.swiperSlide}`}>
          
          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            
          </h1>

          <Link href={'https://xplendev.com/'} key={new Date().toISOString()}>
          <Image src='https://i.postimg.cc/FKgJJtSh/future-xpelndev-2icon.png' alt="perfil" className="border p-1 cursor-pointer no-select" width={450} height={450}>
          </Image>
          </Link>

          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://xplendev.com/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-xs border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Este Diseño
            </button>
            </Link>

          </div>

        </SwiperSlide>

        <SwiperSlide className={` ${style.swiperSlide}`}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
           
          </h1>

          <Link href={'https://horizon-property-webpage.vercel.app/'} key={new Date().toISOString()}>
          <Image src='https://i.postimg.cc/bJ3S9Vk4/portfoliorespponsive-1.png' alt="perfil" className="border p-1 cursor-pointer no-select" width={450} height={450}>
          </Image>

          </Link>
          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://horizon-property-webpage.vercel.app/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-xs border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Este Diseño
            </button>
            </Link>

          </div>

        </SwiperSlide>

        <SwiperSlide className={` ${style.swiperSlide}`}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
           
          </h1>

          <Link href={'https://elegant-cannine.vercel.app/'} key={new Date().toISOString()}>
          <Image src='https://i.postimg.cc/MKzSDhgn/Elegantcannine-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select" width={450} height={450}>
          </Image>

          </Link>
          <div className="flex justify-center items-center md:p-12 p-4">
            <Link href={'https://elegant-cannine.vercel.app/'}  key={new Date().toISOString()}>
            <button className="xl:text-lg lg:text-lg md:text-md text-xs text-md border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Ver Este Diseño
            </button>
            </Link>

          </div>

        </SwiperSlide>

        <SwiperSlide className={` ${style.swiperSlide}`}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
           
          </h1>

          <Image src='https://i.postimg.cc/kMK80hwN/gallery-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select" width={450} height={450}>
          </Image>

          <div className="flex justify-center items-center md:p-12 p-4">

            <button className="xl:text-lg lg:text-lg md:text-md text-xs border-2 bg-[#EA1E63] text-white px-6 py-2 rounded-full">
              Proximamente...
            </button>


          </div>
         

        </SwiperSlide>
      </Swiper>
    </>
  );
}
