import React from 'react';
import './contact-form.css';
import { countryPhoneCodes } from './countryPhoneCodes';

function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Let&apos;s talk about your project</h1>
      <p>
        We have made it easy for clients to reach us and get their solutions
        weaved
      </p>
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Name *"
          required
        />
        <input
          className="form-input"
          type="email"
          placeholder="E-Mail Address *"
          required
        />
        <div className="phone-input-container">
          {/* Setting USA as default */}
          <select
            className="form-input country-selector"
            name="country-code"
            required
            defaultValue="+91-IND"
          >
            {countryPhoneCodes.map((country) => (
              <option
                key={country.iso}
                value={`${country.phoneCode}-${country.iso}`}
              >
                {country.iso} ({country.phoneCode}) - {country.countryName}
              </option>
            ))}
          </select>
          <input
            className="form-input"
            type="tel"
            placeholder="Phone Number"
            required
          />
        </div>
        <input
          className="form-input"
          type="text"
          placeholder="Subject *"
          required
        />
        <textarea
          className="form-input"
          placeholder="Message *"
          required
        ></textarea>
        <button type="submit">Get a free consultation</button>
      </form>
    </div>
  );
}

export default ContactForm;
