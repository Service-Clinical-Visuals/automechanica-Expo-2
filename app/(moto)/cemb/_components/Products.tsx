"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      title: "ER100GT",
      img: "/moto/cemb/p1.png",
      href: "#products",
    },
    {
      title: "ER95 Plus",
      img: "/moto/cemb/p2.png",
      href: "#products",
    },
    {
      title: "2-HIT",
      img: "/moto/cemb/p3.png",
      href: "#products",
    },
    {
      title: "ER85 2-HIT",
      img: "/moto/cemb/p4.png",
      href: "#products",
    },

  ];

  return (
    <section id="products" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Header Section */}
        <div className="flex flex-col gap-6 text-center items-center w-full max-w-[90%] xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Our Products
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl">
            CEMB Wheel Balancers combine precision engineering, patented technology and ease of use to deliver consistent and reliable balancing performance. Designed for cars, trucks, buses and motorcycles, each machine is built with high-quality components and rigorous manufacturing standards to ensure accurate, repeatable results and long-term durability.
          </Typography>
        </div>

        {/* Product Slider */}
        <div className="w-full relative px-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: '.products-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="w-full pb-4 min-[3800px]:pb-8"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="h-full pt-2">
                  <div className="flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative  rounded-br-[60px] min-[3800px]:rounded-br-[100px] border-b-3 border-b-primary group">

                    {/* Image Container */}
                    <Link href={product.href} className="w-full p-8 min-[2100px]:p-12 min-[3800px]:p-16 flex items-center justify-center shrink-0 cursor-pointer">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-auto max-h-[300px] min-[2100px]:max-h-[400px] min-[3800px]:max-h-[600px] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Content Container */}
                    <div className="flex items-center justify-between p-6 min-[2100px]:p-8 min-[3800px]:p-12 mt-auto bg-white border-t border-gray-50">
                      <Typography variant="h4" color="dark" className="font-bold">
                        {product.title}
                      </Typography>

                      <Link href={product.href} className="bg-primary rounded-full p-2.5 min-[3800px]:p-4 text-white shadow-md cursor-pointer hover:bg-primary-hover transition-colors shrink-0">
                        <ArrowUpRight className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2.5} />
                      </Link>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination products-pagination mt-8 min-[2100px]:mt-12 min-[3800px]:mt-16 flex justify-center"></div>
        </div>

      </div>
    </section>
  );
};

export default Products;
