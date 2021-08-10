import React from "react";
import { OrderItem } from "../orderItem/OrderItem";
import recommendedMenuItems from "../orderMenuData/recommended-menu.json";
import snacksMenuItems from "../orderMenuData/snacks-menu.json";
import mealsMenuItems from "../orderMenuData/meals-menu.json";

import "./OrderMenu.css";

export const OrderMenu = () => {
  const recommendedMenu = JSON.parse(JSON.stringify(recommendedMenuItems));
  const snacksMenu = JSON.parse(JSON.stringify(snacksMenuItems));
  const mealsMenu = JSON.parse(JSON.stringify(mealsMenuItems));

  return (
    <div className="order-menu-container">
      <div className="order-menu-items">
        <p className="order-menu-title">Recommended</p>
        {recommendedMenu.map((item) => {
          return <OrderItem item={item} key={item.id} />;
        })}
        <p className="order-menu-title">Snacks</p>
        {snacksMenu.map((item) => {
          return <OrderItem item={item} key={item.id} />;
        })}
        <p className="order-menu-title">Meals</p>
        {mealsMenu.map((item) => {
          return <OrderItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
