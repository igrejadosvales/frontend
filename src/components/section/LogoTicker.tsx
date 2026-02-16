"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
    "https://framerusercontent.com/images/uQk8k8tTFaX1KKrblLPeRXuHJc.png",
    "https://framerusercontent.com/images/1XXwZwiCFOPdl7XnrgIyCkMI.png",
    "https://framerusercontent.com/images/SY3Qyw9AFOAp1eavUoaOER3UEA.png",
    "https://framerusercontent.com/images/DrNXSZikBvMcJYJZTaEKxhij3k.png",
    "https://framerusercontent.com/images/k6VWuIYwA0YCMMJ2QLYhH6ouHKM.png",
];

export function LogoTicker() {
    return (
        <section className="w-full bg-white backdrop-blur border-y border-[rgb(234,234,234)] overflow-hidden">
            <div className="w-full relative">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView="auto"
                    loop={true}
                    speed={5000} // Continuous smooth scroll
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className="w-full logo-ticker-swiper"
                    freeMode={true}
                >
                    {/* Double map for seamless loop effect if needed, but Swiper loop handles it well */}
                    {logos.concat(logos).map((logo, index) => (
                        <SwiperSlide key={index} className="!w-[268px] h-[180px] flex-shrink-0 relative group">
                            <div className="w-full h-full flex items-center justify-center p-8 relative">
                                <div className="relative w-full h-full transition-opacity duration-300 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0">
                                    <Image
                                        src={logo}
                                        alt={`Partner Logo ${index}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Right Divider Line */}
                                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[rgb(234,234,234)] opacity-65 h-full" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <style jsx global>{`
        .logo-ticker-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
        </section>
    );
}
