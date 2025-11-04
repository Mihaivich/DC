import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Expertise = lazy(() => import("./pages/Expertise"));
const Government = lazy(() => import("./pages/Government"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4 shadow-lg shadow-cyan-400/20"></div>
                  <div className="text-white text-xl font-medium">
                    Loading...
                  </div>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/government" element={<Government />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
