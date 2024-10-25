import React from 'react';
import './home-work-flow.css';

function HomeWorkFlow() {

  return (
    <div className="home-work-flow-container">
      <h1>Our Work Flow Process</h1>
      <p>
        Incisive Solutions follows a systematic and highly organized process of
        carrying out the required services, so as to ensure a hassle-free,
        quality-oriented, and reliable output. We give a greater priority to
        manage the process in an efficient way.
      </p>

      <div className="workflow-section scroll-container">
        <div className="workflow-card scroll-section" id="section-1">
          <span>1.</span>
          <div className="workflow-card-content">
            <h2>New Lead</h2>
            <p>
              A potential client&apos;s enquiry - the project&apos;s inception.
            </p>
          </div>
        </div>

        <div className="workflow-card scroll-section" id="section-2">
          <span>2.</span>
          <div className="workflow-card-content">
            <h2>Sample Processing</h2>
            <p>Determines how the project&apos;s final output will be.</p>
          </div>
        </div>

        <div className="workflow-card scroll-section" id="section-3">
          <span>3.</span>
          <div className="workflow-card-content">
            <h2>Rate Fixing</h2>
            <p>Budget-friendly pricing for the project.</p>
          </div>
        </div>

        <div className="workflow-card scroll-section" id="section-4">
          <span>4.</span>
          <div className="workflow-card-content">
            <h2>Quality Check</h2>
            <p>Rigorous quality checks while on the project.</p>
          </div>
        </div>

        <div className="workflow-card scroll-section" id="section-5">
          <span>5.</span>
          <div className="workflow-card-content">
            <h2>Auditing</h2>
            <p>Final quality inspection that ensures project delivery.</p>
          </div>
        </div>

        <div className="workflow-card scroll-section" id="section-6">
          <span>6.</span>
          <div className="workflow-card-content">
            <h2>Dispatch</h2>
            <p>Time-bound project delivery, always.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWorkFlow;
