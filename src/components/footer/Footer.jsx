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
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h1 className="footer-main-text">Incisive Solutions</h1>
          <img src="/assets/is-logo.png" />
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
        {/* <div className="footer-products-container">
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
        </div> */}

        <div className="footer-services-container">
          <h1 className="footer-main-text">Services</h1>
          <ul className="footer-secondary-text">
            <li>Data Entry</li>
            <li>Data Processing</li>
            <li>Data Conversion</li>
            <li>Data Analysis</li>
            <li>Web Development</li>
            <li>HR Functions</li>
            {/* <li>Mortgage Services</li> */}
          </ul>
        </div>

        <div className="footer-contact">
          <h1 className="footer-main-text">Contact</h1>

          <div className="footer-contact-address-container">
            <span>
              <FaLocationDot />
            </span>

            <div className="footer-contact-address footer-secondary-text">
              <p>6-16, NAD Colony,</p>
              <p>Krishnarayapuram, Vepagunta,</p>
              <p>Visakhapatnam - 530051,</p>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="footer-contact-email-container footer-secondary-text">
            <span>
              <FaEnvelope />
            </span>
            <p>info@incisivesolutions.in</p>
          </div>

          <div className="footer-contact-phone-container footer-secondary-text">
            <span>
              <FaPhone />
            </span>
            <p>+91 9885-582-929</p>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d949.7799215668816!2d83.21564226951601!3d17.786071275953496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ3JzA5LjkiTiA4M8KwMTInNTguNiJF!5e0!3m2!1sen!2sin!4v1729856483246!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '10px', opacity: 0.8 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Incisive Solutions"
          ></iframe>
        </div>
        {/* 
        <div className="footer-about">
          <h1>Incisive Solutions</h1>
          <img src="is-logo.png" />
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
        </div> */}
      </div>
      <div className="footer-trademark">
        {' '}
        <p>
          &copy; {new Date().getFullYear()} Incisive Solutions. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
