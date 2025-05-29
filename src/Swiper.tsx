'use client';

import React, { } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
interface Slide {
    desktopSrc: string;
    mobileSrc: string;
    caption?: {
        title: string;
        subtitle: string;
    };
}

const slides = [
    {
        // link: "/collections/antique-turkish-kilims",
        desktopSrc: "/images/sliderimg1.png",
        mobileSrc: "/images/sliderimg1.png",
    },
    {
        // link: "/collections/overlap",
        desktopSrc: "/images/sliderimg2.png",
        mobileSrc: "/images/sliderimg2.png",
    },
    {
        // link: "/collections/persian-carpets-rugs",
        desktopSrc: "/images/sliderimg3.png",
        mobileSrc: "/images/sliderimg3.png",
    },
    {
        // link: "/collections/persian-carpets-rugs",
        desktopSrc: "/images/sliderimg4.png",
        mobileSrc: "/images/sliderimg4.png",
    },
    {
        // link: "/collections/persian-carpets-rugs",
        desktopSrc: "/images/sliderimg5.png",
        mobileSrc: "/images/sliderimg5.png",
    },
    {
        // link: "/collections/persian-carpets-rugs",
        desktopSrc: "/images/sliderimg6.png",
        mobileSrc: "/images/sliderimg6.png",
    },
    {
        // link: "/collections/persian-carpets-rugs",
        desktopSrc: "/images/sliderimg7.png",
        mobileSrc: "/images/sliderimg7.png",
    },
    // {
    //     link: "/collections/knotion",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/Nika_Landing_page_Web_Banner.jpg?v=1726555523",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/Nika_Landing_page_Mobile_Banner.jpg?v=1726555523",
    // },
    // {
    //     link: "/collections/new-arrival",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/New_Arrival_banner_desktop.jpg?v=1725262545",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/New_Arrival_mobile_copy.jpg?v=1725262554",
    // },
    // {
    //     link: "/collections/antonym",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/Antonym_Web_banner-02_copy.jpg?v=1708412688",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/Antonym_Mob_banner-03_copy.jpg?v=1708412923",
    // },
    // {
    //     link: "/collections/larry-roberts-carpets-rugs",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/20231027-173732.jpg?v=1698409325",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/20231027-191353.jpg?v=1698414255",
    // },
    // {
    //     link: "/collections/instinct-carpets-rugs",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/instinct-banner-web_1.jpg?v=1693898008",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/instinct-banner-mobile_1.jpg?v=1693897969",
    //     caption: { title: "Instinct", subtitle: "~ Collection ~" },
    // },
    // {
    //     link: "/collections/disperse-carpets-rugs",
    //     desktopSrc: "//handscarpets.com/cdn/shop/files/disperse-banner.jpg?v=1693898215",
    //     mobileSrc: "//handscarpets.com/cdn/shop/files/disperse-banner-mobile_b4f68f7f-3401-4347-bb9f-0c2b1c187934.jpg?v=1693898192",
    //     caption: { title: "Disperse", subtitle: "~ Collection ~" },
    // },
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
                {slides.map((slide: Slide, i) => (

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
