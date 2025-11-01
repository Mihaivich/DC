import React from "react";
import PageHeader from "../components/PageHeader";
import TeamMember from "../components/TeamMember";
import aboutBg from "../assets/images/about-bg.png";
import sara from "../assets/images/sara.png";
import john from "../assets/images/john.jpg";
import david from "../assets/images/david.png";
import michael from "../assets/images/michael.png";

const About = () => {
  return (
    <div className="w-full">
      <PageHeader
        backgroundImage={aboutBg}
        title="About Us"
        subtitle="Our Story, Mission, and Leadership"
      />

      <div className="max-w-6xl mx-auto py-16 px-5">
        <section className="mb-16">
          <h2
            className="text-center mb-8 font-bold text-black"
            style={{ fontSize: "2.2rem" }}
          >
            Our Story
          </h2>
          <p className="mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            Founded over 20 years ago, Diversity Connected began with a vision
            to transform how businesses approach project management, logistics,
            and marketing. Our founder recognized a gap in the market for
            integrated solutions that could help companies streamline operations
            while maintaining quality and efficiency.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            What started as a small consulting firm has grown into a trusted
            partner for Fortune 500 companies and government agencies alike.
            Throughout our journey, we've maintained our commitment to
            excellence, innovation, and diversity.
          </p>
        </section>

        <section className="mb-16">
          <h2
            className="text-center mb-8 font-bold text-black"
            style={{ fontSize: "2.2rem" }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <h3
                className="text-primary font-bold mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                Excellence
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                We strive for excellence in every project, delivering results
                that exceed expectations.
              </p>
            </div>
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <h3
                className="text-primary font-bold mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                Integrity
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                We operate with transparency and honesty in all our business
                dealings.
              </p>
            </div>
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <h3
                className="text-primary font-bold mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                Innovation
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                We embrace new technologies and approaches to solve complex
                business challenges.
              </p>
            </div>
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <h3
                className="text-primary font-bold mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                Diversity
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                We celebrate diversity in our team, our thinking, and our
                solutions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-center mb-8 font-bold text-black"
            style={{ fontSize: "2.2rem" }}
          >
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              avatar={sara}
              name="Sara Gregory"
              position="Founder & CEO"
            />

            <TeamMember
              avatar={john}
              name="John Smith"
              position="Chief Operations Officer"
            />

            <TeamMember
              avatar={david}
              name="David Kim"
              position="Director of Project Management"
            />

            <TeamMember
              avatar={michael}
              name="Michael Brown"
              position="Head of Government Relations"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
