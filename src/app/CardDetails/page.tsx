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

    // const CardList = [
    //     {
    //         image:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
    //         title: 'Silk Vintage Carpet',
    //         description: 'A vintage silk carpet that adds elegance to any room.',
    //     },
    //     {
    //         image:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GXwHz53377F1P8swEifWw9adKbVCJcSb9Q&s',
    //         title: 'Traditional Wool Carpet',
    //         description: 'Crafted with fine wool, perfect for a cozy ambiance.',
    //     },
    //     {
    //         image:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
    //         title: 'Geometric Pattern Carpet',
    //         description: 'Bold patterns ideal for contemporary decor.',
    //     },
    //     {
    //         image:
    //             'https://m.media-amazon.com/images/I/81VMMgaSseL._AC_UF894,1000_QL80_.jpg',
    //         title: 'Luxury Persian Carpet',
    //         description: 'Intricate design with vibrant colors.',
    //     },
    //     {
    //         image:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
    //         title: 'Handwoven Jute Rug',
    //         description: 'Rustic eco-friendly jute with natural texture.',
    //     },
    //     {
    //         image:
    //             'https://m.media-amazon.com/images/I/81VMMgaSseL._AC_UF894,1000_QL80_.jpg',
    //         title: 'Shaggy Area Carpet',
    //         description: 'Ultra-soft rug that adds warmth.',
    //     },
    //     {
    //         image:
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOOBf1PNGrjiwpwI7pj6wJP44-214CanScA&s',
    //         title: 'Modern Abstract Carpet',
    //         description: 'Perfect for bold, artistic interiors.',
    //     },
    // ];


    const CardList = [
    {
        image:
            '/images/shopslider.png',
        title: 'Hand Knotted',
        description: 'Hand-knotted rugs, woven knot by knot by skilled Indian artisans, reflect timeless art, heritage, and craftsmanship.',
    },
    {
        image:
            '/images/shopslider1.png',
        title: 'Premium Materials',
        description: 'Our hand-tufted carpet, made with premium wool and viscose, blends elegance, comfort, and lasting.',
    },
    {
        image:
            '/images/shopslider2.png',
        title: 'Hand Tufted',
        description: 'Indo-Tibetan rugs fuse Indian weaving and Tibetan art, showcasing Buddhist, natural, and geometric designs.',
    },
    {
        image:
            '/images/shopslider3.png',
        title: 'Indo Tibetan Rugs',
        description: 'Artisan-made wool or viscose rugs with soft texture and elegant patterns—perfect for modern spaces.',
    },
    {
        image:
            '/images/shopslider4.png',
        title: 'Handloom',
        description: 'Artisan-made wool or viscose rugs with soft texture and elegant patterns—perfect for modern spaces.',
    },
    {
        image:
            '/images/shopslider5.png',
        title: 'Flatweave',
        description: 'Flatweave rugs are lightweight, durable, reversible, and ideal for casual or high-traffic spaces.',
    },

];

    const ProductCard = ({ image, title, description }: ProductCardProps) => (
    <div className="bg-gray-800 h-130 shadow-lg rounded-lg overflow-hidden transition-transform transform">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6">{description}</p>
            <a
                href="/CardDetails"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105"
            >
                Explore More
            </a>
        </div>
    </div>
);


    return (
        <div>
            <section
                className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage:
                        "url('https://www.little-persia.com/cdn/shop/files/folded_persian_rugs.jpg?v=1683033018&width=3200')",
                }}
            >
                {/* 🔳 Glassmorphism Content Box */}
                <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-auto px-6 py-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                        Explore Our Handcrafted Carpets
                    </h2>
                    <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                        Elevate your space with timeless designs, rich textures, and artisanal craftsmanship.
                    </p>
                    <a
                        href="#collection"
                        className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
                    >
                        Shop Collection
                    </a>
                </div>
            </section>

      <div className="px-4 sm:px-6 lg:px-12 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        {/* 🖼️ Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover"
        />

        {/* 📄 Content */}
        <div className="p-4 text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

          <div className="text-sm text-gray-600">
            <p className="font-medium">Size (Feet):</p>
            <p>{product.sizes}</p>
          </div>

          <p className="text-lg font-bold text-gray-900 mt-2">{product.priceRange}</p>
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
