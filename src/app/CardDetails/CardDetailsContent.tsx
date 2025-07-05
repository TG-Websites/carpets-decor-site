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


interface FlippableProductCardProps {
  image: string;
  title: string;
  description: string;
  usage: string;
  material: string;
  care: string;
  origin: string;
}

const FlippableProductCard = ({
  image,
  title,
  description,
  usage,
  material,
  care,
  origin,
}: FlippableProductCardProps) => (
  <div className="group w-full h-[320px]"> {/* Fixed height */}
    <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Front */}
      <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white shadow-lg backface-hidden flex flex-col">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
            <p
              className="text-gray-600 text-sm text-center"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </p>
          </div>
          <div className="h-4"></div> {/* Reserve space */}
        </div>
      </div>

      {/* Back */}
      <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white text-gray-800 p-4 rotate-y-180 backface-hidden flex flex-col justify-between shadow-lg">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
            <div className="flex justify-center">
              <div className="space-y-1 text-left max-w-[220px]">
                <p><span className="font-semibold">Usage:</span> {usage}</p>
                <p><span className="font-semibold">Material:</span> {material}</p>
                <p><span className="font-semibold">Care:</span> {care}</p>
                <p><span className="font-semibold">Origin:</span> {origin}</p>
              </div>
            </div>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  </div>
);




const products = [
    {
        name: "SILVRYN Dove",
        image: "//handscarpets.com/cdn/shop/files/Silvryn-Dove.jpg?v=1745826280&width=533",
        description: "A premium hand-knotted carpet in soft dove tones with intricate detailing for an elegant finish.",
        usage: "Floor decor",
        material: "Wool and Silk",
        care: "Vacuum regularly",
        origin: "India",
       
    },
    {
        name: "MESHARA Silver",
        image: "https://handscarpets.com/cdn/shop/files/Meshara-Silver.jpg?v=1745826278&width=360",
        description: "Elegant silver design that enhances modern spaces with luxury and style effortlessly.",
        usage: "Living room",
        material: "Pure Wool",
        care: "Dry clean only",
        origin: "India",
        
    },
    {
        name: "MESHARA Gold",
        image: "https://handscarpets.com/cdn/shop/files/Meshara-Gold.jpg?v=1745826277&width=360",
        description: "Rich golden tones combined with classic patterns to add warmth and character.",
        usage: "Dining area",
        material: "Silk blend",
        care: "Spot clean",
        origin: "India",
      
    },
    {
        name: "MERGIS Ecru",
        image: "https://handscarpets.com/cdn/shop/files/Mergis-Ecru.jpg?v=1745826274&width=360",
        description: "Soft neutral ecru shades bringing understated elegance to any room.",
        usage: "Bedroom",
        material: "Wool",
        care: "Vacuum gently",
        origin: "India",
        
    },
    {
        name: "LATTICE Mocha",
        image: "https://handscarpets.com/cdn/shop/files/Lattice-Mocha.jpg?v=1745300598&width=360",
        description: "Mocha lattice design crafted to complement both classic and modern interiors.",
        usage: "Office",
        material: "Cotton blend",
        care: "Dry clean",
        origin: "India",
       
    },
    {
        name: "VERNA Grey Blue",
        image: "https://handscarpets.com/cdn/shop/files/VernaGreyBlue1.jpg?v=1745223070&width=360",
        description: "Subtle grey-blue tones perfect for contemporary minimalist themes.",
        usage: "Hallway",
        material: "Wool",
        care: "Vacuum weekly",
        origin: "India",
        
    },
    {
        name: "JORD Grey",
        image: "https://handscarpets.com/cdn/shop/files/JordGrey1_ef622d86-6234-46f5-b753-683e69a0ef97.jpg?v=1745223084&width=360",
        description: "Sophisticated grey patterns adding depth and texture to your space.",
        usage: "Study",
        material: "Silk blend",
        care: "Dry clean only",
        origin: "India",
       
    },
    {
        name: "MIRAGE Sand",
        image: "https://handscarpets.com/cdn/shop/files/Mergis-Ecru.jpg?v=1745826274&width=360",
        description: "Warm sand tones and intricate textures for a welcoming atmosphere.",
        usage: "Living room",
        material: "Cotton",
        care: "Spot clean",
        origin: "India",
       
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
        image:
            '/images/shopslider.png',
        title: 'Hand Knotted',
        description: 'Hand-knotted rugs, woven knot by knot by skilled Indian artisans, reflect timeless art, heritage, and craftsmanship.',
    },
    // {
    //     image:
    //         '/images/shopslider1.png',
    //     title: 'Premium Materials',
    //     description: 'Our hand-tufted carpet, made with premium wool and viscose, blends elegance, comfort, and lasting.',
    // },
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
    <div className="flex flex-col bg-gray-800 shadow-lg rounded-lg overflow-hidden h-[500px]">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        <div className="flex flex-col flex-1 justify-between p-6">
            <div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>

            <a
                href="/CardDetails"
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

       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
  <div
    className="
      grid
      gap-8
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
    "
  >
    {products.map((product, index) => (
      <FlippableProductCard
        key={index}
        image={product.image}
        title={product.name}
        description={product.description}
        usage={product.usage}
        material={product.material}
        care={product.care}
        origin={product.origin}
       
      />
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
    );
}

