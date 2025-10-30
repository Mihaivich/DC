import React from 'react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/hero-bg.svg')`
        }}
      >
        <div className="max-w-4xl px-5 sm:px-8 lg:px-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Empowering Businesses with Strategic Solutions
          </h1>
          <h2 className="text-2xl sm:text-3xl font-normal mb-6 leading-relaxed">
            Project Management, Logistics, and Marketing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Driving success with 20+ years of expertise and Fortune 500 trust
          </p>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-sky-400 hover:bg-primary text-white border-none rounded-lg text-base sm:text-lg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 bg-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl sm:text-3xl text-primary font-bold mb-3">20+ Years</h3>
            <p className="text-lg sm:text-xl font-semibold mb-2">of Experience</p>
            <span className="text-sm sm:text-base text-gray-600">Managing large-scale projects</span>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl sm:text-3xl text-primary font-bold mb-3">$6M+</h3>
            <p className="text-lg sm:text-xl font-semibold mb-2">in Contract Management Annually</p>
            <span className="text-sm sm:text-base text-gray-600">Handling major corporate contracts</span>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl sm:text-3xl text-primary font-bold mb-3">Government-Ready</h3>
            <p className="text-lg sm:text-xl font-semibold mb-2">Certifications</p>
            <span className="text-sm sm:text-base text-gray-600">WOSB, WBENC and 8(a) (pending)</span>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl sm:text-3xl text-primary font-bold mb-3">Trusted by</h3>
            <p className="text-lg sm:text-xl font-semibold mb-2">Fortune 500 Companies</p>
            <span className="text-sm sm:text-base text-gray-600">Walmart, CVS, Target, Luster Products</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-white"
        style={{ backgroundColor: '#1a1a2e' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
            At Diversity Connected, we are committed to helping businesses thrive by delivering expert project management, 
            seamless logistics solutions, and innovative marketing strategies. With over 20 years of experience, 
            we specialize in managing large-scale projects, ensuring operational efficiency, and driving sustainable 
            growth for our clients.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Whether you're a Fortune 500 company or a growing business looking to streamline operations, 
            we bring expertise, reliability, and government-certified capabilities to the table.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;