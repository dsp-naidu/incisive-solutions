import React, { useEffect } from 'react';
import './web-dev-section-1.css';

function WebDevSection1() {
  useEffect(() => {
    const cards = document.querySelectorAll('.web-dev-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wd-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('wd-card-in-view');
            {
              /* Reset class when out of view */
            }
            // entry.target.classList.add('out-of-view');
          }
        });
      },
      {
        threshold: 0.7, // Trigger when 70% of the card is in view
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
    <section className="web-dev-section-1-container">
      <div className="wds1-spacer__60"></div>
      <h1>Building Dynamic and User-Centric Digital Experiences</h1>

      <div className="web-dev-section-1-content">
        <div className="web-dev-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="web-dev-card">
            In the fast-paced digital landscape, having a robust online presence
            is vital for business success. At{' '}
            <strong>Incisive Solutions</strong>, our{' '}
            <strong>Web Development Services</strong> are tailored to create
            high-quality, scalable, and user-friendly websites that effectively
            represent your brand and engage your audience.
          </p>

          <p className="web-dev-card">
            Our services include:
            <ul>
              <li>
                <strong>Custom Website Development:</strong> We design and build
                bespoke websites tailored to your specific needs, ensuring a
                unique online presence that stands out in the competitive
                market.
              </li>
              <li>
                <strong>E-commerce Solutions:</strong> Create seamless online
                shopping experiences with our e-commerce web development
                services, including secure payment gateways and user-friendly
                interfaces.
              </li>
              <li>
                <strong>Content Management Systems (CMS):</strong> Develop
                websites using popular CMS platforms like WordPress, Joomla, and
                Drupal, allowing you to manage your content easily without
                technical expertise.
              </li>
              <li>
                <strong>Responsive Web Design:</strong> Ensure that your website
                looks great and functions well on all devices, from desktops to
                smartphones, enhancing user experience and accessibility.
              </li>
              <li>
                <strong>Web Application Development:</strong> Build interactive
                web applications that cater to your business needs, providing
                users with engaging and functional tools and features.
              </li>
            </ul>
          </p>

          <p className="web-dev-card">
            At <strong>Incisive Solutions</strong>, we leverage the latest
            technologies and best practices in web development to deliver
            solutions that not only meet your goals but also provide a seamless
            user experience. Our dedicated team works closely with you
            throughout the development process, from initial concept to launch,
            ensuring that your vision comes to life effectively and efficiently.
          </p>
        </div>

        <div className="web-dev-section-1-right">
          <img src="/assets/web-dev-section-1.jpeg" />
        </div>
      </div>
    </section>
  );
}

export default WebDevSection1;
