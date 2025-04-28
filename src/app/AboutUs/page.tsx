'use client';

import React, { useState, useEffect } from 'react';
import "swiper/css";
import "swiper/css/navigation";

const carouselImages = [
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/1_801b1baa-c9d5-4450-a930-0f425d8bc700.jpg?v=1743656464',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/2_5449037b-a2f2-4ca7-923f-affa46dd7c79.jpg?v=1743656465',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/3_0d32da69-8cc8-4f0e-b581-10f9b1d4bacf.jpg?v=1743656465',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/4_8ca3fdbd-9e0d-4ea2-8a15-a4fcd0b5246d.jpg?v=1743656464',
];


function page() {
    return (
        <div className="bg-black">

            {/* Main Content Section with Black Background */}
            <section className="bg-cover bg-center py-16 min-h-[90vh] text-white" style={{ backgroundImage: 'url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)' }}>
                <div className="container mx-auto text-center mt-26">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">About Us</h2>
                    <p className="text-lg sm:text-xl mb-12 ">
                        We are passionate about creating high-quality, handcrafted carpets that tell a story of tradition, artistry, and excellence.
                        Our artisans pour years of craftsmanship into every piece, ensuring that each carpet is unique and built to last.
                    </p>
                    <a href="#contact" className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-black rounded-full font-semibold transition duration-300 ease-in-out">
                        Get in Touch
                    </a>
                </div>
            </section>


            {/* About Us Section */}
            <section id="about" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-4 lg:px-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 transform translate-z-0" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?carpet,interior)' }}></div>
                <div className="relative max-w-7xl mx-auto text-center text-white z-10">
                    <h2 className="text-6xl font-extrabold mb-6 text-gray-100 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                        About Hands Carpets
                    </h2>
                    <p className="text-lg mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        At Hands Carpets, we specialize in creating bespoke carpets that transform your living spaces. Our expert artisans craft carpets that suit your unique style and preferences. With years of experience in the industry, we bring high-quality materials and impeccable craftsmanship to every project.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        {/* Vision Box */}
                        <div className="bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:rotate-3 hover:cursor-pointer">
                            <div className="flex justify-center items-center mb-6">
                                {/* Vision Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 hover:text-yellow-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7 7-7" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-semibold mb-4 text-gray-100 transition-transform transform hover:scale-110">Our Vision</h3>
                            <p className="text-gray-300 transition-all duration-300 opacity-100 hover:opacity-80">
                                To be the leading provider of high-quality, custom-designed carpets and decor that inspire creativity and comfort in homes worldwide.
                            </p>
                            <div className="mt-6 text-gray-100 text-lg hidden hover:block opacity-90 transition-all duration-300">
                                <p>Our goal is to elevate homes with unique and personal designs that stand the test of time.</p>
                            </div>
                        </div>

                        {/* Mission Box */}
                        <div className="bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400 hover:rotate-3 hover:cursor-pointer">
                            <div className="flex justify-center items-center mb-6">
                                {/* Mission Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-500 hover:text-teal-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-semibold mb-4 text-gray-100 transition-transform transform hover:scale-110">Our Mission</h3>
                            <p className="text-gray-300 transition-all duration-300 opacity-100 hover:opacity-80">
                                To deliver exceptional products that meet the unique design needs of our customers, while providing excellent customer service and lasting value.
                            </p>
                            <div className="mt-6 text-gray-100 text-lg hidden hover:block opacity-90 transition-all duration-300">
                                <p>Our dedication to quality and service is what sets us apart.</p>
                            </div>
                        </div>

                        {/* Craftsmanship Box */}
                        <div className="bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 hover:rotate-3 hover:cursor-pointer">
                            <div className="flex justify-center items-center mb-6">
                                {/* Craftsmanship Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500 hover:text-indigo-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m-7-7l7 7 7-7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-semibold mb-4 text-gray-100 transition-transform transform hover:scale-110">Our Craftsmanship</h3>
                            <p className="text-gray-300 transition-all duration-300 opacity-100 hover:opacity-80">
                                We believe in creating carpets that stand the test of time, combining traditional techniques with modern design to offer durability and elegance.
                            </p>
                            <div className="mt-6 text-gray-100 text-lg hidden hover:block opacity-90 transition-all duration-300">
                                <p>Our skilled artisans craft each piece with passion, bringing comfort and beauty to every corner of your home.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-400 animate__animated animate__fadeIn animate__delay-4s">
                            Every carpet we create is a masterpiece, crafted with passion, precision, and a commitment to making your home feel truly special.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center px-4">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-white mb-6">Explore Our Handcrafted Carpets</h2>

                    {/* Subheading */}
                    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                        Each carpet is a masterpiece, woven with care and tradition.
                    </p>


                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                        {/* Product 1 */}
                        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s"
                                alt="Handcrafted Carpet"
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Silk Vintage Carpet</h3>
                                <p className="text-gray-300 mb-6">
                                    A vintage silk carpet that adds elegance to any room.
                                </p>
                                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                                    Shop Now
                                </button>


                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GXwHz53377F1P8swEifWw9adKbVCJcSb9Q&s"
                                alt="Handcrafted Carpet"
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Traditional Wool Carpet</h3>
                                <p className="text-gray-300 mb-6">
                                    Crafted with fine wool, this carpet is perfect for creating a cozy ambiance.
                                </p>
                                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                                    Shop Now
                                </button>


                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://wallmantra.com/wp-content/uploads/presto-carpets-rugs-geometric-pattern-blue-mauve-tufted-area-carpet-32952737333414.jpg"
                                alt="Handcrafted Carpet"
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Geometric Pattern Carpet</h3>
                                <p className="text-gray-300 mb-6">
                                    A modern design with bold geometric patterns, perfect for contemporary spaces.
                                </p>
                                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                                    Shop Now
                                </button>


                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://m.media-amazon.com/images/I/81VMMgaSseL._AC_UF894,1000_QL80_.jpg"
                                alt="Handcrafted Carpet"
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4">Luxury Persian Carpet</h3>
                                <p className="text-gray-300 mb-6">
                                    A luxurious Persian carpet known for its intricate design and vibrant colors.
                                </p>
                                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                                    Shop Now
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="mt-16 max-w-3xl mx-auto text-gray-300 text-center">
                        <p>
                            Our handcrafted carpets are woven with the finest materials, ensuring top-tier quality and timeless
                            durability. Each carpet is unique, crafted by skilled artisans who bring decades of tradition to every
                            knot and weave. Choose a piece that suits your space, and let it tell the story of art and heritage.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default page;
