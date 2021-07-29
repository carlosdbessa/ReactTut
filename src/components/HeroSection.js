import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSection() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                
                <div>
                <img src="/images/sabonete.jpg"/>
                </div>
                <div>
                <img src="/images/maternindade-2.jpg" />
                </div>
            </Carousel>
        </div>
    );
}