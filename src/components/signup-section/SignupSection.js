import React from "react";
import "./SignupSection.css";

export const SignupSection = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-image">
          <img src="./assets/images/signup-section/signup.svg" alt="signup" />
        </div>
        <div className="signup-cta">
          <p className="primary-title">Join Our Member Lists</p>
          <p className="secondary-title">Get Discount Coupons on every order</p>
          <form className="signup-form">
            <input className="signup-form-input" placeholder="Enter email" />
            <button className="signup-form-button">Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
};
