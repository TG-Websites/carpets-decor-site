import React from 'react'

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
  
}

const ProductCard = ({ image, title, description }: ProductCardProps) => (
  <div className="flex flex-col bg-gray-800 shadow-lg rounded-lg overflow-hidden h-[500px]">
    <img src={image} alt={title} className="w-full h-64 object-cover" />

    <div className="flex flex-col flex-1 justify-between p-6 text-center">
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <a
        href="/CardDetails"
        className="mt-4 inline-flex self-center px-6 py-3 bg-black text-white rounded-sm hover:bg-white hover:text-black border border-white transition-all duration-300"
      >
        Explore More
      </a>
    </div>
  </div>
);




const products = [
  {
    image: '/images/shopslider.png',
    title: 'Hand Knotted',
    description: 'Hand-knotted rugs, woven knot by knot by skilled Indian artisans, reflect timeless art, heritage, and craftsmanship.',
  },
  {
    image: '/images/vintage carpet.webp',
    title: 'Vintage Overdyed',
    description: 'Unique overdyed rugs combining vintage character with modern aesthetics—each piece tells its own story.',
  },
  {
    image: '/images/shopslider2.png',
    title: 'Hand Tufted',
    description: 'Indo-Tibetan rugs fuse Indian weaving and Tibetan art, showcasing Buddhist, natural, and geometric designs.',
  },
  {
    image: '/images/shopslider3.png',
    title: 'Indo Tibetan Rugs',
    description: 'Artisan-made wool or viscose rugs with soft texture and elegant patterns—perfect for modern spaces.',
  },
  {
    image: '/images/shopslider4.png',
    title: 'Handloom',
    description: 'Artisan-made wool or viscose rugs with soft texture and elegant patterns—perfect for modern spaces.',
  },
  {
    image: '/images/shopslider5.png',
    title: 'Flatweave',
    description: 'Flatweave rugs are lightweight, durable, reversible, and ideal for casual or high-traffic spaces.',
  },
  {
    image: '/images/natural jute.jpeg',
    title: 'Natural Jute',
    description: 'Eco-friendly jute rugs with earthy textures, adding organic warmth and rustic charm to any room.',
  },
  {
    image: '/images/shopslider3.png',
    title: 'Classic Persian',
    description: 'Traditional Persian designs with intricate motifs and vibrant colors.',
  },
];





// interface ProductCardProps {
//     image: string;
//     title: string;
//     description: string;
//     usage: string;
//     material: string;
//     care: string;
//     origin: string;
//     durability: string;
// }

//  const ProductCard = ({
//     image,
//     title,
//     description,
//     usage,
//     material,
//     care,
//     origin,
//     durability,
// }: ProductCardProps) => (
//     <div
//         className="
//       group 
//       w-full 

//       min-h-[420px]         /* ⬅️ Minimum height ensured, but not too tall */
     
//       mx-auto
//     "
//     >
//         <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

//             {/* Front Side */}
//             <div
//                 className="
//           absolute w-full h-full 
//           rounded-lg overflow-hidden bg-gray-800 shadow-lg backface-hidden
//           flex flex-col justify-between
//         "
//             >
//                 <img src={image} alt={title} className="w-full h-48 object-cover" />
//                 <div className="p-6 flex flex-col flex-grow justify-between text-center">
//                     <div>
//                         <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
//                         <p className="text-gray-300 mb-6">{description}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Back Side */}
//             <div
//                 className="
//           absolute w-full h-full 
//           rounded-lg overflow-hidden bg-gray-700 text-white 
//           flex flex-col justify-between 
//           p-6 rotate-y-180 backface-hidden
//         "
//             >
//                 <div>
//                     <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
//                     <p className="text-gray-300 mb-4 text-center">{description}</p>
//                     <div className="flex justify-center">
//                         <div className="space-y-1 text-left max-w-[220px]">
//                             <p>
//                                 <span className="font-semibold text-white">Usage:</span> {usage}
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-white">Material:</span> {material}
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-white">Care:</span> {care}
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-white">Origin:</span> {origin}
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-white">Durability:</span> {durability}
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//                 <a
//                     href="/ContactUs#contact"
//                     className="
//             mt-4 inline-flex self-center 
//             px-8 py-3 bg-black text-white rounded-sm 
//             hover:bg-white hover:text-black border border-white 
//             transition-all duration-300 transform hover:scale-105 text-center
//           "
//                 >
//                     Purchase Now
//                 </a>
//             </div>
//         </div>
//     </div>
// );



