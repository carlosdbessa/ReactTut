import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSection() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                
                <div>
                <img src="/images/sabonete.jpg"/>
                </div>
                <div>
                <img src="/images/maternindade-2.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

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

// cards


import React, { Component } from 'react';
import Select from 'react-select';
import emailjs from "emailjs-com";
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const Glicerinas = [
    { label: "Leite de Cabra", value: "Leite de Cabra" }
  ];
  
  const Aromas = [
      { label: "Lavanda e Alfazema", value: "Lavanda e Alfazema" },
      { label: "Mel", value: "Mel" },
      { label: "Bebe", value: "Bebe" }
   
    ];
  
    


function Cards() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_babysoap', 'template_produtos', e.target, 'user_roqJmDMbHgNTosWgN1PFc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }; 




    return (
      
        /* // <form className="cards" onSubmit={sendEmail} id="productsform">
         <form className='form'id="productsform" >   
       
          <h1> Personalize o sabonete do seu bebé:  </h1>
      
          <div className="selectContainer">
            <label> Base do Sabonete </label>
            <Select options={Glicerinas} placeholder="Escolha a Base" name="glicerinas"  />
          </div>

          <div className="selectContainer">
            <label> Aroma </label>
            <Select className="selContainerControl" options={Aromas} placeholder="Escolha o Aroma" name="aromas" variant="outlined" />
          </div>
         
           <div>
          <input  type="checkbox" id="myCheck" name="checkName"  />
              <input onclick={enableText(checked)}  type="checkbox" id="myCheck" name="checkName"  /> 
             <label for="scales"> Deseja colocar o nome do bebé? </label> 
          </div>

            <input type="text" id="txt"  placeholder="Nome" name="name"/>

  

          <button type="submit" className="btns btn--outline btn--medium1" >Enviar</button>

        </form> */

      );
   
}
export default Cards;



//

import emailjs from "emailjs-com";
import React from 'react';




export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_babysoap', 'babysoap_template', e.target, 'user_roqJmDMbHgNTosWgN1PFc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text); 
        });
        e.target.reset()
    }

    return(
      <form className="form" onSubmit={sendEmail} id="contactsform">
       {/* // <form className="form"  id="contactsform"> */}
      <h1>Contacte-nos</h1>

      <input type="text" className="form-name" placeholder="Nome" name="name"/>
      <input type="text" className="form-email" placeholder="Email" name="email"/>
      <input type="text" className="form-assunto" placeholder="Assunto" name="subject"/> 
      <textarea className="form-control" style= {{padding:'15px'}} placeholder="Mensagem" name="message"></textarea>
      <button type="submit" className="btns btn--outline btn--medium1" >Enviar</button>
      </form>

    )
}