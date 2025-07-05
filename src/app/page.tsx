'use client';

import React, { useState, useEffect } from 'react';
import SwiperComponent from '@/Swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Link from 'next/link';

type ProductCardProps = {
    image: string;
    title: string;
    description: string;
};

const carouselImages = [
    '/images/gptslider1.png',
    '/images/gptslider2.png',
];
const carouselImages1 = [
    '/images/gptslider3.png',
    '/images/gptslider4.png',
];
const carouselImages2 = [
    '/images/gptslider5.png',
    '/images/gptslider6.png',
];



const contactOptions = [
    {
        title: "Contact us",
        text: "Our team is happy to assist you\nfor any query that you may have\non our rugs.",
        link: "/ContactUs",
        button: "GET IN TOUCH",
    },
    {
        title: "Book an appointment",
        text: "We offer complimentary\nconsultation to help you with\nyour special project.",
        link: "/ContactUs",
        button: "CONSULT US",
    },
];
// const blogPosts = [
//     {
//         title: "Hands Overlap. The convergence of forms, hues, and textures.",
//         image:
//             "https://handscarpets.com/cdn/shop/articles/Overlap_blog_cover_1.jpg?v=1742559481",
//         alt: "Hands Overlap. The convergence of forms, hues, and textures.",
//         link: "/blogs/blog/hands-overlap-the-convergence-of-forms-hues-and-textures",
//     },
//     {
//         title: "History Woven by Hands – the new Persian Collection",
//         image:
//             "https://handscarpets.com/cdn/shop/articles/Persian_Collection_5_Final_without_shadow.jpg?v=1736244384",
//         alt: "History Woven by Hands – the new Persian Collection",
//         link: "/blogs/blog/history-woven-by-hands-the-new-persian-collection-1",
//     },
//     {
//         title:
//             "Hands Launches 'KNOTION by Nika Zupanc' at ID India Design Mumbai",
//         image:
//             "https://handscarpets.com/cdn/shop/articles/blog-first_image.jpg?v=1728286772",
//         alt:
//             "Hands Launches 'KNOTION by Nika Zupanc' at ID India Design Mumbai",
//         link: "/blogs/blog/hands-launches-knotion-by-nika-zupanc-at-id-india-design-mumbai",
//     },
// ];


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
    image: '/images/gptslider1.png',
    title: 'Persian Rugs',
    description: 'Traditional Persian designs with intricate motifs and rich colors that bring timeless elegance to any space.',
  },
  {
    image: '/images/gptslider4.png',
    title: 'Silk Carpets',
    description: 'Luxurious silk carpets renowned for their soft texture, shimmering finish, and exquisite craftsmanship.',
  },
  {
    image: '/images/gptslider5.png',
    title: 'Hand Knotted',
    description: 'Hand-knotted rugs, woven knot by knot by skilled Indian artisans, reflect timeless art, heritage, and craftsmanship.',
  },
];

