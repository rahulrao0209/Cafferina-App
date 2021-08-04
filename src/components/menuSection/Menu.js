import React from "react";
import menuProducts from "./menu-products.json";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import "./Menu.css";

export const Menu = () => {
  const [isMobileScreen, setIsMobileScreen] = React.useState(false);
  const menuProductsData = JSON.parse(JSON.stringify(menuProducts));

  return (
    <div className="menu">
      <p className="menu-title">Our Featured Menu</p>
      {isMobileScreen ? (
        <MobileMenu menuProductsData={menuProductsData} />
      ) : (
        <DesktopMenu menuProductsData={menuProductsData} />
      )}
    </div>
  );
};
