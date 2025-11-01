import React from 'react';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
      <div className="mb-5" style={{ fontSize: '2.5rem', color: '#3a86ff' }}>
        <i className={icon}></i>
      </div>
      <h2 className="mb-4 font-bold" style={{ fontSize: '1.8rem', color: '#1a1a2e' }}>
        {title}
      </h2>
      <p className="mb-5" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        {description}
      </p>
      <ul className="pl-5">
        {features.map((feature, index) => (
          <li key={index} className="mb-2" style={{ fontSize: '0.95rem' }}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;