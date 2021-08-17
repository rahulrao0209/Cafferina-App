import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { OrderItem } from "../orderItem/OrderItem";
import { Cart } from "../../cart/Cart/Cart";
import { CartBar } from "../../cart/CartBar/CartBar";
import recommendedMenuItems from "../orderMenuData/recommended-menu.json";
import snacksMenuItems from "../orderMenuData/snacks-menu.json";
import mealsMenuItems from "../orderMenuData/meals-menu.json";
import "./OrderMenu.css";

const initialCartState = [];
const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "add":
      return [...cartState, action.payload];
    case "remove":
      return cartState.filter((item) => item.id !== action.payload);
    case "reset":
      return initialCartState;
    default:
      throw new Error("Problem retrieving cart items");
  }
};

export const OrderMenu = () => {
  const recommendedMenu = JSON.parse(JSON.stringify(recommendedMenuItems));
  const snacksMenu = JSON.parse(JSON.stringify(snacksMenuItems));
  const mealsMenu = JSON.parse(JSON.stringify(mealsMenuItems));

  const [cartState, dispatch] = React.useReducer(cartReducer, initialCartState);
  const { url } = useRouteMatch();

  return (
    <div className="order-menu-container">
      <Switch>
        <Route path={`${url}/view-cart`}>
          <Cart cartState={cartState} />
        </Route>
        <Route path="/order">
          <div className="order-menu-items">
            <CartBar cartState={cartState} />
            <div className="recommended-items">
              <p className="order-menu-title">Recommended</p>
              {recommendedMenu.map((item) => {
                return (
                  <OrderItem item={item} key={item.id} dispatch={dispatch} />
                );
              })}
            </div>
            <div className="snacks-items">
              <p className="order-menu-title">Snacks</p>
              {snacksMenu.map((item) => {
                return (
                  <OrderItem item={item} key={item.id} dispatch={dispatch} />
                );
              })}
            </div>
            <div className="meals-items">
              <p className="order-menu-title">Meals</p>
              {mealsMenu.map((item) => {
                return (
                  <OrderItem item={item} key={item.id} dispatch={dispatch} />
                );
              })}
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};
