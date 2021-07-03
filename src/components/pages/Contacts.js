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

    emailjs.sendForm('service_iymfi2i', 'babysoap_template', e.target, 'user_roqJmDMbHgNTosWgN1PFc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>

                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nome" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="e-mail" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Assunto" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mensagem" name="message"></textarea>
                        </div>
                        
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar"></input>
                        </div>
                        
                        {/* <div class="container-contact100-form-btn">
					<button class="contact100-form-btn">
						<span>
							<i class="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
							Send
						</span>
					</button>
				    </div> */}

                    </div>
                </form>
            </div>
        </div>
    )
}