import React from "react";
import "../styles/Government.css";

const Government = () => {
  return (
    <div className="government">
      <div className="government-header">
        <h1>Government Contracting</h1>
        <p>Certifications and Contracting Capabilities</p>
      </div>

      <div className="government-content">
        <section className="certifications">
          <h2>Our Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <h3>WOSB</h3>
              <p>Woman-Owned Small Business</p>
              <div className="cert-description">
                <p>
                  Certified as a woman-owned small business to access federal
                  contracting opportunities.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <h3>WBENC</h3>
              <p>Women's Business Enterprise National Council</p>
              <div className="cert-description">
                <p>
                  Recognized as a 51% woman-owned and managed business, allowing
                  us to partner with major organizations.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <h3>8(a) Program</h3>
              <p>SBA 8(a) Business Development Program (Pending)</p>
              <div className="cert-description">
                <p>
                  We are in the process of earning 8(a) certification to expand
                  our federal contracting work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities">
          <h2>Government Contracting Capabilities</h2>
          <div className="capabilities-content">
            <div className="capability-item">
              <h3>Contract Management</h3>
              <p>
                We manage large government contracts and make sure every project
                runs smoothly
              </p>
            </div>

            <div className="capability-item">
              <h3>Compliance Expertise</h3>
              <p>
                Our team ensures that all projects meet government rules and
                standards.
              </p>
            </div>

            <div className="capability-item">
              <h3>Past Performance</h3>
              <p>
                We have successfully delivered projects for Fortune 500
                companies and government agencies.
              </p>
            </div>

            <div className="capability-item">
              <h3>Scalable Solutions</h3>
              <p>
                Our services can adapt to fit projects of any size—from small
                departments to large organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="contracting-process">
          <h2>Our Government Contracting Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number-gov">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>
                  We begin with a thorough understanding of your agency's needs
                  and objectives.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number-gov">2</div>
              <div className="step-content">
                <h3>Proposal Development</h3>
                <p>
                  Our team develops a comprehensive proposal tailored to your
                  specific requirements.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number-gov">3</div>
              <div className="step-content">
                <h3>Contract Negotiation</h3>
                <p>
                  We work with your contracting officers to finalize terms and
                  conditions.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number-gov">4</div>
              <div className="step-content">
                <h3>Project Execution</h3>
                <p>
                  Our experienced team implements the solution according to
                  agreed specifications.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number-gov">5</div>
              <div className="step-content">
                <h3>Ongoing Support</h3>
                <p>
                  We provide continued support and maintenance as needed
                  throughout the contract period.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Government;
