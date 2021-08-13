import React from "react";
import "./CartBar.css";

export const CartBar = ({ cartState }) => {
  const totalItems = cartState.length;

  const totalPrice = () => {
    let cartPrice = 0;
    if (cartState.length > 0) {
      cartState.forEach((cartItem) => {
        cartPrice += cartItem.price;
      });
      return cartPrice;
    } else return cartPrice;
  };

  return (
    <div
      className="cart-bar"
      style={totalItems > 0 ? { display: "flex" } : { display: "none" }}
    >
      <div className="cart-info">
        <p>{totalItems === 1 ? `${totalItems} item` : `${totalItems} items`}</p>
        <span> | </span>
        <p>{`Rs. ${totalPrice()}`}</p>
      </div>
      <div className="view-cart">View cart</div>
    </div>
  );
};
