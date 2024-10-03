import React from 'react';
import './home-contact.css';
import HomeContactAccordion from './home-contact-accordion/HomeContactAccordion';
import ContactForm from '../../contact-form/ContactForm';

function HomeContact() {
  return (
    <div className="home-contact-container">
      <div className='home-contact-section-one'>
        <h1>STAY CONNECTED!</h1>
        <p>
          Emphasizing your relationship with the customers and ensuring to offer
          a smoother business outsourcing solutions in a hassle-free manner.
        </p>
        <HomeContactAccordion />
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default HomeContact;
