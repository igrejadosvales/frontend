// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const ministery = [
    {
        id: '1',
        name: 'Start',
        description: 'Ministério de Crianças',
        src: "url('/global/start.webp')",
        link: 'https://www.instagram.com/start.ivales',
    },
    {
        id: '2',
        name: 'Next',
        description: 'Ministério de Adolescentes',
        src: "url('/global/next.webp')",
        link: 'https://www.instagram.com/next.ivales',
    },
    {
        id: '3',
        name: 'Outside',
        description: 'Ministério de Jovens',
        src: "url('/global/outside.webp')",
        link: 'https://www.instagram.com/outside.ivales',
    }
]

export default function Geracoes() {
    return (
        <section className='mb-5 w-full px-4'>
            <h2 className='text-6xl text-center mt-16 mb-4 text-black font-semibold'>Ano das Gerações</h2>
            <h3 className='text-center text-slate-700 font-semibold'>Nossos ministérios da igreja conectam gerações, unindo jovens, adultos e idosos em unidade.</h3>
            <Swiper
                slidesPerView={1}
                className='w-full h-heightCardGeracoes my-10'
                centeredSlides={true}
                centeredSlidesBounds={true}
                centerInsufficientSlides={true}
                spaceBetween={50}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                >
                {ministery.map( (item) => (
                    <SwiperSlide key={item.id} className='cursor-pointer bg-cover bg-center relative z-10 group rounded-borderCardGeracoes w-96' 
                    style={{ backgroundImage: item.src}}>
                        <Link href={item.link} target='_blank'>
                            <div className="flex relative w-full h-full items-end overflow-hidden rounded-borderCardGeracoes">
                                <div className='w-full h-full z-20 bg-gradient-to-t from-gradient to-transparentrounded-borderCardGeracoes'></div>
                                <div className='z-20 lg:translate-y-40 duration-500 w-full flex flex-col justify-between p-5 absolute lg:group-hover:-translate-y-5'>
                                    <h1 className='text-3xl text-white z-40
                                    '>{item.name}</h1>
                                    <p className='text-1xl'>{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                ))}
            </Swiper>
        </section>
    );
}