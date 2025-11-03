import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import ContactInfo from "../components/ContactInfo";
import GoogleMap from "../components/GoogleMap";
import contactBg from "../assets/images/contact-bg.jpg";
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
    <div className="w-full">
      <PageHeader
        backgroundImage={contactBg}
        title="Contact Us"
        subtitle="Connect with Our Team"
      />

      <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2
              className="mb-6 md:mb-8 font-bold text-2xl md:text-3xl"
              style={{ color: "#1a1a2e" }}
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-blue-500 text-white border-none rounded-md font-bold cursor-pointer transition-all duration-300 hover:bg-cyan-400"
                style={{ fontSize: "1.1rem" }}
              >
                Send Message
              </button>

              {showSuccessMessage && (
                <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-md mt-5 mb-5 text-center animate-fade-in">
                  <p className="m-0 font-medium">
                    We took your information. You will be contacted soon!
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2
              className="mb-6 md:mb-8 font-bold text-2xl md:text-3xl"
              style={{ color: "#1a1a2e" }}
            >
              Contact Information
            </h2>

            <ContactInfo
              icon="fas fa-phone"
              title="Phone"
              content="(708) 557-1774"
            />

            <ContactInfo
              icon="fas fa-envelope"
              title="Email"
              content="Sara.Gregory@DiversityConnected.com"
            />

            <ContactInfo
              icon="fas fa-clock"
              title="Business Hours"
              content={
                <>
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </>
              }
            />

            <div className="mt-8">
              <GoogleMap />
            </div>

            <div className="mt-6">
              <h3
                className="mb-3 md:mb-4 font-medium text-lg md:text-xl"
                style={{ color: "#1a1a2e" }}
              >
                Connect With Us
              </h3>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/company/diversity-connected/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-800 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fdiverse_connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-800 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/diversityconnected"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-800 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/diversityconnected/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-800 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1"
                >
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
