import React, { useState } from 'react';
import workshops from '../assets/all_services';
import './WorkShopGallery.css';

const WorkshopGallery = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // Function to handle the popup display
  const openPopup = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const closePopup = () => {
    setSelectedWorkshop(null);
  };

  return (
    <section id="workshops" className="workshop-gallery">
      {workshops.map((workshop) => (
        <div key={workshop.id} className="workshop-item" onClick={() => openPopup(workshop)}>
          <img 
            src={require(`../assets/${workshop.id}.png`)} // Dynamically load image based on workshop ID
            alt={workshop.name} 
          />
          <h4>{workshop.name}</h4>
          <p>{workshop.address}</p>
        </div>
      ))}

      {selectedWorkshop && (
        <div className="popup">
          <button onClick={closePopup}>Close</button>
          <h3>{selectedWorkshop.name}</h3>
          <p>Phone: {selectedWorkshop.phone}</p>
          <p>Accepted Car Brands: {selectedWorkshop.acceptedBrands.join(', ')}</p>
          <p>Services Provided: {selectedWorkshop.services.join(', ')}</p>
          <p>Payment Methods: {selectedWorkshop.paymentMethods.join(', ')}</p>
        </div>
      )}
    </section>
  );
};

export default WorkshopGallery;
