"use client"
import Image from "next/image";
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2 text-lg font-bold">
                <Image src="/bot.webp" alt="John Nguyen" width={32} height={32} className="rounded-t-lg" />
                <h1 className="text-slate-50 font-bold">
                  <span className="text-green-400">&lt;Hi </span>
                  <span className="text-blue-400">John Nguyen</span>
                  <span className="text-green-400">/&gt;</span>
                </h1>
              </a>
            </div>
  
            {/* Hamburger Icon */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
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
  
            {/* Links */}
            <div className="hidden sm:flex space-x-4">
              <a href="#skills" className="hover:text-gray-400">
                Skills
              </a>
              <a href="#projects" className="hover:text-gray-400">
                My certificate
              </a>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Certificates
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  export default Header;
  