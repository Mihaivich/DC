import React from 'react';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
      <div className="mb-5" style={{ fontSize: '2.5rem', color: 'white' }}>
        <i className={icon}></i>
      </div>
      <h2 className="mb-4 font-bold text-white drop-shadow-md" style={{ fontSize: '1.8rem' }}>
        {title}
      </h2>
      <p className="mb-5 text-white/90 drop-shadow-sm" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        {description}
      </p>
      <ul className="pl-5">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 text-white/80 drop-shadow-sm" style={{ fontSize: '0.95rem' }}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;