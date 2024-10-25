import React, { useEffect, useRef } from 'react';
import './hr-functions-section-1.css';

function HRFunctionsSection1() {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = cardRef.current.querySelectorAll('.hr-functions-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hr-functions-section-1-container" ref={cardRef}>
      <div className="hfs1-spacer__60"></div>
      <h1>Streamlining Your HR Processes for Enhanced Efficiency</h1>

      <div className="hr-functions-section-1-content">
        <div className="hr-functions-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="hr-functions-card">
            At <strong>Incisive Solutions</strong>, we recognize that effective
            human resource management is essential for organizational success.
            Our <strong>HR Functions Services</strong> are designed to
            streamline and enhance your HR processes, allowing you to focus on
            your core business while we handle the complexities of HR
            management.
          </p>

          <p className="hr-functions-card">
            Our services include:
            <ul>
              <li>
                <strong>Recruitment & Staffing:</strong> We help you find the
                right talent for your organization through comprehensive
                recruitment strategies, including job postings, candidate
                screening, and interview coordination.
              </li>
              <li>
                <strong>Payroll Management:</strong> Simplify your payroll
                processes with our accurate and timely payroll services,
                ensuring compliance with regulations while saving you time and
                reducing errors.
              </li>
              <li>
                <strong>Employee Onboarding:</strong> Facilitate a smooth
                transition for new hires with our structured onboarding
                processes, ensuring they feel welcomed and well-equipped to
                start their journey with your company.
              </li>
              <li>
                <strong>Performance Management:</strong> Implement effective
                performance appraisal systems that align with your business
                goals, helping you track employee progress and foster
                professional development.
              </li>
              <li>
                <strong>Employee Relations:</strong> Foster a positive work
                environment through our employee relations services, including
                conflict resolution, policy implementation, and communication
                strategies.
              </li>
            </ul>
          </p>

          <p className="hr-functions-card">
            At <strong>Incisive Solutions</strong>, our experienced HR
            professionals work closely with you to understand your unique needs,
            providing tailored solutions that enhance your HR functions. By
            leveraging our expertise, you can improve employee satisfaction,
            optimize HR operations, and ultimately drive organizational success.
          </p>
        </div>

        <div className="hr-functions-section-1-right">
          <img src="/assets/hr-functions-section-1.png" />
        </div>
      </div>
    </section>
  );
}

export default HRFunctionsSection1;
