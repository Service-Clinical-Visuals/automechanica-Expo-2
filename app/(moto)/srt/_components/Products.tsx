"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productsData = [
  { id: 1, name: "Inner Ring", number: "16.100.230", img: "/moto/srt/1.png" },
  { id: 2, name: "Differential Spider Gear", number: "50.100.700", img: "/moto/srt/2.png" },
  { id: 3, name: "Pinion", number: "60.100.030", img: "/moto/srt/3.png" },
  { id: 4, name: "Pressure Hose", number: "04.700.100", img: "/moto/srt/4.png" },
  { id: 5, name: "Pressure Hose", number: "04.700.110", img: "/moto/srt/5.png" },
  { id: 6, name: "Pressure Hose", number: "04.700.130", img: "/moto/srt/6.png" },
  { id: 7, name: "Pressure Hose", number: "04.700.200", img: "/moto/srt/7.png" },
  { id: 8, name: "Pressure Hose", number: "04.700.210", img: "/moto/srt/8.png" },
];

export default function Products() {
  const renderProductCard = (product: typeof productsData[0]) => (
    <div className="bg-white p-4 shadow-sm h-full w-full flex flex-col group cursor-pointer transition-shadow hover:shadow-md border border-gray-200 relative overflow-hidden">
      
      {/* Green Triangle on Outer Card */}
      <div 
        className="absolute top-0 right-0 w-[60%] aspect-square bg-[var(--color-primary)] z-0 transition-transform duration-500 group-hover:scale-105 origin-top-right" 
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      ></div>

      {/* Inner Image Container */}
      <div className="w-full relative z-10 aspect-square border border-gray-200 flex items-center justify-center p-8 bg-white mb-4">
        
        {/* Green Circle Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#bed62f] rounded-full flex items-center justify-center shadow-sm z-10 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
             <line x1="7" y1="17" x2="17" y2="7"></line>
             <polyline points="7 7 17 7 17 17"></polyline>
           </svg>
        </div>

        {/* Product Image */}
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" 
        />

        {/* Product Number */}
        <div className="absolute bottom-4 right-4 number text-[#7d7d7d] font-semibold z-10">
          {product.number}
        </div>
      </div>

      {/* Product Name */}
      <h3 className="product-title exo2 font-semibold text-[#1a1a1a] relative z-10">{product.name}</h3>
    </div>
  );

  return (
    <section className="w-full py-20 bg-white relative">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h2 className="section-title exo2 font-semibold text-[#2a2a2a]  ">
            Precision Automotive Components
          </h2>
          <div className="h-1 w-32 bg-[var(--color-primary)] mx-auto rounded-full mb-10 md:mb-6"></div>
          
        <p className="section-text oxanium text-[#4a4a4a] text-center max-w-7xl leading-relaxed mb-12">
            Explore the extensive SRT Gear Industry range of precision-engineered automotive components, including inner rings, differential spider gears, pinions, and pressure hoses. Each product is manufactured with a strong focus on quality, durability, precise fitment, and reliable performance, meeting the demanding requirements of modern automotive and aftermarket applications.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full relative px-2">
          <style jsx global>{`
            .srt-swiper .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
              width: 10px;
              height: 10px;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .srt-swiper .swiper-pagination-bullet-active {
              background-color: #6b7280 !important;
              width: 32px;
              border-radius: 8px;
            }
            .srt-swiper {
              padding-bottom: 60px !important;
            }
          `}</style>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true // Pauses on hover, resumes on mouse leave
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: false
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            className="w-full srt-swiper"
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto flex">
                {renderProductCard(product)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
