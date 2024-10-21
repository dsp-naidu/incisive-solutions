import React from 'react';
import './about-values.css';

function AboutValues() {
  const values = [
    {
      imgSrc: 'about-values-1.svg',
      description: 'We uphold highest standards of Honesty and Integrity',
    },
    {
      imgSrc: 'about-values-2.svg',
      description: 'We provide outstanding quality of Products & Services',
    },
    {
      imgSrc: 'about-values-3.svg',
      description: 'We work together to strive for Customer Satisfaction',
    },
    {
      imgSrc: 'about-values-4.svg',
      description: 'We are passionate to improve & innovate continuously',
    },
    {
      imgSrc: 'about-values-5.svg',
      description: 'We Value, Engage, Encourage and Reward our people',
    },
  ];

  return (
    <section className="about-values-container">
      <h1>We Live by These Values</h1>
      <div className='about-values__spacer-40'></div>
      <div className="values-container">
        {values.map((value, index) => (
          <div className="value" key={index}>
            <img src={value.imgSrc} alt={`value-${index}`} />
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      <div className='about-values__spacer-40'></div>
    </section>
  );
}

export default AboutValues;
