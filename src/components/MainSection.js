import React from 'react';
import './MainSection.css';
import carImage from '/path/to/car-image.png'; // Replace with the path to your car image

function MainSection() {
  return (
    <section className="main-section">
      <h2>Choose The Best Car</h2>
      <h3>Porsche Mission E</h3>
      <p><span role="img" aria-label="lightning">⚡</span> Electric Car</p>
      <img src={carImage} alt="Porsche Mission E" className="car-image" />
      <div className="icons">
        <span role="img" aria-label="thermometer">🌡️</span>
        <span role="img" aria-label="wheel">🛞</span>
        <span role="img" aria-label="battery">⚡</span>
      </div>
    </section>
  );
}

export default MainSection;
