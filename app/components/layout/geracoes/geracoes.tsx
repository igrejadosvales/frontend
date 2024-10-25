// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
register();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ministery = [
    {
        id: '1',
        name: 'Start',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam error corrupti deleniti ab rem recusandae pariatur! Dicta dolorem labore libero animi, odit similique corrupti ea a quae possimus nesciunt.',
        src: "url('/global/start.webp')",
    },
    {
        id: '2',
        name: 'Next',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam error corrupti deleniti ab rem recusandae pariatur! Dicta dolorem labore libero animi, odit similique corrupti ea a quae possimus nesciunt.',
        src: "url('/global/next.webp')",
    },
    {
        id: '3',
        name: 'Outside',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam error corrupti deleniti ab rem recusandae pariatur! Dicta dolorem labore libero animi, odit similique corrupti ea a quae possimus nesciunt.',
        src: "url('/global/outside.webp')",
    }
]

export default function Geracoes() {
    return (
        <section className='mb-5'>
            <h1 className='text-6xl text-center my-16 text-black font-semibold'>gerações</h1>
            <Swiper
                slidesPerView={3}
                // navigation={true}
                // pagination={{clickable:true}}
                className='relative h-heightCardGeracoes w-3/4 my-10'
                centered-slides="true"
                spaceBetween={50}
                >
                {ministery.map( (item) => (
                    <SwiperSlide key={item.id} className='w-full h-full rounded-borderCardGeracoes cursor-pointer bg-cover bg-center relative z-10 group' 
                    style={{ backgroundImage: item.src}}>
                        <div className='absolute z-20 w-full h-full bg-gradient-to-t from-gradient to-transparent text-center rounded-borderCardGeracoes '></div>
                        <div className='w-full h-full flex flex-col justify-between p-5 relative'>
                            <h1 className='text-3xl text-white z-40
                            text-center relative top-0'>{item.name}</h1>
                            <p className='z-20 translate-y-40 group-hover:-translate-y-5 duration-500'>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}