import React, { useState } from 'react';
import './home-contact-accordion.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For arrows

const accordionData = [
  {
    id: '1',
    title: '24*7 availability',
    content:
      'Our team at Incisive Solutions works around the clock and thus you can apporach us at any time of the day. You are welcome to come up with the query according to your need.',
  },
  {
    id: '2',
    title: 'Secrecy and Confidentiality',
    content:
      'Incisive Solutions offers a great importance to the secrecy and confidentiality of your documents. We protect your data from internal or external damages and also do not encourage a third-party to view your data.',
  },
  {
    id: '3',
    title: 'Infrastructure',
    content:
      'Incisive Solutions is well-equipped with the advanced technologies and the latest software, which are highly beneficial to deliver the client satisfied result. We also offer an advanced CCTV monitoring to look at the internal movements, so as to prevent any fraud activities.',
  },
  {
    id: '4',
    title: 'Operational Cost',
    content:
      'All our services are available within a cost-effective rate. No matter how challenging your project is, we believe in offering quality-centered services at a low operational cost to all the clients.',
  },
];

function HomeContactAccordion() {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item to be open by default

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'accordion-active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            {activeIndex === index ? (
              <FaChevronUp className="accordion-icon" />
            ) : (
              <FaChevronDown className="accordion-icon" />
            )}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomeContactAccordion;
