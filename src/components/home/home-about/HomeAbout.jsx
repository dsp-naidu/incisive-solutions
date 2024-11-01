import React, { useEffect } from 'react';
import './home-about.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HomeAbout() {
  useEffect(() => {
    const headings = document.querySelectorAll('.home-about-heading h1');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('heading-in-view');
            // entry.target.classList.remove('heading-out-of-view');
          } else {
            entry.target.classList.remove('heading-in-view');
            {
              /* Reset class when out of view */
            }
            // entry.target.classList.add('heading-out-of-view');
          }
        });
      },
      {
        threshold: 1, // Trigger when 70% of the card is in view
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <div className="home-about-wrapper">
      <div className="home-about-container">
        <div className="home-about-heading">
          <h1>Incisive Solutions</h1>
          <h2>An Offshore Outsourcing Company</h2>
        </div>

        <div className="home-about-content">
          <DotLottieReact
            className="home-about-animate-object"
            src="company-graph.json"
            loop
            autoplay
          />

          <div className="home-about-section-content">
            <h3>
              Looking for a reliable and accurate outsource services provider?
              Then your search ends here!
            </h3>
            <p>
              Incisive Solutions is your trusted partner in Business Process
              Management (BPM), offering a wide array of services tailored to
              meet the needs of modern businesses. From voice and non-voice
              processes to data management—covering data entry, processing, and
              analysis—we ensure that every project is handled with precision
              and efficiency.
            </p>
            <p>
              Our expertise also extends into IT services, including web
              development, as well as HR-related functions, helping companies
              streamline their operations across the board. Powered by a skilled
              team and cutting-edge technology, we focus on delivering
              high-quality results that drive growth and operational excellence.
            </p>
            <p>
              At Incisive Solutions, we pride ourselves on building lasting
              partnerships by consistently exceeding client expectations.
              Whether you&apos;re a startup or an established business,
              we&apos;re here to support your success with customized, reliable
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
