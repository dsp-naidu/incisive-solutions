import React from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';
import ContactForm from '../contact-form/ContactForm';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact Us - Incisive Solutions</title>
      </Helmet>

      <div className="contact-container">
        <div className="contact-hero-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-content-wrapper">
          <div className="contact-content">
            <div className="contact-content-info">
              <div className="contact-content-desc">
                <p>
                  At Incisive Solutions, we&apos;re here to support businesses
                  of all sizes across industries with tailored solutions.
                  Whether you need assistance with voice and non-voice
                  processes, data-related services (entry, processing,
                  conversion, or analysis), IT services like web development, or
                  HR functions, we&apos;re ready to help.
                </p>
                <p>
                  You can reach out to us by phone, email, or the contact form
                  below. Our dedicated team is available 24/7 to assist you and
                  will get back to you promptly to discuss your specific needs.
                </p>
              </div>

              <div className="contact-content-communication-section">
                <span>
                  <FaLocationDot />
                </span>
                <div>
                  <h2>Our Locations</h2>
                  <p>6-16, NAD Colony, Krishnarayapuram, Vepagunta,</p>
                  <p>Visakhapatnam - 530051, Andhra Pradesh, India</p>
                  <br />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.8900439426756!2d83.21587273491818!3d17.786040000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967a851c182cd%3A0x42fb4ceef0ae5fba!2s6-16%2C%20NAD%20Colony%2C%20Krishnarayapuram%2C%20Vepagunta%2C%20Visakhapatanam%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530047!5e0!3m2!1sen!2sin!4v1729572150573!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '10px', opacity: 0.8 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Incisive Solutions"
                  ></iframe>
                </div>
              </div>

              <div className="contact-content-communication-section">
                <span>
                  <FaPhone />
                </span>
                <div>
                  <h2>Give Us A Call</h2>
                  <p>+91 9885-582-929</p>
                </div>
              </div>

              <div className="contact-content-communication-section">
                <span>
                  <FaEnvelope />
                </span>
                <div>
                  <h2>Help Desk</h2>
                  <p>info@incisivesolutions.in</p>
                </div>
              </div>
            </div>
            <div className="contact-page-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
