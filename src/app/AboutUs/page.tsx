'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface ProductCardProps {
    image: string;
    title: string;
    description: string;
  }
  interface CarBoxProps {
    title: string;
    iconColor: string;
    gradientFrom: string;
    gradientTo: string;
    text: string;
    extra?: string | React.ReactNode; // optional if not always present
  }
  
// Hero Section Component
const HeroSection = () => (
    <section
        className="bg-cover bg-center py-16 min-h-[90vh] text-white"
        style={{
            backgroundImage:
                'url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)',
        }}
    >
        <div className="container mx-auto text-center mt-26">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">About Us</h2>
            <p className="text-lg sm:text-xl mb-12">
                We are passionate about creating high-quality, handcrafted carpets
                that tell a story of tradition, artistry, and excellence. Our artisans
                pour years of craftsmanship into every piece, ensuring that each carpet
                is unique and built to last.
            </p>
            <a
                href="#contact"
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-black rounded-full font-semibold transition duration-300 ease-in-out"
            >
                Get in Touch
            </a>
        </div>
    </section>
);

// Product Card Component
const ProductCard = ({ image, title, description }: ProductCardProps) => (
    <div className="bg-gray-800 h-130 shadow-lg rounded-lg overflow-hidden transition-transform transform">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6">{description}</p>
            <a
                href="/CardDetails"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105"
            >
                Shop Now
            </a>
        </div>
    </div>
);

// CardBox Component (For Vision, Mission, Craftsmanship)
const CardBox = ({ title, iconColor, gradientFrom, gradientTo, text, extra }: CarBoxProps) => (
    <div
        className={`bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:rotate-3 hover:cursor-pointer`}
    >
        <div className="flex justify-center items-center mb-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-16 w-16 ${iconColor} hover:opacity-75 transition-colors duration-300`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7M5 12h14"
                />
            </svg>
        </div>
        <h3 className="text-3xl font-semibold mb-4 text-gray-100">{title}</h3>
        <p className="text-gray-300">{text}</p>
        <div className="mt-6 text-gray-100 text-lg hidden hover:block opacity-90 transition-all duration-300">
            <p>{extra}</p>
        </div>
    </div>
);

// Main Page Component
const Page = () => {
    const products = [
        {
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
            title: 'Silk Vintage Carpet',
            description: 'A vintage silk carpet that adds elegance to any room.',
        },
        {
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GXwHz53377F1P8swEifWw9adKbVCJcSb9Q&s',
            title: 'Traditional Wool Carpet',
            description: 'Crafted with fine wool, perfect for a cozy ambiance.',
        },
        {
            image:
                'https://wallmantra.com/wp-content/uploads/presto-carpets-rugs-geometric-pattern-blue-mauve-tufted-area-carpet-32952737333414.jpg',
            title: 'Geometric Pattern Carpet',
            description: 'Bold patterns ideal for contemporary decor.',
        },
        {
            image:
                'https://m.media-amazon.com/images/I/81VMMgaSseL._AC_UF894,1000_QL80_.jpg',
            title: 'Luxury Persian Carpet',
            description: 'Intricate design with vibrant colors.',
        },
        {
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
            title: 'Handwoven Jute Rug',
            description: 'Rustic eco-friendly jute with natural texture.',
        },
        {
            image:
                'https://m.media-amazon.com/images/I/81VMMgaSseL._AC_UF894,1000_QL80_.jpg',
            title: 'Shaggy Area Carpet',
            description: 'Ultra-soft rug that adds warmth.',
        },
        {
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
            title: 'Modern Abstract Carpet',
            description: 'Perfect for bold, artistic interiors.',
        },
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <section
                id="about"
                className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-4 lg:px-16 relative overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 transform translate-z-0"
                    style={{
                        backgroundImage:
                            'url(https://source.unsplash.com/1600x900/?carpet,interior)',
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto text-center text-white z-10">
                    <h2 className="text-6xl font-extrabold mb-6 text-gray-100">
                        About Carpets
                    </h2>
                    <p className="text-lg mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        At Hands Carpets, we specialize in creating bespoke carpets that
                        transform your living spaces. Our expert artisans craft carpets that
                        suit your unique style and preferences. With years of experience in
                        the industry, we bring high-quality materials and impeccable
                        craftsmanship to every project.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        {/* Vision */}
                        <CardBox
                            title="Our Vision"
                            iconColor="text-yellow-500"
                            gradientFrom="from-purple-600"
                            gradientTo="to-purple-400"
                            text="To be the leading provider of high-quality, custom-designed carpets and decor that inspire creativity and comfort in homes worldwide."
                            extra="Our goal is to elevate homes with unique and personal designs that stand the test of time."
                        />

                        {/* Mission */}
                        <CardBox
                            title="Our Mission"
                            iconColor="text-teal-500"
                            gradientFrom="from-green-600"
                            gradientTo="to-green-400"
                            text="To deliver exceptional products that meet the unique design needs of our customers, while providing excellent customer service and lasting value."
                            extra="Our dedication to quality and service is what sets us apart."
                        />

                        {/* Craftsmanship */}
                        <CardBox
                            title="Our Craftsmanship"
                            iconColor="text-indigo-500"
                            gradientFrom="from-red-600"
                            gradientTo="to-red-400"
                            text="We believe in creating carpets that stand the test of time, combining traditional techniques with modern design to offer durability and elegance."
                            extra="Our skilled artisans craft each piece with passion, bringing comfort and beauty to every corner of your home."
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-400">
                            Every carpet we create is a masterpiece, crafted with passion,
                            precision, and a commitment to making your home feel truly
                            special.
                        </p>
                    </div>
                </div>
            </section>

            {/* Swiper Product Carousel Section */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Explore Our Handcrafted Carpets
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                        Each carpet is a masterpiece, woven with care and tradition.
                    </p>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard {...product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mt-16 max-w-3xl mx-auto text-gray-300 text-center">
                        <p>
                            Our handcrafted carpets are woven with the finest materials,
                            ensuring top-tier quality and timeless durability. Each carpet is
                            unique, crafted by skilled artisans who bring decades of tradition
                            to every knot and weave.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
