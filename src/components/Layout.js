import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footerSection/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
