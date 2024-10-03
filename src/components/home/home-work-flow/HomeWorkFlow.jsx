import React from 'react';
import './home-work-flow.css';

function HomeWorkFlow() {
  return (
    <div className="home-work-flow-container">
      <h1>OUR WORK FLOW PROCESS</h1>
      <p>
        Incisive Solutions follows a systematic and highly organized process of
        carrying out the required services, so as to ensure a hassle-free,
        quality-oriented, and reliable output. We give a greater priority to
        manage the process in an efficient way.
      </p>

      <div className="workflow-section">
        <div className="workflow-card">
          <span>1.</span>
          <div className="workflow-card-content">
            <h2>New Lead</h2>
            <p>A potential client's enquiry - the project's inception.</p>
          </div>
        </div>

        <div className="workflow-card">
          <span>2.</span>
          <div className="workflow-card-content">
            <h2>Sample Processing</h2>
            <p>Determines how the project's final output will be.</p>
          </div>
        </div>

        <div className="workflow-card">
          <span>3.</span>
          <div className="workflow-card-content">
            <h2>Rate Fixing</h2>
            <p>Budget-friendly pricing for the project.</p>
          </div>
        </div>

        <div className="workflow-card">
          <span>4.</span>
          <div className="workflow-card-content">
            <h2>Quality Check</h2>
            <p>Rigorous quality checks while on the project.</p>
          </div>
        </div>

        <div className="workflow-card">
          <span>5.</span>
          <div className="workflow-card-content">
            <h2>Auditing</h2>
            <p>Final quality inspection that ensures project delivery.</p>
          </div>
        </div>

        <div className="workflow-card">
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
