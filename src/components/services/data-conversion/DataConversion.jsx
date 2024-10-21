import React from 'react';
import './data-conversion.css';
import DataConversionSection1 from './data-conversion-section-1/DataConversionSection1';

function DataConversion() {
  return (
    <div className="data-conversion-container">
      <div className="data-conversion-hero-container">
        <div className="data-conversion-hero-heading">
          <h1>Data Conversion</h1>
        </div>
      </div>

      <div className="data-conversion-content-wrapper">
        <DataConversionSection1 />
      </div>
    </div>
  );
}

export default DataConversion;
