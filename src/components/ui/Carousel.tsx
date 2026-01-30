"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Culto da Família",
    subtitle: "Celebrando a fidelidade de Deus",
    image:
      "https://i.pinimg.com/1200x/de/1f/3d/de1f3d8589a8f8ed164934ead4a1f125.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Louvor & Adoração",
    subtitle: "Uma noite de entrega",
    image:
      "https://i.pinimg.com/736x/2d/e8/52/2de852515f596cd4ce4d031995cdc8d8.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Batismo",
    subtitle: "Vidas transformadas",
    image:
      "https://i.pinimg.com/1200x/43/56/05/435605ae83f2cab770eb345d6a1626dc.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Comunhão",
    subtitle: "Vivendo como corpo",
    image:
      "https://i.pinimg.com/736x/04/14/ec/0414ec4c79ab83e91b9a09ea0a557233.jpg",
    href: "#",
  },
];

export function Carousel() {
  return (
    <section className="w-full py-20 px-4 overflow-hidden">
      <Swiper
        modules={[Pagination]}
        loop
        centeredSlides
        centerInsufficientSlides
        slidesPerView="auto"
        spaceBetween={24}
        pagination={{ clickable: true }}
        speed={600}
      >
        {carouselData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[80%] sm:!w-[88%] md:!w-[78%] transition-all duration-300"
          >
            <a
              href={item.href}
              className="block relative h-[420px] md:h-[540px] w-full rounded-3xl overflow-hidden group"
            >
              
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
              />

              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/38" />

              <div className="absolute bottom-10 left-6 md:left-12 max-w-xl text-white">
                <h3 className="text-3xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {item.subtitle}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          transform: scale(0.85);
          opacity: 0.45;
        }

        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }

        .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ffffff80;
          border-radius: 999px;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          width: 19px;
          background: #fc7703;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
