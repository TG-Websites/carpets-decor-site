import React from 'react'

const page = () => {
    return (
        <div>
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0755/3017/4762/files/GRID_3.jpg?v=1712752378)" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
                    <div className="space-y-6"> {/* <-- Yeh line add kari hai! */}
                        <h1 className="text-6xl font-bold text-white">
                            Crafting Tradition, Weaving Excellence
                        </h1>

                        <p className="text-xl">
                            Discover the art of handmade carpets crafted with precision and passion.
                        </p>

                        <a href="#collection" className="bg-red-600 text-white py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-all duration-300 inline-block">
                            Explore Our Collection
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Hand Carpet Services</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            At Hands Carpets, we craft timeless, hand-woven masterpieces tailored to your space. Discover our premium services below.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {/* Service 1 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold mb-4 group-hover:bg-red-700 transition-all">
                                    01
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Custom Design</h3>
                                <p className="text-gray-400">
                                    Bespoke hand carpets crafted to reflect your personal style and elevate any living or work space.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold mb-4 group-hover:bg-red-700 transition-all">
                                    02
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Carpet Cleaning</h3>
                                <p className="text-gray-400">
                                    Professional deep-cleaning to preserve the vibrance and durability of your precious hand-woven carpets.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold mb-4 group-hover:bg-red-700 transition-all">
                                    03
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Carpet Installation</h3>
                                <p className="text-gray-400">
                                    Expert installation services ensuring a flawless fit and finish, enhancing the charm of your interiors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Choose Hands Carpets?</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Elevate your space with the finest craftsmanship and materials. Here’s why Hands Carpets is the ultimate choice.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 - Authentic Craftsmanship */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3-3 3M5 9l3 3-3 3m7-3h7a2 2 0 012 2v6a2 2 0 01-2 2h-7M4 7h6a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Authentic Craftsmanship</h4>
                                <p className="text-gray-400">
                                    Every carpet is a masterpiece, handwoven by skilled artisans with decades of experience.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 - Premium Materials */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 9.5l-5.5-5.5-4.5 4.5 5.5 5.5a5.5 5.5 0 11-8-7.9A5.5 5.5 0 0117.1 5.7l2.4 2.4-4.5 4.5-2.4-2.4a5.5 5.5 0 00-7.8 7.8l5.5-5.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Premium Materials</h4>
                                <p className="text-gray-400">
                                    We use only the finest wool, silk, and natural dyes to create carpets that last generations.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 - Tailored to Your Space */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-pink-600 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3-3 3M5 9l3 3-3 3m7-3h7a2 2 0 012 2v6a2 2 0 01-2 2h-7M4 7h6a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Tailored to Your Space</h4>
                                <p className="text-gray-400">
                                    Custom sizes, colors, and designs available to match your unique taste and interiors perfectly.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 - Sustainable Process */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v7l-9 7-9-7V9z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Sustainable Process</h4>
                                <p className="text-gray-400">
                                    Eco-friendly production methods that respect nature while creating stunning carpets.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 - Trusted by Thousands */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10l-6 6-6-6" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Trusted by Thousands</h4>
                                <p className="text-gray-400">
                                    Join our family of satisfied clients worldwide who trust Hands Carpets for luxury and quality.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6 - Lifetime Support */}
                        <div className="flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full text-3xl font-bold shadow-lg transform transition-all duration-500 hover:rotate-12">
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l-8-8h6V4h4v8h6l-8 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">Lifetime Support</h4>
                                <p className="text-gray-400">
                                    We are always here to help with care, maintenance, and future purchases to keep your carpets stunning.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Our Premium Handcrafted Carpet Services
                    </h2>
                    <p className="text-lg text-gray-300 mb-12">
                        Discover the range of services we offer to enhance your living space with bespoke, hand-made carpets. From personalized designs to expert crafting, we provide a service that's as unique as your home.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://handscarpets.com/cdn/shop/files/Modern_mobile_e6b46c69-a1d0-4b7e-bd79-2a36d5915de7.jpg?v=1717758272"
                                alt="Custom Carpet Design"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Design Consultation</h3>
                            <p className="text-lg text-gray-300">
                                Create a unique carpet that reflects your personal style, with our custom design services.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://image.made-in-china.com/2f0j00USkcruPlgDqo/Wool-Material-Custom-Pattern-High-End-Cheap-Price-Hotel-Carpet.webp"
                                alt="Premium Materials"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Premium Materials</h3>
                            <p className="text-lg text-gray-300">
                                We use only the finest materials, ensuring your carpet is durable, comfortable, and luxurious.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInnj2kwOIvD40Uuk-ET6F10MFdRxb2Cojgw&s"
                                alt="Expert Crafting"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Expert Crafting</h3>
                            <p className="text-lg text-gray-300">
                                Our skilled artisans put great attention to detail in every piece, ensuring the highest quality craftsmanship.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
