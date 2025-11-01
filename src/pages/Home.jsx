import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import heroBg from "../assets/images/hero-bg.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white text-center"
        style={{
          height: "calc(100vh - 80px)",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl px-5 sm:px-8 lg:px-20">
          <h1
            className="font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
          >
            Empowering Businesses with Strategic Solutions
          </h1>
          <h2
            className="font-normal mb-6 leading-relaxed"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Project Management, Logistics, and Marketing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Driving success with 20+ years of expertise and Fortune 500 trust
          </p>
          <button
            onClick={handleLearnMoreClick}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-sky-400 hover:bg-primary text-white border-none rounded-lg text-base sm:text-lg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 bg-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCard
            mainNumber="20+ Years"
            title="of Experience"
            subtitle="Managing large-scale projects"
          />

          <StatCard
            mainNumber="$6M+"
            title="in Contract Management Annually"
            subtitle="Handling major corporate contracts"
          />

          <StatCard
            mainNumber="Government-Ready"
            title="Certifications"
            subtitle="WOSB, WBENC and 8(a) (pending)"
          />

          <StatCard
            mainNumber="Trusted by"
            title="Fortune 500 Companies"
            subtitle="Walmart, CVS, Target, Luster Products"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-white"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold mb-8" style={{ fontSize: "2.5rem" }}>
            Our Mission
          </h2>
          <p className="mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            At Diversity Connected, we are committed to helping businesses
            thrive by delivering expert project management, seamless logistics
            solutions, and innovative marketing strategies. With over 20 years
            of experience, we specialize in managing large-scale projects,
            ensuring operational efficiency, and driving sustainable growth for
            our clients.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            Whether you're a Fortune 500 company or a growing business looking
            to streamline operations, we bring expertise, reliability, and
            government-certified capabilities to the table.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
