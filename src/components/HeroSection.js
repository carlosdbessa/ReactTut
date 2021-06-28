  import React from 'react'
  import '../App.css';
  import {Button} from './Button';
  import './HeroSection.css';
  
  function HeroSection() {
      return (
          <div className='hero-container'>
              <video src ="/videos/video-1.mp4" autoPlay loop muted />
              <h1>The Baby Soap</h1>
              <p>O seu leite na higiene do seu bebé</p>
              <div className="hero-btns">
                  <Button className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn-large'> Produtos </Button>
                   {/* <Button className='btns'
                   buttonStyle='btn--primary'
                   buttonSize='btn-large'> Watch us <i className='far fa-play-circle' />
                     </Button> */}
              </div>
          </div>
      )
  }
  
export default HeroSection