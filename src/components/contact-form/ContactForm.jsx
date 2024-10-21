import React from 'react';
import './contact-form.css';
import { countryPhoneCodes } from './countryPhoneCodes';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';

function ContactForm() {
  const [state, handleSubmit] = useForm('mwpkpvno');

  if (state.succeeded) {
    return (
      <div className="success-wrapper">
        <div className="form-submission-success">
          <h1>Thanks for joining!</h1>
          <p>Your message has been successfully sent.</p>
          <p>
            Your form has been successfully submitted. We&apos;ll get back to
            you shortly.
          </p>
          <FaEnvelopeCircleCheck />
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h1>Let&apos;s talk about your project</h1>
      <p>
        We have made it easy for clients to reach us and get their solutions
        weaved
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          id="name"
          type="text"
          name="Name"
          placeholder="Name *"
          required
        />
        <input
          className="form-input"
          id="email"
          type="email"
          name="Email"
          placeholder="E-Mail Address *"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="phone-input-container">
          {/* Setting USA as default */}
          <select
            className="form-input country-selector"
            name="Country Code"
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
            id="phoneNumber"
            type="tel"
            name="Phone Number"
            placeholder="Phone Number"
            required
          />
        </div>
        <input
          className="form-input"
          id="subject"
          type="text"
          name="Subject"
          placeholder="Subject *"
          required
        />
        <textarea
          className="form-input"
          placeholder="Message *"
          id="message"
          name="Message"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Get a free consultation
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
