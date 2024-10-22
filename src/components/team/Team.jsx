import React from 'react';
import { Helmet } from 'react-helmet';
import './team.css';
import TeamSection1 from './team-section-1/TeamSection1';

function Team() {
  return (
    <main>
      <Helmet>
        <title>Our Team - Incisive Solutions</title>
      </Helmet>

      <div className="team-container">
        <div className="team-hero-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/assets/team-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="team-hero-heading">
            <h1>Our Team</h1>
          </div>
        </div>

        <div className="our-team-content-wrapper">
          <TeamSection1 />
        </div>
      </div>
    </main>
  );
}

export default Team;
