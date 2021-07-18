import React from 'react'
import { MenuItem } from './menuItem/MenuItem';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import './Menu.css';

export const Menu = () => {
    return (
        <div className="menu">
            <p className="menu-title">
                Our Featured Menu
            </p>
            <MenuItem />
            <div className="menu-buttons">
                <button className="menu-buttons--left">
                    <AiFillCaretLeft />
                </button>
                <button className="menu-buttons--right">
                    <AiFillCaretRight />
                </button>
            </div>
        </div>
    )
}

