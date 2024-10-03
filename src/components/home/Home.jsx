import React from 'react';
import HomeHero from './home-hero/HomeHero';
import HomeAbout from './home-about/HomeAbout';
import HomeServices from './home-services/HomeServices';
import HomeWorkFlow from './home-work-flow/HomeWorkFlow';
import HomeFeatures from './home-features/HomeFeatures';
import HomeContactHero from './home-contact-hero/HomeContactHero';
import HomeContact from './home-contact/HomeContact';

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeWorkFlow />
      <HomeFeatures />
      <HomeContactHero />
      <HomeContact />
    </div>
  );
}

export default Home;
