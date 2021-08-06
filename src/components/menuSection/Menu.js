import React from "react";
import menuProducts from "./menu-products.json";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { useViewport } from "../../hooks/useViewport";
import "./Menu.css";

export const Menu = () => {
  const menuProductsData = JSON.parse(JSON.stringify(menuProducts));
  const windowWidth = useViewport();
  const desktopBreakpoint = 992;

  return (
    <div className="menu">
      <p className="menu-title">Our Featured Menu</p>
      {windowWidth < desktopBreakpoint ? (
        <MobileMenu menuProductsData={menuProductsData} />
      ) : (
        <DesktopMenu menuProductsData={menuProductsData} />
      )}
    </div>
  );
};
