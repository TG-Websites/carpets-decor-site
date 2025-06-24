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
        className="relative bg-cover bg-center min-h-[90vh] text-white flex items-center"
        style={{
            backgroundImage:
                'url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)',
        }}
    >
        {/* 🔳 Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* 🔲 Foreground Content */}
        <div className="relative z-10 w-full">
            <div className="container mx-auto text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">About Us</h2>
                    <p className="text-lg sm:text-xl mb-12 text-gray-200 leading-relaxed">
                        Step into a world where tradition meets ageless artistry. Our hand-woven rugs are not
                        simple floor coverings & wall hangings; they are vibrant portraits of cultural heritage,
                        handmade by expert artisans employing time-honored techniques. Each rug holds the essence
                        of its creator and the tale of a history-filled region.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block mt-5 px-6 py-3 bg-black text-white border border-white rounded transition hover:bg-white hover:text-black"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
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
