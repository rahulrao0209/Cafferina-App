import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import { sidebarOpenStyle, sidebarCloseStyle } from "./sidebarStyleOptions";

export const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const handleClick = () => {
    setSidebarIsOpen(false);
  };

  return (
    <>
      <div
        className="sidebar-container"
        style={sidebarIsOpen ? sidebarOpenStyle : sidebarCloseStyle}
      >
        <div className="sidebar-icon--close">
          <FaTimes />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-link" onClick={handleClick}>
            <Link to="/order/view-cart">Cart</Link>
          </li>
          <li className="sidebar-link" onClick={handleClick}>
            <Link to="/order">Place Order</Link>
          </li>
          <li className="sidebar-link" onClick={handleClick}>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
