import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

          {/* Logo & Social Section */}
          <div className="sm:col-span-2 flex flex-col items-center sm:items-start space-y-4 md:ml-8 lg:ml-45">
            <img
              src="/images/logo1.png"
              alt="Logo"
              loading="eager"
              className="w-24 h-24 object-cover"
            />

            <h4 className="text-sm text-white font-semibold">FOLLOW US</h4>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-white">
              <a
                href="https://twitter.com/handscarpets"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-full transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/handscarpets/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-full transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://in.pinterest.com/handscarpets/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-full transition"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
              <a
                href="https://www.instagram.com/handscarpets/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOtTXL-IvBsJ4EYAJVdC0_A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-full transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/hands-carpets-&-rugs---india/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-300 p-2 rounded-full text-black transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider">Our Company</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/AboutUs" className="hover:text-white transition">About</a></li>
              <li><a href="/Services" className="hover:text-white transition">Categories</a></li>
              {/* <li><a href="#" className="hover:text-white transition">Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Videos</a></li> */}
              <li><a href="/PrivacyPolicy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <p className="text-sm font-semibold mb-3 uppercase tracking-wider">Customer Service</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/ContactUs" className="hover:text-white transition">Contact Us</a></li>
              {/* <li><a href="#" className="hover:text-white transition">Our Showrooms</a></li>
              <li><a href="#" className="hover:text-white transition">Custom Made</a></li>
              <li><a href="#" className="hover:text-white transition">Carpet Maintenance</a></li> */}
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Hands Carpets & Rugs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
