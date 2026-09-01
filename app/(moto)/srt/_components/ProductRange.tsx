"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const rangeData = [
  { id: 1, name: "TRANSMISSION GEARS", img: "/moto/srt/p1.png" },
  { id: 2, name: "DRIVESHAFT PARTS", img: "/moto/srt/p2.png" },
  { id: 3, name: "COOLANT HOSES", img: "/moto/srt/p3.png" },
  { id: 4, name: "PRESSURE HOSES", img: "/moto/srt/p4.png" },
];

export default function ProductRange() {
  const renderRangeCard = (item: typeof rangeData[0]) => (
    <div className="relative w-full aspect-[16/9] md:aspect-[2/1] xl:aspect-[2.5/1] group cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
      
      {/* Background Image */}
      <img 
        src={item.img} 
        alt={item.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

     

      {/* Green Circle Icon (Enlarged and moved down) */}
      <div className="absolute top-8 right-6 md:top-10 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-[#bed62f] rounded-full flex items-center justify-center shadow-sm opacity-90 group-hover:opacity-100 transition-opacity z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#252525]">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>

    </div>
  );

  return (
    <section className="w-full py-16 md:py-24 bg-[#ebebeb]">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-7xl">
           <h2 className="section-title exo2 font-semibold text-[#2a2a2a] mb-10 md:mb-6">
              Our <span className="relative inline-block">Product Range<span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span>
            </h2>
            <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
              Explore the diverse SRT Gear Industry product range, featuring precision-engineered transmission gears, shafts, hoses, and automotive components. Each solution is designed for quality, durability, and reliable performance to meet the needs of modern vehicles and aftermarket applications.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button text="Discover SRT" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-10 md:my-14"></div>

        {/* Swiper Carousel */}
        <div className="w-full relative">
          <style jsx global>{`
            .range-swiper .swiper-pagination-bullet {
              background-color: #a3a3a3;
              opacity: 1;
              width: 10px;
              height: 10px;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .range-swiper .swiper-pagination-bullet-active {
              background-color: #6b7280 !important;
              width: 32px;
              border-radius: 8px;
            }
            .range-swiper {
              padding-bottom: 60px !important;
            }
          `}</style>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ 
              delay: 3500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true // Pauses on hover, resumes on mouse release/leave
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: false
            }}
            breakpoints={{}} // Removed breakpoints to enforce 1 slide per view on all screen sizes
            className="w-full range-swiper"
          >
            {rangeData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                {renderRangeCard(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

