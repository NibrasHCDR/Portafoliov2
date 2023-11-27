/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../app/styles/swiper.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Swuip() {

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide className={style.swiperSlide}>
          
          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-black font-oswald xl:p-12 lg:p-12 md:p-8 p-4">
            Elegant
          </h1>

          <img src='https://i.postimg.cc/CKJ33X1L/Elegant-Cannine-Design.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>

        </SwiperSlide>
        
        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-black font-oswald xl:p-12 lg:p-12 md:p-8 p-4">
            Elegant 2
          </h1>

          <img src='https://i.postimg.cc/CKJ33X1L/Elegant-Cannine-Design.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>

        </SwiperSlide>

        <SwiperSlide className={style.swiperSlide}>

          <h1 className="xl:text-5xl lg:text-4xl md:text-2xl text-lg text-black font-oswald xl:p-12 lg:p-12 md:p-8 p-4">
            Elegant 3
          </h1>

          <img src='https://i.postimg.cc/CKJ33X1L/Elegant-Cannine-Design.png' alt="perfil" className="border p-1 cursor-pointer no-select">
          </img>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
