import React from 'react';
import './Navbar.css';
import { SiCoffeescript } from 'react-icons/si';
import { Sidebar } from '../sidebar/Sidebar';

export const Navbar = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        Cafferina
                    </div>
                    <div 
                        className="sidebar-menu-icon"
                        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                        style={ sidebarIsOpen ? {opacity: 0} : {opacity: 1}}
                    >
                        <SiCoffeescript />
                    </div>
                    <Sidebar sidebarIsOpen={sidebarIsOpen}/>
                    <ul className="navbar-links">
                        <li className="navbar-link">
                            <a href="#search">Search</a>
                        </li>
                        <li className="navbar-link">
                            <a href="#cart">Cart</a>
                        </li><li className="navbar-link">
                            <a href="#order-now">Order Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}