import React from 'react';
import './team-section-1.css';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

function TeamSection1() {
  return (
    <section className="team-section-1-container">
      <div className="ts1-spacer__60"></div>
      <h1 className="team-section-1-heading">The Minds Behind the Mission</h1>

      <div className="team-grid">
        <div className="team-card">
          <div className="team-card-container">
            <div className="team-member-image-container"></div>
            <p className="team-member-name">Ramesh B</p>
            <p className="team-member-about">
              With over 18 years of experience in the IT industry, he is
              passionate about leveraging technology to drive business success.
              His leadership approach focuses on fostering innovation,
              empowering teams, and aligning technology strategies with
              organizational goals.
            </p>
            <p className="team-member-quote">
              &quot;I believe in empowering teams to push the boundaries of
              innovation.&quot;
            </p>
            <p className="team-member-designation">Technical Director</p>
            <div className="team-member-social-profiles">
              <FaLinkedinIn className="team-s1-social-icons" />
              <FaFacebookF className="team-s1-social-icons" />
              <FaXTwitter className="team-s1-social-icons" />
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="team-card-container">
            <div className="team-member-image-container"></div>
            <p className="team-member-name">Siva Prasad D </p>
            <p className="team-member-about">
              As a seasoned Managing Director with over 20 years in the
              Engineering industry, he is dedicated to driving innovation and
              growth through strategic leadership.
            </p>
            <p className="team-member-quote">
              &quot;My focus is on aligning technology solutions with business
              goals to achieve sustainable success.&quot;
            </p>
            <p className="team-member-designation">Managing Director</p>
            <div className="team-member-social-profiles">
              <FaLinkedinIn className="team-s1-social-icons" />
              <FaFacebookF className="team-s1-social-icons" />
              <FaXTwitter className="team-s1-social-icons" />
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="team-card-container">
            <div className="team-member-image-container"></div>
            <p className="team-member-name">Suneetha D</p>
            <p className="team-member-about">
              As the Head of Operations with over 13 years of experience in the
              IT industry, she is committed to driving operational excellence
              and fostering a culture of continuous improvement.
            </p>
            <p className="team-member-quote">
              &quot;My goal is to streamline processes and enhance service
              delivery to meet our clients&apos; evolving needs.&quot;
            </p>
            <p className="team-member-designation">Head of Operations</p>
            <div className="team-member-social-profiles">
              <FaLinkedinIn className="team-s1-social-icons" />
              <FaFacebookF className="team-s1-social-icons" />
              <FaXTwitter className="team-s1-social-icons" />
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="team-card-container">
            <div className="team-member-image-container"></div>
            <p className="team-member-name">Lavanya B</p>
            <p className="team-member-about">
              With over 8 years of experience in the IT industry, she is
              dedicated to driving financial strategy and enhancing
              organizational performance.
            </p>
            <p className="team-member-quote">
              &quot;My focus is on aligning financial objectives with business
              goals to support sustainable growth.&quot;
            </p>
            <p className="team-member-designation">Chief Financial Officer</p>
            <div className="team-member-social-profiles">
              <FaLinkedinIn className="team-s1-social-icons" />
              <FaFacebookF className="team-s1-social-icons" />
              <FaXTwitter className="team-s1-social-icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="ts1-spacer__40"></div>
    </section>
  );
}

export default TeamSection1;
