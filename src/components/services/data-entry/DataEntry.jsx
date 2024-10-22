import React from 'react';
import { Helmet } from 'react-helmet';
import './data-entry.css';
import DataEntrySection1 from './data-entry-section-1/DataEntrySection1';

function DataEntry() {
  return (
    <main>
      <Helmet>
        <title>Data Entry Services - Incisive Solutions</title>
      </Helmet>

      <div className="data-entry-container">
        <div className="data-entry-hero-container">
          <div className="data-entry-hero-heading">
            <h1>Data Entry</h1>
          </div>
        </div>

        <div className="data-entry-content-wrapper">
          <DataEntrySection1 />
        </div>
      </div>
    </main>
  );
}

export default DataEntry;
