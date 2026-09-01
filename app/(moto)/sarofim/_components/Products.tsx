"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const products = [
  {
    title: "Lubricants And Chemicals",
    img: "/moto/sarofim/products/1.png",
  },
  {
    title: "Workshop Equipment",
    img: "/moto/sarofim/products/2.png",
  },
  {
    title: "Tools",
    img: "/moto/sarofim/products/3.png",
  },
  {
    title: "Electrical System",
    img: "/moto/sarofim/products/4.png",
  },
  {
    title: "Spare Parts",
    img: "/moto/sarofim/products/5.png",
  },
];

export default function Products() {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-20">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Header row */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6"
            data-aos="fade-up"
          >
            <div className="justify-center w-full items-center flex flex-col">
              <h2 className="heading-white">Product Portfolio</h2>
              <p className="content-white text-center max-w-[1000px] mt-3">
                  Our extensive product portfolio brings together everything professionals and automotive enthusiasts need for efficient vehicle maintenance, repair, and workshop operations. We offer a comprehensive selection of lubricants and chemicals, workshop equipment, professional tools, electrical system products, and spare parts, carefully selected to meet the demands of modern automotive applications. From oils and cleaners to workshop equipment, our range meets diverse automotive needs.
              </p>
            </div>

          </div>

          <hr className="border-t border-white/10 mb-10" />

          {/* Product swiper */}
          <div className="relative">
            <style jsx global>{`
              .sarofim-products-swiper {
                padding-bottom: 48px !important;
              }
              .sarofim-products-swiper .swiper-pagination-bullet {
                background-color: rgba(255, 255, 255, 0.25);
                opacity: 1;
                width: 8px;
                height: 8px;
                margin: 0 4px !important;
                transition: all 0.3s ease;
              }
              .sarofim-products-swiper .swiper-pagination-bullet-active {
                background-color: var(--color-primary);
                width: 28px;
                border-radius: 9999px;
              }
            `}</style>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="sarofim-products-swiper"
            >
              {products.map((product, i) => (
                <SwiperSlide key={product.title} className="!h-auto">
                  <div
                    className="relative bg-[#202020] border border-primary p-3 flex flex-col h-full"
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    {/* Image */}
                    <div className="relative w-full mb-4 overflow-hidden bg-[#1c1c1c]">
                      <img src={product.img} alt={product.title} className="w-full h-full object-contain" />
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="heading-white text-xl! leading-snug">{product.title}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary bg-white text-primary">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
