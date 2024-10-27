import React, { useState, useEffect, useRef } from 'react';
import './contact-form.css';
import { countryPhoneCodes } from './countryPhoneCodes';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';

function ContactForm() {
  const [state, handleSubmit] = useForm('mwpkpvno');
  const [isInputActive, setIsInputActive] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef(null); // Using useRef to access the form

  const handleInputChange = (event) => {
    setIsInputActive(
      event.target.value.length > 0 ||
        document.getElementById('message').value.length > 0
    );
  };

  useEffect(() => {
    const form = formRef.current;
    const inputs = form?.querySelectorAll('.form-input');

    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener('focus', () =>
          form.classList.add('inputInFocus')
        );
        input.addEventListener('blur', () => {
          if (![...inputs].some((i) => i === document.activeElement)) {
            form.classList.remove('inputInFocus');
          }
        });
      });
    }

    return () => {
      // Cleanup event listeners
      if (inputs) {
        inputs.forEach((input) => {
          input.removeEventListener('focus', () =>
            form.classList.add('inputInFocus')
          );
          input.removeEventListener('blur', () => {
            if (![...inputs].some((i) => i === document.activeElement)) {
              form.classList.remove('inputInFocus');
            }
          });
        });
      }
    };
  }, []);

  useEffect(() => {
    const contactForm = formRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (contactForm) {
      observer.observe(contactForm);
    }

    return () => {
      if (contactForm) {
        observer.unobserve(contactForm);
      }
    };
  }, []);

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
    <div ref={formRef} className={`contact-form ${isInView ? 'in-view' : ''}`}>
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
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          id="email"
          type="email"
          name="Email"
          placeholder="E-Mail Address *"
          required
          onChange={handleInputChange}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div
          className={`phone-input-container ${
            isInputActive ? 'formInputActive' : ''
          }`}
        >
          {/* Setting USA as default */}
          <select
            className="form-input country-selector"
            name="Country Code"
            required
            defaultValue="+91-IND"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
        <input
          className="form-input"
          id="subject"
          type="text"
          name="Subject"
          placeholder="Subject *"
          required
          onChange={handleInputChange}
        />
        <textarea
          className="form-input"
          placeholder="Message *"
          id="message"
          name="Message"
          required
          onChange={handleInputChange}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className={isInView ? 'buttonInView' : ''}
          disabled={state.submitting}
        >
          Get a free consultation
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
