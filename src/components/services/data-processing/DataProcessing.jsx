import React from 'react';
import { Helmet } from 'react-helmet';
import './data-processing.css';
import DataProcessingSection1 from './data-processing-section-1/DataProcessingSection1';

function DataProcessing() {
  return (
    <main>
      <Helmet>
        <title>Data Processing Services - Incisive Solutions</title>
        <link rel="icon" type="image/svg+xml" href="https://incisivesolutions.in/favicon-incisive-solutions.ico" />
      </Helmet>

      <div className="data-processing-container">
        <div className="data-processing-hero-container">
          <div className="data-processing-hero-heading">
            <h1>Data Processing</h1>
          </div>
        </div>

        <div className="data-processing-content-wrapper">
          <DataProcessingSection1 />
        </div>
      </div>
    </main>
  );
}

export default DataProcessing;
