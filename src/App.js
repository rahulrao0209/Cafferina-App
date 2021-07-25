import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/heroSection/Hero';
import { Menu } from './components/menuSection/Menu';
import { SignupSection } from './components/signup-section/SignupSection';
import { BlogSection } from './components/blogSection/BlogSection';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <SignupSection />
            <BlogSection />
        </>
    )
}

export default App;