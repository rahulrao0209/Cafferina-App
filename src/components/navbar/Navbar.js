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
          <Sidebar sidebarIsOpen={sidebarIsOpen} />
          <ul className="navbar-links">
            <li className="navbar-link">
              <a href="#search">Find Store</a>
            </li>
            <li className="navbar-link">
              <a href="#cart">Place Order</a>
            </li>
            <li className="navbar-link">
              <a href="#order-now">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
