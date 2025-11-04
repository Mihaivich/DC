import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 桌面端毛玻璃导航栏 */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block  w-full max-w-4xl">
        <div className="flex items-center justify-between px-10 py-4 rounded-full border border-white/10 navbar-glassmorphism">
          <Link
            to="/"
            className="flex items-center gap-2 text-white text-lg font-semibold no-underline transition-all duration-300 navbar-text-glow whitespace-nowrap"
          >
            <span className="text-2xl">🌐</span>
            <span>Diversity Connected</span>
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className="text-white no-underline font-medium whitespace-nowrap transition-all duration-300 navbar-text-glow"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white no-underline font-medium whitespace-nowrap transition-all duration-300 navbar-text-glow"
            >
              About Us
            </Link>
            <Link
              to="/expertise"
              className="text-white no-underline font-medium whitespace-nowrap transition-all duration-300 navbar-text-glow"
            >
              Expertise
            </Link>
            <Link
              to="/government"
              className="text-white no-underline font-medium whitespace-nowrap transition-all duration-300 navbar-text-glow"
            >
              Government
            </Link>
            <Link
              to="/contact"
              className="text-white no-underline font-medium whitespace-nowrap transition-all duration-300 navbar-text-glow"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* 移动端导航栏 */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center p-4 navbar-glassmorphism-mobile">
          <Link
            to="/"
            className="text-white font-bold flex items-center no-underline"
          >
            <span className="text-xl mr-2">🌐</span>
            <span className="text-lg">Diversity Connected</span>
          </Link>

          {/* 汉堡按钮 */}
          <div
            className="cursor-pointer text-white flex items-center justify-center w-8 h-8"
            onClick={toggleMenu}
          >
            <i
              className={`text-xl ${isOpen ? "fas fa-times" : "fas fa-bars"}`}
            />
          </div>
        </div>

        {/* 移动端菜单 */}
        <div
          className={`
            absolute top-full left-0 right-0 navbar-glassmorphism-mobile
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 no-underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 no-underline"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/expertise"
              className="text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 no-underline"
              onClick={toggleMenu}
            >
              Expertise
            </Link>
            <Link
              to="/government"
              className="text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 no-underline"
              onClick={toggleMenu}
            >
              Government
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 no-underline"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
