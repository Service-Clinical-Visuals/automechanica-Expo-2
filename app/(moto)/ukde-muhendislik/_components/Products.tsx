"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

export default function Products() {
  const products = [
    { id: "SV001", image: "/moto/ukde-muhendislik/1.png" },
    { id: "SV002", image: "/moto/ukde-muhendislik/2.png" },
    { id: "SV003", image: "/moto/ukde-muhendislik/3.png" },
    { id: "SV004", image: "/moto/ukde-muhendislik/4.png" },
    { id: "SV005", image: "/moto/ukde-muhendislik/5.png" },
    { id: "SV006", image: "/moto/ukde-muhendislik/6.png" },
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="custom-container px-6 xl:px-12 text-center">
       <h2 className="exo2 section-title font-bold text-black mb-6">
          Our Spark Plugs
        </h2>
        <p className="inter section-text text-[#000000] max-w-5xl mx-auto mb-16 leading-relaxed">
          Discover SVAC spark plugs, developed to deliver dependable ignition, efficient combustion, and consistent engine performance. Manufactured with precision and quality-focused processes, our spark plugs are designed to meet the demands of modern automotive applications.
        </p>

        <div className="relative">
          <style jsx global>{`
            .product-swiper .swiper-pagination-bullet {
              width: 14px;
              height: 6px;
              border-radius: 3px;
              background: #d1d5db;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .product-swiper .swiper-pagination-bullet-active {
              width: 24px;
              background: #ea2227;
            }
            .product-swiper {
              padding-bottom: 60px;
            }
          `}</style>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white border border-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center justify-between h-full ">
                  {/* <div className="w-full  flex items-center justify-center "> */}
                    <img 
                      src={product.image} 
                      alt={product.id} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  {/* </div> */}
                  <div className="text-center w-full mt-auto p-4">
                    <h3 className="exo2 font-semibold card-title text-[#000000] mb-6">
                      {product.id}
                    </h3>
                    <Button>
                      View Product
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
