import React from 'react';
import { Helmet } from 'react-helmet';
import './hr-functions.css';
import HRFunctionsSection1 from './hr-functions-section-1/HRFunctionsSection1';

function HRFunctions() {
  return (
    <main>
      <Helmet>
        <title>HR Outsourcing Solutions - Incisive Solutions</title>
        <link rel="icon" type="image/svg+xml" href="https://incisivesolutions.in/favicon-incisive-solutions.ico" />
      </Helmet>
      <div className="hr-functions-container">
        <div className="hr-functions-hero-container">
          <div className="hr-functions-hero-heading">
            <h1>HR Functions</h1>
          </div>
        </div>

        <div className="hr-functions-content-wrapper">
          <HRFunctionsSection1 />
        </div>
      </div>
    </main>
  );
}

export default HRFunctions;
