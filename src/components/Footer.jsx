import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Diversity Connected</h3>
            <p>
              Helping businesses grow with smart solutions in project
              management, logistics, and marketing.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/expertise">Our Expertise</Link>
              </li>
              <li>
                <Link to="/government">Government Contracting</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Business Avenue,
                Suite 500
                <br />
                Chicago, IL 60601
              </p>
              <p>
                <i className="fas fa-phone"></i> (312) 555-1234
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@diversityconnected.com
              </p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ITC4850 Information Technology
            Project· Built by Jie Zheng.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
