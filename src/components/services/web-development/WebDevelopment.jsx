import React from 'react';
import './web-development.css';
import WebDevSection1 from './web-dev-section-1/WebDevSection1';

function WebDevelopment() {
  return (
    <div className="web-development-container">
      <div className="web-development-hero-container">
        <div className="web-development-hero-heading">
          <h1>Web Development</h1>
        </div>
      </div>

      <div className="web-development-content-wrapper">
        <WebDevSection1 />
      </div>
    </div>
  );
}

export default WebDevelopment;
