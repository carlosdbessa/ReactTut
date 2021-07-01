import React, { useState, useEffect } from "react";
import "../../App.css";
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
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contacte-nos</h1>
  
        <label>Nome</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <label>Messagem</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
  
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(153, 255, 204) " }}
        >
          ENVIAR
        </button>
      </form>
    );
  };
  
  export default Contact;