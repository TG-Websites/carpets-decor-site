'use client';

import React, { useState } from 'react';
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
  material: string;
  customization?: string;
  origin: string;
  extraDetails?: string;
  isFlipped: boolean;     // ✅ parent decide karega
  onClick: () => void;    // ✅ parent ka handler
}

// ---------------- Flippable Product Card ----------------
const FlippableProductCard = ({
  image,
  title,
  customization,
  material,
  origin,
  extraDetails,
  isFlipped,
  onClick,
}: FlippableProductCardProps) => {
  return (
    <div
      className="group w-full h-[320px] perspective cursor-pointer"
      onClick={onClick} // ✅ toggle handled by parent
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d
          group-hover:rotate-y-180 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white shadow-lg backface-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden bg-white text-gray-800 p-4 rotate-y-180 backface-hidden flex flex-col justify-between shadow-lg">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
              <div className="flex justify-center">
                <div className="space-y-1 text-left max-w-[220px]">
                  {material && (
                    <p><span className="font-semibold">Material:</span> {material}</p>
                  )}
                  {customization && (
                    <p><span className="font-semibold">Customization:</span> {customization}</p>
                  )}
                  {origin && (
                    <p><span className="font-semibold">Origin:</span> {origin}</p>
                  )}
                  {extraDetails && (
                    <p>
                      <span className="font-semibold">Available sizes (cm):</span> {extraDetails}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- Products Array ----------------
const products = [
  {
    name: "SILVRYN Dove",
    image: "../images/hand-knotted/handknotted (1).jpg",
    description: "80% New Zealand wool, 20% Indian wool",
    customization: "Yes",
    material: "80% New Zealand wool, 20% Indian wool",
    origin: "India",
  },
  {
    name: "MESHARA Silver",
    image: "../images/hand-knotted/handknotted (2).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "MESHARA Gold",
    image: "../images/hand-knotted/handknotted (3).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "MERGIS Ecru",
    image: "../images/hand-knotted/handknotted (4).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "LATTICE Mocha",
    image: "../images/hand-knotted/handknotted (5).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "VERNA Grey Blue",
    image: "../images/hand-knotted/handknotted (6).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "JORD Grey",
    image: "../images/hand-knotted/handknotted (7).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "MIRAGE Sand",
    image: "../images/hand-knotted/handknotted (8).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "JORD Grey",
    image: "../images/hand-knotted/handknotted (9).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
  {
    name: "JORD Grey",
    image: "../images/hand-knotted/handknotted(11).jpg",
    description: "100% New Zealand wool",
    customization: "Yes",
    material: "100% New Zealand wool",
    origin: "India",
  },
];

// ---------------- CardList for Swiper ----------------
const CardList = [
  {
    image: '/images/shopslider5.png',
    title: 'Silk Carpets',
    description: 'Silk carpets are renowned for their fine craftsmanship, luxurious texture, and finely detailed patterns.',
    link: '/SilkCarpet',
  },
  {
    image: '/images/shopslider3.png',
    title: 'Hand Tufted',
    description: 'Crafted from premium wool and viscose with a tufting tool for a soft, resilient pile and smooth finish.',
    link: '/HandTuffed',
  },
  {
    image: '/images/shopslider4.png',
    title: 'Indo Nepali Rugs',
    description: 'A blend of Indian weaving and Nepali art, combining simplicity with elegant design.',
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


// ---------------- Normal Product Card ----------------
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

// ---------------- Main Page ----------------
export default function Page() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null); // ✅ ek hi card open rahega

  return (
    <div>
      <ProductHero
        name="Hand Knotted"
        description="Individually knotted by skilled Indian artisans, these rugs showcase timeless craftsmanship and cultural heritage."
      />

      {/* Desktop Hint */}
      <div className="hidden md:flex justify-center mt-6">
        <div className="bg-black text-white border border-white/30 backdrop-blur-sm shadow-md px-4 py-2 rounded-md text-sm font-semibold tracking-widest">
          HOVER ON IMAGE TO SEE DETAILS
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="flex md:hidden justify-center mt-6">
        <div className="bg-black text-white border border-white/30 backdrop-blur-sm shadow-md px-4 py-2 rounded-md text-sm font-semibold tracking-widest">
          TAP ON IMAGE TO SEE DETAILS
        </div>
      </div>

      {/* 💠 Flippable Cards Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 12).map((product, index) => (
            <FlippableProductCard
              key={index}
              image={product.image}
              title="Handwoven"
              description={product.description}
              material={product.material}
              customization={product.customization}
              origin={product.origin}
              extraDetails={`60x120, 90x150, 120x180, 150x210, 180x270, 240x300, 300x400, 250 x 350, 150 x 150, 200 x 200, Ø 150, Ø 200, Ø 250, Ø 300`}
              isFlipped={flippedIndex === index} // ✅ sirf ek card flip
              onClick={() =>
                setFlippedIndex(flippedIndex === index ? null : index) // ✅ dobara click pe close
              }
            />
          ))}
        </div>
      </div>

      {/* 🌀 Explore Section with Swiper */}
      <section id="explore" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-white mb-6">Explore Our Handcrafted Carpets</h2>
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