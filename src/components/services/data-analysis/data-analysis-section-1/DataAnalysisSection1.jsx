import React, { useEffect } from 'react';
import './data-analysis-section-1.css';

function DataAnalysisSection1() {
  useEffect(() => {
    const cards = document.querySelectorAll('.data-analysis-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('da-card-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('da-card-in-view');
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
    <section className="data-analysis-section-1-container">
      <div className="das1-spacer__60"></div>
      <h1>Unlocking Insights for Informed Decision-Making</h1>

      <div className="data-analysis-section-1-content">
        <div className="data-analysis-section-1-left">
          {/* <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1> */}
          <p className="data-analysis-card">
            In today&apos;s data-driven world, making sense of vast amounts of
            information is crucial for business success. At{' '}
            <strong>Incisive Solutions</strong>, our{' '}
            <strong>Data Analysis Services</strong> are designed to help
            organizations transform data into actionable insights, enabling
            informed decision-making and strategic planning.
          </p>

          <p className="data-analysis-card">
            Our services include:
            <ul>
              <li>
                <strong>Descriptive Analysis:</strong> Summarize and interpret
                historical data to understand trends and patterns, providing a
                clear overview of business performance over time.ing easy
                storage and retrieval.
              </li>
              <li>
                <strong>Diagnostic Analysis:</strong> Identify the reasons
                behind past outcomes by analyzing data to uncover correlations
                and insights that can inform future strategies.
              </li>
              <li>
                <strong>Predictive Analysis:</strong> Utilize statistical models
                and machine learning techniques to forecast future trends and
                behaviors, empowering businesses to anticipate market changes.
              </li>
              <li>
                <strong>Prescriptive Analysis:</strong> Offer recommendations
                based on data-driven insights, helping organizations optimize
                processes, allocate resources, and mitigate risks effectively.
              </li>
              <li>
                <strong>Custom Reporting:</strong> Create tailored reports and
                dashboards that provide stakeholders with clear, visual
                representations of key metrics and performance indicators.
              </li>
            </ul>
          </p>

          <p className="data-analysis-card">
            At <strong>Incisive Solutions</strong>, we combine advanced
            analytical techniques with industry expertise to deliver
            comprehensive data analysis solutions. Our team works closely with
            you to understand your specific needs, ensuring that the insights
            derived from your data are relevant, actionable, and aligned with
            your business goals.
          </p>
        </div>

        <div className="data-analysis-section-1-right">
          <img src="/assets/data-analysis-section-1.svg" />
        </div>
      </div>
    </section>
  );
}

export default DataAnalysisSection1;
