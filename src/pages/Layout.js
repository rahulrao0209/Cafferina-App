import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footerSection/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
