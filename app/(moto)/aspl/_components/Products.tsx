"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    image: "/moto/aspl/p1.png",
    name: "ARE5181S2",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "MITSUBISHI",
  },
  {
    id: 2,
    image: "/moto/aspl/p2.jpg",
    name: "S68195",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "DENSO",
  },
  {
    id: 3,
    image: "/moto/aspl/p3.png",
    name: "A9002SR",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "FORD",
  },
  {
    id: 4,
    image: "/moto/aspl/p4.png",
    name: "S01268PR",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "BOSCH",
  },
  {
    id: 5,
    image: "/moto/aspl/p5.png",
    name: "ARE5216S2",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "MITSUBISHI",
  },
  {
    id: 6,
    image: "/moto/aspl/p6.png",
    name: "ARE5200S2",
    line: "Standard Line",
    procedure: "AS-PL",
    replacement: "MITSUBISHI",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full bg-[#212733] py-16 md:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
            <span className="text-primary font-semibold tracking-wide language-links">
              ROTATING PARTS. POWERING PERFORMANCE.
            </span>
          </div>
           <h2 className="text-white font-semibold tracking-wide section-title max-w-3xl">
            Explore AS-PL's Complete Rotating & Engine Management Solutions
          </h2>
        </div>

        {/* Slider Section */}
        <div className="w-full relative " data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".products-pagination",
              bulletClass: "swiper-pagination-bullet !w-8 !h-1 !rounded-none !bg-gray-400 !opacity-50",
              bulletActiveClass: "!bg-primary !opacity-100",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full !pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden  flex flex-col h-full">
                  {/* Image Container */}
                  <div className="w-full bg-[#f7f7f7] p-6 xl:p-2 2xl:p-6 flex items-center justify-center rounded-t-[16px] h-[220px]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-4 md:p-5 xl:p-6 flex flex-col grow">
                    {/* Title */}
                    <div className="text-center font-semibold news-text mb-4 md:mb-6">
                      {product.name}
                    </div>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                    
                    {/* Info Rows */}
                    <div className="flex flex-col space-y-2 md:space-y-3 mt-auto">
                      {/* Top Row: Line & Procedure */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                          <img src="/moto/aspl/check-square.png" alt="Check" className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                          <span className="text-[12px] md:text-[13px] xl:text-[15px] 2xl:text-[18px] font-semibold text-primary whitespace-nowrap">
                            {product.line}
                          </span>
                        </div>
                        <span className="text-[12px] md:text-[13px] xl:text-[15px] 2xl:text-[18px] font-semibold text-[#484848] whitespace-nowrap ml-1 shrink-0">
                          Procedure: <span className="font-normal">{product.procedure}</span>
                        </span>
                      </div>
                      
                      {/* Bottom Row: Replacement */}
                      <span className="text-[12px] md:text-[13px] xl:text-[15px] 2xl:text-[18px] font-semibold text-[#484848] whitespace-nowrap w-full">
                        Replacement for: <span className="font-normal">{product.replacement}</span>
                      </span>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="products-pagination flex justify-center gap-2 mt-6"></div>
        </div>

      </div>
    </section>
  );
};

export default Products;
