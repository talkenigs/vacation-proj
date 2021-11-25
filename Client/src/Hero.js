import React from 'react';
import HeroImg  from './assets/resort.jpg';
import './hero.css'

export default function Hero() {

    return (
        <div className="hero-img">
            {/* <img src={HeroImg}></img> */}
            
            <div className="hero-text"><span>Book flights, hotels and vacations packages</span></div>
        </div>
    )
}
