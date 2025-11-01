import React from "react";

const PageHeader = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  className = "" 
}) => {
  return (
    <div
      className={`text-white text-center py-24 px-5 ${className}`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="mb-4 font-bold"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
      >
        {title}
      </h1>
      <p className="max-w-2xl mx-auto" style={{ fontSize: "1.2rem" }}>
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;