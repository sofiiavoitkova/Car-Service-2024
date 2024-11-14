import React, { useState } from 'react';
import workshops from '../assets/all_services'; // Ensure this imports correctly
import './WorkShopGallery.css';

const WorkshopGallery = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle the popup display
  const openPopup = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const closePopup = () => {
    setSelectedWorkshop(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="workshops" className="workshop-gallery">
      <div className="workshop-grid">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="workshop-item" onClick={() => openPopup(workshop)}>
            <img 
              src={require(`../assets/${workshop.id}.png`)} // Ensure the image is correctly imported
              alt={workshop.name} 
            />
            <h4>{workshop.name}</h4>
            <p>{workshop.address}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedWorkshop && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h3>{selectedWorkshop.name}</h3>
            
            {/* Display the Image */}
            <div className="popup-image">
              <img 
                src={require(`../assets/${selectedWorkshop.id}.png`)} 
                alt={selectedWorkshop.name} 
                className="popup-image-content"
              />
            </div>

            <p><strong>Phone:</strong> {selectedWorkshop.phone}</p>

            {/* Services */}
            <div className="popup-info">
              <p><strong>Accepted Car Brands:</strong> {selectedWorkshop.acceptedBrands ? selectedWorkshop.acceptedBrands.join(', ') : 'N/A'}</p>

              <p><strong>Services Provided:</strong></p>
              <div className="truncate">
                {selectedWorkshop.services.slice(0, 3).join(', ')} {/* Show first 3 services */}
              </div>
              {selectedWorkshop.services.length > 3 && !isExpanded && (
                <span className="show-more" onClick={toggleExpand}>
                  ... See More
                </span>
              )}
              {isExpanded && (
                <div className="full-text">
                  {selectedWorkshop.services.join(', ')} {/* Show all services */}
                </div>
              )}
            </div>

            <div className="popup-info">
              <p><strong>Payment Methods:</strong> {selectedWorkshop.paymentMethods ? selectedWorkshop.paymentMethods.join(', ') : 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkshopGallery;
