import React from 'react';
import { Button } from '../Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className ='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Baby Soap newsletter to receive our best products
                </p>
                <p className='footer-subscription-text'>
                    You can Unsubscribe anytime
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section> */}
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
                    <small className='website-rights'> The Baby Soap 2021</small>
                    <div className='social-icons'>
                        <Link 
                            className='social-icon-link facebook' 
                            to='/'
                            target='_blank'
                            aria-label='Facebook' 
                            >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link 
                            className='social-icon-link mail' 
                            to='/'
                            target='_blank'
                            aria-label='Facebook' 
                            >
                           <i class="fa-solid fa-envelope"></i>
                        </Link>
                        <Link 
                            className='social-icon-link instagram' 
                            href="https://www.instagram.com/"
                            target='_blank'
                            aria-label='Instagram' 
                            >
                            <i className='fab fa-instagram'/>
                        </Link>
                        
                    </div>    
                </div>
            </section>
        </div>
    );
}

export default Footer;
