import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GhreatnessLabsLogo from "../assets/GhreatnessLabsLogo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = ["Home", "Industries", "Services", "Company", "Case Studies", "Contact Us"];
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Header Bar - Always visible */}
      <div className="relative flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-lg z-50">
        <div className="flex items-center relative z-50">
          <img 
            src={GhreatnessLabsLogo} 
            alt="Ghreatness Labs Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black ${
                  isActive ? "text-black font-semibold border-b-2 border-black" : "text-gray-700"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white transition-all duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      >
        <div className="flex flex-col items-center p-6 pt-24 space-y-6 h-full overflow-y-auto">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-all duration-300 px-6 py-3 rounded-lg w-full text-center ${
                  isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
