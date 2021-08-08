import React from "react";
import { MenuItem } from "./menuItem/MenuItem";

export const DesktopMenu = ({ menuProductsData }) => {
  return (
    <>
      <div className="menu-product--desktop">
        {menuProductsData.map((product) => (
          <MenuItem key={product.id} name={product.name} src={product.src} />
        ))}
      </div>
    </>
  );
};
