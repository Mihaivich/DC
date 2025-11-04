import React from "react";

const ContactInfo = ({ icon, title, content, isMultiLine = false }) => {
  return (
    <div className="flex mb-4 md:mb-6">
      <i
        className={`${icon} text-white mr-3 md:mr-4 min-w-6 md:min-w-8 text-lg md:text-xl drop-shadow-md`}
      ></i>
      <div>
        <h3 className="mb-1 font-medium text-lg md:text-xl text-white drop-shadow-md">
          {title}
        </h3>
        {isMultiLine ? (
          <div className="text-white/80 leading-relaxed drop-shadow-sm">
            {content}
          </div>
        ) : (
          <p className="text-white/80 leading-relaxed drop-shadow-sm">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
