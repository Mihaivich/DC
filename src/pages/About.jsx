import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Learn about our journey, mission, and the team behind Diversity
          Connected
        </p>
      </div>

      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded over 20 years ago, Diversity Connected began with a vision
            to transform how businesses approach project management, logistics,
            and marketing. Our founder recognized a gap in the market for
            integrated solutions that could help companies streamline operations
            while maintaining quality and efficiency.
          </p>
          <p>
            What started as a small consulting firm has grown into a trusted
            partner for Fortune 500 companies and government agencies alike.
            Throughout our journey, we've maintained our commitment to
            excellence, innovation, and diversity.
          </p>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every project, delivering results
                that exceed expectations.
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We operate with transparency and honesty in all our business
                dealings.
              </p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and approaches to solve complex
                business challenges.
              </p>
            </div>
            <div className="value-item">
              <h3>Diversity</h3>
              <p>
                We celebrate diversity in our team, our thinking, and our
                solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sara Gregory</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>John Smith</h3>
              <p>Chief Operations Officer</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sarah Johnson</h3>
              <p>Director of Project Management</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Michael Brown</h3>
              <p>Head of Government Relations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
