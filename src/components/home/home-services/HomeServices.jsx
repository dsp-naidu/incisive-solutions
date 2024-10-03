import React from 'react';
import './home-services.css';
import { Link } from 'react-router-dom';

function HomeServices() {
  return (
    <div className="home-services-container">
      <div className="home-services-heading">
        <h1>OUR SERVICES</h1>
      </div>

      <div className="home-services-cards">
        <div className="home-service-card">
          <img src="home-data-entry.png" alt="Data Entry Services" />
          <h2>DATA ENTRY SERVICES</h2>
          <p>
            Specialized in offering the quality-oriented and highly accurate
            data entry solutions including online, offline, excel data entry,
            and much more.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-data-processing.png" alt="Data Entry Services" />
          <h2>DATA PROCESSING SERVICES</h2>
          <p>
            Dealing with the gathering, conversion, digitzation, and processing
            of the raw data into a meaningful or rather knowledgeable one.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-data-conversion.png" alt="Data Entry Services" />
          <h2>DATA CONVERSION SERVICES</h2>
          <p>
            Expert in handling both the simple and challenging data conversion
            projects wherein the business data is converted into neutral digital
            formats.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-web-research.png" alt="Data Entry Services" />
          <h2>WEB RESEARCH SERVICES</h2>
          <p>
            First impressions count! Make sure your bran works for you. We offer
            digital marketing.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-scanning-indexing.png" alt="Data Entry Services" />
          <h2>SCANNING & INDEXING</h2>
          <p>
            First impressions count! Make sure your brand works for you. We
            offer digital marketing.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-title-search.png" alt="Data Entry Services" />
          <h2>TITLE SEARCH</h2>
          <p>
            First impressions count! Make sure your brand works for you. We
            offer digital marketing.
          </p>
          <Link to="/data-entry">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
