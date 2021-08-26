import '../../App.css';
import './Contacts.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Contacts from './Contacts';
import Footer from './Footer';
//import React from 'react'
import PricingTables from './PricingTable';
 
 function Home() {
     return (
         <>
            <HeroSection />
            <PricingTables />
            <Cards />
             <Contacts /> 
            <Footer />
         </>
     );
 }
 
 export default Home;
 
