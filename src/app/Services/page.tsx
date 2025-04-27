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

const services = [
    {
        title: "Custom Carpets Design",
        text: "We provide custom-made carpets that match your space's design, color, and texture preferences. Let us help you create the perfect floor design.",
    },
    {
        title: "Consultation & Personalization",
        text: "Our expert designers offer one-on-one consultations to help you choose the best materials and designs that reflect your personal style and space needs.",
    },
    {
        title: "Carpet Installation",
        text: "Our team provides professional carpet installation services, ensuring your custom carpets are fitted perfectly and securely in your home or office.",
    },
    {
        title: "Restoration & Repair",
        text: "We offer restoration and repair services to bring your old carpets back to life. Whether it's reweaving or cleaning, we'll ensure your carpets look as good as new.",
    },
    {
        title: "Carpet Maintenance",
        text: "Our maintenance services ensure that your carpets stay in top condition with regular cleaning, care, and preservation tips to extend their lifespan.",
    },
];

function page() {
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
                        <a href={slide.link}>
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

            {/* Services Section */}
            <section id="services" className="bg-black py-16 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold graytxt mb-6">Our Services</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        At Hands Carpets, we offer a range of services designed to bring your vision to life. Whether you're looking for custom designs, expert consultations, or professional installation, we’ve got you covered.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex-1 max-w-xs">
                                <h3 className="text-2xl font-semibold graytxt mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default page;
