import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './products.css';

function Products() {
  return (
    <div className="products-container">
      <div className="products-animate-object">
        <DotLottieReact src="globe-rotate.json" loop autoplay />
      </div>
      <div className="products-content">
        <h1>Products</h1>
        <p>List of products we offer - </p>
        <div className="products-content-grid">
          <div className="products-content-section">
            <h2>Platform</h2>
            <ul>
              <li>Data movement</li>
              <li>Transformations</li>
              <li>Security</li>
              <li>Governance</li>
              <li>Extensibility and management</li>
              <li>Deployment options</li>
            </ul>
          </div>
          <div className="products-content-section">
            <h2>Sources</h2>
            <ul>
              <li>SaaS replication</li>
              <li>Database replication</li>
              <li>SAP replication</li>
              <li>Streaming replication</li>
              <li>File replication</li>
              <li>Custom connectors</li>
              <li>Destination to destination</li>
            </ul>
          </div>
          <div className="prodcuts-content-section">
            <h2>Destinations</h2>
            <ul>
              <li>Data lakes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
