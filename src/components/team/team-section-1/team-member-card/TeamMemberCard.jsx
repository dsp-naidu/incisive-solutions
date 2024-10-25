import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

function TeamMemberCard({ image, name, about, quote, designation }) {
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
