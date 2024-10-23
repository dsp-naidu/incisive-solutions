import React, { useState, useEffect } from 'react';
import './home-hero.css';

function HomeHero() {
  const texts = [
    { text: 'Data Entry', color: '#3375FF' },
    { text: 'Data Processing', color: '#FF5733' },
    { text: 'Data Conversion', color: '#FFC300' },
    { text: 'Data Analysis', color: '#3375FF' },
    { text: 'Web Development', color: '#FF3333' },
    { text: 'HR Outsourcing', color: '#FF5733' },
    { text: 'Incisive', color: '#33C4FF' },
    { text: 'Custom IT', color: '#FFF' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (currentIndex < texts.length - 1) {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     }, 1500);

  //     return () => clearInterval(interval);
  //   }
  // }, [currentIndex, texts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          Transform Your Business with{' '}
          {texts[currentIndex].text !== 'Incisive' && <span>Our </span>}
          <span
            style={{
              color: texts[currentIndex].color,
            }}
          >
            {texts[currentIndex].text}
          </span>{' '}
          Solutions
        </h1>
      </div>
    </div>
  );
}

export default HomeHero;
