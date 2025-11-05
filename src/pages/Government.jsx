import React from "react";
import PageHeader from "../components/PageHeader";
import ColorBends from "../components/ColorBends";

const Government = () => {
  return (
    <div className="w-full relative min-h-screen">
      {/* ColorBends Background with Red Theme */}
      <div className="fixed inset-0 z-0">
        <ColorBends 
          colors={['#FF0000', '#FF4444', '#FF6666', '#CC0000']}
          speed={0.3}
          transparent={true}
          scale={1.2}
          frequency={1.5}
          warpStrength={1.2}
        />
      </div>

      {/* Content with overlay */}
      <div className="relative z-10">
        <PageHeader
          title="Government Contracting"
          subtitle="Certifications and Contracting Capabilities"
        />

        <div className="max-w-6xl mx-auto py-16 px-5">
          <section className="mb-16">
            <h2
              className="text-center mb-12 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Our Certifications
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-3 font-bold text-white drop-shadow-md"
                  style={{ fontSize: "1.8rem" }}
                >
                  WOSB
                </h3>
                <p
                  className="mb-5 font-medium text-white drop-shadow-md"
                  style={{ fontSize: "1.1rem" }}
                >
                  Woman-Owned Small Business
                </p>
                <div>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    Certified as a woman-owned small business to access federal
                    contracting opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-3 font-bold text-white drop-shadow-md"
                  style={{ fontSize: "1.8rem" }}
                >
                  WBENC
                </h3>
                <p
                  className="mb-5 font-medium text-white drop-shadow-md"
                  style={{ fontSize: "1.1rem" }}
                >
                  Women's Business Enterprise National Council
                </p>
                <div>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    Recognized as a 51% woman-owned and managed business,
                    allowing us to partner with major organizations.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-3 font-bold text-white drop-shadow-md"
                  style={{ fontSize: "1.8rem" }}
                >
                  8(a) Program
                </h3>
                <p
                  className="mb-5 font-medium text-white drop-shadow-md"
                  style={{ fontSize: "1.1rem" }}
                >
                  SBA 8(a) Business Development Program (Pending)
                </p>
                <div>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    We are in the process of earning 8(a) certification to
                    expand our federal contracting work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2
              className="text-center mb-12 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Government Contracting Capabilities
            </h2>
            <div
              className="grid gap-8"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-4 font-bold text-white drop-shadow-md"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                  }}
                >
                  Contract Management
                </h3>
                <p className="leading-relaxed text-white/90 drop-shadow-sm">
                  We manage large government contracts and make sure every
                  project runs smoothly.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-4 font-bold text-white drop-shadow-md"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                  }}
                >
                  Compliance Expertise
                </h3>
                <p className="leading-relaxed text-white/90 drop-shadow-sm">
                  Our team ensures that all projects meet government rules and
                  standards.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-4 font-bold text-white drop-shadow-md"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                  }}
                >
                  Past Performance
                </h3>
                <p className="leading-relaxed text-white/90 drop-shadow-sm">
                  We have successfully delivered projects for Fortune 500
                  companies and government agencies.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <h3
                  className="mb-4 font-bold text-white drop-shadow-md"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                  }}
                >
                  Scalable Solutions
                </h3>
                <p className="leading-relaxed text-white/90 drop-shadow-sm">
                  Our services can adapt to fit projects of any size—from small
                  departments to large organizations.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2
              className="text-center mb-12 font-bold text-white drop-shadow-lg"
              style={{ fontSize: "2.2rem" }}
            >
              Our Government Contracting Process
            </h2>
            <div className="space-y-8 mx-auto" style={{ maxWidth: "800px" }}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                  1
                </div>
                <div className="w-full">
                  <h3
                    className="mb-3 font-bold text-white drop-shadow-md"
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                    }}
                  >
                    Initial Consultation
                  </h3>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    We begin with a thorough understanding of your agency's
                    needs and objectives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                  2
                </div>
                <div className="w-full">
                  <h3
                    className="mb-3 font-bold text-white drop-shadow-md"
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                    }}
                  >
                    Proposal Development
                  </h3>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    Our team develops compelling proposals that highlight your
                    strengths and capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                  3
                </div>
                <div className="w-full">
                  <h3
                    className="mb-3 font-bold text-white drop-shadow-md"
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                    }}
                  >
                    Contract Negotiation
                  </h3>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    We negotiate favorable terms while ensuring compliance with
                    all federal requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                  4
                </div>
                <div className="w-full">
                  <h3
                    className="mb-3 font-bold text-white drop-shadow-md"
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                    }}
                  >
                    Project Execution
                  </h3>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    We manage the entire project lifecycle from start to
                    successful completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                  5
                </div>
                <div className="w-full">
                  <h3
                    className="mb-3 font-bold text-white drop-shadow-md"
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                    }}
                  >
                    Ongoing Support
                  </h3>
                  <p className="leading-relaxed text-white/90 drop-shadow-sm">
                    We provide continuous support and maintenance throughout the
                    contract period.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Government;
