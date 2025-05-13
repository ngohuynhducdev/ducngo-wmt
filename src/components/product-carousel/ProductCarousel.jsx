import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import ProductModal from '../product-modal/ProductModal'
import ProductCard from '../product-card/ProductCard'

// Data for the products
const products = [
    {
        name: 'BMW M1000RR',
        description:
            'The M1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced aerodynamics, and track-focused features, it delivers an unmatched riding experience on both the track and the road.',
        
        image: './assets/moto-1.jpg',
        quantity: 150,
        price: 60000,
    },
    {
        name: 'BMW S1000RR',
        description:
            'The S1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced electronics, and aerodynamic design, it delivers an unmatched riding experience on both the track and the road.',
        image: './assets/moto-2.jpg',
        quantity: 35,
        price: 35000,
    },

    {
        name: 'BMW R 1250 GS',
        description:
            'The R 1250 GS Adventure is a versatile and rugged adventure motorcycle designed for long-distance touring and off-road exploration. With its powerful boxer engine, advanced suspension, and comfortable ergonomics, it excels in both on-road and off-road conditions.',
        image: './assets/moto-3.jpg',
        quantity: 5,
        price: 30000,
    },
    {
        name: 'BMW M1000RR',
        description:
            'The M1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced aerodynamics, and track-focused features, it delivers an unmatched riding experience on both the track and the road.',
        
        image: './assets/moto-1.jpg',
        quantity: 150,
        price: 60000,
    },
    {
        name: 'BMW S1000RR',
        description:
            'The S1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced electronics, and aerodynamic design, it delivers an unmatched riding experience on both the track and the road.',
        image: './assets/moto-2.jpg',
        quantity: 35,
        price: 35000,
    },

    {
        name: 'BMW R 1250 GS',
        description:
            'The R 1250 GS Adventure is a versatile and rugged adventure motorcycle designed for long-distance touring and off-road exploration. With its powerful boxer engine, advanced suspension, and comfortable ergonomics, it excels in both on-road and off-road conditions.',
        image: './assets/moto-3.jpg',
        quantity: 5,
        price: 30000,
    },
    {
        name: 'BMW M1000RR',
        description:
            'The M1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced aerodynamics, and track-focused features, it delivers an unmatched riding experience on both the track and the road.',
        
        image: './assets/moto-1.jpg',
        quantity: 150,
        price: 60000,
    },
    {
        name: 'BMW S1000RR',
        description:
            'The S1000RR is a high-performance sportbike that combines cutting-edge technology with exhilarating performance. With its powerful engine, advanced electronics, and aerodynamic design, it delivers an unmatched riding experience on both the track and the road.',
        image: './assets/moto-2.jpg',
        quantity: 35,
        price: 35000,
    },

    {
        name: 'BMW R 1250 GS',
        description:
            'The R 1250 GS Adventure is a versatile and rugged adventure motorcycle designed for long-distance touring and off-road exploration. With its powerful boxer engine, advanced suspension, and comfortable ergonomics, it excels in both on-road and off-road conditions.',
        image: './assets/moto-3.jpg',
        quantity: 5,
        price: 30000,
    },
]

export default function ProductCarousel() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <section className="p-8 md:p-16 xl:py-16 xl:px-32 text-center">
            <h2 className="relative text-h-1 font-bold leading-tight w-fit mx-auto xl:mb-6 after:absolute after:content-[''] after:w-4/5 after:h-1 after:bg-[#0d6efd] after:left-1/2 after:-translate-x-1/2 after:-bottom-1/4">BMW Motorrad</h2>
        
            {/* Using Swiper for the product carousel */}
            <Swiper 
                className="!pt-8 !pb-16"
                modules={[Pagination]}
                loop
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true }}
                breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                            product={product}
                            onClick={() => {
                                setOpenPopup(true)
                                setSelectedProduct(product)
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <ProductModal
                product={selectedProduct}
                open={openPopup}
                setOpen={setOpenPopup}
            />
        </section>
    )
}
