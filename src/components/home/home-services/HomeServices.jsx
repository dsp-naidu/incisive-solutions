import { useEffect } from 'react';
import './home-services.css';
import { Link } from 'react-router-dom';

function HomeServices() {
  useEffect(() => {
    const cards = document.querySelectorAll('.home-service-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('service-card-in-view');
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
    <div className="home-services-container">
      <div className="home-services-heading">
        <h1>Our Services</h1>
      </div>

      <div className="home-services-cards">
        <div className="home-service-card">
          <img src="home-data-entry.png" alt="Data Entry Services" />
          <h2>DATA ENTRY</h2>
          <p>
            Specialized in offering the quality-oriented and highly accurate
            data entry solutions including online, offline, excel data entry,
            and much more.
          </p>
          <Link to="/services/data-entry">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-data-processing.png" alt="Data Entry Services" />
          <h2>DATA PROCESSING</h2>
          <p>
            Dealing with the gathering, conversion, digitzation, and processing
            of the raw data into a meaningful or rather knowledgeable one.
          </p>
          <Link to="/services/data-processing">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-data-conversion.png" alt="Data Entry Services" />
          <h2>DATA CONVERSION</h2>
          <p>
            Expert in handling both the simple and challenging data conversion
            projects wherein the business data is converted into neutral digital
            formats.
          </p>
          <Link to="/services/data-conversion">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-web-research.png" alt="Data Entry Services" />
          <h2>DATA ANALYSIS</h2>
          <p>
            Unlock valuable insights with our comprehensive data analysis
            services, turning raw data into actionable intelligence to help you
            make informed business decisions.
          </p>
          <Link to="/services/data-analysis">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-scanning-indexing.png" alt="Data Entry Services" />
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Offering modern and responsive web development services, we build
            dynamic websites and applications tailored to meet your business
            needs, ensuring a seamless user experience.
          </p>
          <Link to="/services/web-development">View Details</Link>
        </div>

        <div className="home-service-card">
          <img src="home-title-search.png" alt="Data Entry Services" />
          <h2>HR Functions</h2>
          <p>
            Streamline your HR operations with our end-to-end solutions, from
            recruitment and onboarding to payroll management and employee
            engagement, designed to enhance your workforce management.
          </p>
          <Link to="/services/hr-functions">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
