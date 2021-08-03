
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"




// import Swiper core and required modules
import SwiperCore, {
  Navigation,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Autoplay]);




export default function App() {
  
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`/images/img-${i + 1}.jpg`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
    }
  
  return (
    
    <Swiper navigation={true} autoplay={{
      "delay": 2500, "disableOnInteraction": false}} className="mySwiper">
    {slides}
    </Swiper>
    
  )

  }
