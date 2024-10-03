import React from 'react';
import './home-features.css';

function HomeFeatures() {
  return (
    <div className="home-features-container">
      {/* Heading Section */}
      <div className="heading-section">
        <h1>OUR FEATURES</h1>
        <p>We are outfitted to lighten your daily data concerns.</p>
      </div>

      {/* Features Grid Section */}
      <div className="features-section">
        {/* Feature Cards Section */}
        <div className="cards-grid">
          <div className="feature-card">
            <h2>DISTINCT SERVICES</h2>
            <p>Intense range of BPO outsourcing services with customizable signatures that broadcast your market presence.</p>
          </div>
          <div className="feature-card">
            <h2>EXPERT PERSONNEL</h2>
            <p>Dedicated professionals handling services with high quality, using the latest technology and world-class gadgets.</p>
          </div>
          <div className="feature-card">
            <h2>CONFIDENTIALITY</h2>
            <p>Your data stays secure with advanced protection features, preventing hacks and data loss.</p>
          </div>
          <div className="feature-card">
            <h2>ECONOMICAL PACKAGES</h2>
            <p>Our services are designed with unbeatable packages, reducing costs by nearly half.</p>
          </div>
          <div className="feature-card">
            <h2>24/7 CUSTOMER SUPPORT</h2>
            <p>Our strong customer support is available 24/7 to resolve your queries at any time!</p>
          </div>
          <div className="feature-card">
            <h2>PRECISE & DEPENDABLE</h2>
            <p>Services delivered with precision and reliability, fostering better client relationships and growth.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="features-image">
          <img src="home-features.jpg" alt="Features" />
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
