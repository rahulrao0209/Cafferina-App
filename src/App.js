import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/heroSection/Hero";
import { Menu } from "./components/menuSection/Menu";
import { SignupSection } from "./components/signup-section/SignupSection";
import { BlogSection } from "./components/blogSection/BlogSection";
import { Footer } from "./components/footerSection/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <SignupSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
