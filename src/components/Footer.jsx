import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer 
      className="text-white"
      style={{ 
        backgroundColor: '#1a1a2e',
        padding: '60px 0 20px'
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div 
          className="grid gap-10 mb-10"
          style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
          }}
        >
          <div>
            <h3 
              className="text-2xl mb-5 relative font-bold"
              style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}
            >
              Diversity Connected
              <span 
                className="absolute left-0 block"
                style={{
                  content: '',
                  bottom: '-10px',
                  width: '50px',
                  height: '2px',
                  backgroundColor: '#4cc9f0'
                }}
              ></span>
            </h3>
            <p 
              className="mb-5"
              style={{
                marginBottom: '20px',
                lineHeight: '1.6'
              }}
            >
              Helping businesses grow with smart solutions in project
              management, logistics, and marketing.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4cc9f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4cc9f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4cc9f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white no-underline transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4cc9f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 
              className="text-2xl mb-5 relative font-bold"
              style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}
            >
              Quick Links
              <span 
                className="absolute left-0 block"
                style={{
                  content: '',
                  bottom: '-10px',
                  width: '50px',
                  height: '2px',
                  backgroundColor: '#4cc9f0'
                }}
              ></span>
            </h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link 
                  to="/" 
                  className="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                  style={{ color: '#ccc' }}
                  onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/about" 
                  className="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                  style={{ color: '#ccc' }}
                  onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/expertise" 
                  className="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                  style={{ color: '#ccc' }}
                  onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  Our Expertise
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/government" 
                  className="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                  style={{ color: '#ccc' }}
                  onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  Government Contracting
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/contact" 
                  className="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-blue-400"
                  style={{ color: '#ccc' }}
                  onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
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
                fontSize: '1.5rem',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}
            >
              Contact Us
              <span 
                className="absolute left-0 block"
                style={{
                  content: '',
                  bottom: '-10px',
                  width: '50px',
                  height: '2px',
                  backgroundColor: '#4cc9f0'
                }}
              ></span>
            </h3>
            <address style={{ fontStyle: 'normal' }}>
              <p 
                className="mb-2 flex items-start"
                style={{ marginBottom: '10px' }}
              >
                <i 
                  className="fas fa-map-marker-alt"
                  style={{ 
                    marginRight: '10px',
                    marginTop: '5px'
                  }}
                ></i> 
                123 Business Avenue, Suite 500
                <br />
                Chicago, IL 60601
              </p>
              <p 
                className="mb-2 flex items-start"
                style={{ marginBottom: '10px' }}
              >
                <i 
                  className="fas fa-phone"
                  style={{ 
                    marginRight: '10px',
                    marginTop: '5px'
                  }}
                ></i> 
                (312) 555-1234
              </p>
              <p 
                className="mb-2 flex items-start"
                style={{ marginBottom: '10px' }}
              >
                <i 
                  className="fas fa-envelope"
                  style={{ 
                    marginRight: '10px',
                    marginTop: '5px'
                  }}
                ></i> 
                info@diversityconnected.com
              </p>
            </address>
          </div>
        </div>

        <div 
          className="flex justify-between items-center flex-wrap pt-5 md:flex-row flex-col gap-4 md:gap-0 text-center md:text-left"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px'
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
              style={{ color: '#ccc' }}
              onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 no-underline transition-colors duration-300 ease-in-out"
              style={{ color: '#ccc' }}
              onMouseEnter={(e) => e.target.style.color = '#4cc9f0'}
              onMouseLeave={(e) => e.target.style.color = '#ccc'}
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
