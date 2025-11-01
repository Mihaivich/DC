import React from 'react';

const ContactInfo = ({ icon, title, content, isMultiLine = false }) => {
  return (
    <div className="flex mb-4 md:mb-6">
      <i className={`${icon} text-blue-500 mr-3 md:mr-4 min-w-6 md:min-w-8 text-lg md:text-xl`}></i>
      <div>
        <h3 className="mb-1 font-medium text-lg md:text-xl" style={{ color: '#1a1a2e' }}>
          {title}
        </h3>
        {isMultiLine ? (
          <div className="text-gray-600 leading-relaxed">
            {content}
          </div>
        ) : (
          <p className="text-gray-600 leading-relaxed">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;