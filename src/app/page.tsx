'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
const slides = [
    {
        link: "/collections/antique-turkish-kilims",
        desktopSrc: "//handscarpets.com/cdn/shop/files/Antique_Turkish_kilim_Homepage_banner.jpg?v=1744782032",
        mobileSrc: "//handscarpets.com/cdn/shop/files/Antique_Turkish_kilim_home_page-Mobile.jpg?v=1744782021",
    },
    {
        link: "/collections/overlap",
        desktopSrc: "//handscarpets.com/cdn/shop/files/Overlap_Collection_Webpage_banner_Desktop.jpg?v=1739434377",
        mobileSrc: "//handscarpets.com/cdn/shop/files/Overlap_Collection_Webpage_banner_Mobile.jpg?v=1739434377",
    },
    {
        link: "/collections/persian-carpets-rugs",
        desktopSrc: "//handscarpets.com/cdn/shop/files/Persian_Collection_Webpage_banner_Desktop_copy_c189fb17-e4d6-4b53-a7ff-3d7d3841724a.jpg?v=1733120069",
        mobileSrc: "//handscarpets.com/cdn/shop/files/Persian_Collection_Webpage_banner_Mobile_copy_48b35092-69d1-4bb5-85eb-e2198f2af3fc.jpg?v=1733120068",
    },
    {
        link: "/collections/knotion",
        desktopSrc: "//handscarpets.com/cdn/shop/files/Nika_Landing_page_Web_Banner.jpg?v=1726555523",
        mobileSrc: "//handscarpets.com/cdn/shop/files/Nika_Landing_page_Mobile_Banner.jpg?v=1726555523",
    },
    {
        link: "/collections/new-arrival",
        desktopSrc: "//handscarpets.com/cdn/shop/files/New_Arrival_banner_desktop.jpg?v=1725262545",
        mobileSrc: "//handscarpets.com/cdn/shop/files/New_Arrival_mobile_copy.jpg?v=1725262554",
    },
    {
        link: "/collections/antonym",
        desktopSrc: "//handscarpets.com/cdn/shop/files/Antonym_Web_banner-02_copy.jpg?v=1708412688",
        mobileSrc: "//handscarpets.com/cdn/shop/files/Antonym_Mob_banner-03_copy.jpg?v=1708412923",
    },
    {
        link: "/collections/larry-roberts-carpets-rugs",
        desktopSrc: "//handscarpets.com/cdn/shop/files/20231027-173732.jpg?v=1698409325",
        mobileSrc: "//handscarpets.com/cdn/shop/files/20231027-191353.jpg?v=1698414255",
    },
    {
        link: "/collections/instinct-carpets-rugs",
        desktopSrc: "//handscarpets.com/cdn/shop/files/instinct-banner-web_1.jpg?v=1693898008",
        mobileSrc: "//handscarpets.com/cdn/shop/files/instinct-banner-mobile_1.jpg?v=1693897969",
        caption: { title: "Instinct", subtitle: "~ Collection ~" },
    },
    {
        link: "/collections/disperse-carpets-rugs",
        desktopSrc: "//handscarpets.com/cdn/shop/files/disperse-banner.jpg?v=1693898215",
        mobileSrc: "//handscarpets.com/cdn/shop/files/disperse-banner-mobile_b4f68f7f-3401-4347-bb9f-0c2b1c187934.jpg?v=1693898192",
        caption: { title: "Disperse", subtitle: "~ Collection ~" },
    },
];

