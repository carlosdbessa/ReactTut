import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
       
        <div className='cards'id="productsform" > 
            <h1> Os nossos produtos!  </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg' 
                        text ='Aromatizante de Lavanda'
                        label ='s'
                        path = '/services'
                        />
                       
                    </ul>
                    
                    
                </div>
            </div>
        </div>
      
    );
}

export default Cards;
