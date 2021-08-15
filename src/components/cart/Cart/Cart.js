import React from "react";
import { Link } from "react-router-dom";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import "./Cart.css";

export const Cart = ({ cartState }) => {
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
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

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  if (showPaymentModal) {
    return (
      <div
        style={showPaymentModal ? { display: "block" } : { display: "none" }}
      >
        <PaymentModal />
      </div>
    );
  }

  if (totalItems > 0) {
    return (
      <>
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart">
          {cartState.map((item) => {
            return (
              <div key={item.id} className="cart-items">
                <p>{item.name}</p>
                <p>Qty.{item.quantity}</p>
                <p>Rs.{item.price}</p>
              </div>
            );
          })}
          <div
            className="cart-total"
            style={totalItems <= 0 ? { display: "none" } : { display: "flex" }}
          >
            Cart Total: Rs. {totalPrice()}
            <div className="pay-button" onClick={handlePayment}>
              Pay
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="cart-is-empty">
        <div>
          <p>Your Cart is Empty!</p>
        </div>
        <div className="empty-cart">
          <img
            src="/assets/images/cart-page/empty-cart.jpg"
            alt="Your cart is empty"
          />
        </div>
        <div className="add-items">
          <Link to="/order" style={{ textDecoration: "none" }}>
            <p>Add items</p>
          </Link>
        </div>
      </div>
    );
  }
};
