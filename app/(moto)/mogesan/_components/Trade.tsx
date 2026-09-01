"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const fairs = [
  {
    title: "Automechanika Istanbul 2026",
    text: "Turkey's Leading International Automotive Industry Exhibition",
    image: "/moto/mogesan/trade2.png",
  },
  {
    title: "Automechanika Dubai 2024",
    text: "The largest international trade exhibition for the automotive aftermarket...",
    image: "/moto/mogesan/trade3.png",
  },
  {
    title: "Automechanika Frankfurt 2024",
    text: "The World's Leading International Automotive Industry Exhibition",
    image: "/moto/mogesan/trade1.png",
  },
  {
    title: "Automechanika Istanbul 2026",
    text: "Turkey's Leading International Automotive Industry Exhibition",
    image: "/moto/mogesan/trade2.png",
  },
  {
    title: "Automechanika Dubai 2024",
    text: "The largest international trade exhibition for the automotive aftermarket...",
    image: "/moto/mogesan/trade3.png",
  },
  {
    title: "Automechanika Frankfurt 2024",
    text: "The World's Leading International Automotive Industry Exhibition",
    image: "/moto/mogesan/trade1.png",
  },
];

// Gap between cards / breakpoints (matches the Figma spacing).
const GAP = 40; // px (Tailwind's gap-6)

export default function Trade() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-black">
      <div className="custom-container">
        <div
          className="text-center pb-8 xl:pb-10 mb-10 xl:mb-[68px] border-b border-white/30"
          data-aos="fade-up"
        >
          <h2 className="section-title text-white mb-4 xl:mb-6">
            International Trade Fairs
          </h2>

          <p className="body-text text-white max-w-[1172px] xl:max-w-[70%] mx-auto">
            MOGESAN participates in leading automotive trade fairs,
            showcasing innovative engine pistons, cylinder liners, and piston
            rings while building global partnerships and demonstrating our
            commitment to quality and engineering excellence.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".trade-pagination-wrap",
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={GAP}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: GAP,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: GAP,
              },
            }}
            className="trade-swiper"
          >
            {fairs.map((fair, index) => (
              <SwiperSlide key={`${fair.title}-${index}`} className="h-auto">
                {/* Gaps match the Figma spec exactly:
                    image -> title  = 20px (mb-5)
                    title -> desc   = 8px (mb-2, tightly grouped)
                    desc  -> button = 20px (mb-5), CTA pinned to the
                                      bottom of the card via mt-auto */}
                <div className="group h-full rounded-[30px] border border-white/50 bg-[#262626] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-5 flex flex-col transition-colors duration-300 hover:border-[#BF1E2E]">
                  <div className="relative w-full aspect-[483/260] rounded-[25px] overflow-hidden flex-shrink-0 mb-5">
                    <Image
                      src={fair.image}
                      alt={fair.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>

                  <h3 className="card-title text-white line-clamp-2 min-h-[60px] mb-2 transition-colors duration-300 group-hover:text-[#BF1E2E]">
                    {fair.title}
                  </h3>

                  <p className="body-text text-white line-clamp-2 flex-grow min-h-[52px] mb-5">
                    {fair.text}
                  </p>

                  <Link
                    href="#"
                    className="link-text text-[#BF1E2E] mt-auto self-start hover:underline"
                  >
                    Read More &raquo;
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="trade-pagination-wrap mt-8 xl:mt-10 flex! justify-center items-center gap-0!"
          />
        </div>
      </div>

      <style jsx global>{`
        .trade-pagination-wrap .swiper-pagination {
          position: static !important;
        }

        .trade-swiper .swiper-pagination-bullet,
        .trade-pagination-wrap .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #ffffff;
          opacity: 1;
          margin: 0 2px !important;
          transition: all 0.3s ease;
        }

        .trade-swiper .swiper-pagination-bullet-active,
        .trade-pagination-wrap .swiper-pagination-bullet-active {
          background: #bf1e2e;
          width: 64px;
          border-radius: 36px;
        }
      `}</style>
    </section>
  );
}