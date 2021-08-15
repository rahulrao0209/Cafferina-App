import React from "react";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";
import "./PaymentModal.css";

export const PaymentModal = () => {
  return (
    <div className="payment-modal">
      <div className="payment-success">
        <div className="payment-success-message">
          <p>Order Placed Successfully</p>
        </div>
        <div className="payment-success-icon">
          <BiCheckCircle />
        </div>
        <div className="payment-success-button">
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};
