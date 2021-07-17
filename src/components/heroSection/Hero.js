import React from 'react';
import './Hero.css';
export const Hero = () => {
    return (
        <>
            <section className="hero-section">
                {/* <h1>hero</h1> */}
                <div className="hero-container">
                    <div className="hero-image">
                        <img
                            src="./assets/images/hero-section/coffee-hero-img.png"
                            alt="coffee-mug"/>
                    </div>
                    <div className="hero-title">
                        <h1><span>Coffees</span> Crafted for you</h1>
                    </div>
                    <div className="hero-button">
                        <a href="order-now">Order Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}