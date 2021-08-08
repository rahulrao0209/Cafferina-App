import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import { sidebarOpenStyle, sidebarCloseStyle } from "./sidebarStyleOptions";

export const Sidebar = ({ sidebarIsOpen }) => {
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
          <li className="sidebar-link">
            <a href="#find-store">Find Store</a>
          </li>
          <li className="sidebar-link">
            <a href="#place-order">Place Order</a>
          </li>
          <li className="sidebar-link">
            <a href="#about-us">About us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
