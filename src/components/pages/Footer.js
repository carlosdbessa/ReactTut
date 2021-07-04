import React from 'react';
import { Button } from '../Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Sobre Nós</h2>
                        <Link to='/'>Testemunhos</Link>
                        <Link to='/'>Termos de Serviços</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contacte-nos</h2>
                        <Link to='/'>Contactos</Link>
                        <Link to='/'>FAQ</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Redes Sociais</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            The Baby Soap <i className='fas fa-baby'/>
                        </Link>
                    </div>
                    <small className='website-rights'> The Baby Soap © 2021</small>
                    <div className='social-icons'>
                       
                        
                        <a className='social-icon-link mail' href="mailto:pedidos@babysoap.pt" target="_blank">
                        <i className='fab fa-facebook f'/></a>
                        <a className='social-icon-link instagram' href="https://instagram.com/thebabysoap" target="_blank">
                        <i className='fab fa-instagram'/></a>
                        
                        
                            
                
                        
                    </div>    
                </div>
            </section>
        </div>
    );
}

export default Footer;
