import React from 'react';
import './MainSection.css';
import carImage from '../assets/car-image.png';


function MainSection() {
  return (
    <section className="main-section">
      <h2>Choose The Best Care</h2>
      <h3>Find a workshop for your car today!</h3>
      <img src={carImage} alt="Porsche Mission E" className="car-image" />
    </section>
  );
}

export default MainSection;
