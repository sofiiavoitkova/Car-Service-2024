import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Elecar Logo" /> {/* Replace with your logo image path */}
        <span>Elecar</span>
      </div>
      <nav>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#popular">Popular</a>
        <a href="#featured">Featured</a>
      </nav>
    </header>
  );
}

export default Header;
