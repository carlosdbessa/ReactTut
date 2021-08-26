import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Contacts from './Contacts';
import Footer from './Footer';
import PricingTables from './PricingTable';
import FAQS from './Faqs';
//import React from 'react'
 
 function Home() {
     return (
         <>
            <HeroSection />
             {/* <PricingTables /> */}
            
             <Cards />
             <Contacts /> 
            <Footer />
         </>
     );
 }
 
 export default Home;
 
