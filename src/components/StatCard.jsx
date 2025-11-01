import React from 'react';

const StatCard = ({ mainNumber, title, subtitle }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <h3 className="text-primary font-bold mb-3" style={{ fontSize: '1.8rem' }}>
        {mainNumber}
      </h3>
      <p className="text-lg sm:text-xl font-semibold mb-2">
        {title}
      </p>
      <span className="text-sm sm:text-base text-gray-600">
        {subtitle}
      </span>
    </div>
  );
};

export default StatCard;