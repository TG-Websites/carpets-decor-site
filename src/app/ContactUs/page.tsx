import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";


function page() {
    return (
        <div>

            <section className="bg-black text-gray-300 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="flex justify-center">
                            <div className="layout-element__component layout-element__component--GridTextBox text-center w-full max-w-xl px-4">
                                <h1 className="text-[32px] md:text-[48px] leading-[1.3] font-semibold graytxt">
                                    Contact Hands Carpets
                                </h1>
                                <div className="layout-element__component layout-element__component--GridTextBox text-center w-full max-w-md mx-auto px-4 mb-6">
                                    <p className="text-[#56585E] text-base">
                                        Get in touch for custom carpets and decor information today!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-lg font-semibold graytxt mb-6 text-center md:text-left" style={{ fontSize: 14 }}>
                                SEND US A MESSAGE
                            </h2>
                            <form
                                style={{ alignSelf: 'center' }}
                                className="space-y-6 w-full max-w-lg mx-auto"
                            >
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white-800 bg-transparent focus:outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white-800 bg-transparent focus:outline-none"
                                    required
                                />
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white-800 bg-transparent focus:outline-none"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-white text-black px-6 py-2 rounded hover:bg-gray-800 transition w-full"
                                >
                                    SEND
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-black py-8 px-4 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                        {/* Left Column - Text Content */}
                        <div className="flex-1 max-w-xl">
                            <div className="mb-6">
                                <h3 className="text-4xl font-bold tracking-tight mb-3 graytxt">Contact Us</h3>
                                <p className="text-gray-600">
                                    Visit Hands Carpets & Rugs for personalized carpet decor and design solutions. We are here to help you find the perfect carpet for your space.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h6 className="text-lg font-semibold mb-1 graytxt">Location</h6>
                                <p className="text-gray-600">
                                    123 Carpet Street, Design District, New Delhi, India - 110001
                                </p>
                            </div>
                            <div>
                                <h6 className="text-lg font-semibold mb-1 graytxt">Phone</h6>
                                <p className="text-gray-600">+91 1234567890</p>
                            </div>
                        </div>

                        {/* Right Column - Fixed Size Map */}
                        <div className="w-full lg:w-[500px] h-[350px] rounded-md shadow-md overflow-hidden">
                            <iframe
                                title="Hands Carpets & Rugs Location"
                                className="w-full h-full border-0"
                                src="https://maps.google.com/maps?q=123%20Carpet%20Street,%20Design%20District,%20New%20Delhi,%20India%20-%20110001&t=m&z=13&ie=UTF8&output=embed"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page
