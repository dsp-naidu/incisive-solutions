import React from 'react';
import { Helmet } from 'react-helmet';
import './about.css';
import AboutValues from './about-values/AboutValues';
import AboutSection1 from './about-section-1/AboutSection1';

function About() {
  return (
    <main>
      <Helmet>
        <title>About Us - Incisive Solutions</title>
      </Helmet>

      <div className="about-container">
        <div className="about-hero-container">
          <div className="about-hero-heading">
            {/* <h1>About Us</h1> */}
            <h1>Welcome to Incisive Solutions!</h1>
          </div>
        </div>

        <div className="about-content-wrapper">
          <AboutSection1 />
          <AboutValues />
        </div>
      </div>
    </main>
  );
}

export default About;
