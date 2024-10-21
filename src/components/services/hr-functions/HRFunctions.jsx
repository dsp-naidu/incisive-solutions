import React from 'react';
import './hr-functions.css';
import HRFunctionsSection1 from './hr-functions-section-1/HRFunctionsSection1';

function HRFunctions() {
  return (
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
  );
}

export default HRFunctions;
