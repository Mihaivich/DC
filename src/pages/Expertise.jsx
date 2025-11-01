import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import ProcessStep from "../components/ProcessStep";
import expertiseBg from "../assets/images/expertise-bg.png";

const Expertise = () => {
  return (
    <div className="w-full">
      <PageHeader
        backgroundImage={expertiseBg}
        title="Our Expertise"
        subtitle="Core Services and Strategic Approach"
      />

      <div className="max-w-6xl mx-auto py-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <ServiceCard
            icon="fas fa-tasks"
            title="Project Management"
            description="We help companies plan and manage projects from start to finish, making sure everything stays on time and within budget."
            features={[
              "Large-scale implementation projects",
              "Cross-functional team coordination",
              "Risk management and mitigation",
              "Resource optimization"
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
              "Inventory control systems"
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
              "Customer engagement strategies"
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
              "Performance measurement"
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
              "Financial risk assessment"
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
              "Performance management systems"
            ]}
          />
        </div>

        <section>
          <h2 className="text-center mb-8 font-bold" style={{ fontSize: '2.2rem', color: '#1a1a2e' }}>Our Approach</h2>
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
        </section>
      </div>
    </div>
  );
};

export default Expertise;