// const products = [
//     {
//         image: "/images/shopslider.png",
//         title: "Hand Knotted",
//         description: "Hand-knotted rugs reflect timeless craftsmanship and heritage, adding elegance and warmth to your space.",
//         usage: "Living rooms, bedrooms",
//         material: "100% Wool",
//         care: "Professional cleaning recommended",
//         origin: "India",
//         durability: "15+ years",
//     },
//     {
//         image: "/images/shopslider1.png",
//         title: "Premium Materials",
//         description: "Crafted from premium materials, this rug blends luxury, comfort, and enduring quality seamlessly.",
//         usage: "Dining areas",
//         material: "Wool & Viscose",
//         care: "Vacuum regularly",
//         origin: "Turkey",
//         durability: "10+ years",
//     },
//     {
//         image: "/images/shopslider2.png",
//         title: "Indo Tibetan Rugs",
//         description: "A fusion of Indian weaving and Tibetan art, featuring beautiful natural and geometric motifs.",
//         usage: "Prayer rooms",
//         material: "Silk & Wool",
//         care: "Hand wash only",
//         origin: "Nepal",
//         durability: "20+ years",
//     },
//     {
//         image: "/images/shopslider3.png",
//         title: "Flatweave",
//         description: "Lightweight and reversible, this flatweave rug is perfect for high-traffic and casual spaces.",
//         usage: "Outdoor patios",
//         material: "Cotton",
//         care: "Machine washable",
//         origin: "India",
//         durability: "5+ years",
//     },
//     {
//         image: "/images/shopslider4.png",
//         title: "Modern Abstract",
//         description: "Bold, artistic patterns make a contemporary statement in any modern living space.",
//         usage: "Modern interiors",
//         material: "Wool",
//         care: "Spot clean",
//         origin: "Iran",
//         durability: "12+ years",
//     },
//     {
//         image: "/images/shopslider5.png",
//         title: "Vintage Persian",
//         description: "Classic Persian-inspired designs with a distressed finish create timeless sophistication.",
//         usage: "Luxury spaces",
//         material: "Wool",
//         care: "Professional cleaning",
//         origin: "Persia",
//         durability: "25+ years",
//     },
//     {
//         image: "/images/shopslider.png",
//         title: "Rustic Charm",
//         description: "Earthy textures and rich tones add warmth and character to your décor effortlessly.",
//         usage: "Cabin decor",
//         material: "Jute",
//         care: "Dry clean only",
//         origin: "Bangladesh",
//         durability: "8+ years",
//     },
//     {
//         image: "/images/shopslider4.png",
//         title: "Minimalist Lines",
//         description: "Simple, elegant lines blend seamlessly into minimalist and modern interiors.",
//         usage: "Offices",
//         material: "Cotton blend",
//         care: "Vacuum weekly",
//         origin: "Pakistan",
//         durability: "10+ years",
//     },
// ];







