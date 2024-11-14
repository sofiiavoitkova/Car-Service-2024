import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  // Function to scroll to a section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Roadready Logo" />
        <span>Road Ready</span>
      </div>
      <nav>
        <a href="#home" className="active">Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#workshops" onClick={(e) => { e.preventDefault(); scrollToSection('workshops'); }}>Workshops</a>
        <a href="#featured">Featured Brands</a>
      </nav>
    </header>
  );
}

export default Header;
