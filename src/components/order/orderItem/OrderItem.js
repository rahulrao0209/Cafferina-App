import React from "react";
import "./OrderItem.css";

export const OrderItem = () => {
  return (
    <div>
      <div className="order-item">
        <div className="item-details">
          <p className="item-name">Chicken Whooper</p>
          <p className="item-price">Rs.220</p>
        </div>
        <div className="item-quanity">
          <div className="item-image">
            <img
              src="./assets/images/order-page-images/recommended-menu/chicken-whooper.jpg"
              alt="chicken-whooper"
            />
          </div>
          <div className="item-choose-quantity">
            <div className="increment">+</div>
            <p>1</p>
            <div className="decrement">-</div>
          </div>
        </div>
      </div>
    </div>
  );
};
