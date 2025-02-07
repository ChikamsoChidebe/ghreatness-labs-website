import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Linkedin, ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Industries: ['Our Projects', 'Next Projects', 'Testimonials'],
    Services: ['UI UX Design', 'Frontend Development', 'Backend Development', 'Cyber Security', 'Video Editing'],
    Company: ['About Us', 'Our Leaders', 'Meet Our Team'],
    'Case Studies': ['Misplace Me', 'univyx', 'athlegame']
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pt-24 pb-12">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 mb-16">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="relative">
                  <div className="absolute -left-4 top-0 h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50"></div>
                  <h3 className="font-semibold text-xl mb-6 text-white">{category}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <Link 
                          to="/" 
                          className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link}
                          <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Office Information */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    Our Offices
                  </h3>
                  <div className="mb-6 bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="font-medium text-lg mb-3 text-white">Nigeria</h4>
                    <p className="text-gray-400 mb-2">Bell University Of Technology</p>
                    <p className="text-gray-400">Ota Ogun State</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-400" />
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-400 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                      <Phone className="h-4 w-4 text-blue-400" />
                      <p>+234 812300 00 00</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <p>ghreatlnesslabs@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll to Top */}
            <div className="flex justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative"
                aria-label="Scroll to top"
              >
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur transition duration-300 group-hover:opacity-50" />
                <div className="relative flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                  Back to Top
                  <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="border-t border-white/10 bg-gray-900/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4 text-sm text-gray-400">
                <p>© 2024 GHREATNESS LABS Inc. All Rights Reserved.</p>
                <div className="flex gap-6">
                  <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                    Cookies Policy
                  </Link>
                </div>
                <p className="text-xs">This site is protected by reCAPTCHA and the Google Privacy and Terms of Service apply.</p>
              </div>
              
              <div className="flex items-center gap-6">
                {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="group relative p-2 hover:text-white"
                    aria-label={`Visit our ${Icon.name} page`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;