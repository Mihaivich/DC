import React from "react";
import PageHeader from "../components/PageHeader";
import DarkVeil from "../components/DarkVeil";
import ChromaGrid from "../components/ChromaGrid";
import sara from "../assets/images/sara.png";
import john from "../assets/images/john.jpg";
import david from "../assets/images/david.png";
import michael from "../assets/images/michael.png";

const About = () => {
  const items = [
    {
      image: sara,
      title: "Sara Gregory",
      subtitle: "Founder & CEO",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      image: john,
      title: "John Smith",
      subtitle: "COO",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: david,
      title: "David Kim",
      subtitle: "Director of PM",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      image: michael,
      title: "Michael Brown",
      subtitle: "Head of GR",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
  ];

  return (
    <div className="w-full relative min-h-screen">
      {/* Prism Background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      {/* Content with overlay */}
      <div className="relative z-10">
        <PageHeader
          title="About Us"
          subtitle="Our Story, Mission, and Leadership"
        />

        <div className="max-w-6xl mx-auto py-16 px-5">
          <section className="mb-16">
            <div className="mx-auto text-center navbar-glassmorphism w-fit max-w-5xl">
              <div className="p-8 sm:p-10 lg:p-12">
                <h2
                  className="font-bold mb-8 text-white drop-shadow-lg"
                  style={{ fontSize: "2.2rem" }}
                >
                  Our Story
                </h2>
                <p
                  className="mb-5 text-white/90 drop-shadow-md"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Founded over 20 years ago, Diversity Connected began with a
                  vision to transform how businesses approach project
                  management, logistics, and marketing. Our founder recognized a
                  gap in the market for integrated solutions that could help
                  companies streamline operations while maintaining quality and
                  efficiency.
                </p>
                <p
                  className="text-white/90 drop-shadow-md"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  What started as a small consulting firm has grown into a
                  trusted partner for Fortune 500 companies and government
                  agencies alike. Throughout our journey, we've maintained our
                  commitment to excellence, innovation, and diversity.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2
              className="text-center mb-8 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
                <h3
                  className="text-white font-bold mb-4 drop-shadow-md"
                  style={{ fontSize: "1.5rem" }}
                >
                  Excellence
                </h3>
                <p
                  className="text-white/90 drop-shadow-sm"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  We strive for excellence in every project, delivering results
                  that exceed expectations.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
                <h3
                  className="text-white font-bold mb-4 drop-shadow-md"
                  style={{ fontSize: "1.5rem" }}
                >
                  Integrity
                </h3>
                <p
                  className="text-white/90 drop-shadow-sm"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  We operate with transparency and honesty in all our business
                  dealings.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
                <h3
                  className="text-white font-bold mb-4 drop-shadow-md"
                  style={{ fontSize: "1.5rem" }}
                >
                  Innovation
                </h3>
                <p
                  className="text-white/90 drop-shadow-sm"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  We embrace new technologies and approaches to solve complex
                  business challenges.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
                <h3
                  className="text-white font-bold mb-4 drop-shadow-md"
                  style={{ fontSize: "1.5rem" }}
                >
                  Diversity
                </h3>
                <p
                  className="text-white/90 drop-shadow-sm"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  We celebrate diversity in our team, our thinking, and our
                  solutions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-center mb-8 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Our Leadership Team
            </h2>

            {/* 使用 ChromaGrid 替换 TeamMember，保持原有的网格布局 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8">
              <div className="h-96 sm:h-96 lg:h-80 relative mb-8 sm:mb-8 lg:mb-0">
                <ChromaGrid
                  items={[items[0]]}
                  radius={100}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              <div className="h-96 sm:h-96 lg:h-80 relative mb-8 sm:mb-8 lg:mb-0">
                <ChromaGrid
                  items={[items[1]]}
                  radius={100}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              <div className="h-96 sm:h-96 lg:h-80 relative mb-8 sm:mb-8 lg:mb-0">
                <ChromaGrid
                  items={[items[2]]}
                  radius={100}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              <div className="h-96 sm:h-96 lg:h-80 relative">
                <ChromaGrid
                  items={[items[3]]}
                  radius={100}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
