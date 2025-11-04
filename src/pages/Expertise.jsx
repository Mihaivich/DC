import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import ProcessStep from "../components/ProcessStep";
import Silk from "../components/Silk";

const Expertise = () => {
  return (
    <div className="w-full relative min-h-screen">
      {/* Silk Background */}
      <div className="fixed inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#4F46E5"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Content with overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <PageHeader
          title="Our Expertise"
          subtitle="Core Services and Strategic Approach"
        />
        {/* <section className="relative flex items-center justify-center text-white text-center h-screen overflow-hidden">
          内容层
          <div className="relative z-10 max-w-4xl px-5 sm:px-8 lg:px-20">
            <h1
              className="font-bold mb-4 leading-tight drop-shadow-lg"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
            >
              Our Expertise
            </h1>
            <h2
              className="font-normal mb-6 leading-relaxed drop-shadow-md"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Core Services and Strategic Approach
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Delivering excellence through proven methodologies and innovative
              solutions
            </p>
          </div>
        </section> */}

        {/* Services Section */}
        <section className="pt-20 px-5 sm:px-8 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-center mb-12 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Our Services
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              <ServiceCard
                icon="fas fa-tasks"
                title="Project Management"
                description="We help companies plan and manage projects from start to finish, making sure everything stays on time and within budget."
                features={[
                  "Large-scale implementation projects",
                  "Cross-functional team coordination",
                  "Risk management and mitigation",
                  "Resource optimization",
                ]}
              />

              <ServiceCard
                icon="fas fa-truck"
                title="Logistics Solutions"
                description="Our team streamlines your supply chain to make sure products move efficiently and smoothly from start to finish."
                features={[
                  "Supply chain optimization",
                  "Warehouse management",
                  "Transportation planning",
                  "Inventory control systems",
                ]}
              />

              <ServiceCard
                icon="fas fa-bullhorn"
                title="Marketing Strategies"
                description="We design creative marketing plans that connect your brand with the right audience and boost engagement."
                features={[
                  "Brand development and positioning",
                  "Digital marketing campaigns",
                  "Market research and analysis",
                  "Customer engagement strategies",
                ]}
              />

              <ServiceCard
                icon="fas fa-handshake"
                title="Business Consulting"
                description="We work with businesses to find new opportunities, solve problems, and improve performance."
                features={[
                  "Business process optimization",
                  "Strategic planning",
                  "Organizational development",
                  "Performance measurement",
                ]}
              />

              <ServiceCard
                icon="fas fa-chart-line"
                title="Financial Analysis"
                description="We use data to help organizations make smarter financial decisions and plan for the future."
                features={[
                  "Budget planning and forecasting",
                  "Cost-benefit analysis",
                  "Investment strategy",
                  "Financial risk assessment",
                ]}
              />

              <ServiceCard
                icon="fas fa-users"
                title="Talent Development"
                description="We help companies build strong teams through training, leadership programs, and team-building activities."
                features={[
                  "Leadership training programs",
                  "Skills assessment and development",
                  "Team building initiatives",
                  "Performance management systems",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="mx-auto text-center navbar-glassmorphism w-fit max-w-5xl mb-12">
              <div className="p-8 sm:p-10 lg:p-12">
                <h2
                  className="font-bold mb-8 text-white drop-shadow-lg"
                  style={{ fontSize: "2.2rem" }}
                >
                  Our Approach
                </h2>
                <p
                  className="mb-5 text-white/90 drop-shadow-md"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  We follow a systematic approach to ensure every project
                  delivers exceptional results. Our proven methodology combines
                  industry best practices with innovative solutions tailored to
                  your specific needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <ProcessStep
                stepNumber={1}
                title="Discovery"
                description="We start by understanding your business needs and challenges."
              />

              <ProcessStep
                stepNumber={2}
                title="Analysis"
                description="Our team analyzes your current situation and identifies opportunities."
              />

              <ProcessStep
                stepNumber={3}
                title="Strategy"
                description="We develop a customized strategy tailored to your specific goals."
              />

              <ProcessStep
                stepNumber={4}
                title="Implementation"
                description="We execute the plan with precision and attention to detail."
              />

              <ProcessStep
                stepNumber={5}
                title="Optimization"
                description="We continuously monitor and optimize for the best results."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expertise;
