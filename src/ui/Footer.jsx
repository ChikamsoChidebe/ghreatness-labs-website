import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Linkedin, ArrowUp, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Industries: ['Our Projects', 'Next Projects', 'Testimonials'],
    Services: ['UI UX Design', 'Frontend Development', 'Backend Development', 'Cyber Security', 'Video Editing'],
    Company: ['About Us', 'Our Leaders', 'Meet Our Team'],
    'Case Studies': ['Misplace Me', 'univyx', 'athlegame']
  };

  return (
    <footer className="bg-[#28536B]  text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto">
        <div className="px-6 lg:px-12 pt-16 pb-12">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-xl mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <Link 
                        to="/" 
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Office Information */}
          <div className="border-t border-gray-600/50 pt-12 mb-12">
            <h3 className="font-semibold text-xl mb-6">Our Offices</h3>
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-3">Nigeria</h4>
              <p className="text-gray-300 mb-2">Bell University Of Technology</p>
              <p className="text-gray-300">Ota Ogun State</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="h-4 w-4" />
              <p>+234 812300 00 00</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-600/50 pt-12 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-6">Contact us</h3>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-4 w-4" />
                    <p>+234 812300 00 00</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="h-4 w-4" />
                    <p>ghreatlnesslabs@gmail.com</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-[#1F4D5C]" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="bg-white text-gray-800 px-6 lg:px-12 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-600 space-y-2">
              <p>© 2024 GHREATNESS LABS Inc. All Rights Reserved.</p>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-black transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/cookies" className="hover:text-black transition-colors duration-200">
                  Cookies Policy
                </Link>
              </div>
              <p className="text-xs">This site is protected by reCAPTCHA and the Google Privacy and Terms of Service apply.</p>
            </div>
            <div className="flex gap-6">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200" />
              <Youtube className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;