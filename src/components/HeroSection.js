  import React from 'react'
  import '../App.css';
  import './HeroSection.css';
  import { Link } from 'react-scroll';



  
  function HeroSection() {
      return (
          <div className='hero-container'>
              <video src ="/videos/video-1.mp4" autoPlay loop muted />
              <h1>The Baby Soap</h1>
              <p>Em breve algo que irá revolucionar a higiene do seu bebé!</p>
              
              <div className="hero-btns">
              <Link to="productsform" className="btns btn--outline">Produtos</Link>
                  {/* <Link href="#Products_Form">
                  <Button className='btns'
                   buttonStyle='btn--outline'
                   buttonSize='btn-large'> Productos </Button>
                   </Link> */}
                   {/* <Button className='btns'
                   buttonStyle='btn--primary'
                   buttonSize='btn-large'> Watch us <i className='far fa-play-circle' />
                     </Button> */}
              </div>
          </div>
      )
  }
  
export default HeroSection