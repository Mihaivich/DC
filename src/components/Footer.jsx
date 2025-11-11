import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white px-5 sm:px-8 lg:px-20"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <div className="navbar-glassmorphism max-w-6xl mx-auto px-8 sm:px-10 lg:px-20 pb-5 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <h3
              className="text-2xl mb-5 relative font-bold"
              style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Diversity Connected
              <span
                className="absolute left-0 block"
                style={{
                  content: "",
                  bottom: "-10px",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></span>
            </h3>
            <p
              className="mb-5"
              style={{
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Helping businesses grow with smart solutions in project
              management, logistics, and marketing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/diversity-connected/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Diversity Connected's LinkedIn profile"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 social-glow"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fdiverse_connect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Diversity Connected's X profile"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 social-glow"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/diversityconnected"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Diversity Connected's Facebook profile"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 social-glow"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/diversityconnected/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Diversity Connected's Instagram profile"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 social-glow"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3
              className="text-2xl mb-5 relative font-bold"
              style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Quick Links
              <span
                className="absolute left-0 block"
                style={{
                  content: "",
                  bottom: "-10px",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></span>
            </h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-300 no-underline font-medium transition-all duration-300 navbar-text-glow"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-gray-300 no-underline font-medium transition-all duration-300 navbar-text-glow"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/expertise"
                  className="text-gray-300 no-underline font-medium transition-all duration-300 navbar-text-glow"
                >
                  Our Expertise
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/government"
                  className="text-gray-300 no-underline font-medium transition-all duration-300 navbar-text-glow"
                >
                  Government Contracting
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-gray-300 no-underline font-medium transition-all duration-300 navbar-text-glow"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-2xl mb-5 relative font-bold"
              style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Contact Us
              <span
                className="absolute left-0 block"
                style={{
                  content: "",
                  bottom: "-10px",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "white",
                }}
              ></span>
            </h3>
            <address style={{ fontStyle: "normal" }}>
              <p
                className="mb-2 flex items-start"
                style={{ marginBottom: "10px" }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                ></i>
                2045 W Grand Ave Ste B PMB 389997
                <br />
                Chicago, IL 60612-1577, USA
              </p>
              <p
                className="mb-2 flex items-start"
                style={{ marginBottom: "10px" }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                ></i>
                5473 Blair Rd Ste 100 PMB 389997
                <br />
                Dallas, TX 75231-4227, USA
              </p>
              <p
                className="mb-2 flex items-start"
                style={{ marginBottom: "10px" }}
              >
                <i
                  className="fas fa-phone"
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                ></i>
                (708) 557-1774
              </p>
              <p
                className="mb-2 flex items-start"
                style={{ marginBottom: "10px" }}
              >
                <i
                  className="fas fa-envelope"
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                ></i>
                Sara.Gregory@DC.com
              </p>
            </address>
          </div>
        </div>

        <div
          className="flex justify-between items-center flex-wrap pt-5 md:flex-row flex-col gap-4 md:gap-0 text-center md:text-left"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} ITC4850 Information Technology
            Project · Built by Jie Zheng.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-300 no-underline transition-colors duration-300 ease-in-out"
              style={{ color: "#ccc" }}
              onMouseEnter={(e) => (e.target.style.color = "#4cc9f0")}
              onMouseLeave={(e) => (e.target.style.color = "#ccc")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline transition-colors duration-300 ease-in-out"
              style={{ color: "#ccc" }}
              onMouseEnter={(e) => (e.target.style.color = "#4cc9f0")}
              onMouseLeave={(e) => (e.target.style.color = "#ccc")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
