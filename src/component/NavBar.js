import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import ProfileIcon from "./Profile/ProfileIcon";

export default function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();
  function logoutHandler(e) {
    localStorage.removeItem("jwtToken");
    logout();
    nav("/");
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              SkillSwap
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Profile & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 hover:text-blue-900"
                onClick={logoutHandler}
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {isLoggedIn && <ProfileIcon />}

            {!isLoggedIn && (
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-700 transition"
              >
                Login
              </Link>
            )}

            {!isLoggedIn && (
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
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
        className={`md:hidden transition-all ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white shadow-lg border-t border-gray-200`}
      >
        <Link
          to="/"
          className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          About
        </Link>
        <Link
          to="/services"
          className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Contact
        </Link>
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-3 bg-blue-600 text-white text-center hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <Link
            to="/logout"
            className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
