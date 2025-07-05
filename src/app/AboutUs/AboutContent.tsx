'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaHandsHelping, FaLeaf } from 'react-icons/fa';

import { FaHandHoldingHeart, FaUserFriends, FaRegGem, FaGlobe, FaHeart } from 'react-icons/fa';

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
    className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white px-4 sm:px-6 md:px-8"
    style={{
      backgroundImage:
        "url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)",
    }}
  >
    {/* 🔳 Glassmorphism Content Box */}
    <div className="relative z-10 w-full max-w-3xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">About Us</h2>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
        Our handcrafted rugs are more than just decor — they’re living traditions. Woven by expert artisans, each piece tells a story of culture, patience, and timeless artistry.
      </p>
      <a
        href="/ContactUs#contact"
        className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
      >
        Get in Touch
      </a>
    </div>
  </section>



//   <section
//   className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center px-4"
//   style={{
//     backgroundImage:
//       "url(https://www.envogueindia.com/images/infrastructure/rugs-carpets-page-top-banner21.jpg)",
//   }}
// >
//   {/* Radial Gradient Overlay */}
//   <div
//     className="absolute inset-0"
//     style={{
//       background:
//         "radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0) 100%)",
//     }}
//   ></div>

//   <div className="relative z-10 w-full max-w-3xl text-center px-6 py-12 sm:py-16">
//     <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Us</h2>
//     <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
//       Our handcrafted rugs are more than just decor — they’re living traditions.
//       Each piece tells a story of culture, patience, and timeless artistry.
//     </p>
//     <a
//       href="/ContactUs#contact"
//       className="inline-block mt-6 px-6 py-3 bg-white text-black rounded hover:bg-black hover:text-white border border-white transition"
//     >
//       Get in Touch
//     </a>
//   </div>
// </section>

);


// Product Card Component
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
    // const products = [
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



    const products = [
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

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
  {/* About Text Section */}
{/* About Description Section (Homepage Style) */}
<div className="mt-10 text-center px-4 sm:px-8 md:px-16 lg:px-24">
  <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">
    At the heart of our journey lies a purpose far greater than business — it’s about preserving a legacy, empowering communities, and celebrating the art of handmade excellence rooted in generations of tradition.
  </p>
  <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">
    We are a collective of passionate creators and storytellers, working hand in hand with artisans across India — many of whom have inherited their craft through generations. Every piece we offer is a living thread in the fabric of history, woven with tradition, care, and soul.
  </p>
  <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">
    We invite you to join this journey — to cherish what’s handmade, support communities, and carry forward the timeless stories that deserve to be told.
  </p>
</div>


{/* Divider Title Section */}
<div className="section-title text-center mt-12">
  <div className="flex items-center justify-center w-11/12 mx-auto">
    <div className="flex-1 h-px bg-gray-600"></div>
    <h2 className="mx-4 text-2xl text-gray-400 uppercase font-normal whitespace-nowrap">
      OUR COMMITMENTS
    </h2>
    <div className="flex-1 h-px bg-gray-600"></div>
  </div>
</div>


{/* Commitments Card Section */}
<section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    <CardBox
      title="Empowering Artisans"
      icon={<FaHandsHelping />}
      iconColor="text-white"
      text="Working with generations of weavers to preserve skills and heritage."
      extra="Each rug carries their story and spirit."
    />
    <CardBox
      title="Women-Led Workforce"
      icon={<FaUserFriends />}
      iconColor="text-white"
      text="We train and support rural women, offering fair wages and dignity."
      extra="Enabling financial independence and confidence."
    />
    <CardBox
      title="Eco-Conscious Craft"
      icon={<FaLeaf />}
      iconColor="text-white"
      text="We prioritize natural dyes, sustainable materials, and low-impact methods."
      extra="Every rug is kind to people and the planet."
    />
  </div>
</section>




<section id = "why" className="py-20 bg-gray-950">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Choose Carpets Decor?</h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Discover the difference with Carpets Decor — where every thread carries purpose, legacy, and handmade excellence.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Preserving Legacy",
          desc: "Our carpets are woven by artisans who inherit generations of weaving knowledge, preserving cultural traditions.",
          icon: <FaRegGem className="text-3xl text-[#f4d57f]" />,
        },
        {
          title: "Empowering Women",
          desc: "We prioritize rural women’s employment, offering fair wages, training, and confidence through dignified work.",
          icon: <FaUserFriends className="text-3xl text-[#f4d57f]" />,
        },
        {
          title: "Handmade Excellence",
          desc: "Every rug is shaped by hand, heart, and heritage — making each piece unique and soulful.",
          icon: <FaHandHoldingHeart className="text-3xl text-[#f4d57f]" />,
        },
        {
          title: "Sustainable Materials",
          desc: "We use natural dyes and eco-friendly processes to create carpets that are kind to the Earth and safe for your home.",
          icon: <FaLeaf className="text-3xl text-[#f4d57f]" />,
        },
        {
          title: "Ethical Production",
          desc: "We work directly with artisans, ensuring transparency, fair treatment, and responsible sourcing.",
          icon: <FaGlobe className="text-3xl text-[#f4d57f]" />,
        },
        {
          title: "Purposeful Living",
          desc: "When you choose our carpets, you support communities, preserve art, and bring meaningful beauty into your space.",
          icon: <FaHeart className="text-3xl text-[#f4d57f]" />,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group flex items-start space-x-6 p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-[#f4d57f] text-[#f4d57f] transition-all duration-500 group-hover:rotate-12 group-hover:scale-105">
              {item.icon}
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
