import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GhreatnessLabsLogo from "../assets/GhreatnessLabsLogo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    "Home",
    "About",
    "Industries",
    "Services",
    "Company",
    "Case Studies",
    "Contact Us",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <div className="relative z-50 flex items-center justify-between bg-white px-2 py-3 shadow-lg md:px-10">
        <div className="relative z-50 flex items-center">
          <img
            src={GhreatnessLabsLogo}
            alt="Ghreatness Labs Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        <div className="hidden items-center gap-4 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-100 hover:text-black ${
                  isActive
                    ? "border-b-2 border-black font-semibold text-black"
                    : "text-gray-700"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } lg:hidden`}
      >
        <div className="flex h-full flex-col items-center space-y-6 overflow-y-auto p-6 pt-24">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full rounded-lg px-6 py-3 text-center text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden md:flex h-full flex-col items-center space-y-6 overflow-y-auto p-6 pt-24">
          <a href="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-2 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-500">Sign In</a>
          <a href="inline-flex items-center justify-center rounded-lg border border-white/20 px-2 py-3 ml-2 text-lg font-semibold text-white bg-gray-600 transition-all hover:bg-blue-400">Create an Account</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
