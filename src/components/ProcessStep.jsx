import React from 'react';

const ProcessStep = ({ stepNumber, title, description }) => {
  return (
    <div className="flex-1 min-w-[200px] text-center px-4 mb-8">
      <div 
        className="w-15 h-15 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-5"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#3a86ff',
          fontSize: '1.5rem'
        }}
      >
        {stepNumber}
      </div>
      <h3 className="mb-3 font-bold" style={{ fontSize: '1.3rem', color: '#1a1a2e' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;