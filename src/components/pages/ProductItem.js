import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css';

function ProductItem(props) {
    return (
    <>
        <li className='products__item'>
            <Link className='products__item__link' to={props.path}>
                <figure className='products__item__pic-wrap' data-category={props.label}>
                    <img src={props.src}
                    alt='Travel Image'
                    className='products__item__img'/>
                </figure>
                <div className='products__item__info'>
                    <h5 className='products_item_text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>    
    );
}
export default ProductItem;