const page = () => {
    return (
        <div>
            <section
                className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage:
                        'url("https://cdn.shopify.com/s/files/1/0755/3017/4762/files/GRID_3.jpg?v=1712752378")',
                }}
            >
                {/* 💠 Glassmorphism Content Box */}
                <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-auto px-6 py-10 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                        Crafting Tradition, Weaving Excellence
                    </h1>

                    <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                        Discover the art of handmade carpets crafted with precision and passion.
                    </p>

                    <a
                        href="/ContactUs#contact"
                        className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
                    >
                        Get a Free Consultation
                    </a>
                </div>
            </section>


            {/* <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Our Premium Handcrafted Carpet Services
                    </h2>
                    <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
                        Discover the range of services we offer to enhance your living space with bespoke, hand-made carpets. From personalized designs to expert crafting, we provide a service that's as unique as your home.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://handscarpets.com/cdn/shop/files/Modern_mobile_e6b46c69-a1d0-4b7e-bd79-2a36d5915de7.jpg?v=1717758272"
                                alt="Custom Carpet Design"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Design Consultation</h3>
                            <p className="text-lg text-gray-300">
                                Create a unique carpet that reflects your personal style, with our custom design services.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://image.made-in-china.com/2f0j00USkcruPlgDqo/Wool-Material-Custom-Pattern-High-End-Cheap-Price-Hotel-Carpet.webp"
                                alt="Premium Materials"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Premium Materials</h3>
                            <p className="text-lg text-gray-300">
                                We use only the finest materials, ensuring your carpet is durable, comfortable, and luxurious.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInnj2kwOIvD40Uuk-ET6F10MFdRxb2Cojgw&s"
                                alt="Expert Crafting"
                                className="w-full h-56 object-cover mb-6 rounded-xl"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-3">Expert Crafting</h3>
                            <p className="text-lg text-gray-300">
                                Our skilled artisans put great attention to detail in every piece, ensuring the highest quality craftsmanship.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </section> */}


            {/* <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-[1600px] mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center">
                        Explore Carpet Decor
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto text-center">
                        Elevate your space with the finest craftsmanship and materials. Here’s why Carpets is the ultimate choice.
                    </p>

                   
                    <div
                        className="
        grid
        gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
                    >
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto text-gray-300 text-center">
                        <p>
                            Our handcrafted carpets are woven with the finest materials,
                            ensuring top-tier quality and timeless durability. Each carpet is
                            unique, crafted by skilled artisans who bring decades of tradition
                            to every knot and weave.
                        </p>
                    </div>
                </div>
            </section> */}


{/*<section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
   <div className="max-w-[1600px] mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center">
      Explore Carpet Decor
    </h2>
    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto text-center">
      Elevate your space with the finest craftsmanship and materials. Here’s why Carpets is the ultimate choice.
    </p>

   
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
        <ProductCard key={index} {...product} />
      ))}
    </div>

    <div className="mt-16 max-w-3xl mx-auto text-gray-300 text-center">
      <p>
        Our handcrafted carpets are woven with the finest materials,
        ensuring top-tier quality and timeless durability. Each carpet is
        unique, crafted by skilled artisans who bring decades of tradition
        to every knot and weave.
      </p>
    </div>
  </div>
</section> */}



<section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
  <div className="max-w-[1600px] mx-auto px-4">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
      Explore Carpet Decor
    </h2>
    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto text-center">
      Elevate your space with the finest craftsmanship and materials. Here’s why Carpets is the ultimate choice.
    </p>

    {/* Grid */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
      "
    >
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>

    {/* Footer Text */}
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






            <section className="pb-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Hand Carpet Services</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            At Carpets, we craft timeless, hand-woven masterpieces tailored to your space. Discover our premium services below.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                        {/* Service 1 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f4d57f] text-black text-2xl font-bold mb-4 border border-[#d6b300] group-hover:bg-[#eac645] transition-all duration-300">
                                    01
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Custom Design</h3>
                                <p className="text-gray-400">
                                    Bespoke hand carpets crafted to reflect your personal style and elevate any living or work space.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f4d57f] text-black text-2xl font-bold mb-4 border border-[#d6b300] group-hover:bg-[#eac645] transition-all duration-300">
                                    02
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Carpet Cleaning</h3>
                                <p className="text-gray-400">
                                    Professional deep-cleaning to preserve the vibrance and durability of your precious hand-woven carpets.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f4d57f] text-black text-2xl font-bold mb-4 border border-[#d6b300] group-hover:bg-[#eac645] transition-all duration-300">
                                    03
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Carpet Installation</h3>
                                <p className="text-gray-400">
                                    Expert installation services ensuring a flawless fit and finish, enhancing the charm of your interiors.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Choose Carpets?</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Elevate your space with the finest craftsmanship and materials. Here’s why Carpets is the ultimate choice.
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
                                desc: "Join our family of satisfied clients worldwide who trust Carpets for luxury and quality.",
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
            </section> */}




        </div>
    )
}

export default page
