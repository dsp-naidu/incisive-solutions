import React from 'react';
import './home-contact-hero.css';
import { Link } from 'react-router-dom';

function HomeContactHero() {
  return (
    <div className="home-contact-hero-container">
      <img
        src="home-contact-hero.jpg"
        alt="Contact Us"
        className="home-contact-hero-image"
      />
      <div className="home-contact-hero-text">
        <h1>
          Incisive Solutions - the One Stop Solution for Your Outsourcing Needs!
        </h1>
        <p>
          We ensure to bring out the best desired result, irrespective of your
          project size. Approach us anytime, 24*7. Contact us right away!
        </p>
        <Link to="/contact" className="home-contact-btn">
          Contact Now
        </Link>
      </div>
    </div>
  );
}

export default HomeContactHero;
