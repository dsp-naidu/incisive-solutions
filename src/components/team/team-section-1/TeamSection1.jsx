import React from 'react';
import './team-section-1.css';
import TeamMemberCard from './team-member-card/TeamMemberCard';

function TeamSection1() {
  const teamMembers = [
    {
      image: '/assets/ramesh.png',
      name: 'Ramesh B',
      about:
        'With over 18 years of experience in the IT industry, he is passionate about leveraging technology to drive business success. His leadership approach focuses on fostering innovation, empowering teams, and aligning technology strategies with organizational goals.',
      quote:
        'I believe in empowering teams to push the boundaries of innovation.',
      designation: 'Technical Director',
      // socialLinks: {
      //   linkedin: 'https://linkedin.com/in/ramesh',
      //   facebook: 'https://facebook.com/ramesh',
      //   twitter: 'https://twitter.com/ramesh',
      // },
    },
    {
      image: '/assets/siva.png',
      name: 'Siva Prasad D',
      about:
        'As a seasoned Managing Director with over 20 years in the Engineering industry, he is dedicated to driving innovation and growth through strategic leadership.',
      quote:
        'My focus is on aligning technology solutions with business goals to achieve sustainable success.',
      designation: 'Managing Director',
    },
    {
      image: '/assets/suneetha.png',
      name: 'Suneetha D',
      about:
        'As the Head of Operations with over 13 years of experience in the IT industry, she is committed to driving operational excellence and fostering a culture of continuous improvement.',
      quote:
        'My goal is to streamline processes and enhance service delivery to meet our clients’ evolving needs.',
      designation: 'Head of Operations',
    },
    {
      image: '/assets/lavanya.png',
      name: 'Lavanya B',
      about:
        'With over 8 years of experience in the IT industry, she is dedicated to driving financial strategy and enhancing organizational performance.',
      quote:
        'My focus is on aligning financial objectives with business goals to support sustainable growth.',
      designation: 'Chief Financial Officer',
    },
  ];

  return (
    <section className="team-section-1-container">
      <div className="ts1-spacer__60"></div>
      <h1 className="team-section-1-heading">The Minds Behind the Mission</h1>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <div className="ts1-spacer__40"></div>
    </section>
  );
}

export default TeamSection1;
