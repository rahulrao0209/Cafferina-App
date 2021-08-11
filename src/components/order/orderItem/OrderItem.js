import React from "react";
import "./OrderItem.css";

export const OrderItem = ({ item }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [itemAdded, setItemAdded] = React.useState(false);
  let price = item.price;

  const incrementQuantity = () => {
    setQuantity((prevQuanity) => prevQuanity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((prevQuanity) => prevQuanity - 1);
    }
  };

  return (
    <div>
      <div className="order-item">
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <p className="item-price">Rs.{price * quantity}</p>
          <div className="add-button" onClick={() => setItemAdded(!itemAdded)}>
            {itemAdded ? "Remove" : "Add"}
          </div>
        </div>
        <div className="item-quanity">
          <div className="item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="item-choose-quantity">
            <div className="increment" onClick={incrementQuantity}>
              +
            </div>
            <p>{quantity}</p>
            <div className="decrement" onClick={decrementQuantity}>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
