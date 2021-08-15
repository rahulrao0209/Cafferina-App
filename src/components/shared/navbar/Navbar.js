import React from "react";
import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import { Sidebar } from "../sidebar/Sidebar";
import "./Navbar.css";

export const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <Link to="/">Cafferina</Link>
          </div>
          <div
            className="sidebar-menu-icon"
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            style={sidebarIsOpen ? { opacity: 0 } : { opacity: 1 }}
          >
            <SiCoffeescript />
          </div>
          <Sidebar
            sidebarIsOpen={sidebarIsOpen}
            setSidebarIsOpen={setSidebarIsOpen}
          />
          <ul className="navbar-links">
            <li className="navbar-link">
              <Link to="/order/view-cart">Cart</Link>
            </li>
            <li className="navbar-link">
              <Link to="/order">Place Order</Link>
            </li>
            <li className="navbar-link">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
