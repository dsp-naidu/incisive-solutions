import React, { useState, useEffect, useRef } from 'react';
import './home-contact.css';
import HomeContactAccordion from './home-contact-accordion/HomeContactAccordion';
import ContactForm from '../../contact-form/ContactForm';

function HomeContact() {
  const [formOpacity, setFormOpacity] = useState(0.5);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set opacity to 1 when in view, 0.5 when out of view
          if (entry.isIntersecting) {
            setFormOpacity(1);
          } else {
            setFormOpacity(0.5);
          }
        });
      },
      {
        threshold: 0.4, // Adjust to control how much of the element is visible before triggering
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

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
        ref={formRef}
        style={{
          opacity: formOpacity,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onMouseEnter={() => setFormOpacity(1)}
        onMouseLeave={() => setFormOpacity(0.5)}
      >
        <ContactForm />
      </div>
    </div>
  );
}

export default HomeContact;
