import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

function TeamMemberCard({ image, name, about, quote, designation }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('team-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('team-card-in-view');
            {
              /* Reset class when out of view */
            }
            // entry.target.classList.add('out-of-view');
          }
        });
      },
      {
        threshold: 1, // Trigger when 70% of the card is in view
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="team-card">
      <div className="team-card-container">
        {/* <div
          className="team-member-image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div> */}
        <p className="team-member-name">{name}</p>
        <p className="team-member-about">{about}</p>
        <p className="team-member-quote">&quot;{quote}&quot;</p>
        <p className="team-member-designation">{designation}</p>
        <div className="team-member-social-profiles">
          <FaLinkedinIn className="team-s1-social-icons" />
          <FaFacebookF className="team-s1-social-icons" />
          <FaXTwitter className="team-s1-social-icons" />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
