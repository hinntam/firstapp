"use client"
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-900/95 backdrop-blur-sm text-white fixed top-0 w-full z-50 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2 text-lg font-bold hover:opacity-80 transition-opacity">
                <Image src="/bot.webp" alt="John Nguyen" width={32} height={32} className="rounded-lg" />
                <h1 className="text-slate-50 font-bold">
                  <span className="text-emerald-400">&lt;Hi </span>
                  <span className="text-blue-400">John Nguyen</span>
                  <span className="text-emerald-400">/&gt;</span>
                </h1>
              </a>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2">
                Home
              </a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2">
                Skills
              </a>
              <a href="#certificates" className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2">
                Certificates
              </a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2">
                Projects
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2">
                Contact
              </a>
              <a href="/webstudio" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
                Web Studio
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#certificates"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Certificates
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="#book-appointment"
                className="block mx-3 mt-2 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 px-4 py-2 rounded-full text-center font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  export default Header;
