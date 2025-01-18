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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      {/* Header Bar - Always visible */}
      <div className="relative flex items-center justify-between px-4 md:px-6 py-4 bg-white z-50">
        <div className="flex items-center relative z-50">
          <img 
            src={GhreatnessLabsLogo} 
            alt="Ghreatness Labs Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-300 ${
                  item === "Contact Us"
                    ? "px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                    : "text-gray-700 hover:text-black"
                } ${
                  isActive && item !== "Contact Us"
                    ? "border-b-2 border-black"
                    : ""
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
        className={`${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden fixed inset-0 bg-white transition-all duration-300 z-40`}
      >
        <div className="flex flex-col p-4 pt-20 space-y-4 h-full overflow-y-auto">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-300 p-2 ${
                  item === "Contact Us"
                    ? "bg-black text-white rounded-lg hover:bg-gray-800 text-center"
                    : "text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg"
                } ${
                  isActive && item !== "Contact Us"
                    ? "border-l-4 border-black pl-4"
                    : ""
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