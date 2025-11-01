import React from 'react';

const TeamMember = ({ name, position, avatar }) => {
  return (
    <div className="text-center bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
      <div 
        className="w-36 h-36 bg-gray-300 rounded-full mx-auto mb-5"
        style={{
          backgroundImage: avatar ? `url(${avatar})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <h3 className="mb-1 font-bold" style={{ fontSize: "1.5rem" }}>
        {name}
      </h3>
      <p className="text-gray-500" style={{ fontSize: "1rem" }}>
        {position}
      </p>
    </div>
  );
};

export default TeamMember;