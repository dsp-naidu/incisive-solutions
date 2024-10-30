import React, { useState, useEffect } from 'react';
import './home-hero.css';

function HomeHero() {
  const texts = [
    { text: 'Data Entry', color: '#C7FF33', bgColor: '#0e1601', padding: "0 15px 3px" },
    { text: 'Data Processing', color: '#339968', bgColor: '#041c10', padding: "0 15px 3px" },
    { text: 'Data Conversion', color: '#FF00FF', bgColor: '#160016', padding: "0 15px 3px" },
    { text: 'Data Analysis', color: '#FF802B', bgColor: '#391A03', padding: "0 15px 3px" },
    { text: 'Web Development', color: '#3BC4C5', bgColor: '#042121', padding: "0 15px 3px" },
    { text: 'HR Outsourcing', color: '#FF69B4', bgColor: '#16040c', padding: "0 15px 3px" },
    // { text: 'Incisive', color: '#26aaad' },
    { text: 'Custom IT', color: '#FFF', bgColor: 'transparent', padding: "0" },
  ];
  // const texts = [
  //   { text: 'Data Entry', color: '#C7FF33', bgColor: '#0e1601', padding: "0 15px 3px" },
  //   { text: 'Data Processing', color: '#00FFFF', bgColor: '#001616', padding: "0 15px 3px" },
  //   { text: 'Data Conversion', color: '#FF00FF', bgColor: '#160016', padding: "0 15px 3px" },
  //   { text: 'Data Analysis', color: '#A1F1F2', bgColor: '#192b2b', padding: "0 15px 3px" },
  //   { text: 'Web Development', color: '#3BC4C5', bgColor: '#010e0e', padding: "0 15px 3px" },
  //   { text: 'HR Outsourcing', color: '#FF69B4', bgColor: '#16040c', padding: "0 15px 3px" },
  //   // { text: 'Incisive', color: '#26aaad' },
  //   { text: 'Custom IT', color: '#FFF', bgColor: 'transparent', padding: "0" },
  // ];
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
          Transform Your Business<br />
          with Our<br/>{' '}
          {/* {texts[currentIndex].text !== 'Incisive' && <span>Our </span>} */}
          <span
            style={{
              color: texts[currentIndex].color,
              backgroundColor: texts[currentIndex].bgColor,
              padding: texts[currentIndex].padding,
            }}
          >
            {texts[currentIndex].text}
          </span>{' '}
          <br/>Solutions
        </h1>
      </div>
    </div>
  );
}

export default HomeHero;
