import React from 'react'
import './MenuItem.css';
export const MenuItem = ({ name, src }) => {
    return (
        <div>
            <div className="menu-item-container">
                <div className="menu-item-wrapper">
                    <div className="menu-image">
                        <img
                            src={src}
                            alt={name}
                        />
                    </div>
                    <div className="menu-content">
                        <p>{name}</p>
                        <a href="#order-item-whipped-mocha">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    )
}