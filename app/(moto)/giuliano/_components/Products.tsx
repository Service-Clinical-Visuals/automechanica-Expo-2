"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: "p1",
    name: "Product Category Tyre Changers",
    image: "/moto/giuliano/p1.png",
  },
  {
    id: "p2",
    name: "Product Category Wheel Balancers",
    image: "/moto/giuliano/p4.png",
  },
  {
    id: "p4",
    name: "Product Category Wheel Alignment",
    image: "/moto/giuliano/p6.png",
  },
  {
    id: "p5",
    name: "Product Category Wheel Balancers",
    image: "/moto/giuliano/p5.png",
  },
  {
    id: "p6",
    name: "Product Category Wheel Alignment",
    image: "/moto/giuliano/p6.png",
  },
  {
    id: "p7",
    name: "Product Category Wheel Alignment",
    image: "/moto/giuliano/p7.png",
  },
  {
    id: "p3",
    name: "Product Category Paint Lifts",
    image: "/moto/giuliano/p3.png",
  },
  {
    id: "p8",
    name: "Product Category Testing Equipment",
    image: "/moto/giuliano/p8.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="w-full max-w-full overflow-hidden bg-[#0D0D0D] py-16 lg:py-24">
      {/* Wrapped entirely within custom-container to guarantee parallel equal widths with all other sections */}
      <div className="custom-container text-center">

        {/* Heading */}
        <h2
          className="section-heading text-white mb-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Professional Equipment For Complete Tyre Service
        </h2>

        {/* Description */}
        <p
          className="section-text text-white xl:max-w-[70%] mx-auto mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          Experience the precision engineering of FASEP Wheel Balancers
          through our immersive 360° product view. Rotate the machine from
          every angle to examine its modern design, control panel, balancing
          shaft, measurement systems, and robust construction in detail.
          Discover the advanced technology, high-quality
        </p>

        {/* Product Slider */}
        <div
          className="w-full max-w-full overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={700}
            watchOverflow={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".product-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} !w-12 !h-1.5 !rounded-full !mx-1"></span>`;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="!pb-4 !overflow-hidden"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                {/* Outer Card - completely stable, hover classes removed */}
                <div
                  className="w-full aspect-[533/596] bg-surface-1 border border-mid shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-5"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay={100 + index * 80}
                >
                  {/* Image + Hover Area */}
                  <div className="group relative w-full h-full overflow-hidden cursor-pointer">

                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="block w-full h-full object-fill transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">

                      {/* Product Category */}
                      <h3 className="max-w-[70%] text-left text-white text-[22px] font-bold leading-[1.35] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {product.name}
                      </h3>

                      {/* Arrow Button */}
                      <div className="flex items-center justify-center shrink-0 w-14 h-14 rounded-full bg-white text-[#159BD7] translate-y-4 rotate-[-10deg] group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-500 hover:scale-110">
                        <ArrowUpRight size={28} strokeWidth={2} />
                      </div>
                    </div>  
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination */}
        <div className="product-pagination flex items-center justify-center mt-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="350" />
      </div>
    </section>
  );
}