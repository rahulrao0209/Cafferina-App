import React from "react";
import { OrderItem } from "../orderItem/OrderItem";
import "./OrderMenu.css";

export const OrderMenu = () => {
  return (
    <div className="order-menu-container">
      <OrderItem />
    </div>
  );
};
