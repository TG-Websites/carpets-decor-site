'use client';

import React, { } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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


function SwiperComponent() {
  
    return (
        <div>
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
        </div>
    )
}

export default SwiperComponent
