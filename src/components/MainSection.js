import React from 'react';
import './MainSection.css';
import carImage from '../assets/car-image.png';

function MainSection() {
  return (
    <section className="main-section">
      <h2>Choose The Best Care</h2>
      <h3>Find a workshop for your car today!</h3>
      <img src={carImage} alt="Porsche Mission E" className="car-image" />
      <p><span role="img" aria-label="lightning">⚡</span>Łódź</p>
      <div className="icons">
        <span role="img" aria-label="thermometer">🌡️</span>
        <span role="img" aria-label="wheel">🛞</span>
        <span role="img" aria-label="battery">⚡</span>
      </div>
    </section>
  );
}

export default MainSection;
