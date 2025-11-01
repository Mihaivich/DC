import React from "react";
import PageHeader from "../components/PageHeader";

const Government = () => {
  return (
    <div className="w-full">
      <PageHeader
        backgroundImage="/src/assets/images/government-bg.svg"
        title="Government Contracting"
        subtitle="Certifications and Contracting Capabilities"
      />

      <div className="max-w-6xl mx-auto py-16 px-5">
        <section className="mb-16">
          <h2
            className="text-center mb-8 font-bold"
            style={{ fontSize: "2.2rem", color: "#1a1a2e" }}
          >
            Our Certifications
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
              <h3
                className="mb-3 font-bold text-blue-500"
                style={{ fontSize: "1.8rem" }}
              >
                WOSB
              </h3>
              <p
                className="mb-5 font-medium"
                style={{ fontSize: "1.1rem", color: "#1a1a2e" }}
              >
                Woman-Owned Small Business
              </p>
              <div>
                <p className="leading-relaxed">
                  Certified as a woman-owned small business to access federal
                  contracting opportunities.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
              <h3
                className="mb-3 font-bold text-blue-500"
                style={{ fontSize: "1.8rem" }}
              >
                WBENC
              </h3>
              <p
                className="mb-5 font-medium"
                style={{ fontSize: "1.1rem", color: "#1a1a2e" }}
              >
                Women's Business Enterprise National Council
              </p>
              <div>
                <p className="leading-relaxed">
                  Recognized as a 51% woman-owned and managed business, allowing
                  us to partner with major organizations.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-3">
              <h3
                className="mb-3 font-bold text-blue-500"
                style={{ fontSize: "1.8rem" }}
              >
                8(a) Program
              </h3>
              <p
                className="mb-5 font-medium"
                style={{ fontSize: "1.1rem", color: "#1a1a2e" }}
              >
                SBA 8(a) Business Development Program (Pending)
              </p>
              <div>
                <p className="leading-relaxed">
                  We are in the process of earning 8(a) certification to expand
                  our federal contracting work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-center mb-8 font-bold"
            style={{ fontSize: "2.2rem", color: "#1a1a2e" }}
          >
            Government Contracting Capabilities
          </h2>
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "#f8f9fa",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="mb-4 font-bold"
                style={{
                  fontSize: "1.5rem",
                  color: "#1a1a2e",
                  marginBottom: "15px",
                }}
              >
                Contract Management
              </h3>
              <p className="leading-relaxed">
                We manage large government contracts and make sure every project
                runs smoothly.
              </p>
            </div>

            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "#f8f9fa",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="mb-4 font-bold"
                style={{
                  fontSize: "1.5rem",
                  color: "#1a1a2e",
                  marginBottom: "15px",
                }}
              >
                Compliance Expertise
              </h3>
              <p className="leading-relaxed">
                Our team ensures that all projects meet government rules and
                standards.
              </p>
            </div>

            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "#f8f9fa",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="mb-4 font-bold"
                style={{
                  fontSize: "1.5rem",
                  color: "#1a1a2e",
                  marginBottom: "15px",
                }}
              >
                Past Performance
              </h3>
              <p className="leading-relaxed">
                We have successfully delivered projects for Fortune 500
                companies and government agencies.
              </p>
            </div>

            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "#f8f9fa",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="mb-4 font-bold"
                style={{
                  fontSize: "1.5rem",
                  color: "#1a1a2e",
                  marginBottom: "15px",
                }}
              >
                Scalable Solutions
              </h3>
              <p className="leading-relaxed">
                Our services can adapt to fit projects of any size—from small
                departments to large organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-center mb-8 font-bold"
            style={{ fontSize: "2.2rem", color: "#1a1a2e" }}
          >
            Our Government Contracting Process
          </h2>
          <div className="space-y-8 mx-auto" style={{ maxWidth: "800px" }}>
            <div className="flex items-start gap-6">
              <div
                className="text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3a86ff",
                  fontSize: "1.3rem",
                  margin: "0 17px 20px",
                }}
              >
                1
              </div>
              <div className="w-full">
                <h3
                  className="mb-3 font-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  Initial Consultation
                </h3>
                <p className="leading-relaxed">
                  We begin with a thorough understanding of your agency's needs
                  and objectives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div
                className="text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3a86ff",
                  fontSize: "1.3rem",
                  margin: "0 17px 20px",
                }}
              >
                2
              </div>
              <div className="w-full">
                <h3
                  className="mb-3 font-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  Proposal Development
                </h3>
                <p className="leading-relaxed">
                  Our team develops compelling proposals that highlight your
                  strengths and capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div
                className="text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3a86ff",
                  fontSize: "1.3rem",
                  margin: "0 17px 20px",
                }}
              >
                3
              </div>
              <div className="w-full">
                <h3
                  className="mb-3 font-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  Contract Negotiation
                </h3>
                <p className="leading-relaxed">
                  We negotiate favorable terms while ensuring compliance with
                  all federal requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div
                className="text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3a86ff",
                  fontSize: "1.3rem",
                  margin: "0 17px 20px",
                }}
              >
                4
              </div>
              <div className="w-full">
                <h3
                  className="mb-3 font-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  Project Execution
                </h3>
                <p className="leading-relaxed">
                  We manage the entire project lifecycle from start to
                  successful completion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div
                className="text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3a86ff",
                  fontSize: "1.3rem",
                  margin: "0 17px 20px",
                }}
              >
                5
              </div>
              <div className="w-full">
                <h3
                  className="mb-3 font-bold"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  Ongoing Support
                </h3>
                <p className="leading-relaxed">
                  We provide continuous support and maintenance throughout the
                  contract period.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Government;
