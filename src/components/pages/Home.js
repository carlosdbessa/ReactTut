import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Contacts from './Contacts';
import Footer from './Footer';
import PricingTables from './PricingTable';
import FAQS from './Faqs';
import App from './ShoppingCart'
import ConnectedApp from './ShoppingCart';
//import React from 'react'
 
 function Home() {
     return (
         <>
            <HeroSection />
             {/* <PricingTables /> */}
                
                {/* <App /> */}
              <Cards />
             <Contacts /> 
            <Footer />
         </>
     );
 }
 
 export default Home;
 
