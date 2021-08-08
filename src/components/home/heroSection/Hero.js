import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-image">
              <img
                src="./assets/images/hero-section/coffee-hero.png"
                alt="coffee-mug"
              />
            </div>
            <div className="hero-title">
              <p>
                <span>Coffees And Snacks</span> for you
              </p>
              <p className="hero-title--info">
                We make sure everything we do honors that connection – from our
                commitment to the highest quality coffee in the world, to the
                way we engage with our customers and communities to do business
                responsibly.
              </p>
            </div>
          </div>
          <Link className="hero-button" to="/order">
            <div>Order Now</div>
          </Link>
        </div>
      </section>
    </>
  );
};
