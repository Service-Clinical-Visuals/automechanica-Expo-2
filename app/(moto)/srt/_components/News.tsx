"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const newsData = [
  {
    id: 1,
    title: "Product Of The Month",
    date: "20 December",
    desc: "SRT expands its product range by adding new references for Fiat, Peugeot & Citroen brands. The products we are...",
    img: "/moto/srt/n1.png",
  },
  {
    id: 2,
    title: "Product Of The Month",
    date: "20 December",
    desc: "Quality is at heart of SRT operations. We are committed to produce and deliver only the highest quality gears to our...",
    img: "/moto/srt/n2.png",
  },
  {
    id: 3,
    title: "Update On COVID-19",
    date: "01 December",
    desc: "To all our stakeholders: Our company's operation has not been interrupted due to Covid-19. We have taken the...",
    img: "/moto/srt/n3.png",
  },
  {
    id: 4,
    title: "Customer Communication Channels",
    date: "20 December",
    desc: "To all our stakeholders: Social media have become an integral part of our customer communication. We invite you...",
    img: "/moto/srt/n4.png",
  },
];

export default function News() {
  const renderNewsCard = (news: typeof newsData[0]) => (
    <div className="bg-[#72747b] border border-gray-400/40 p-4 shadow-sm flex flex-col h-full w-full group hover:shadow-md transition-shadow duration-300">
      
      {/* Image Container */}
      <div className="w-full aspect-[4/3] relative mb-5 overflow-hidden">
        <img 
          src={news.img} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="card-title exo2 font-semibold text-white mb-2">
          {news.title}
        </h3>
        <p className="oxanium section-text text-white mb-4">
          {news.date}
        </p>
        <p className="section-text oxanium text-white leading-relaxed mb-6 flex-grow">
          {news.desc}
        </p>
        
        {/* Button */}
        <div className="mt-auto self-start">
          <Button 
            text="Read More" 
            className="!py-2 !px-4 !text-sm"
          />
        </div>
      </div>

    </div>
  );

  return (
    <section className="w-full py-16 md:py-24 bg-[#656973]">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-5xl">
            <h2 className="section-title exo2 font-semibold text-[#ffffff] mb-10 md:mb-6">
              Latest  <span className="relative inline-block">From SRT Gear <span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span>Industry
            </h2>
        <p className="section-text oxanium text-[#ffffff] text-left  leading-relaxed ">
              Stay informed with the latest SRT Gear Industry news, product developments, industry updates, and company achievements. Discover our innovations, new solutions, and ongoing developments in gearbox and transmission technology.
            </p>
          </div>
          <div className="flex-shrink-0 md:pt-4">
            <Button text="Discover SRT" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10 md:my-14"></div>

        {/* Swiper Carousel */}
        <div className="w-full relative px-2">
          <style jsx global>{`
            .news-swiper .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
              width: 10px;
              height: 10px;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .news-swiper .swiper-pagination-bullet-active {
              background-color: #bed62f !important;
              width: 40px;
              border-radius: 8px;
            }
            .news-swiper {
              padding-bottom: 60px !important;
            }
          `}</style>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              dynamicBullets: false
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full news-swiper"
          >
            {newsData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                {renderNewsCard(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
