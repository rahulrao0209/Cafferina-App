import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image">
            <img
              src="./assets/images/hero-section/coffee-hero.png"
              alt="coffee-mug"
            />
          </div>
          <div className="hero-title">
            <h1>
              <span>Coffees</span> Crafted for you
            </h1>
          </div>
          <div className="hero-button">
            <Link to="/order">Order Now</Link>
          </div>
        </div>
      </section>
    </>
  );
};
