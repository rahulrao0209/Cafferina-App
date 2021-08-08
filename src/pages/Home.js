import React from "react";
import { Hero } from "../components/home/heroSection/Hero";
import { Menu } from "../components/home/menuSection/Menu";
import { SignupSection } from "../components/home//signup-section/SignupSection";
import { BlogSection } from "../components/home/blogSection/BlogSection";

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
