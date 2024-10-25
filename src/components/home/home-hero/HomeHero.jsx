import React, { useState, useEffect } from 'react';
import './home-hero.css';

function HomeHero() {
  const texts = [
    { text: 'Data Entry', color: '#C7FF33' },
    { text: 'Data Processing', color: '#00FFFF' },
    { text: 'Data Conversion', color: '#FF00FF' },
    { text: 'Data Analysis', color: '#A1F1F2' },
    { text: 'Web Development', color: '#3BC4C5' },
    { text: 'HR Outsourcing', color: '#FF69B4' },
    { text: 'Incisive', color: '#26aaad' },
    { text: 'Custom IT', color: '#FFF' },
  ];
  // const texts = [
  //   { text: 'Data Entry', color: '#0059ff' },
  //   { text: 'Data Processing', color: '#00ff27' },
  //   { text: 'Data Conversion', color: '#ffa600' },
  //   { text: 'Data Analysis', color: '#0059ff' },
  //   { text: 'Web Development', color: '#00ff27' },
  //   { text: 'HR Outsourcing', color: '#ffa600' },
  //   { text: 'Incisive', color: '#26aaad' },
  //   { text: 'Custom IT', color: '#FFF' },
  // ];

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
