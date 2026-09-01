"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const categories = ["Wheel Balancers", "Tyre Changers", "Wheel Aligners", "Platform Lifts", "Complementary Equipment"];
  const [activeCategory, setActiveCategory] = useState("Wheel Balancers");

  const categoryData: Record<string, { title: string, img: string }[]> = {
    "Wheel Balancers": [
      { title: "NEW TOUCH MEC 2000S-P RLC PLUS", img: "/moto/cormach/frame/f11.jpg" },
      { title: "NEW TOUCH MEC 2000S", img: "/moto/cormach/frame/f12.jpg" },
      { title: "NEW TOUCH MEC 822VDL SONAR", img: "/moto/cormach/frame/f13.jpg" },
      { title: "NEW MEC 822VDL SONAR", img: "/moto/cormach/frame/f14.jpg" },
      { title: "NEW MEC 822VDL", img: "/moto/cormach/frame/f15.jpg" },
    ],
    "Tyre Changers": [
      { title: "CM 1200 BB", img: "/moto/cormach/frame/f21.jpg" },
      { title: "PUMA", img: "/moto/cormach/frame/f22.jpg" },
      { title: "LIGRO - LIGRO GT", img: "/moto/cormach/frame/f23.jpg" },
      { title: "F 536S GT RACING MI", img: "/moto/cormach/frame/f24.jpg" },
      { title: "F 528S GT MI", img: "/moto/cormach/frame/f25.jpg" },
    ],
    "Wheel Aligners": [
      { title: "NEW GEO 25", img: "/moto/cormach/frame/f31.jpg" },
      { title: "GEO 20 - GEO 20 2VD", img: "/moto/cormach/frame/f32.jpg" },
      { title: "WR 328A", img: "/moto/cormach/frame/f33.jpg" },
      { title: "GEO 10", img: "/moto/cormach/frame/f34.jpg" },
    ],
    "Platform Lifts": [
      { title: "L 1500 AUTOMATIC", img: "/moto/cormach/frame/f41.jpg" },
      { title: "L 3100", img: "/moto/cormach/frame/f42.jpg" },
      { title: "L 3300 EVO", img: "/moto/cormach/frame/f43.jpg" },
      { title: "L 96 BIKE", img: "/moto/cormach/frame/f44.jpg" },
      { title: "L 3500N EVO", img: "/moto/cormach/frame/f45.jpg" },
    ],
    "Complementary Equipment": [
      { title: "SECURE CAGE", img: "/moto/cormach/frame/f51.jpg" },
      { title: "NIT 18", img: "/moto/cormach/frame/f52.jpg" },
      { title: "NIC 20", img: "/moto/cormach/frame/f53.jpg" },
      { title: "NIL 50", img: "/moto/cormach/frame/f54.jpg" },
      { title: "BEAD BOOSTER", img: "/moto/cormach/frame/f55.jpg" },
    ]
  };

  const activeCards = categoryData[activeCategory] || [];

  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col gap-6 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-6 border-b border-gray-300 pb-5" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold uppercase tracking-wide">
            CORMACH Srl Workshop Equipment
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            CORMACH Srl offers a complete range of professional workshop equipment, including wheel balancers, tire changers, wheel alignment systems, vehicle lifts, and workshop accessories. Engineered for precision, durability, and reliable performance, our solutions help workshops operate more efficiently.
          </Typography>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 transition-all duration-300 border group ${activeCategory === cat
                ? "bg-primary border-primary"
                : "bg-white border-gray-300 hover:border-primary"
                }`}
            >
              <Typography
                variant="p"
                color={activeCategory === cat ? "white" : "muted"}
                className={`font-medium ${activeCategory === cat ? "" : "group-hover:text-primary transition-colors"}`}
              >
                {cat}
              </Typography>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            key={activeCategory} // Force re-render on tab change for correct animation
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.solutions-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-16"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="h-auto py-2">
                <div className="flex flex-col h-full p-4 sm:p-6  bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group min-[3800px]:p-8">

                  {/* Image */}
                  <div className="w-full aspect-[485/350] border border-gray-200 overflow-hidden shrink-0 mb-4 bg-white flex items-center justify-center">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="max-w-[90%] max-h-[95%] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content & Action */}
                  <div className="mt-auto flex items-start justify-between gap-4 pt-4 ">
                    <Typography variant="h5" color="dark" className="font-semibold uppercase tracking-wider text-sm min-[3800px]:text-xl mt-2 leading-snug">
                      {card.title}
                    </Typography>

                    {/* Yellow Button */}
                    <div className="w-10 h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#FFD500] flex items-center justify-center shrink-0 cursor-pointer hover:bg-yellow-400 transition-colors">
                      <ArrowUpRight className="w-5 h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-primary" strokeWidth={3} />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination solutions-pagination mt-4 min-[2100px]:mt-8 min-[3800px]:mt-12 flex justify-center"></div>
        </div>

      </div>
    </section>
  );
}
