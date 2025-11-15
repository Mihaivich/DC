import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import DarkVeil from "../components/DarkVeil";
import ChromaGrid from "../components/ChromaGrid";
import sara from "../assets/images/sara.png";

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const leaderInfo = {
    image: sara,
    title: "Sara Gregory",
    subtitle: "Founder & CEO",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    bio: 'Sara Gregory is a seasoned business leader with over two decades of experience in consulting, operations, and analytics. Prior to founding Diversity Connected, she identified a gap where mid-size engagements were dismissed by larger firms. This inspired her boutique consultancy specializing in operational excellence, project management, and data analytics. Under her leadership, Diversity Connected serves Fortune 500 corporations, government agencies, and start-ups. She also founded the "Auntie Series" mentorship programme for women entrepreneurs.',
    achievements: [
      "Founded Diversity Connected in 2004",
      "Led partnerships with Fortune 500 companies",
      "Champion of diversity and inclusion initiatives",
      "Expert in strategic business transformation",
    ],
    email: "sara.gregory@diversityconnected.com",
    linkedin: "linkedin.com/in/saragregory",
  };

  const items = [
    {
      image: leaderInfo.image,
      title: leaderInfo.title,
      subtitle: leaderInfo.subtitle,
      borderColor: leaderInfo.borderColor,
      gradient: leaderInfo.gradient,
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
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/30 transition-transform duration-300 hover:-translate-y-3">
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
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/30 transition-transform duration-300 hover:-translate-y-3">
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
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/30 transition-transform duration-300 hover:-translate-y-3">
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
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/30 transition-transform duration-300 hover:-translate-y-3">
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
              Our Founder
            </h2>

            {/* Desktop Layout - ChromaGrid with Side Panel */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 gap-8">
                <div className="relative h-auto">
                  <div
                    className="w-fit mx-auto"
                    onMouseEnter={() => setShowDetails(true)}
                    onMouseLeave={() => setShowDetails(false)}
                  >
                    <ChromaGrid
                      items={items}
                      radius={100}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                    />
                  </div>

                  {/* Floating Detail Panel - Absolute positioned */}
                  <div
                    className={`absolute left-[calc(50%+180px)] top-0 right-0 h-[375px] transition-all duration-500 ${
                      showDetails
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-8 h-full flex items-center">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          About Sara Gregory
                        </h4>
                        <p className="text-white/90 leading-relaxed text-sm">
                          {leaderInfo.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout - ChromaGrid with Bottom Panel */}
            <div className="lg:hidden flex flex-col items-center">
              <div
                className="relative cursor-pointer touch-manipulation"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(!showDetails);
                }}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <ChromaGrid
                  items={items}
                  radius={100}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>

              {/* Detail Panel Below */}
              <div
                className={`mt-8 w-full max-w-md transition-all duration-500 ${
                  showDetails
                    ? "opacity-100 max-h-screen"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      About Sara Gregory
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {leaderInfo.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
