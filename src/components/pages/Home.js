import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Contacts from './Contacts';
import Footer from './Footer';
//import React from 'react'
 
 function Home() {
     return (
         <>
            <HeroSection />
             <Contacts /> 
            <Footer />
         </>
     );
 }
 
 export default Home;
 
