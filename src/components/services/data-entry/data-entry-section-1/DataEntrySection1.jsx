import React, { useEffect } from 'react';
import './data-entry-section-1.css';

function DataEntrySection1() {
  useEffect(() => {
    const cards = document.querySelectorAll('.data-entry-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('de-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('de-card-in-view');
            {
              /* Reset class when out of view */
            }
            // entry.target.classList.add('out-of-view');
          }
        });
      },
      {
        threshold: 0.7, // Trigger when 70% of the card is in view
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="data-entry-section-1-container">
      <div className="des1-spacer__60"></div>
      <h1>Precision and Efficiency in Every Keystroke</h1>

      <div className="data-entry-section-1-content">
        <div className="data-entry-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="data-entry-card">
            At <strong>Incisive Solutions</strong>, we understand that accurate
            and efficient data entry is the backbone of smooth business
            operations. Our specialized <strong>Data Entry Services</strong> are
            designed to handle all your data needs with the highest level of
            accuracy and reliability. We cater to various industries, ensuring
            that each project is customized to your specific requirements, be it
            large-scale or small-scale data management tasks.
          </p>

          <p className="data-entry-card">
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

          <p className="data-entry-card">
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
