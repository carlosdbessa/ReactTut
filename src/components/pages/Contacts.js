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
      //<form className="form" onSubmit={sendEmail} id="contactsform">
        <form className="form"  id="contactsform">
      <h1>Contacte-nos</h1>

      <input type="text" className="form-name" placeholder="Nome" name="name"/>
      <input type="text" className="form-email" placeholder="Email" name="email"/>
      <input type="text" className="form-assunto" placeholder="Assunto" name="subject"/> 
      <textarea className="form-control" style= {{padding:'15px'}} placeholder="Mensagem" name="message"></textarea>
      <button type="submit" className="btns btn--outline btn--medium1" >Enviar</button>
      </form>

    )
}