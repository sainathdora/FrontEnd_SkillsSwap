import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
export default function NavBar() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              SkillSwap
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a> */}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn && <Link to="/login">Login</Link>}
            <a
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="menu-button"
              className="text-gray-600 focus:outline-none"
              onClick={() => {
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white border-t border-gray-200"
      >
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Contact
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Login
        </a>
        <a
          href="#"
          className="block px-4 py-2 bg-blue-600 text-white text-center hover:bg-blue-700"
        >
          Register
        </a>
      </div>
    </nav>
  );
}
