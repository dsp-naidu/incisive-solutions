import React from 'react';
import './footer.css';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-content">
        <div className="footer-products-container">
          <h1>Products</h1>
          <ul>
            <li>Data movement</li>
            <li>Transformations</li>
            <li>Security</li>
            <li>Governance</li>
            <li>Extensibility + management</li>
            <li>Connectors</li>
            <li>Deployment options</li>
          </ul>
        </div>

        <div className="footer-services-container">
          <h1>Services</h1>
          <ul>
            <li>Data Entry Services</li>
            <li>Data Processing Services</li>
            <li>Data Conversion</li>
            <li>Services</li>
            <li>Web Research Services</li>
            <li>Scanning and Indexing</li>
            <li>Mortgage Services</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h1>Contact</h1>

          <div className="footer-contact-address-container">
            <span>
              <FaLocationDot />
            </span>

            <div className="footer-contact-address">
              <p>6-16, NAD Colony</p>
              <p>Krishnarayapuram, Vepagunta</p>
              <p>Visakhapatnam - 530051</p>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="footer-contact-email-container">
            <span>
              <FaEnvelope />
            </span>
            <p>info@incisivesolutions.in</p>
          </div>

          <div className="footer-contact-phone-container">
            <span>
              <FaPhone />
            </span>
            <p>+91 9885-582-929</p>
          </div>
        </div>

        <div className="footer-about">
          <h1>Incisive Solutions</h1>
          <img src="is-logo.png" />
          {/* <p>Transform your business with our custom IT solutions.</p> */}
          <div className="footer-about-social-media">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>
      <div className='footer-trademark'>      <p>
        &copy; {new Date().getFullYear()} Incisive Solutions. All rights
        reserved.
      </p></div>

    </div>
  );
}

export default Footer;
