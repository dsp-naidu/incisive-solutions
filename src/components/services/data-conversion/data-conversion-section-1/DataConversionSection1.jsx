import React, { useEffect } from 'react';
import './data-conversion-section-1.css';

function DataConversionSection1() {
  useEffect(() => {
    const cards = document.querySelectorAll('.data-conversion-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('dc-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('dc-card-in-view');
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
    <section className="data-conversion-section-1-container">
      <div className="dcs1-spacer__60"></div>
      <h1>Seamless Data Transformation for Modern Businesses</h1>

      <div className="data-conversion-section-1-content">
        <div className="data-conversion-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="data-conversion-card">
            At <strong>Incisive Solutions</strong>, we understand that data
            exists in many forms, and the ability to convert it efficiently is
            essential for modern business operations. Our{' '}
            <strong>Data Conversion Services</strong> are designed to streamline
            the transformation of data from various formats into structured,
            digital, and usable formats, making it accessible, searchable, and
            easy to manage.
          </p>

          <p className="data-conversion-card">
            Our services include:
            <ul>
              <li>
                <strong>Document Conversion:</strong> Transform physical
                documents, scanned files, PDFs, and images into digital formats
                such as Word, Excel, or databases, enabling easy storage and
                retrieval.
              </li>
              <li>
                <strong>Database Migration & Conversion:</strong> Convert legacy
                databases or migrate data from old systems into modern databases
                without data loss, ensuring smooth transitions to updated
                technologies.
              </li>
              <li>
                <strong>File Format Conversion:</strong> Convert files between
                formats like XML, CSV, JSON, and others, ensuring compatibility
                with different systems and platforms.
              </li>
              <li>
                <strong>E-book & XML Conversion:</strong> Convert manuscripts,
                books, and other publications into e-book formats or structured
                XML, ready for digital distribution and publishing.
              </li>
              <li>
                <strong>Image to Text (OCR):</strong> Use advanced Optical
                Character Recognition (OCR) technology to convert printed or
                handwritten text in images into editable digital text.
              </li>
            </ul>
          </p>

          <p className="data-conversion-card">
            At <strong>Incisive Solutions</strong>, our expertise in data
            conversion ensures that your data is handled with precision and
            care. Whether you need to modernize your systems or convert complex
            datasets into actionable formats, our solutions are tailored to meet
            your business&apos;s unique needs, ensuring smooth and reliable data
            transformation.
          </p>
        </div>

        <div className="data-conversion-section-1-right">
          <img src="/assets/data-conversion-section-1.svg" />
        </div>
      </div>
    </section>
  );
}

export default DataConversionSection1;
