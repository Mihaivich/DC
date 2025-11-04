import React from 'react';

const ProcessStep = ({ stepNumber, title, description }) => {
  return (
    <div className="flex-1 min-w-[200px] text-center px-4 mb-8">
      <div 
        className="w-15 h-15 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-5 shadow-lg bg-white/20 backdrop-blur-sm border border-white/30"
        style={{
          width: '60px',
          height: '60px',
          fontSize: '1.5rem'
        }}
      >
        {stepNumber}
      </div>
      <h3 className="mb-3 font-bold text-white drop-shadow-md" style={{ fontSize: '1.3rem' }}>
        {title}
      </h3>
      <p className="text-white/90 drop-shadow-sm" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;