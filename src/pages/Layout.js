import React from "react";
import { Navbar } from "../components/shared/navbar/Navbar";
import { Footer } from "../components/shared/footerSection/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
