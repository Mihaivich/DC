import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Businesses with Strategic Solutions</h1>
          <h2>Project Management, Logistics, and Marketing</h2>
          <p>Driving success with 20+ years of expertise and Fortune 500 trust</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-container">
          <div className="stat-item">
            <h3>20+ Years</h3>
            <p>of Experience</p>
            <span>Managing large-scale projects</span>
          </div>
          <div className="stat-item">
            <h3>$6M+</h3>
            <p>in Contract Management Annually</p>
            <span>Handling major corporate contracts</span>
          </div>
          <div className="stat-item">
            <h3>Government-Ready</h3>
            <p>Certifications</p>
            <span>WOSB, WBENC and 8(a) (pending)</span>
          </div>
          <div className="stat-item">
            <h3>Trusted by</h3>
            <p>Fortune 500 Companies</p>
            <span>Walmart, CVS, Target, Luster Products</span>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Diversity Connected, we are committed to helping businesses thrive by delivering expert project management, 
            seamless logistics solutions, and innovative marketing strategies. With over 20 years of experience, 
            we specialize in managing large-scale projects, ensuring operational efficiency, and driving sustainable 
            growth for our clients.
          </p>
          <p>
            Whether you're a Fortune 500 company or a growing business looking to streamline operations, 
            we bring expertise, reliability, and government-certified capabilities to the table.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;