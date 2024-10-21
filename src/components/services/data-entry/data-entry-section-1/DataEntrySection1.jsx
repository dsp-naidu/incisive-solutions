import React from 'react';
import './data-entry-section-1.css';

function DataEntrySection1() {
  return (
    <section className="data-entry-section-1-container">
      <div className="des1-spacer__60"></div>
      <h1>Precision and Efficiency in Every Keystroke</h1>

      <div className="data-entry-section-1-content">
        <div className="data-entry-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p>
            At <strong>Incisive Solutions</strong>, we understand that accurate
            and efficient data entry is the backbone of smooth business
            operations. Our specialized <strong>Data Entry Services</strong> are
            designed to handle all your data needs with the highest level of
            accuracy and reliability. We cater to various industries, ensuring
            that each project is customized to your specific requirements, be it
            large-scale or small-scale data management tasks.
          </p>

          <p>
            Our services include:
            <ul>
              <li>
                <strong>Online & Offline Data Entry:</strong> Seamlessly enter
                and process your data from various sources, whether it's digital
                or physical.
              </li>
              <li>
                <strong>Excel Data Entry:</strong> Structured and organized data
                entry using Excel, perfect for financial records, inventory
                management, and more.
              </li>
              <li>
                <strong>Data Cleansing & Validation:</strong> Ensure your data
                is free from errors and inconsistencies, enhancing the quality
                and reliability of your databases.
              </li>
              <li>
                <strong>CRM Data Management:</strong> Keep your customer
                relationship management systems updated and error-free with our
                CRM data entry solutions.
              </li>
              <li>
                <strong>Survey & Forms Data Entry:</strong> Transform paper
                surveys, forms, and other data collection methods into digital
                formats for easier access and analysis.
              </li>
            </ul>
          </p>

          <p>
            Our <strong>team of experts</strong> ensures that all data entry
            tasks are performed with a high degree of{' '}
            <strong>confidentiality</strong> and <strong>security</strong>, so
            your sensitive information is always protected. With a combination
            of manual expertise and cutting-edge technology, we guarantee{' '}
            <strong>100% accuracy</strong>, quick turnaround times, and
            cost-effective solutions tailored to your specific business needs.
          </p>
        </div>

        <div className="data-entry-section-1-right">
          <img src="/assets/data-entry-section-1.svg" />
        </div>
      </div>
    </section>
  );
}

export default DataEntrySection1;
