import React from 'react'

const page = () => {
    // const posts = [
    //     {
    //         title: 'Handcrafted Carpets: A Step Towards Sustainable Living',
    //         date: 'April 27, 2025',
    //         excerpt: 'Handmade carpets are not just beautiful; they are an eco-friendly choice that supports sustainability...',
    //         imgSrc: 'https://shivalika.co/wp-content/uploads/2024/10/Untitled-design-5.jpg',
    //     },
    //     {
    //         title: 'The Intricate Process of Weaving Traditional Carpets',
    //         date: 'April 28, 2025',
    //         excerpt: 'A deep dive into the time-honored techniques used in weaving traditional handwoven carpets...',
    //         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTofCXV2CMM3_sjNJw9P55rMcGQR03YdKFLg&s',
    //     },
    //     {
    //         title: 'How to Choose the Perfect Handwoven Carpet for Your Home',
    //         date: 'April 29, 2025',
    //         excerpt: 'Choosing the right handwoven carpet can transform your living space. Here’s what you should consider...',
    //         imgSrc: 'https://www.yakcarpet.in/wp-content/uploads/2018/05/living-room-1-500x341.jpg',
    //     },
    // ];
    return (
        <div className='bg-black'>
            <section
                id="hero"
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://cdn.shopify.com/s/files/1/0755/3017/4762/files/designer-bg_1.jpg?v=1691408778')",
                }}
            >
                <div className="flex items-center justify-center h-full text-center text-white relative px-6 sm:px-12">
                    <div className="mt-20">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white-500">
                            Welcome to Our Blog
                        </h1>

                        <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700">
                            Dive into inspiring stories, in-depth articles, and the latest insights on technology, web development, and more.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#blog-section"
                                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg transition duration-300"
                            >
                                Explore Blogs
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="about-hero"
                className="min-h-screen w-full bg-black flex flex-col lg:flex-row items-center text-center lg:text-left px-4 sm:px-6 lg:px-8"
            >
                {/* Left Content Section */}
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-sm font-bold text-white uppercase tracking-[3px]">
                        Blogs Page
                    </p>
                    <h1 className="text-4xl sm:text-6xl text-white">
                        Discover Inspiring Stories
                    </h1>
                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto lg:mx-0">
                        Explore a variety of topics and insights from our blog posts.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="Team Collaboration"
                            className="w-full max-w-md lg:max-w-lg object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Blog Insights</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Dive into the world of carpets and decor! Our blog brings you the latest trends, tips, and expert insights.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Post 1 */}
                        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://5.imimg.com/data5/EM/CD/GLADMIN-25281206/floor-carpets-500x500.png"
                                alt="Trendy Carpet Styles"
                                className="w-full h-64 object-cover transform hover:scale-110 transition-all duration-500"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl text-white font-bold mb-2">Trendy Carpet Styles for Modern Homes</h3>
                                <p className="text-gray-300 mb-4">
                                    Explore the latest carpet trends and how to incorporate them into your home for a fresh, stylish look.
                                </p>
                                <a href="/BlogDetails" className="text-purple-500 hover:text-purple-400 flex items-center justify-center">
                                    Read More
                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXHx3gPP5tr8TrDdMfdiOvXhF8WqktK2BAw&s"
                                alt="Carpet Cleaning Tips"
                                className="w-full h-64 object-cover transform hover:scale-110 transition-all duration-500"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl text-white font-bold mb-2">Top Carpet Cleaning Tips to Keep Them Fresh</h3>
                                <p className="text-gray-300 mb-4">
                                    Learn how to maintain and clean your carpets properly to keep them looking new and fresh for years.
                                </p>
                                <a href="/BlogDetails" className="text-purple-500 hover:text-purple-400 flex items-center justify-center">
                                    Read More
                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://content3.jdmagicbox.com/v2/comp/delhi/35/011pje00935/catalogue/hindustan-carpets-tilak-nagar-delhi-carpet-dealers-y9bp2i6zpn.jpg"
                                alt="Choosing the Right Carpet"
                                className="w-full h-64 object-cover transform hover:scale-110 transition-all duration-500"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl text-white font-bold mb-2">How to Choose the Perfect Carpet for Your Space</h3>
                                <p className="text-gray-300 mb-4">
                                    Choosing the right carpet can transform your room. Read our guide on selecting the perfect carpet for your home.
                                </p>
                                <a href="/BlogDetails" className="text-purple-500 hover:text-purple-400 flex items-center justify-center">
                                    Read More
                                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Our Customers Are Saying</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Hear from our happy customers who have transformed their homes with our carpets.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 p-8 hover:bg-gray-700">
                        <p className="text-lg text-gray-300 mb-6 italic">
                            "The carpets are of exceptional quality, and they’ve added so much warmth and character to our home. The whole process was seamless!"
                        </p>
                        <div className="flex items-center justify-start space-x-6">
                            <img
                                src="https://randomuser.me/api/portraits/women/9.jpg"
                                alt="Customer 1"
                                className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                            />
                            <div>
                                <p className="font-semibold text-white text-lg">Emily Johnson</p>
                                <p className="text-sm text-gray-400">Interior Designer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 p-8 hover:bg-gray-700">
                        <p className="text-lg text-gray-300 mb-6 italic">
                            "I’m absolutely in love with the quality and style of the carpets. It really brought our living room together."
                        </p>
                        <div className="flex items-center justify-start space-x-6">
                            <img
                                src="https://randomuser.me/api/portraits/men/11.jpg"
                                alt="Customer 2"
                                className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                            />
                            <div>
                                <p className="font-semibold text-white text-lg">John Smith</p>
                                <p className="text-sm text-gray-400">Homeowner</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 p-8 hover:bg-gray-700">
                        <p className="text-lg text-gray-300 mb-6 italic">
                            "From selection to installation, the entire experience was amazing. The quality of the carpets exceeded my expectations."
                        </p>
                        <div className="flex items-center justify-start space-x-6">
                            <img
                                src="https://randomuser.me/api/portraits/men/14.jpg"
                                alt="Customer 3"
                                className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                            />
                            <div>
                                <p className="font-semibold text-white text-lg">David Brown</p>
                                <p className="text-sm text-gray-400">Business Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="py-16 bg-black">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-semibold text-white mb-8">Explore Our Blog</h2>
                    <p className="text-lg text-gray-600 mb-12">Discover tips, trends, and the art behind handcrafted carpets that bring timeless beauty to your home.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                <img src={post.imgSrc} alt={post.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2 text-white">{post.title}</h3>
                                    <p className="text-sm mb-4 text-white">{post.date}</p>
                                    <p className="text-base">{post.excerpt}</p>
                                    <a href="#" className="mt-4 inline-block text-yellow-400 hover:text-yellow-300 font-semibold">Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default page
