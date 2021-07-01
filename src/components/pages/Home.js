import '../../App.css';
import './Contacts.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Contacts from './Contacts';
import Footer from './Footer';
//import React from 'react'
 
 function Home() {
     return (
         <>
            <HeroSection />
            <Cards />
            {/* <Contacts /> */}
            <Footer />
         </>
     );
 }
 
 export default Home;
 