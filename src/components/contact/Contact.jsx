import React from 'react';
import './contact.css';
import ContactForm from '../contact-form/ContactForm';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-hero-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content-wrapper">
        <div className="contact-content">
          <div className="contact-content-info">
            <div className="contact-content-desc">
              <p>
                We cater to the requirements of different sectors of clients
                around the globe. So if you have any requirements in the area of
                data entry, data processing, data conversion, scanning and
                indexing, web research or data transcription, please do contact
                us. You can get in touch with us through phone, fax, email or
                Messenger using the details given below.
              </p>
              <p>
                Alternatively, you can fill in the form given below . Please be
                patient while waiting for response. (24/7 Support!) Our team
                will reach you at the earliest to discuss your requirements.
              </p>
            </div>
            {/* <p className="contact-content-desc">
              We cater to the requirements of different sectors of clients
              around the globe. So if you have any requirements in the area of
              data entry, data processing, data conversion, scanning and
              indexing, web research or data transcription, please do contact
              us. You can get in touch with us through phone, fax, email or
              Messenger using the details given below.
            </p>
            <p className="contact-content-desc">
              Alternatively, you can fill in the form given below . Please be
              patient while waiting for response. (24/7 Support!) Our team will
              reach you at the earliest to discuss your requirements.
            </p> */}

            <div className="contact-content-communication-section">
              <span>
                <FaLocationDot />
              </span>
              <div>
                <h2>Our Locations</h2>
                <p>6-16, NAD Colony, Krishnarayapuram, Vepagunta,</p>
                <p>Visakhapatnam - 530051, Andhra Pradesh, India</p>
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
  );
}

export default Contact;
