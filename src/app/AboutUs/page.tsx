'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaEye, FaBullseye, FaHandsHelping } from "react-icons/fa";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}
interface CardBoxProps {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    text: string;
    extra: string;
}



// Hero Section Component
const HeroSection = () => (
    <section
  className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white"
  style={{
    backgroundImage:
      "url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)",
  }}
>
  {/* 🔳 Glassmorphism Content Box */}
  <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-auto px-6 py-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">About Us</h2>
    <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
      Our handcrafted rugs are more than just decor — they're living traditions. Woven by expert artisans, each piece tells a story of culture, patience, and timeless artistry.
    </p>
    <a
      href="#contact"
      className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
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
const CardBox: React.FC<CardBoxProps> = ({
    title,
    icon,
    iconColor,
    text,
    extra,
}) => {
    return (
        <div className="bg-gray-900 border border-white rounded-xl p-6 h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/30">
            <div className="flex justify-center mb-4">
                <div className={`text-4xl ${iconColor}`}>{icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
            <p className="text-gray-300 text-sm text-center leading-relaxed mb-2">{text}</p>
            <p className="text-gray-400 text-xs text-center italic">{extra}</p>
        </div>
    );
};

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
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
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
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            'url(https://source.unsplash.com/1600x900/?carpet,interior)',
                    }}
                ></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto text-center text-white z-10">
                    <h2 className="text-5xl text-white font-extrabold mb-6 drop-shadow-md">About Carpets</h2>
                    <p className="text-lg mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        The intricate designs based on nature and mythology, with natural dyes and hand-spun yarns,
                        reflect a strong connection to culture, craftsmanship, and community.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <CardBox
                            title="Our Vision"
                            icon={<FaEye />}
                            iconColor="text-white"
                            text="To be the leading provider of high-quality, custom-designed carpets that inspire creativity."
                            extra="We aim to elevate homes with timeless design."
                        />
                        <CardBox
                            title="Our Mission"
                            icon={<FaBullseye />}
                            iconColor="text-white"
                            text="Deliver exceptional products and outstanding customer service."
                            extra="Our commitment to excellence drives everything."
                        />
                        <CardBox
                            title="Our Craftsmanship"
                            icon={<FaHandsHelping />}
                            iconColor="text-white"
                            text="Feel the warmth of tradition and the touch of heritage."
                            extra="Handcrafted by skilled artisans with passion."
                        />
                    </div>

                    {/* Footer Text */}
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-400">
                            Every carpet we create is a masterpiece, crafted with passion,
                            precision, and a commitment to making your home feel truly
                            special.
                        </p>
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
                        {[
                            {
                                title: "Authentic Craftsmanship",
                                desc: "Every carpet is a masterpiece, handwoven by skilled artisans with decades of experience.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3-3 3M5 9l3 3-3 3m7-3h7a2 2 0 012 2v6a2 2 0 01-2 2h-7M4 7h6a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                ),
                            },
                            {
                                title: "Premium Materials",
                                desc: "We use only the finest wool, silk, and natural dyes to create carpets that last generations.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 9.5l-5.5-5.5-4.5 4.5 5.5 5.5a5.5 5.5 0 11-8-7.9A5.5 5.5 0 0117.1 5.7l2.4 2.4-4.5 4.5-2.4-2.4a5.5 5.5 0 00-7.8 7.8l5.5-5.5z" />
                                ),
                            },
                            {
                                title: "Tailored to Your Space",
                                desc: "Custom sizes, colors, and designs available to match your unique taste and interiors perfectly.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 7h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                ),
                            },
                            {
                                title: "Sustainable Process",
                                desc: "Eco-friendly production methods that respect nature while creating stunning carpets.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v7l-9 7-9-7V9z" />
                                ),
                            },
                            {
                                title: "Trusted by Thousands",
                                desc: "Join our family of satisfied clients worldwide who trust Hands Carpets for luxury and quality.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                ),
                            },
                            {
                                title: "Lifetime Support",
                                desc: "We are always here to help with care, maintenance, and future purchases to keep your carpets stunning.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l-8-8h6V4h4v8h6l-8 8z" />
                                ),
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <div className="flex-shrink-0">
                                    <div
                                        className={`w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-[#f4d57f] text-[#f4d57f] transition-all duration-500 group-hover:rotate-12 group-hover:scale-105`}
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {item.icon}
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
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
