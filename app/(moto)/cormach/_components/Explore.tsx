"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";

const Explore = () => {
  const images = [
    "/moto/cormach/explore1.jpg",
    "/moto/cormach/explore2.jpg",
    "/moto/cormach/explore3.jpg",
    "/moto/cormach/explore4.jpg",
    "/moto/cormach/explore5.jpg",
    "/moto/cormach/explore6.jpg",
  ];

  return (
    <section id="explore" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14 items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 w-full xl:max-w-[65%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            Explore CORMACH Srl Workshop Solutions
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed ">
            Discover the CORMACH Srl gallery, featuring advanced wheel balancers, tire changers, and professional workshop equipment engineered for precision and reliability. Explore our latest product innovations, cutting-edge technology, robust machine construction, and high-performance solutions designed to improve efficiency, accuracy, and productivity in modern automotive service centers worldwide.
          </Typography>
        </div>

        {/* Swiper Slider Section */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.explore-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full relative overflow-hidden rounded-xl border border-gray-100 shadow-sm aspect-[820/550]"
                >
                  <img
                    src={src}
                    alt={`Cormach Workshop Solution ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination explore-pagination mt-10 min-[2100px]:mt-14 min-[3800px]:mt-20 flex justify-center"></div>
        </div>

      </div>
    </section>
  );
};

export default Explore;