const Page = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % carouselImages.length);
    const nextSlide2 = () => setIndex((prev) => (prev + 1) % carouselImages1.length);
    const nextSlide3 = () => setIndex((prev) => (prev + 1) % carouselImages2.length);
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        const interval1 = setInterval(nextSlide2, 3000);
        const interval2 = setInterval(nextSlide3, 3000);
        return () => {
            clearInterval(interval);
            clearInterval(interval1);
            clearInterval(interval2);
        }
    }, []);





    return (
        <div className="bg-black text-white">
            {/* Navbar */}
            {/* Slider Section */}
            <SwiperComponent />

            {/* Text Content */}
            <div className="mt-6 text-left px-4 sm:px-8">
                <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed ">
                    Step into a world where tradition meets ageless artistry. Our hand-woven rugs are not simple floor coverings & wall hangings; they are vibrant portraits of cultural heritage, handmade by expert artisans employing time-honored techniques, each rug holds the essence of its creator and the tale of a history-filled region. </p>
                <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">

                    The intricate designs based on nature and mythology, with natural dyes and hand-spun yarns, reflect a strong connection to culture, craftsmanship, and community. In selecting our carpets, one is not simply buying an excellent work of art; one is contributing to maintaining the livelihood of artisans and assisting in preserving a beautiful, ancient art.
                </p>
                <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">

                    Feel the warmth of tradition. Experience the touch of heritage. Be the owner of a piece of history.
                </p>



            </div>

            {/* Section Title */}
            <div className="section-title text-center mt-8">
                <div className="flex items-center justify-center w-11/12 mx-auto">
                    <div className="flex-1 h-px bg-gray-400"></div>
                    <h2 className="mx-4 text-2xl text-gray-400 uppercase font-normal whitespace-nowrap">
                        FEATURED
                    </h2>
                    <div className="flex-1 h-px bg-gray-400"></div>
                </div>
            </div>


            {/* Tabs */}
            {/* <ul className="store text-center flex justify-center space-x-4 mt-4">
                <li className="tab-link current  px-4 py-2 border-b-1 border-black">BY STYLE</li>
                <li className="tab-link px-4 py-2 border-b-2 border-transparent hover:border-black font-medium">BY COLLECTION</li>
            </ul> */}

            {/* Contemporary Section (Image Right) */}
            <div className="flex flex-col lg:flex-row items-center py-10 m-0 gap-8 px-4">
                {/* Carousel Section */}
                <div className="w-full lg:w-7/12 relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                        src={carouselImages[index]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❯
                    </button>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-5/12 flex items-center justify-center text-center lg:text-left">
                    <div className="max-w-md">
                        <div className="inline-block mb-0">
                            <p className="text-white text-lg font-semibold mb-0">Persian Rugs</p>
                            {/* <div className="w-full h-0.5 bg-white"></div> */}
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed">
                            These exquisite home carpets serve as a refined link between tradition and modernity.
                            They combine traditional carpet craftsmanship with contemporary styles and color
                            palettes to evoke a sense of familiarity while introducing a renewed aesthetic.
                        </p>
                        <a
                            className="inline-block mt-5 px-4 py-2 bg-black text-white border border-white rounded transition hover:bg-white hover:text-black"
                            href="/CardDetails"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>

            </div>




            {/* Traditional Section (Text First, Image Right) */}
            {/* Silk Carpets Section (Text First, Image Right) */}
            <div className="flex flex-col lg:flex-row items-center py-12 gap-8 px-4">
                {/* 📝 Text Section: left side on desktop, below image on mobile */}
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-start items-center text-center lg:text-left order-2 lg:order-1">
                    <div className="max-w-md w-full">
                        <div className="inline-block mb-0">
                            <p className="text-white text-lg font-semibold mb-0">Silk Carpets</p>
                            {/* <div className="w-full h-0.5 bg-white"></div> */}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Silk carpets are renowned for their fine craftsmanship, luxurious texture, and finely detailed patterns.
                            They are soft yet resilient and possess a refined touch. Silk carpets are not merely ornaments; they are
                            long-lasting works of heritage and art.
                        </p>
                        <a
                            className="inline-block mt-5 px-4 py-2 bg-black text-white border border-white rounded transition hover:bg-white hover:text-black"
                            href="/CardDetails"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>


                {/* 🖼️ Image Section: right side on desktop, top on mobile */}
                <div className="w-full lg:w-7/12 relative aspect-video lg:aspect-[16/9] overflow-hidden rounded-lg order-1 lg:order-2">
                    <img
                        src={carouselImages1[index]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide2}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide2}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❯
                    </button>
                </div>
            </div>


            {/* Hand-Knotted Section (Image Left, Text Right) */}
            <div className="flex flex-col lg:flex-row items-center py-12 gap-8 px-4">
                {/* Image Section */}
                <div className="w-full lg:w-7/12 relative aspect-video lg:aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                        src={carouselImages2[index]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide2}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide2}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ❯
                    </button>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-5/12 flex justify-center items-center text-center lg:text-left">
                    <div className="max-w-md">
                        <div className="inline-block mb-0">
                            <p className="text-white text-lg font-semibold mb-0">Hand Knotted</p>
                            {/* <div className="w-full h-0.5 bg-white"></div> */}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Hand-knotted rugs are the epitome of traditional craftsmanship. Each rug is individually knotted by skilled Indian craftsmen, sometimes taking months to complete. Each piece is a testament to timeless artistry and the resilience of human craftsmanship.
                        </p>
                        <a
                            className="inline-block mt-5 px-4 py-2 bg-black text-white border border-white rounded transition hover:bg-white hover:text-black"
                            href="/CardDetails"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>

            </div>





            <section
                className="block-design flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('/images/parallaximg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "contain", // ✅ added to fix zoom/crop
                    minHeight: "730px",
                    paddingTop: "90px",
                    paddingBottom: "90px",
                }}
            >
                <div className="design-wrapper">
                    <h2 className="text-[42px] text-black uppercase font-semibold tracking-[3px] m-0 md:text-[32px] sm:text-[18px]">
                        DESIGN EMOTION
                    </h2>
                </div>
            </section>


            {/* <div className="yt-video-container relative block text-center my-12">
                <h2 className="graytxt text-3xl font-bold text-white" style={{ letterSpacing: '0.12em' }}>
                    HANDS AND THE BIRTH OF THE BEAUTIFUL
                </h2>
                <div className="w-16 h-0.5 mt-3 bg-[#a2a2a2] mx-auto mb-8"></div>

                <div className="yt-video relative">
                    <img
                        className="video-img w-full h-auto object-cover rounded-lg"
                        src="//handscarpets.com/cdn/shop/files/video-img_852697d9-9567-439d-b1ec-fbfeb6e21e02.jpg?v=1697088851"
                        alt="Handmade Carpet"
                    />

                    <div className="main-video absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <iframe
                            className="iframe rounded-lg"
                            width="100%"
                            height="680"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-75 hover:opacity-100 transition duration-300">
                        <img
                            className="video-btn-img w-16 h-16"
                            src="//handscarpets.com/cdn/shop/files/video-icon2_1d434e79-0c7e-45d6-b219-91298526fa1c.png?v=1697089412"
                            alt="Play Video"
                        />
                    </div>
                </div>
            </div> */}
            {/* <div className="carousel-item relative w-full h-full">
                <div className="relative flex items-center w-full">
                    <picture className="w-full">
                        <source
                            media="(min-width: 769px)"
                            srcSet="//handscarpets.com/cdn/shop/files/LR-Home-page_New-01.jpg?v=1697708817"
                        />
                        <img
                            className="w-full h-auto object-cover"
                            src="//handscarpets.com/cdn/shop/files/LR-Home-page_New-01.jpg?v=1697708817"
                            alt="Carpet Banner"
                            loading="eager"
                        />
                    </picture>

                    <div className="banner-content absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
            </div> */}
            {/* <div className="yt-video2-container block py-12 px-4 md:px-20 bg-black">
                <div className="max-w-6xl mx-auto text-center">
                    <h3
                        className=" font-bold mb-4"
                        style={{ letterSpacing: '0.2em', color: '#ccc' }}
                        data-aos="fade-up"
                    >
                        HANDS x NIKA ZUPANC
                    </h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mt-2 mb-8 rounded-full"></div>

                    <div className="w-16 h-1 bg-black mx-auto mb-8 rounded-full"></div>

                    <div
                        className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 mb-10 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p style={{ color: '#ccc' }}>
                            The highly anticipated collaboration with Nika Zupanc has materialised
                            into a striking carpet collection titled <strong>KNOTION</strong>.
                            Characterised by a delightful interplay of lines and curves and
                            accentuated by a joyful colour palette, each of the ten carpets in the
                            collection has a unique character, defined by a contemporary, almost pop
                            flavour.
                        </p>
                        <p style={{ color: '#ccc' }}>
                            “For me, it was a great inspiration to deeply understand the history and
                            origins of Hands, their traditions, goals, and vision. Based on this
                            research and talks, I came up with a concept where, in essence, I wanted
                            to translate the knot as an essential building block of a silk carpet
                            into a much larger scale. This simple act of fastening two ropes became
                            a creative exploration into geometry, pattern, form, and scale.”
                            <br />
                            <span className="font-semibold italic">&nbsp;-&nbsp;Nika&nbsp;Zupanc</span>
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <div
                className="w-full max-w-7xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-2xl"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/grJA19Vs-6E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div> */}
            {/* <section className="bg-black py-12 px-4">
                <div className="text-center pb-10">
                    <h3 style={{ letterSpacing: '0.1em' }} className="text-white text-4xl font-semibold">
                        FEATURED
                    </h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mt-2 mb-8 rounded-full"></div>
                </div>

                <div
                    className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start bg-[#5a5758] p-6 rounded-lg"
                >
                    <div className="space-y-6 text-center lg:text-left w-full lg:max-w-[400px]">
                        <div>
                            <h1 style={{ color: '#949597' }} className="text-white">Overlap Collection Hand Knotted</h1>
                        </div>

                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white">
                            Hand-knotted rugs are the epitome of traditional craftsmanship. Each rug is individually knotted knot by knot by skilled Indian craftsmen, sometimes taking months to complete. Each one is a testament to timeless artistry, cultural heritage, and the resilience of human craftsmanship
                        </p>
                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white">
                            LORE OUR RUG&quot;India is famous for its hand-knotted carpets.  Where generations of weavers have perfected the skill. Composed of  wool, bamboo silk, or wool-silk, these carpets provide outstanding texture, durability, and visual depth. The use of natural pigments and detailed patterns
                            These rugs transcend their function as mere floor coverings; they are durable works of art that infuse any room with warmth, sophistication, and personality
                            &quot;
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition duration-300"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>

                    <div className="lg:col-span-3 space-y-6 w-full">
                        <div>
                            <img
                                className="w-full max-w-3xl h-auto rounded-xl shadow-lg mx-auto"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Creative_c87cbd1b-7253-4341-8fb1-6bea3f24f262.jpg?v=1743657060"
                                alt="Main Feature"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <a href="#">
                                <img
                                    className="w-full h-[285px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/1-min.png?v=1743659615"
                                    alt="Product 1"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="w-full h-[285px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/2-min.png?v=1743659615"
                                    alt="Product 2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="w-full h-[285px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/3-min.png?v=1743659615"
                                    alt="Product 3"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="bg-black py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-3 space-y-6">
                        <div>
                            <img
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-lg"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Creative_d6abc0cc-8a5b-42e5-9569-331957f86ef6.jpg?v=1726142516"
                                alt="Main Feature"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <a href="#">
                                <img
                                    className="w-full h-[250px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Rosetwirl.webp?v=1726143694"
                                    alt="Product 1"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="w-full h-[250px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Twistscape.webp?v=1726143695"
                                    alt="Product 2"
                                />
                            </a>
                            <a href="#">
                                <img
                                    className="w-full h-[250px] object-cover rounded-md"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Twistscape.webp?v=1726143695"
                                    alt="Product 3"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6 text-center lg:text-left w-full">
                        <div>
                          
                            <h1 style={{ color: '#949597' }} className="text-white text-3xl font-semibold">
                                ~ Hand Tufted ~
                            </h1>
                        </div>

                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white">
                            Experience the ultimate sense of sophistication combined with comfort by our hand-tufted carpet, which was carefully crafted with the help of skilled craftsmen from high-grade wool and viscose. Prepared with a tufting tool for accuracy as well as time efficiency, our carpet has the soft, resilient pile and smooth, even finish
                        </p>

                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white">
                            Hand-tufted carpets provide an ideal combination of art and affordability. The carpets, produced using a handheld tufting gun, can be produced quicker than their hand-knotted counterparts; however, they also maintain exquisite designs and high-quality materials such as wool and viscose. Ideal for tastefully designed interiors, hand-tufted carpets bring color, texture, and comfort to any environment, thereby making them a favorite among modern homes and commercial properties.
                        </p>

                        <a
                            href="#"
                            className="inline-block mt-4 px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition duration-300"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>
            </section> */}

            {/* <div className="text-center px-4 py-10">
                <div className="intro-title mb-8">
                    <h3
                        className=" font-bold mb-4"
                        style={{ letterSpacing: '0.2em', color: '#ccc' }}
                        data-aos="fade-up"
                    >
                        PROJECT SHOWCASE
                    </h3>

                </div>

                <div className="w-[60%] mx-auto p-6">
                    <p className="graytxt sub text-xl mb-6 text-white">
                        The Story of the World&apos;s Largest Handmade carpet <br /> At the Grand Mosque Of Nur-Sultan, Kazakhstan
                    </p>
                    <p className="graytxt text-white mb-6 text-xs">
                        In 2021, at a time when the world was in the throes of the pandemic, looking for every sign of hope, courage, and resilience, a mega-construction project was rapidly taking shape in the heart of Central Asia - a grand mosque, the largest ever built in the region.
                    </p>
                    <p className="graytxt text-white mb-6 text-xs">
                        It was at such a time that a rather defining aspect of the project began its journey over a thousand miles away - at the Patodia production facility in the bustling carpet city of Bhadohi, India.
                    </p>
                </div>


                <div className="img-item text-center mb-6">
                    <img
                        className="lazy w-200 h-120 img-fluid mb-4 rounded-lg shadow-lg mx-auto"
                        alt="Nur-Sultan Grand Mosque"
                        src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Nur-Sultan.jpg?v=1690116402"
                    />
                    <div className="text-center mt-10">
                        <a className="btn bg-white text-black  py-2 px-4 rounded-xs hover:bg-white-600">
                            EXPLORE NOW
                        </a>
                    </div>
                </div>
            </div> */}
            {/* <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Explore Carpet Decor ?
                    </h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                        Elevate your space with the finest craftsmanship and materials. Here’s why Carpets is the ultimate choice.
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
    gap-8
    max-w-6xl
    mx-auto
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



            {/* <section className="bg-gray-100 py-[27px] md:py-[36px]">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold uppercase">
                        READ OUR STORIES
                    </h2>
                    <div className="w-16 h-0.5 bg-black mx-auto mt-2 mb-8 rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-center mx-3">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="w-full md:w-full lg:w-1/3 p-3 px-lg-4 my-3"
                        >
                            <div className="bg-gray-100 rounded-md overflow-hidden">
                                <Link href={post.link}>
                                    <img
                                        src={post.image}
                                        alt={post.alt}
                                        className="w-full h-[300px] object-contain hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </Link>
                                <div className="p-4 text-center">
                                    <h3 className="text-sm text-[#272727] font-medium mb-4 min-h-[48px]">
                                        {post.title}
                                    </h3>
                                    <p
                                        className="text-sm text-[#272727] uppercase hover:underline"
                                    >
                                        Read More
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="bg-[#5a5758] py-8 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-400">
                    {contactOptions.map((option, index) => (
                        <div
                            key={index}
                            className="relative text-center px-4 md:px-16 py-8 md:py-4"
                        >
                            <h2
                                className="text-lg text-white mb-2 relative inline-block after:hidden"
                            >
                                {option.title}
                            </h2>

                            <p className="text-base text-gray-300 mb-9 whitespace-pre-line">
                                {option.text}
                            </p>
                            <a
                                href={option.link}
                                className="inline-block mt-5 px-4 py-2 bg-black text-white border border-white rounded transition hover:bg-white hover:text-black"
                            >
                                {option.button}
                            </a>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    );
};

export default Page;
