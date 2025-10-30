import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 显示成功消息
    setShowSuccessMessage(true);

    // 清空表单
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // 3秒后隐藏成功消息
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Connect with Our Team</p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>

              {showSuccessMessage && (
                <div className="success-message">
                  <p>We took your information. You will be contacted soon!</p>
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>
                  123 Business Avenue, Suite 500
                  <br />
                  Chicago, IL 60601
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>(312) 555-1234</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@diversityconnected.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Us</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
