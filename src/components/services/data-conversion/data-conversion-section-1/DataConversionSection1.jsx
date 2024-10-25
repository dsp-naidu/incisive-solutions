import React, { useEffect, useRef } from 'react';
import './data-conversion-section-1.css';

function DataConversionSection1() {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = cardRef.current.querySelectorAll('.data-conversion-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="data-conversion-section-1-container" ref={cardRef}>
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
