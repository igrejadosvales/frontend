"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

interface Slide {
  id: number
  image: string
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    title: "Bem-vindo à Igreja dos Vales",
    description: "Um lugar de fé, esperança e amor. Junte-se a nós para adorar e servir.",
    primaryButtonText: "Assista ao Vivo",
    secondaryButtonText: "Saiba Mais",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2090&auto=format&fit=crop",
    title: "Comunidade e Família",
    description: "Crescemos juntos na fé. Encontre um pequeno grupo perto de você.",
    primaryButtonText: "Grupos Pequenos",
    secondaryButtonText: "Eventos",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    title: "Adoração Profunda",
    description: "Experimente a presença de Deus através da música e da palavra.",
    primaryButtonText: "Nossa Música",
    secondaryButtonText: "Horários",
  },
]

export function Hero() {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null)

  return (
    <section className="relative h-[600px] w-full bg-black text-white group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} transition-all duration-300"></span>`
          },
        }}
        onSwiper={setSwiperInstance}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto flex h-full flex-col justify-center px-4 md:px-6">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
                  <Button size="lg" className="text-base">
                    {slide.primaryButtonText}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-black text-base"
                  >
                    {slide.secondaryButtonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Custom Pagination Container */}
      <div className="custom-swiper-pagination absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2" />

      {/* CSS Styles for Pagination Bullets to match the design */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 0.5rem;
          height: 0.5rem;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
          opacity: 1;
          margin: 0 4px !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 1.5rem;
          background-color: white;
          border-radius: 9999px;
        }
        .custom-swiper-pagination .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  )
}