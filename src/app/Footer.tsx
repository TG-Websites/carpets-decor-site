import React from 'react'
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black from-gray-100 to-gray-200 text-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-center sm:text-left">
            {/* Company Section */}
            <div>
                <p style={{ fontSize: 14 }} className="text-lg graytxt font-semibold mb-1">OUR COMPANY</p>
                <ul className="space-y-1">
                    <li><a className="text-xs graytxt hover:underline">The Story</a></li>
                    <li><a className="text-xs graytxt hover:underline">Design Emotion</a></li>
                    <li><a className="text-xs graytxt hover:underline">Projects</a></li>
                    <li><a className="text-xs graytxt hover:underline">Videos</a></li>
                    <li><a className="text-xs graytxt hover:underline">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Customer Service Section */}
            <div>
                <p style={{ fontSize: 14 }} className="text-lg graytxt font-semibold mb-1">CUSTOMER SERVICE</p>
                <ul className="space-y-2">
                    <li><a className="text-xs graytxt hover:underline">Contact us</a></li>
                    <li><a className="text-xs graytxt hover:underline">Our showrooms</a></li>
                    <li><a className="text-xs graytxt hover:underline">Custom made</a></li>
                    <li><a className="text-xs graytxt hover:underline">Carpet maintenance</a></li>
                    <li><a className="text-xs graytxt hover:underline">FAQs</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center sm:items-start">
                <h3 className="text-sm graytxt font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
                <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full max-w-md">
                    <input
                        type="email"
                        name="contact[email]"
                        placeholder="Write your email address"
                        className="w-full flex-grow px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white-800"
                        required
                    />


                    <button
                        type="submit"
                        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-800 transition"
                    >
                        SEND
                    </button>
                </form>

                {/* Social Media Links */}
                <div className="mt-6">
                    <h4 className="text-sm graytxt font-semibold mb-3">FOLLOW US</h4>
                    <div className="flex justify-center sm:justify-start space-x-4 text-white">
                        <a href="https://twitter.com/handscarpets" className="bg-black p-2 rounded-full" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.facebook.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://in.pinterest.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Pinterest"><FaPinterestP /></a>
                        <a href="https://www.instagram.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCOtTXL-IvBsJ4EYAJVdC0_A" className="bg-black p-2 rounded-full" aria-label="YouTube"><FaYoutube /></a>
                        <a href="https://www.linkedin.com/company/hands-carpets-&-rugs---india/" className="bg-white p-2 rounded-full text-black" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
        <img
            src="/images/logo5.png"
            style={{ width: 150, height: 150, objectFit: 'cover' }}
            alt="Logo"
            loading="eager"
        />

    </div>
</footer>
  )
}

export default Footer
