import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Roadready Logo" />
        <span>Road Ready</span>
      </div>
      <nav>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#popular">Workshops</a>
        <a href="#featured">Featured Brands</a>
      </nav>
    </header>
  );
}

export default Header;
