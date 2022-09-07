import React from 'react'
import { Routes, Route  } from "react-router-dom";
import './App.css';
// import Nav from './components/Nav';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

function App() {
  return (
    <>
    {/* <Nav/> */}
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    {/* <Home/>
    <Services/>
    <About/> */}
    </>
  );
}

export default App;
