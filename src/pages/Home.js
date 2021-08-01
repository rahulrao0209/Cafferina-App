import React from "react";
import { Hero } from "../components/heroSection/Hero";
import { Menu } from "../components/menuSection/Menu";
import { SignupSection } from "../components/signup-section/SignupSection";
import { BlogSection } from "../components/blogSection/BlogSection";

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
