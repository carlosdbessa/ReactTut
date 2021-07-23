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

    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }; 




    return (
      
        // <form className="cards" onSubmit={sendEmail} id="productsform">
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
            {/* <input onclick={enableText(checked)}  type="checkbox" id="myCheck" name="checkName"  /> */}
            <label for="scales"> Deseja colocar o nome do bebé? </label>
          </div>

            <input type="text" id="txt"  placeholder="Nome" name="name"/>

          <button type="submit" className="btns btn--outline btn--medium1" >Enviar</button>

        </form>

      );
   
}
export default Cards;