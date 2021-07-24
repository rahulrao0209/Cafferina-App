import React from 'react'
import { MenuItem } from './menuItem/MenuItem';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import menuProducts from './menu-products.json';
import './Menu.css';

export const Menu = () => {
    const [value, setValue] = React.useState(0);
    const menuProductsData = JSON.parse(JSON.stringify(menuProducts));

    const handlePrevious = () => {
        if (value === 0) {
            setValue(0);
        } else {
            setValue(value => value - 1);
        }    
    }

    const handleNext = () => {
        if (value === menuProductsData.length - 1) {
            setValue(menuProductsData.length - 1);
        } else {
            setValue(value => value + 1);
        }
    }

    const activeButtonStyle = {color: '#30B7C0'};
    const inactiveButtonStyle = {color: 'gray'}

    return (
        <div className="menu">
            <p className="menu-title">
                Our Featured Menu
            </p>
            <MenuItem
                name={menuProductsData[value].name}
                src={menuProductsData[value].src}
            />
            <div className="menu-buttons">
                <button className="menu-buttons--left">
                    <AiFillCaretLeft
                        onClick={handlePrevious}
                        style={value === 0 ? inactiveButtonStyle : activeButtonStyle}
                    />
                </button>
                <button className="menu-buttons--right">
                    <AiFillCaretRight
                        onClick={handleNext}
                        style={value === menuProductsData.length - 1 ? inactiveButtonStyle : activeButtonStyle}
                    />
                </button>
            </div>
        </div>
    )
}

