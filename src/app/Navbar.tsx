import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo with overlay text at bottom */}
       <div className="relative w-[270px] h-[85px]">
  {/* Logo Image */}
  <Link href="/">
    <img
      src="/images/logo6.png"
      alt="Logo"
      loading="eager"
      className="w-full h-full object-cover"
    />
  </Link>
  
  {/* Tagline */}
  <span
    className="
      absolute
      bottom-3
      left-12
      text-white
      uppercase
      text-[12px]
      md:text-xs
      font-light
      tracking-wide
    "
  >
    The Handmade Carpet Company
  </span>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold uppercase">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition text-lg py-6 inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/AboutUs"
              className="hover:text-gray-300 transition text-lg py-6 inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Services"
              className="hover:text-gray-300 transition text-lg py-6 inline-block"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/ContactUs"
              className="hover:text-gray-300 transition text-lg py-6 inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <details className="md:hidden relative">
          <summary className="text-white cursor-pointer list-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          <ul className="absolute right-0 mt-2 bg-black text-white w-48 shadow-lg rounded-md p-4 space-y-4 z-50 uppercase">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/AboutUs" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-gray-300 transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/ContactUs" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  )
}

export default Navbar
