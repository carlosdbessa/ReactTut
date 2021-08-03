import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"




// import Swiper core and required modules
import SwiperCore, {
  Parallax,Pagination,Navigation, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation,Autoplay]);

const images = [
  { image: require("../images/img-1.jpg") }, // Each of these objects are passed to the `src` prop of every image
  { image: require("../images/img-2.jpg") },
  { image: require("../images/img-3.jpg") }
];


export default function App() {
  
  
  
  return (
    <>
    
  <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} speed={600} parallax={true} autoplay={{
  "delay": 2500, "disableOnInteraction": false}} 

  pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  
  <SwiperSlide src={images[0]}>
  
          <div className="title" data-swiper-parallax="-300"></div>
          {/* <div className="subtitle" data-swiper-parallax="-200">Subtitle</div> */}
          <div className="text" data-swiper-parallax="-100">
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p> */}
        
          </div>
          
        </SwiperSlide>
     
        <SwiperSlide style={{'background-image': 'url(https://data2.1freewallpapers.com/download/mood-children-baby.jpg)'}}>
          <div className="title" data-swiper-parallax="-300"></div>
          {/* <div className="subtitle" data-swiper-parallax="-200">Subtitle</div> */}
          <div className="text" data-swiper-parallax="-100">
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{'background-image': 'url(https://data2.1freewallpapers.com/download/mood-children-baby.jpg)'}}>
          <div className="title" data-swiper-parallax="-300"></div>
          {/* <div className="subtitle" data-swiper-parallax="-200">Subtitle</div> */}
          <div className="text" data-swiper-parallax="-100">
           {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p> */}
          </div>
        </SwiperSlide>
  </Swiper>
    </>
  )
}