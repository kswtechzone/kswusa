import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Importing CSS file for NavBar styling
import Container from '../Container';
import Logotext from '../../assets/KSW.png';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <Link to="/" className="z-10 md:hidden flex items-center justify-start">
        <img className="w-52 mt-2 ml-2" src={Logotext} alt="Logo" />
      </Link>
      {/* Hamburger menu button */}
      <div className="absolute right-0 z-50 mb-20 mr-4 -mt-1 md:hidden top-2">
        <button onClick={toggleMenu} className="focus:outline-none mt-2 ml-2">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Full-screen menu overlay */}
      <div
        className={`md:hidden overlay transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/about"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/about' ? 'active' : ''
              }`}
            >
              About us
            </Link>
            <Link
              to="/pricing"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/services"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/services' ? 'active' : ''
              }`}
            >
              Services
            </Link>

            <Link
              to="/ourteam"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/ourteams' ? 'active' : ''
              }`}
            >
              Teams
            </Link>

            <Link
              to="/career"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/career' ? 'active' : ''
              }`}
            >
              Careers
            </Link>
            <Link
              to="/blogs"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/blogs' ? 'active' : ''
              }`}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Menu items for large screens */}
      <Container>
        <div className="items-center justify-between hidden h-16 my-8 md:flex md:flex-row">
          <div>
            <Link to="/" className={`text-xl font-bold text-gray-800`}>
              <img
                className="w-[14rem] md:hidden lg:block"
                src={Logotext}
                alt="Logo"
              />
              <img
                className="w-24 hidden md:block lg:hidden"
                src="/Logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center font-medium text-sm md:flex-nowrap md:justify-between">
            <Link
              to="/about"
              className={`mx-2 lg:mx-3 my-1 md:my-0 hover-underline-animation ${
                location.pathname === '/about' ? 'active' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/pricing"
              className={`mx-2 lg:mx-3 my-1 md:my-0 hover-underline-animation ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/services"
              className={`mx-2 lg:mx-3 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/services' ? 'active' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/ourteam"
              className={`mx-2 lg:mx-3 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/ourteam' ? 'active' : ''
              }`}
            >
              Teams
            </Link>
            <Link
              to="/career"
              className={`mx-2 lg:mx-3 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/career' ? 'active' : ''
              }`}
            >
              Career
            </Link>
            <Link
              to="/blogs"
              className={`mx-2 lg:mx-3 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/blogs' ? 'active' : ''
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={`mx-2 lg:mx-3 my-1 md:ml-4 font-medium md:my-0 hover-underline-animation ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
