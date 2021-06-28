import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Products from './Products';
import Footer from './Footer';
//import React from 'react'
 
 function Home() {
     return (
         <>
            <HeroSection />
            <Products />
            {/* <Cards /> */}
            <Footer />
         </>
     );
 }
 
 export default Home;
 