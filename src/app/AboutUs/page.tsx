'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

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
function page() {
       const [index, setIndex] = useState(0);
    
        const nextSlide = () => setIndex((prev) => (prev + 1) % carouselImages.length);
      
    
        useEffect(() => {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }, []);
    return (
        <div>
            {/* Hero Section */}
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


            {/* About Us Section */}
            <section id="about" className="bg-black  py-16 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold graytxt mb-6">About Hands Carpets</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        At Hands Carpets, we specialize in creating bespoke carpets that transform your living spaces. Our expert artisans craft carpets that suit your unique style and preferences. With years of experience in the industry, we bring high-quality materials and impeccable craftsmanship to every project.
                    </p>
                    <div className="flex justify-center gap-8">
                        <div className="flex-1 max-w-xs">
                            <h3 className="text-2xl font-semibold graytxt mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the leading provider of high-quality, custom-designed carpets and decor that inspire creativity and comfort in homes worldwide.
                            </p>
                        </div>
                        <div className="flex-1 max-w-xs">
                            <h3 className="text-2xl font-semibold graytxt mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To deliver exceptional products that meet the unique design needs of our customers, while providing excellent customer service and lasting value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default page;
