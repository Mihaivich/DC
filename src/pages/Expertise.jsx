import React from "react";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="expertise-header">
        <h1>Our Expertise</h1>
        <p>Core Services and Strategic Approach</p>
      </div>

      <div className="expertise-content">
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <h2>Project Management</h2>
            <p>
              We help companies plan and manage projects from start to finish,
              making sure everything stays on time and within budget.
            </p>
            <ul>
              <li>Large-scale implementation projects</li>
              <li>Cross-functional team coordination</li>
              <li>Risk management and mitigation</li>
              <li>Resource optimization</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h2>Logistics Solutions</h2>
            <p>
              Our team streamlines your supply chain to make sure products move
              efficiently and smoothly from start to finish.
            </p>
            <ul>
              <li>Supply chain optimization</li>
              <li>Warehouse management</li>
              <li>Transportation planning</li>
              <li>Inventory control systems</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h2>Marketing Strategies</h2>
            <p>
              We design creative marketing plans that connect your brand with
              the right audience and boost engagement.
            </p>
            <ul>
              <li>Brand development and positioning</li>
              <li>Digital marketing campaigns</li>
              <li>Market research and analysis</li>
              <li>Customer engagement strategies</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h2>Business Consulting</h2>
            <p>
              We work with businesses to find new opportunities, solve problems,
              and improve performance.
            </p>
            <ul>
              <li>Business process optimization</li>
              <li>Strategic planning</li>
              <li>Organizational development</li>
              <li>Performance measurement</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h2>Financial Analysis</h2>
            <p>
              We use data to help organizations make smarter financial decisions
              and plan for the future.
            </p>
            <ul>
              <li>Budget planning and forecasting</li>
              <li>Cost-benefit analysis</li>
              <li>Investment strategy</li>
              <li>Financial risk assessment</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-icon">
              <i className="fas fa-users"></i>
            </div>
            <h2>Talent Development</h2>
            <p>
              We help companies build strong teams through training, leadership
              programs, and team-building activities.
            </p>
            <ul>
              <li>Leadership training programs</li>
              <li>Skills assessment and development</li>
              <li>Team building initiatives</li>
              <li>Performance management systems</li>
            </ul>
          </div>
        </div>

        <section className="expertise-approach">
          <h2>Our Approach</h2>
          <div className="approach-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discover</h3>
              <p>
                We begin by understanding your business, challenges, and
                objectives through in-depth consultation.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Analyze</h3>
              <p>
                Our team analyzes your current processes and identifies
                opportunities for improvement.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Strategize</h3>
              <p>
                We develop tailored strategies and solutions designed to meet
                your specific needs.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Implement</h3>
              <p>
                Our experts work alongside your team to implement solutions
                efficiently and effectively.
              </p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Evaluate</h3>
              <p>
                We continuously monitor performance and make adjustments to
                ensure optimal results.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expertise;
