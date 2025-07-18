'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductHero from './../ProductHero';
interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}


interface FlippableProductCardProps {
    image: string;
    title: string;
    description: string;
    customization: string;

}

const FlippableProductCard = ({
    image,
    title,
    description,
    customization
}: FlippableProductCardProps) => (
    <div className="group w-full h-[320px] perspective">
        <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

            {/* Front */}
            <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white shadow-lg backface-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />

            </div>

            {/* Back */}
            <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white text-gray-800 p-4 rotate-y-180 backface-hidden flex flex-col justify-between shadow-lg">
                <div className="flex-1 flex flex-col justify-center">
                    <div>

                        <div className="flex justify-center">
                            <div className="space-y-2 text-center max-w-[240px] whitespace-pre-line text-sm">
                                <p >{description}</p>

                                <p className='mt-3'><span className="font-semibold">Customization:</span> {customization}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="mt-4 text-center">
                        <a
                            href="/size"
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
                        >
                            Size Available
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
);





const products = [
    {
        name: "SILVRYN Dove",
        image: "../images/hand-knotted/handknotted (1).jpg",
        description: `Wool Used 80% New Zealand wool, 20% Indian wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "MESHARA Silver",
        image: "../images/hand-knotted/handknotted (2).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "MESHARA Gold",
        image: "../images/hand-knotted/handknotted (3).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "MERGIS Ecru",
        image: "../images/hand-knotted/handknotted (4).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "LATTICE Mocha",
        image: "../images/hand-knotted/handknotted (5).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "VERNA Grey Blue",
        image: "../images/hand-knotted/handknotted (6).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "JORD Grey",
        image: "../images/hand-knotted/handknotted (7).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
    {
        name: "MIRAGE Sand",
        image: "../images/hand-knotted/handknotted (8).jpg",
        description: `Wool Used 100% New Zealand wool
Weaving type Handwoven`,
        customization: "Yes",
    },
];





// const page = () => {
//     const products = [
//         {
//             name: "SILVRYN Dove",
//             image: "//handscarpets.com/cdn/shop/files/Silvryn-Dove.jpg?v=1745826280&width=533",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "MESHARA Silver",
//             image: "https://handscarpets.com/cdn/shop/files/Meshara-Silver.jpg?v=1745826278&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "MESHARA Gold",
//             image: "https://handscarpets.com/cdn/shop/files/Meshara-Gold.jpg?v=1745826277&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/Mergis-Ecru.jpg?v=1745826274&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/Lattice-Mocha.jpg?v=1745300598&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/VernaGreyBlue1.jpg?v=1745223070&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         {
//             name: "SILVRYN Dove",
//             image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
//             sizes: "5'6\" x 8' - 12' x 18'",
//             priceRange: "₹ 2,54,100 - ₹ 12,47,400"
//         },
//         // Add other products here
//     ];

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
        image: '/images/shopslider5.png',
        title: 'Silk Carpets',
        description: 'Silk carpets are renowned for their fine craftsmanship, luxurious texture, and finely detailed patterns.',
        link: '/SilkCarpet',
    },
    //   {
    //     image: '/images/shopslider2.png',
    //     title: 'Hand Knotted',
    //     description: 'Individually knotted by skilled Indian artisans, these rugs showcase timeless craftsmanship and cultural heritage.',
    //     link: '/HandKnotted',
    //   },
    {
        image: '/images/shopslider3.png',
        title: 'Hand Tufted',
        description: 'Crafted from premium wool and viscose with a tufting tool for a soft, resilient pile and smooth finish.',
        link: '/HandTuffed',
    },
    {
        image: '/images/shopslider4.png',
        title: 'Indo Nepali Rugs',
        description: 'A blend of Indian weaving and nepali art, combining simplicity with elegant design.',
        link: '/IndoNepali',
    },
    {
        image: '/images/shopslider5.png',
        title: 'Handloom',
        description: 'Durable, soft rugs made with loom-assisted precision and rich textures for modern interiors.',
        link: '/Handloom',
    },
    {
        image: '/images/shopslider4.png',
        title: 'Flatweave',
        description: 'Lightweight, reversible rugs with bold geometric patterns—ideal for casual and high-traffic areas.',
        link: '/Flatweave',
    },
    {
        image: '/images/shopslider2.png',
        title: 'Outdoor Rugs',
        description: 'Weather-resistant, UV-stable rugs that add comfort and style to patios and outdoor spaces.',
        link: '/OutdoorRugs',
    },
];

const ProductCard = ({ image, title, description, link }: ProductCardProps) => (
    <div className="flex flex-col bg-gray-800 shadow-lg rounded-lg overflow-hidden h-[500px]">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        <div className="flex flex-col flex-1 justify-between p-6">
            <div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>

            <a
                href={link}
                className="mt-4 self-center px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300"
            >
                Explore More
            </a>
        </div>
    </div>
);

export default function Page() {
    return (
        <div>
            <ProductHero
                name="Hand Knotted"
                description="Individually knotted by skilled Indian artisans, these rugs showcase timeless craftsmanship and cultural heritage."
            />

            <div className="overflow-x-hidden">
                <div className="relative">
                    {/* 🔳 Rotated label aligned like card overlay */}
                    <div className="absolute inset-y-0 flex items-center right-4 z-10">
                        <div className="transform rotate-90 origin-right bg-black text-white border border-white/30 
                      backdrop-blur-sm shadow-md px-4 py-2 rounded-md text-sm font-semibold tracking-widest">
                            HOVER ON IMAGE TO SEE DETAILS
                        </div>
                    </div>

                    {/* 💠 Cards Grid */}
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product, index) => (
                                <FlippableProductCard
                                    key={index}
                                    image={product.image}
                                    title={product.name}
                                    description={product.description}
                                    customization={product.customization}

                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>





            <section id="explore" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
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
    );
}

