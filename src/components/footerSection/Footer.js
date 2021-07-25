import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-column">
                <p className="footer-column--title">About Us</p>
                <p>Our Heritage</p>
                <p>Our Company</p>
                <p>Contact Us</p>
            </div>
            <div className="footer-column">
                <p className="footer-column--title">Customer Service</p>
                <p>FAQ's</p>
                <p>Site Maps</p>
                <p>Cookie Preferences</p>
            </div>
            <div className="footer-column">
                <p className="footer-column--title">Quick Links</p>
                <p>Store Locator</p>
            </div>
        </div>
    )
}
