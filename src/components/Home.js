import React from "react";
import { Hero } from "./heroSection/Hero";
import { Menu } from "./menuSection/Menu";
import { SignupSection } from "./signup-section/SignupSection";
import { BlogSection } from "./blogSection/BlogSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <SignupSection />
      <BlogSection />
    </>
  );
};
