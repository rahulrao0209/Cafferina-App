import React from "react";
import "./OrderItem.css";

export const OrderItem = ({ item }) => {
  return (
    <div>
      <div className="order-item">
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <p className="item-price">Rs.{item.price}</p>
          <div className="add-button">Add</div>
        </div>
        <div className="item-quanity">
          <div className="item-image">
            <img src={item.image} alt={item.name} />
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
