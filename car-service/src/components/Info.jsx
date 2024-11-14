import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div id="about" className="grid-container">
      <nav className="slide-down">
        <span id="logo">Be Road Ready.</span>
      </nav>
      <div className="search slide-down"></div>
      <div className="banner-text">
        <h1>
          For everything <br />
          Your car needs.
        </h1>
      </div>
      <div className="blurred-container">
        <div className="blurred-banner">
          <h2>
            choose quality. <br /> choose us.
          </h2>
          <p className="orange-text">Our Purpose</p>
          <p>
            With the quality, technology, and expertise that you and your car
            deserve. With transparent billing and fast, reliable service you
            can trust for miles to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
