import React, { useEffect } from 'react';
import './data-processing-section-1.css';

function DataProcessingSection1() {
  useEffect(() => {
    const cards = document.querySelectorAll('.data-processing-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('dp-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('dp-card-in-view');
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
    <section className="data-processing-section-1-container">
      <div className="dps1-spacer__60"></div>
      <h1>Transforming Raw Data into Valuable Insights</h1>

      <div className="data-processing-section-1-content">
        <div className="data-processing-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="data-processing-card">
            At <strong>Incisive Solutions</strong>, we specialize in turning
            vast amounts of raw data into meaningful and actionable information.
            Our <strong>Data Processing Services</strong> are designed to help
            businesses streamline their operations, optimize decision-making,
            and enhance overall productivity by processing data efficiently and
            accurately.
          </p>

          <p className="data-processing-card">
            Our services include:
            <ul>
              <li>
                <strong>Data Validation & Cleansing:</strong> We ensure that
                your data is error-free, consistent, and up-to-date, helping you
                maintain high-quality data integrity across all systems.
              </li>
              <li>
                <strong>Data Conversion:</strong> Convert data from various
                formats, including PDFs, handwritten documents, and legacy
                systems, into organized digital formats for easier access and
                use.
              </li>
              <li>
                <strong>Data Categorization & Segmentation:</strong> Organize
                and categorize data into relevant segments for easy retrieval,
                analysis, and utilization in marketing, sales, or operational
                strategies.
              </li>
              <li>
                <strong>Data Enrichment:</strong> Enhance your existing datasets
                by filling in missing information or augmenting them with
                external data sources to provide a complete picture.
              </li>
              <li>
                <strong>Real-time Data Processing:</strong> Handle high volumes
                of data in real time, ensuring that your systems are updated and
                ready for immediate analysis and use.
              </li>
            </ul>
          </p>
          <p className="data-processing-card">
            At <strong>Incisive Solutions</strong>, we leverage the latest
            technology to provide fast, accurate, and secure data processing
            services. Whether you need to handle small datasets or process
            large-scale information, our tailored solutions ensure your data is
            transformed into valuable insights, helping your business thrive in
            today&apos;s data-driven environment.
          </p>
        </div>

        <div className="data-processing-section-1-right">
          <img src="/assets/data-processing-section-1.svg" />
        </div>
      </div>
    </section>
  );
}

export default DataProcessingSection1;
