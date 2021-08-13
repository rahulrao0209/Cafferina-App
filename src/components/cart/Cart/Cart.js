import React from "react";

export const Cart = ({ cartState }) => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartState.map((item) => {
        return (
          <p key={item.id}>
            name: {item.name}
            qty: {item.quantity}
            price: {item.price}
          </p>
        );
      })}
    </div>
  );
};
