/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import style from '../../app/styles/swiper.module.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App( { onSlideChange, onSwiper }) {
  return (
    <>
      <Swiper
      onSwiper={onSwiper}
       onSlideChange={onSlideChange}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

       
         <SwiperSlide className={style.swiperSlide}>
          
          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Xplendev.com
          </h1>

          <img src='https://i.postimg.cc/FKgJJtSh/future-xpelndev-2icon.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>

        </SwiperSlide>
        
        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Gallery Art
          </h1>

          <img src='https://i.postimg.cc/kMK80hwN/gallery-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>
         

        </SwiperSlide>

        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-white font-oswald xl:pb-12 lg:pb-12 md:pb-8 pb-4">
            Elegant Cannine
          </h1>

          <img src='https://i.postimg.cc/MKzSDhgn/Elegantcannine-icon.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
