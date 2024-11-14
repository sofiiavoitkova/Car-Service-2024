import React from 'react';
import './Testimonials.css';
import kasia from './kasia.jpg';
import ania from './ania.jpg';
import marek from './marek.jpg';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'Anna Kowalska',
            jobTitle: 'Business Professional',
            photo: ania,
            testimonial: "I’ve never had a more seamless experience booking a service for my car. I found a local service that was not only professional but also incredibly affordable. I’ll definitely be coming back whenever my car needs attention!",
            rating: 4,
        },
        {
            id: 2,
            name: 'Katarzyna Wiśniewska',
            jobTitle: 'Car Enthusiast',
            photo: kasia,
            testimonial: "Finding a reliable car service is so easy with this website! Finding a workshop for an American car like mine is not easy. The platform helped me discover a fantastic workshop that treated my car like it was their own.",
            rating: 5,
        },
        {
            id: 3,
            name: 'Marek Nowak',
            jobTitle: 'First-Time Car Owner',
            photo: marek,
            testimonial: "Being new to the area, I wasn’t sure where to fix my car. The service I selected was not only excellent in terms of quality, but also friendly and welcoming. Road Ready truly makes car maintenance stress-free!",
            rating: 4,
        },
    ];

    return (
        <div id="testimonials" className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-container">
                {testimonialsData.map((testimonial) => (
                    <div className="testimonial-item" key={testimonial.id}>
                        <img src={testimonial.photo} alt={testimonial.name} className="customer-photo" />
                        <p className="testimonial-text">"{testimonial.testimonial}"</p>
                        <div className="testimonial-footer">
                            <div className="customer-info">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.jobTitle}</p>
                            </div>
                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
