import React from 'react';
import { Helmet } from 'react-helmet';
import './data-conversion.css';
import DataConversionSection1 from './data-conversion-section-1/DataConversionSection1';

function DataConversion() {
  return (
    <main>
      <Helmet>
        <title>Data Conversion Solutions - Incisive Solutions</title>
        <link rel="icon" type="image/svg+xml" href="https://incisivesolutions.in/favicon-incisive-solutions.ico" />
      </Helmet>

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
    </main>
  );
}

export default DataConversion;
