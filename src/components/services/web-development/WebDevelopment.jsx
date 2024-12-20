import React from 'react';
import { Helmet } from 'react-helmet';
import './web-development.css';
import WebDevSection1 from './web-dev-section-1/WebDevSection1';

function WebDevelopment() {
  return (
    <main>
      <Helmet>
        <title>Web Development Solutions - Incisive Solutions</title>
        <link rel="icon" type="image/svg+xml" href="https://incisivesolutions.in/favicon-incisive-solutions.ico" />
      </Helmet>

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
    </main>
  );
}

export default WebDevelopment;
