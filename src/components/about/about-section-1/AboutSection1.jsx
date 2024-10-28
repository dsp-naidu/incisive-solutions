import React, { useEffect } from 'react';
import './about-section-1.css';

function AboutSection1() {
  const values = [
    {
      imgSrc: 'about-values-1.svg',
      description: 'We uphold highest standards of Honesty and Integrity',
    },
    {
      imgSrc: 'about-values-2.svg',
      description: 'We provide outstanding quality of Products & Services',
    },
    {
      imgSrc: 'about-values-3.svg',
      description: 'We work together to strive for Customer Satisfaction',
    },
    {
      imgSrc: 'about-values-4.svg',
      description: 'We are passionate to improve & innovate continuously',
    },
    {
      imgSrc: 'about-values-5.svg',
      description: 'We Value, Engage, Encourage and Reward our people',
    },
  ];

  useEffect(() => {
    const aboutValues = document.querySelectorAll('.value');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('value-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('value-in-view');
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

    aboutValues.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      aboutValues.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="about-section-1-container">
      <div className="as1-spacer__40"></div>
      {/* <h1>Welcome to Incisive Solutions!</h1> */}

      <div className="about-section-1-content">
        <div className="about-section-1">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}

          <div className="about-journey bg-black-hole about-content-div">
            <h2>Our Journey</h2>
            <div className="about-journey-flex">
              <p>
                Founded with a passion for excellence, Incisive Solutions has
                evolved into a trusted partner for businesses looking to
                optimize their operations and improve service delivery. Our
                commitment to quality and client satisfaction has led to a 100%
                client retention ratio, a testament to our dedication and
                effectiveness.
              </p>
              <img src="/assets/journey.png" />
              <p>
                Join us on our journey to redefine outsourcing services, and let{' '}
                <span>Incisive Solutions</span> help your business thrive in a
                competitive landscape. Together, we can unlock new opportunities
                and achieve greater success.
              </p>
            </div>
          </div>

          <div className="about-intro bg-black-hole about-content-div">
            <p>
              At <span>Incisive Solutions</span>, we are dedicated to providing
              exceptional outsourcing services across various domains, including
              voice and non-voice processes, data-related services, IT solutions
              like web development, and comprehensive HR functions. Our mission
              is to empower businesses by offering customized solutions that
              enhance operational efficiency and drive growth.
            </p>
          </div>

          <div className="about-vision bg-black-hole about-content-div">
            <div className="about-vision-content">
              <h2>Our Vision</h2>
              <img src="/assets/vision.png" className="about-vision-img-sm" />
              <p>
                To be a leading outsourcing partner recognized for our
                commitment to quality, innovation, and client satisfaction. We
                strive to create value for our clients by leveraging our
                expertise and the latest technology in all our service
                offerings.
              </p>
            </div>
            <img src="/assets/vision.png" className="about-vision-img-lg" />
          </div>

          <div className="about-mission bg-black-hole">
            <img src="/assets/mission.png" className="about-mission-img-lg" />
            <div className="about-mission-content">
              <h2>Our Mission</h2>
              <img src="/assets/mission.png" className="about-mission-img-sm" />
              <p>
                To deliver tailored outsourcing solutions that meet the unique
                needs of our clients, enabling them to focus on their core
                business activities. We aim to provide high-quality services
                that not only meet but exceed client expectations, fostering
                long-term partnerships built on trust and reliability.
              </p>
            </div>
          </div>

          <div className="about-values-container">
            <h1>We Live by These Values</h1>
            <div className="about-values__spacer-40"></div>
            <div className="values-container">
              {values.map((value, index) => (
                <div className="value" key={index}>
                  <img src={value.imgSrc} alt={`value-${index}`} />
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
            <div className="about-values__spacer-40"></div>
          </div>

          <div className="about-why bg-black-hole about-content-div">
            <h2>Why Choose Us?</h2>
            <div className="about-why-grid">
              <div className="about-why-card">
                <img src="/assets/expert.png" />
                <strong>Expert Team</strong>
                <p>
                  Summarize and interpret historical data to understand trends
                  and patterns, providing a clear overview of business
                  performance over time.ing easy storage and retrieval.
                </p>
              </div>

              <div className="about-why-card">
                <img src="/assets/solutions.png" />
                <strong>Customized Solutions</strong>
                <p>
                  Identify the reasons behind past outcomes by analyzing data to
                  uncover correlations and insights that can inform future
                  strategies.
                </p>
              </div>

              <div className="about-why-card">
                <img src="/assets/technology.png" />
                <strong>Technology-Driven</strong>
                <p>
                  Utilize statistical models and machine learning techniques to
                  forecast future trends and behaviors, empowering businesses to
                  anticipate market changes.
                </p>
              </div>

              <div className="about-why-card">
                <img src="/assets/client.png" />
                <strong>Client-Centric Approach</strong>
                <p>
                  Offer recommendations based on data-driven insights, helping
                  organizations optimize processes, allocate resources, and
                  mitigate risks effectively.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="about-journey bg-black-hole about-content-div">
            <h2>Our Journey</h2>
            <div className="about-journey-flex">
              <p>
                Founded with a passion for excellence, Incisive Solutions has
                evolved into a trusted partner for businesses looking to
                optimize their operations and improve service delivery. Our
                commitment to quality and client satisfaction has led to a 100%
                client retention ratio, a testament to our dedication and
                effectiveness.
              </p>
              <img src="/assets/journey.png" />
              <p>
                Join us on our journey to redefine outsourcing services, and let{' '}
                <span>Incisive Solutions</span> help your business thrive in a
                competitive landscape. Together, we can unlock new opportunities
                and achieve greater success.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
