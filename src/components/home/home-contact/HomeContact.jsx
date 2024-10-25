import React, { useState } from 'react';
import './home-contact.css';
import HomeContactAccordion from './home-contact-accordion/HomeContactAccordion';
import ContactForm from '../../contact-form/ContactForm';

function HomeContact() {
  const [formOpacity, setFormOpacity] = useState(0.9);
  return (
    <div className="home-contact-container">
      <div className="home-contact-section-one">
        <h1>STAY CONNECTED!</h1>
        <p>
          Emphasizing your relationship with the customers and ensuring to offer
          a smoother business outsourcing solutions in a hassle-free manner.
        </p>
        <HomeContactAccordion />
      </div>

      <div
        className="home-form"
        style={{ opacity: formOpacity, transition: 'opacity 0.5s ease-in-out' }}
        onMouseEnter={() => setFormOpacity(1)}
        onMouseLeave={() => setFormOpacity(0.9)}
      >
        <ContactForm />
      </div>
    </div>
  );
}

export default HomeContact;
