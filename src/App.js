import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/heroSection/Hero';
import { Menu } from './components/menuSection/Menu';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
        </>
    )
}

export default App;