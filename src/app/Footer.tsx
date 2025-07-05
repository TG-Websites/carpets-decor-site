import React from 'react';
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <img
              src="/images/logo1.png"
              alt="Logo"
              loading="eager"
              className="w-36 h-36"
            />
          </div>

          {/* Our Company */}
          <div>
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider">Our Company</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/AboutUs" className="hover:text-white transition">About</a></li>
              <li><a href="/Services" className="hover:text-white transition">Categories</a></li>
              <li><a href="/AboutUs#why" className="hover:text-white transition">Why Carpets Decor?</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider">Customer Service</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/ContactUs" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="/PrivacyPolicy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider">Contact Info</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              L-20 Central Mall, RPS City.<br/>
              Sector 88 Faridabad<br/>
              Phone: +91 9354715556<br/>
              Email: shubhra@carpetsdecor.com
            </p>
          </div>
        </div>
      </div>

      {/* Full-width border and bottom area */}
      <div className="w-full border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Carpets & Rugs. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-1">
            <a
              href="https://www.facebook.com/carpets.decor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-700 p-2 rounded-full transition text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com/carpetsdecor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-700 p-2 rounded-full transition text-xl"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.instagram.com/carpets.decor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-700 p-2 rounded-full transition text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/carpets-decor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-700 p-2 rounded-full transition text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
