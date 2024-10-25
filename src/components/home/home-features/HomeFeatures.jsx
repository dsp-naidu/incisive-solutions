import React from 'react';
import './home-features.css';

function HomeFeatures() {
  return (
    <div className="home-features-container">
      {/* Heading Section */}
      <div className="heading-section">
        <h1>Our Features</h1>
        <p>We are outfitted to lighten your daily data concerns.</p>
      </div>

      {/* Features Grid Section */}
      <div className="features-section">
        {/* Feature Cards Section */}
        <div className="cards-grid">
          <div className="feature-card">
            <h2>Distinct Services</h2>
            <p>
              Intense range of BPO outsourcing services with customizable
              signatures that broadcast your market presence.
            </p>
          </div>
          <div className="feature-card">
            <h2>Expert Personnel</h2>
            <p>
              Dedicated professionals handling services with high quality, using
              the latest technology and world-class gadgets.
            </p>
          </div>
          <div className="feature-card">
            <h2>Confidentiality</h2>
            <p>
              Your data stays secure with advanced protection features,
              preventing hacks and data loss.
            </p>
          </div>
          <div className="feature-card">
            <h2>Economical Packages</h2>
            <p>
              Our services are designed with unbeatable packages, reducing costs
              by nearly half.
            </p>
          </div>
          <div className="feature-card">
            <h2>24/7 Customer Support</h2>
            <p>
              Our strong customer support is available 24/7 to resolve your
              queries at any time!
            </p>
          </div>
          <div className="feature-card">
            <h2>Precise & Dependable</h2>
            <p>
              Services delivered with precision and reliability, fostering
              better client relationships and growth.
            </p>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="features-image">
          <img src="home-features-5.jpg" alt="Features" />
        </div> */}

        {/* Video Section */}
        <div className="features-video">
          <video autoPlay loop muted playsInline>
            <source src="home-features-1.mp4" type="video/mp4" />
          </video>
          {/* <div className="video-overlay"></div> */}
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
