"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const galleryImages = [
  "/moto/mogesan/exp1.png",
  "/moto/mogesan/exp2.png",
  "/moto/mogesan/exp3.png",
   "/moto/mogesan/exp1.png",
  "/moto/mogesan/exp2.png",
  "/moto/mogesan/exp3.png",
  "/moto/mogesan/exp1.png",
  "/moto/mogesan/exp2.png",
  "/moto/mogesan/exp3.png",
];

// From Figma dev-mode: card left positions are 573px apart, card width is
// 533px -> real gap = 573 - 533 = 40px at the 3-up (xl) breakpoint.
const GAP_DEFAULT = 24; // px, mobile (1-up)
const GAP_SM = 24; // px, tablet (2-up)
const GAP_XL = 40; // px, desktop (3-up) - exact Figma value

export default function Gallery() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-black">
      <div className="custom-container">
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 pb-8 xl:pb-[41px] mb-10 xl:mb-[50px] border-b border-white/24"
          data-aos="fade-up"
        >
          <div className="w-full xl:max-w-[70%]">
            <h2 className="section-title text-white mb-4 xl:mb-6">
              Explore Our Precision-Engineered Engine Components
            </h2>
            <p className="body-text text-white max-w-[963px] xl:max-w-[70%]">
              Discover the MOGESAN Product Gallery, featuring our premium
              range of engine pistons, cylinder liners, and piston rings.
              Explore products engineered for exceptional performance,
              superior durability, and reliable operation, manufactured to
              meet international quality standards.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button href="#" circleColor="#FFFFFF" iconColor="#BF1E2E">
              View Gallery
            </Button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".gallery-pagination-wrap",
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={GAP_DEFAULT}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: GAP_SM },
              1280: { slidesPerView: 3, spaceBetween: GAP_XL },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <div className="group relative w-full aspect-[533/558] rounded-[30px] overflow-hidden border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white transition-colors duration-300 hover:border-[#BF1E2E]">
                  <Image
                    src={image}
                    alt={`MOGESAN engine component ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External, statically-positioned pagination row -> same
              structure/spacing approach as the Trade section. */}
          <div
            className="gallery-pagination-wrap mt-8 xl:mt-10 flex! justify-center items-center gap-0!"
          />
        </div>
      </div>

      <style jsx global>{`
        .gallery-pagination-wrap .swiper-pagination {
          position: static !important;
        }

        .gallery-swiper .swiper-pagination-bullet,
        .gallery-pagination-wrap .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #d9d9d9;
          opacity: 1;
          margin: 0 2px !important;
          transition: all 0.3s ease;
        }

        .gallery-swiper .swiper-pagination-bullet-active,
        .gallery-pagination-wrap .swiper-pagination-bullet-active {
          background: #bf1e2e;
          width: 64px;
          border-radius: 36px;
        }
      `}</style>
    </section>
  );
}