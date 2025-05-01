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
const page = () => {
    const products = [
        {
            name: "SILVRYN Dove",
            image: "//handscarpets.com/cdn/shop/files/Silvryn-Dove.jpg?v=1745826280&width=533",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "MESHARA Silver",
            image: "https://handscarpets.com/cdn/shop/files/Meshara-Silver.jpg?v=1745826278&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "MESHARA Gold",
            image: "https://handscarpets.com/cdn/shop/files/Meshara-Gold.jpg?v=1745826277&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/Mergis-Ecru.jpg?v=1745826274&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/Lattice-Mocha.jpg?v=1745300598&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/VernaGreyBlue1.jpg?v=1745223070&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        {
            name: "SILVRYN Dove",
            image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
            sizes: "5'6\" x 8' - 12' x 18'",
            priceRange: "₹ 2,54,100 - ₹ 12,47,400"
        },
        // Add other products here
    ];

    const CardList = [
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

    const ProductCard = ({ image, title, description }:ProductCardProps) => (
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
    
    return (
        <div>
            <section
                className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://www.little-persia.com/cdn/shop/files/folded_persian_rugs.jpg?v=1683033018&width=3200')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/30"></div>
                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Explore Our <br /> Handcrafted Carpets
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                        Elevate your space with timeless designs, rich textures, and artisanal craftsmanship.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                            Shop Collection
                        </button>
                    </div>
                </div>
            </section>
            <div className="px-4 sm:px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 m-2"
                        >
                            <div className="flex justify-center p-2">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-48 h-64 object-cover rounded-lg transition-all duration-300 transform hover:scale-105"
                                />
                            </div>
                            <div className="text-center px-2">
                                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                <div className="text-sm text-gray-600">
                                    <span className="block">Size (Feet):</span>
                                    <span>{product.sizes}</span>
                                </div>
                            </div>
                            <div className="text-center pb-4">
                                <span className="text-lg font-semibold text-gray-900">{product.priceRange}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center px-4">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-white mb-6">Explore Our Handcrafted Carpets</h2>

                    {/* Subheading */}
                    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                        Each carpet is a masterpiece, woven with care and tradition.
                    </p>
                    {/* Product Grid */}
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
                        {CardList.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard {...product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}
export default page
