import React from 'react'
import ProductItem from './ProductItem';
import './Products.css';

function Products() {
    return (
        <div className='cards'>
            <h1> Os nossos produtos!  </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <ProductItem
                        src='images/img-9.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                        <ProductItem
                        src='images/img-8.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                        <ProductItem
                        src='images/img-7.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <ProductItem
                        src='images/img-9.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                        <ProductItem
                        src='images/img-8.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                        <ProductItem
                        src='images/img-7.jpg' 
                        text ='Explore the hidden waterfall deep
                        inside the Amazon Jungle'
                        label ='Adventure'
                        path = '/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
