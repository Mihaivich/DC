import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import ColorBends from "../components/ColorBends";
import SpotlightCard from "../components/SpotlightCard";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-white text-center h-screen overflow-hidden">
        {/* ColorBends 背景 */}
        <div className="fixed inset-0 z-0">
          <ColorBends
            colors={[
              '#0F172A', // deep navy (slate-900)
              '#1E3A8A', // deep blue (blue-900)
              '#3730A3', // indigo-800
              '#6D28D9'  // violet-700
            ]}
            // colors={[
            //   "#7F1D1D", // dark red (red-900)
            //   "#7C2D12", // dark amber/orange (amber-900)
            //   "#064E3B", // deep green (emerald-900)
            //   "#0F172A", // deep navy (slate-950)
            //   "#3B0764", // deep violet (violet-950)
            // ]}
          />
        </div>

        {/* 半透明遮罩层增强文字可读性 */}
        {/* <div className="absolute inset-0 bg-black/20 z-5"></div> */}

        {/* 内容层 */}
        <div className="relative z-10 max-w-4xl px-5 sm:px-8 lg:px-20">
          <h1
            className="font-bold mb-4 leading-tight drop-shadow-lg"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
          >
            Empowering Businesses with Strategic Solutions
          </h1>
          <h2
            className="font-normal mb-6 leading-relaxed drop-shadow-md"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Project Management, Logistics, and Marketing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Driving success with 20+ years of expertise and Fortune 500 trust
          </p>
          <button onClick={handleLearnMoreClick} className="button-secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-10 lg:py-10 px-5 sm:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <SpotlightCard
            className="custom-spotlight-card text-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            spotlightColor="rgba(0, 229, 255, 0.5)"
          >
            <h3 className="text-white font-bold" style={{ fontSize: "1.8rem" }}>
              20+ Years
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-1">
              of Experience
            </p>
            <span className="text-sm sm:text-base text-white">
              Managing large-scale projects
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card text-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            spotlightColor="rgba(0, 229, 255, 0.5)"
          >
            <h3 className="text-white font-bold" style={{ fontSize: "1.8rem" }}>
              $6M+
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-1">
              Annual Contract Value
            </p>
            <span className="text-sm sm:text-base text-white">
              Handling major corporate contracts
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card text-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            spotlightColor="rgba(0, 229, 255, 0.5)"
          >
            <h3 className="text-white font-bold" style={{ fontSize: "1.8rem" }}>
              Gov-Ready
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-1">
              Certifications
            </p>
            <span className="text-sm sm:text-base text-white">
              WOSB, WBENC and 8(a) (pending)
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card text-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            spotlightColor="rgba(0, 229, 255, 0.5)"
          >
            <h3 className="text-white font-bold" style={{ fontSize: "1.8rem" }}>
              Trusted by
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-1">
              Fortune 500 Companies
            </p>
            <span className="text-sm sm:text-base text-white">
              Walmart, CVS, Target, Luster Products
            </span>
          </SpotlightCard>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 px-5 sm:px-8 lg:px-20 text-white">
        <div className="mx-auto text-center navbar-glassmorphism w-fit max-w-4xl">
          <div className="p-8 sm:p-10 lg:p-12">
            <h2 className="font-bold mb-8" style={{ fontSize: "2.5rem" }}>
              Our Mission
            </h2>
            <p
              className="mb-5"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              At Diversity Connected, we are committed to helping businesses
              thrive by delivering expert project management, seamless logistics
              solutions, and innovative marketing strategies. With over 20 years
              of experience, we specialize in managing large-scale projects,
              ensuring operational efficiency, and driving sustainable growth
              for our clients.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Whether you're a Fortune 500 company or a growing business looking
              to streamline operations, we bring expertise, reliability, and
              government-certified capabilities to the table.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
