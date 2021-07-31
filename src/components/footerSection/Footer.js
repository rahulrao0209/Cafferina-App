import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-logo">
        <Link to="/">Cafferina</Link>
      </p>
      <div className="footer-wrapper">
        <p>Our Heritage</p>
        <p>Our Company</p>
        <p>Contact Us</p>
        <p>FAQ's</p>
        <p>Site Maps</p>
        <p>Cookie Preferences</p>
        <p>Store Locator</p>
      </div>
      <div className="copyright">
        <p>© 2021 Caffeina</p>
        <p>Built using React</p>
      </div>
    </div>
  );
};
