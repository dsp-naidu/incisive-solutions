import React from 'react';
import './data-analysis.css';
import DataAnalysisSection1 from './data-analysis-section-1/DataAnalysisSection1';

function DataAnalysis() {
  return (
    <div className="data-analysis-container">
      <div className="data-analysis-hero-container">
        <div className="data-analysis-hero-heading">
          <h1>Data Analysis</h1>
        </div>
      </div>

      <div className="data-analysis-content-wrapper">
        <DataAnalysisSection1 />
      </div>
    </div>
  );
}

export default DataAnalysis;
