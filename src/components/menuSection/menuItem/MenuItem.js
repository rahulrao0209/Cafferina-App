import React from 'react'
import './MenuItem.css';
export const MenuItem = () => {
    return (
        <div>
            <div className="menu-item-container">
                <div className="menu-item-wrapper">
                    <div className="menu-image">
                        <img
                            src="./assets/images/menu-section/whipped-mocha.png"
                            alt="whipped-mocha"
                        />
                    </div>
                    <div className="menu-content">
                        <p>Whipped Mocha</p>
                        <a href="#order-item-whipped-mocha">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    )
}