"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Button from "./Button";

interface NewsItem {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    image: "/moto/giuliano/news1.png",
    title: "Giuliano Automotive Celebrates 50...",
    date: "21/07/2026",
    excerpt:
      "From 8 to 12 September 2026, Giuliano Automotive will be exhibiting at Automechanika Frankfurt. This year is particularly...",
    href: "/news/automechanika-frankfurt-2026",
  },
  {
    image: "/moto/giuliano/news2.png",
    title: "Mobile Tyre Service: New Solutions For...",
    date: "29/06/2026",
    excerpt:
      "Giuliano Automotive expands its Mobile Tyre Service offering with a complete range of tyre changers, wheel balancers...",
    href: "/news/mobile-tyre-service",
  },
  {
    image: "/moto/giuliano/news3.png",
    title: "GIULIANO AUTOMOTIVE Towards South...",
    date: "16/04/2026",
    excerpt:
      "In the second half of 2025, GIULIANO intensified its expansion activities in international markets, establishing...",
    href: "/news/south-america-expansion",
  },
  {
    image: "/moto/giuliano/news1.png",
    title: "Giuliano Automotive Celebrates 50...",
    date: "21/07/2026",
    excerpt:
      "From 8 to 12 September 2026, Giuliano Automotive will be exhibiting at Automechanika Frankfurt. This year is particularly...",
    href: "/news/automechanika-frankfurt-2026",
  },
  {
    image: "/moto/giuliano/news2.png",
    title: "Mobile Tyre Service: New Solutions For...",
    date: "29/06/2026",
    excerpt:
      "Giuliano Automotive expands its Mobile Tyre Service offering with a complete range of tyre changers, wheel balancers...",
    href: "/news/mobile-tyre-service",
  },
  {
    image: "/moto/giuliano/news3.png",
    title: "GIULIANO AUTOMOTIVE Towards South...",
    date: "16/04/2026",
    excerpt:
      "In the second half of 2025, GIULIANO intensified its expansion activities in international markets, establishing...",
    href: "/news/south-america-expansion",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-[#0D0D0D] py-16 lg:py-24">
      <div className="custom-container">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-[1187px]" data-aos="fade-right" data-aos-duration="900">
            <h2 className="section-heading text-white mb-6">
              Latest From Giuliano Automotive
            </h2>

            <p className="section-text text-white">
              Stay updated with the latest GIULIANO AUTOMOTIVE news, product
              innovations, international activities, trade fairs, and
              industry developments. Discover our latest achievements, new
              solutions, global partnerships, and upcoming events shaping
              the future of professional tyre service.
            </p>
          </div>

          <div className="flex-shrink-0 pr-2 transition-transform duration-300 hover:-translate-y-1" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            <Button text="View All News" href="/news" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-soft mb-10" data-aos="fade-in" data-aos-duration="700" data-aos-delay="100" />

        {/* News Carousel */}
        <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".news-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} !w-12 !h-1.5 !rounded-full !mx-1"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              2000: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="!pb-4"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={`${item.title}-${item.date}-${index}`}>
                <div className="group bg-surface-2 border border-soft shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-[30px] flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">

                  {/* News Image */}
                  <div className="relative w-full aspect-[480/349] mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-white mb-2 line-clamp-1 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p className="date-text text-white mb-3 transition-opacity duration-300 group-hover:opacity-80">
                    {item.date}
                  </p>

                  {/* Excerpt */}
                  <p className="section-text text-white mb-6 flex-1 line-clamp-2 transition-opacity duration-300 group-hover:opacity-90">
                    {item.excerpt}
                  </p>

                  {/* Button */}
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <Button text="Read More" href={item.href} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination */}
        <div className="news-pagination flex items-center justify-center mt-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" />
      </div>
    </section>
  );
}