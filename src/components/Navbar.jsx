import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flex justify-center items-center sticky top-0 h-20 shadow-lg"
      style={{ background: "#1a1a2e", zIndex: 999 }}
    >
      <div className="flex justify-between items-center w-full max-w-6xl px-6">
        <Link
          to="/"
          className="text-white font-bold flex items-center no-underline"
          style={{ fontSize: "1.8rem" }}
        >
          Diversity Connected
        </Link>

        {/* 汉堡按钮 - 只在移动端显示 */}
        <div
          className="lg:hidden absolute top-1/2 right-4 cursor-pointer text-white flex items-center justify-center w-8 h-8 -translate-y-1/2"
          style={{
            fontSize: "1.8rem",
            zIndex: 10,
          }}
          onClick={toggleMenu}
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* 菜单 - 桌面端水平显示，移动端从navbar下方滑入 */}
        <ul
          className={`
            flex items-center list-none text-center m-0 p-0
            lg:flex lg:flex-row lg:static lg:w-auto lg:h-auto lg:opacity-100 lg:bg-transparent
            max-lg:absolute max-lg:top-20 max-lg:w-full max-lg:h-screen max-lg:flex-col max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out
            ${
              isOpen
                ? "max-lg:left-0 max-lg:opacity-100"
                : "max-lg:-left-full max-lg:opacity-0"
            }
          `}
          style={{
            zIndex: 1,
            background: window.innerWidth <= 1023 ? "#1a1a2e" : "transparent",
          }}
        >
          <li className="lg:h-20 lg:flex lg:items-center max-lg:w-full max-lg:py-6">
            <Link
              to="/"
              className="text-white font-medium px-4 flex items-center no-underline h-full transition-colors duration-300 ease-in-out hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 max-lg:text-center max-lg:p-4 max-lg:w-full max-lg:table max-lg:border-none"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMenu();
                }
              }}
            >
              Home
            </Link>
          </li>
          <li className="lg:h-20 lg:flex lg:items-center max-lg:w-full max-lg:py-6">
            <Link
              to="/about"
              className="text-white font-medium px-4 flex items-center no-underline h-full transition-colors duration-300 ease-in-out hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 max-lg:text-center max-lg:p-4 max-lg:w-full max-lg:table max-lg:border-none"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMenu();
                }
              }}
            >
              About Us
            </Link>
          </li>
          <li className="lg:h-20 lg:flex lg:items-center max-lg:w-full max-lg:py-6">
            <Link
              to="/expertise"
              className="text-white font-medium px-4 flex items-center no-underline h-full transition-colors duration-300 ease-in-out hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 max-lg:text-center max-lg:p-4 max-lg:w-full max-lg:table max-lg:border-none"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMenu();
                }
              }}
            >
              Expertise
            </Link>
          </li>
          <li className="lg:h-20 lg:flex lg:items-center max-lg:w-full max-lg:py-6">
            <Link
              to="/government"
              className="text-white font-medium px-4 flex items-center no-underline h-full transition-colors duration-300 ease-in-out hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 max-lg:text-center max-lg:p-4 max-lg:w-full max-lg:table max-lg:border-none"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMenu();
                }
              }}
            >
              Government
            </Link>
          </li>
          <li className="lg:h-20 lg:flex lg:items-center max-lg:w-full max-lg:py-6">
            <Link
              to="/contact"
              className="text-white font-medium px-4 flex items-center no-underline h-full transition-colors duration-300 ease-in-out hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 max-lg:text-center max-lg:p-4 max-lg:w-full max-lg:table max-lg:border-none"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMenu();
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