const carouselImages = [
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/1_801b1baa-c9d5-4450-a930-0f425d8bc700.jpg?v=1743656464',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/2_5449037b-a2f2-4ca7-923f-affa46dd7c79.jpg?v=1743656465',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/3_0d32da69-8cc8-4f0e-b581-10f9b1d4bacf.jpg?v=1743656465',
    'https://cdn.shopify.com/s/files/1/0755/3017/4762/files/4_8ca3fdbd-9e0d-4ea2-8a15-a4fcd0b5246d.jpg?v=1743656464',
];
const contactOptions = [
    {
        title: "Contact us",
        text: "Our team is happy to assist you\nfor any query that you may have\non our rugs.",
        link: "/pages/contact-us-new-delhi",
        button: "GET IN TOUCH",
    },
    {
        title: "Book an appointment",
        text: "We offer complimentary\nconsultation to help you with\nyour special project.",
        link: "/pages/meeting-request#page-content-wrapper",
        button: "CONSULT US",
    },
    {
        title: "Visit our store",
        text: "Make a visit to our store in\nNew Delhi, Mumbai,\nHyderabad, Singapore and Dubai",
        link: "/pages/contact-us-singapore",
        button: "VISIT US",
    },
];
const blogPosts = [
    {
        title: "Hands Overlap. The convergence of forms, hues, and textures.",
        image:
            "https://handscarpets.com/cdn/shop/articles/Overlap_blog_cover_1.jpg?v=1742559481",
        alt: "Hands Overlap. The convergence of forms, hues, and textures.",
        link: "/blogs/blog/hands-overlap-the-convergence-of-forms-hues-and-textures",
    },
    {
        title: "History Woven by Hands – the new Persian Collection",
        image:
            "https://handscarpets.com/cdn/shop/articles/Persian_Collection_5_Final_without_shadow.jpg?v=1736244384",
        alt: "History Woven by Hands – the new Persian Collection",
        link: "/blogs/blog/history-woven-by-hands-the-new-persian-collection-1",
    },
    {
        title:
            "Hands Launches 'KNOTION by Nika Zupanc' at ID India Design Mumbai",
        image:
            "https://handscarpets.com/cdn/shop/articles/blog-first_image.jpg?v=1728286772",
        alt:
            "Hands Launches 'KNOTION by Nika Zupanc' at ID India Design Mumbai",
        link: "/blogs/blog/hands-launches-knotion-by-nika-zupanc-at-id-india-design-mumbai",
    },
];
const Page = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % carouselImages.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black text-white">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-black shadow-md">
                <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center">
                    {/* <div className="text-xl font-bold text-white">Carpet Store</div> */}
                    <img
                        src="/images/logo1.png"
                        style={{ width: 70, height: 70, objectFit: 'cover' }}
                        alt="Logo"
                        loading="eager"
                    />


                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300 transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <details className="md:hidden relative">
                        <summary className="text-white cursor-pointer list-none">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </summary>

                        {/* Dropdown Menu */}
                        <ul className="absolute right-0 mt-2 bg-black text-white w-48 shadow-lg rounded-md p-4 space-y-4 z-50">
                            <li><a href="#" className="block hover:text-gray-300">Home</a></li>
                            <li><a href="#about" className="block hover:text-gray-300">About</a></li>
                            <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
                            <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
                        </ul>
                    </details>
                </div>
            </nav>

            {/* Slider Section */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 4000 }}
                loop
                className="relative"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <a >
                            <div className="relative w-full h-full">
                                <picture>
                                    <source media="(min-width: 769px)" srcSet={slide.desktopSrc} />
                                    <img
                                        src={slide.mobileSrc}
                                        alt=""
                                        className="w-full h-auto object-cover"
                                        loading="eager"
                                    />
                                </picture>

                                {slide.caption && (
                                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
                                        <h3 className="text-2xl md:text-4xl font-bold">{slide.caption.title}</h3>
                                        <h4 className="text-xl md:text-2xl">{slide.caption.subtitle}</h4>
                                    </div>
                                )}
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Text Content */}
            <div className="mt-6 text-center px-4 sm:px-8">
                <p className="graytxt text-gray-800 text-base sm:text-lg leading-relaxed">
                    Fine handcrafted carpets since 1881. An exclusive collection – designed to stir emotion,<br />
                    brought to life unlike any other. The hand-knotted carpet, woven inch by inch. And the hand-tufted <br />
                    carpet, crafted with care and technique.
                </p>
            </div>

            {/* Section Title */}
            <div className="section-title text-center mt-8">
                <div className="flex items-center justify-center w-11/12 mx-auto">
                    <div className="flex-1 h-px bg-gray-400"></div>
                    <h2 className="mx-4 text-2xl text-gray-400 uppercase font-normal whitespace-nowrap">
                        EXPLORE OUR RUGS
                    </h2>
                    <div className="flex-1 h-px bg-gray-400"></div>
                </div>
            </div>


            {/* Tabs */}
            <ul className="store text-center flex justify-center space-x-4 mt-4">
                <li className="tab-link current  px-4 py-2 border-b-1 border-black">BY STYLE</li>
                <li className="tab-link px-4 py-2 border-b-2 border-transparent hover:border-black font-medium">BY COLLECTION</li>
            </ul>

            {/* Contemporary Section (Image Right) */}
            <div className="flex flex-col lg:flex-row items-center py-10 m-0 gap-6 px-4">
                {/* Carousel Section */}
                <div className="w-full lg:w-7/12 relative">
                    <img
                        src={carouselImages[index]}
                        alt={`Slide ${index + 1}`}
                        className="rounded-lg w-full h-auto object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❮
                    </button>


                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❯
                    </button>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-5/12 flex justify-center items-center text-center lg:text-left py-5">
                    <div>
                        <p style={{ fontSize: 17 }} className="text-white">CONTEMPORARY</p>
                        <div className="flex justify-center lg:justify-start">
                            <div className="w-17 mt-1 h-0.5 bg-white"></div>
                        </div>
                        <p style={{ color: '#a2a2a2' }} className="mt-4 text-gray-700 leading-relaxed">
                            The bridge between past and <br />present, these home carpets <br />
                            combine traditional carpet <br />design elements with <br />
                            contemporary stylistics and <br />colours, evoking sensations that <br />
                            are familiar yet altogether new.
                        </p>
                        <a
                            className="graytxt inline-block mt-5 px-2 py-1 bg-black text-white border border-white rounded transition hover:bg-gray-200 hover:text-black"
                        >
                            EXPLORE THE COLLECTION
                        </a>

                    </div>
                </div>
            </div>

            {/* Traditional Section (Text First, Image Right) */}
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center py-10 m-0 gap-6 px-4">
                {/* Text Content */}


                {/* Carousel Section */}
                <div className="w-full lg:w-7/12 relative">
                    <img
                        src={carouselImages[index]}
                        alt={`Slide ${index + 1}`}
                        className="rounded-lg w-full h-auto object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❮
                    </button>


                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❯
                    </button>
                </div>
                <div className="w-full lg:w-5/12 flex justify-center items-center text-center lg:text-right py-5">
                    <div>
                        <p style={{ fontSize: 17, alignSelf: 'flex-end' }} className="text-white">MODERN</p>
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-15 mt-1 h-0.5 bg-white"></div>
                        </div>

                        <p className="graytxt mt-4 text-gray-700 leading-relaxed">
                            Contemporary carpet designs,<br />that are current and modern,<br />
                            reflecting new and diverse<br />
                            thematic, stylistic and colour<br />
                            orientation. The contemporary <br />rugs reflect geometrics,<br />organics, abstract art, pop art,<br />from the minimal to the bold and <br />vibrant. The geometric carpets <br />with fascinating patterns make <br />for a refreshing addition to your <br />home decor.
                        </p>
                        <a
                            className="graytxt inline-block mt-5 px-2 py-1 bg-black text-white border border-white rounded transition hover:bg-gray-200 hover:text-black"
                        >
                            EXPLORE THE COLLECTION
                        </a>

                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center py-10 m-0 gap-6 px-4">
                {/* Carousel Section */}
                <div className="w-full lg:w-7/12 relative">
                    <img
                        src={carouselImages[index]}
                        alt={`Slide ${index + 1}`}
                        className="rounded-lg w-full h-auto object-cover transition-all duration-500"
                    />
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❮
                    </button>


                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                    >
                        ❯
                    </button>

                </div>

                {/* Text Content */}
                <div className="w-full lg:w-5/12 flex justify-center items-center text-center lg:text-left py-5">
                    <div>
                        <p style={{ fontSize: 17 }} className="text-white">TRADITIONAL</p>
                        <div className="flex justify-center lg:justify-start">
                            <div className="w-17 mt-1 h-0.5 bg-white"></div>
                        </div>
                        <p className="graytxt mt-4 text-gray-700 leading-relaxed">
                            Heralding age-old design <br />
                            themes, these are handmade <br />
                            Indian carpets with classic <br />
                            patterns, telling stories with <br />
                            traditional symbolism, motifs <br />
                            and cohesive colour. A varied <br />
                            range of carpet flooring in a <br />
                            combination of themes, <br />
                            materials and qualities to match <br />
                            a plethora of styles.
                        </p>
                        <a
                            className="graytxt inline-block mt-5 px-2 py-1 bg-black text-white border border-white rounded transition hover:bg-gray-200 hover:text-black"
                        >
                            EXPLORE THE COLLECTION
                        </a>

                    </div>
                </div>
            </div>
            <section
                className="block-design flex items-center justify-center text-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.shopify.com/s/files/1/0755/3017/4762/files/parallax-image.jpg?v=1690189653')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
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

            <div className="yt-video-container relative block text-center my-12">
                <h2 className="graytxt text-3xl font-bold text-white" style={{ letterSpacing: '0.12em' }}>
                    HANDS AND THE BIRTH OF THE BEAUTIFUL
                </h2>
                <div className="w-16 h-0.5 mt-3 bg-[#a2a2a2] mx-auto mb-8"></div>

                <div className="yt-video relative">
                    {/* Image as background */}
                    <img
                        className="video-img w-full h-auto object-cover rounded-lg"
                        src="//handscarpets.com/cdn/shop/files/video-img_852697d9-9567-439d-b1ec-fbfeb6e21e02.jpg?v=1697088851"
                        alt="Handmade Carpet"
                    />

                    {/* Video iframe container */}
                    <div className="main-video absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <iframe
                            className="iframe rounded-lg"
                            width="100%"
                            height="680"
                            // src="https://www.youtube.com/embed/4K8KdEpFH0s?si=O_KIlvMkkm41YEzt"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Play Button */}
                    <div className="video-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-75 hover:opacity-100 transition duration-300">
                        <img
                            className="video-btn-img w-16 h-16"
                            src="//handscarpets.com/cdn/shop/files/video-icon2_1d434e79-0c7e-45d6-b219-91298526fa1c.png?v=1697089412"
                            alt="Play Video"
                        />
                    </div>
                </div>
            </div>
            <div className="carousel-item relative w-full h-full">
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

                    {/* Banner content */}
                    <div className="banner-content absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
            </div>
            <div className="yt-video2-container block py-12 px-4 md:px-20 bg-black">
                <div className="max-w-6xl mx-auto text-center">
                    <h3
                        className=" font-bold mb-4"
                        style={{ letterSpacing: '0.2em', color: '#ccc' }}
                        data-aos="fade-up"
                    >
                        HANDS x NIKA ZUPANC
                    </h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mt-2 mb-8 rounded-full"></div>

                    {/* Divider under heading */}
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
            </div>
            {/* Fixed-size responsive video */}
            <div
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
            </div>
            <section className="bg-black py-3 px-4">
                <div className="text-center pb-10 pt-10">
                    <h3 style={{ letterSpacing: '0.1em' }} className="text-white text-4xl font-semibold">FEATURED</h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mt-2 mb-8 rounded-full"></div>
                </div>

                <div style={{ backgroundColor: '#5a5758', }} className="w-full pt-30 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Left Text Content */}
                    <div className="lg:col-span-1 space-y-6 mt-10 lg:mt-22 lg:ml-30 text-center lg:text-left w-full lg:max-w-[400px]">
                        <div>
                            <img
                                className="w-[380px] h-[120px] object-contain mx-auto lg:mx-0"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Logo.png?v=1743657001"
                                alt="Brand Logo"
                            />
                        </div>

                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white ">
                            Where Time, Luxury and Artistry become one
                        </p>
                        <p style={{ color: '#949597', fontSize: 14 }} className="text-gray-300 text-base">
                            A collection where distinction and unity converge, where the boundaries
                            of form and colour blur into something uniquely whole.
                        </p>
                        <a
                            className="graytxt inline-block mt-5 px-2 py-2 text-white border border-white rounded transition hover:bg-gray-200 hover:text-black"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>



                    {/* Right Images */}
                    <div className="lg:col-span-3 space-y-6 w-full">
                        <div>
                            <img
                                className="w-full max-w-[60%] h-auto rounded-xl shadow-lg mx-auto"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Creative_c87cbd1b-7253-4341-8fb1-6bea3f24f262.jpg?v=1743657060"
                                alt="Main Feature"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            <a >
                                <img
                                    className="w-full h-[285px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/1-min.png?v=1743659615"
                                    alt="Product 1"
                                />
                            </a>
                            <a >
                                <img
                                    className="w-full h-[285px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/2-min.png?v=1743659615"
                                    alt="Product 2"
                                />
                            </a>
                            <a >
                                <img
                                    className="w-full h-[285px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/3-min.png?v=1743659615"
                                    alt="Product 3"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black py-16 px-4">
                <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                    {/* Left Images */}
                    <div className="lg:col-span-3 space-y-6">
                        <div>
                            <img
                                className="w-full max-w-[60%] h-[600px] object-cover rounded-xl shadow-lg mx-auto"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Creative_d6abc0cc-8a5b-42e5-9569-331957f86ef6.jpg?v=1726142516"
                                alt="Main Feature"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <a >
                                <img
                                    className="w-full h-[275px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Geomiter.webp?v=1726143694"
                                    alt="Product 1"
                                />
                            </a>
                            <a >
                                <img
                                    className="w-full h-[275px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Rosetwirl.webp?v=1726143694"
                                    alt="Product 2"
                                />
                            </a>
                            <a >
                                <img
                                    className="w-full h-[275px] object-cover rounded-md mx-auto"
                                    src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Twistscape.webp?v=1726143695"
                                    alt="Product 3"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="lg:col-span-1 space-y-6 text-left max-w-[80%] mx-auto mr-16">
                        <div>
                            <img
                                className="w-[400px] h-[100px] object-contain mx-auto"
                                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/Antonym_logo.png?v=1715860773"
                                alt="Brand Logo"
                            />
                        </div>
                        <p style={{ color: '#949597', fontSize: 14 }} className="text-white ">
                            A rare beauty of opposites
                        </p>
                        <p style={{ color: '#949597', fontSize: 14 }} className="text-gray-300 text-base">
                            A new collection of nine distinct, thought-provoking pieces. Of dialogues between contrasts, in patterns, shapes, and textures. Hand tufted with the finest botanical silk and wool for a luxurious texture and an exquisite, untamed sheen.
                        </p>
                        <a
                            className="graytxt inline-block mt-5 px-2 py-2 text-white border border-white rounded transition hover:bg-gray-200 hover:text-black"
                        >
                            EXPLORE THE COLLECTION
                        </a>
                    </div>
                </div>
            </section>
            <div className="text-center px-4 py-10">
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
                        The Story of the World's Largest Handmade carpet <br /> At the Grand Mosque Of Nur-Sultan, Kazakhstan
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
            </div>
            <section className="bg-gray-100 py-[27px] md:py-[36px]">
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
            </section>

            <section className="bg-[#5a5758] py-8 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-400">
                    {contactOptions.map((option, index) => (
                        <div
                            key={index}
                            className="relative text-center px-4 md:px-16 py-8 md:py-4"
                        >
                            <h2 className="text-lg text-gray-300 mb-12 relative inline-block after:content-[''] after:block after:w-16 after:h-px after:bg-gray-300 after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                                {option.title}
                            </h2>
                            <p className="text-base text-gray-300 mb-9 whitespace-pre-line">
                                {option.text}
                            </p>
                            <a
                                className="text-gray-300 text-sm uppercase tracking-wide hover:underline"
                            >
                                {option.button}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="bg-black from-gray-100 to-gray-200 text-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-center sm:text-left">
                        {/* Company Section */}
                        <div>
                            <p style={{ fontSize: 14 }} className="text-lg graytxt font-semibold mb-1">OUR COMPANY</p>
                            <ul className="space-y-1">
                                <li><a className="text-xs graytxt hover:underline">The Story</a></li>
                                <li><a className="text-xs graytxt hover:underline">Design Emotion</a></li>
                                <li><a className="text-xs graytxt hover:underline">Projects</a></li>
                                <li><a className="text-xs graytxt hover:underline">Videos</a></li>
                                <li><a className="text-xs graytxt hover:underline">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Customer Service Section */}
                        <div>
                            <p style={{ fontSize: 14 }} className="text-lg graytxt font-semibold mb-1">CUSTOMER SERVICE</p>
                            <ul className="space-y-2">
                                <li><a className="text-xs graytxt hover:underline">Contact us</a></li>
                                <li><a className="text-xs graytxt hover:underline">Our showrooms</a></li>
                                <li><a className="text-xs graytxt hover:underline">Custom made</a></li>
                                <li><a className="text-xs graytxt hover:underline">Carpet maintenance</a></li>
                                <li><a className="text-xs graytxt hover:underline">FAQs</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center sm:items-start">
                            <h3 className="text-sm graytxt font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
                            <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 w-full max-w-md">
                                <input
                                    type="email"
                                    name="contact[email]"
                                    placeholder="Write your email address"
                                    className="w-full flex-grow px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white-800"
                                    required
                                />


                                <button
                                    type="submit"
                                    className="bg-white text-black px-6 py-2 rounded hover:bg-gray-800 transition"
                                >
                                    SEND
                                </button>
                            </form>

                            {/* Social Media Links */}
                            <div className="mt-6">
                                <h4 className="text-sm graytxt font-semibold mb-3">FOLLOW US</h4>
                                <div className="flex justify-center sm:justify-start space-x-4 text-white">
                                    <a href="https://twitter.com/handscarpets" className="bg-black p-2 rounded-full" aria-label="Twitter"><FaTwitter /></a>
                                    <a href="https://www.facebook.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Facebook"><FaFacebookF /></a>
                                    <a href="https://in.pinterest.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Pinterest"><FaPinterestP /></a>
                                    <a href="https://www.instagram.com/handscarpets/" className="bg-black p-2 rounded-full" aria-label="Instagram"><FaInstagram /></a>
                                    <a href="https://www.youtube.com/channel/UCOtTXL-IvBsJ4EYAJVdC0_A" className="bg-black p-2 rounded-full" aria-label="YouTube"><FaYoutube /></a>
                                    <a href="https://www.linkedin.com/company/hands-carpets-&-rugs---india/" className="bg-white p-2 rounded-full text-black" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/images/logo4.png"
                        style={{ width: 150, height: 150, objectFit: 'cover' }}
                        alt="Logo"
                        loading="eager"
                    />

                </div>
            </footer>

        </div>
    );
};

export default Page;