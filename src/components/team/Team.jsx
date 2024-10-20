import React from 'react';
import './team.css';

function Team() {
  return (
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

      {/* 
      <div className="team-content-wrapper">
        <div className='team-content'>
          <div>
          <p>We are outfitted to lighten your daily data concerns.</p>
          </div>

          <div>
          <p>We are outfitted to lighten your daily data concerns.</p>
          </div>

          <div>
          <p>We are outfitted to lighten your daily data concerns.</p>
          </div>

          <div>
          <p>We are outfitted to lighten your daily data concerns.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Team;
