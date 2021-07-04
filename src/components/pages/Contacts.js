 /* import React, { useState, useEffect } from "react";
import "./Contacts.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Mensagem Enviada");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

 /*  db.collection('mail').add({
    to: 'carlbessa1618@gmail.com',
    message: {
      subject: 'Hello from Firebase!',
      html: 'This is an <code>HTML</code> email body.',
    },
  })
 */
/*
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contacte-nos</h1>

      <label>Nome</label>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Mensagem</label>
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(153, 255, 204) " }}
      >
        Enviar
      </button>
    </form>
  );
};

export default Contact;

  

 */

import emailjs from "emailjs-com";
import React from 'react';
import "./Contacts.css";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_zi0046c', 'babysoap_template', e.target, 'user_roqJmDMbHgNTosWgN1PFc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text); 
        });
        e.target.reset()
    }

    return(
      <form className="form" onSubmit={sendEmail}>
      <h1>Contacte-nos</h1>

      <input type="text" className="form-name" placeholder="Nome" name="name"/>
      <input type="text" className="form-email" placeholder="Email" name="email"/>
      <input type="text" className="form-assunto" placeholder="Assunto" name="subject"/> 
      <label>Mensagem</label>
      <textarea className="form-control"  placeholder="Mensagem" name="message"></textarea>

        <button>
          <input type="submit" className="btn--primary" value="Enviar"></input>
        </button>
    </form>
                        
                        
                  
                
           
      
    )
}