import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/heroSection/Hero';
import { Menu } from './components/menuSection/Menu';
import { SignupSection } from './components/signup-section/SignupSection';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <SignupSection />
        </>
    )
}

export default App;