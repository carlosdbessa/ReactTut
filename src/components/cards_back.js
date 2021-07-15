


import CardItem from './CardItem';
import './Cards.css';
import React, { Component } from 'react';
import Select from 'react-select';
import emailjs from "emailjs-com";


const Glicerinas = [
    { label: "Leite de Cabra", value: "Leite de Cabra" }
  ];
  
  const Aromas = [
      { label: "Lavanda e Alfazema", value: "Lavanda e Alfazema" },
      { label: "Mel", value: "Mel" },
      { label: "Bebe", value: "Bebe" }
   
    ];
  
    const Names= [ 
      { label: "Violeta", value: "Violeta" },
      { label: "Leonor", value: "Leonor" },
      { label: "Carolina", value: "Carolina" },
      { label: "Mafalda", value: "Mafalda" },
      { label: "Rita", value: "Rita" },
      { label: "Francisco", value: "Francisco" },
      { label: "Bernardo", value: "Bernardo" },
      { label: "Josué", value: "Josué" },
      { label: "Carlota", value: "Carlota" }
  
    ]
  

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


    return (
      
        // <form className="cards" onSubmit={sendEmail} id="productsform">
         <form className='cards'id="productsform" >   
        <div>
              <h1> Personalize o sabonete do seu bebé:  </h1>
          <div className="row">
          <label> Base do Sabonete </label>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Select  options={Glicerinas} placeholder="Glicerina" name="glicerinas"  />
            </div>
            <div className="col-md-4"></div>
          </div>
  
          <div className="row">
          <label> Aromas </label>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Select options={Aromas}placeholder="Escolha o Aroma" name="aromas"  />
            </div>
            <div className="col-md-4"></div>
          </div>
  
          <div className="row">
            <label> Nome do Bebé </label>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Select options={Names} placeholder="Nome do Bebé" name="nomebebe" />
            </div>
            <div className="col-md-4"></div>
          </div> 
  
          <button type="submit" className="btns btn--outline btn--medium" >Enviar</button>
          </div>
        </form>
        
        
      );

 

}
export default Cards;
 

