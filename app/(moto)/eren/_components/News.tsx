"use client";

import React from "react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "ISO 22163:2023 International Railway Standard",
    text: "We are thrilled to announce that Eren Balatacılık A.Ş. has successfully obtained the ISO 22163:2023 International Railway Industry Standard (Railway Systems) Quality Management System certification....",
    img: "/moto/eren/n1.png",
  },
  {
    id: 2,
    title: "Mims Automobility Moscow",
    text: "We were pleased to take part in MIMS Automobility Moscow, one of the key B2B exhibitions for the automotive production, aftermarket, and service industry. The event brought......",
    img: "/moto/eren/n2.png",
  },
  {
    id: 3,
    title: "Automechanika Istanbul 2022",
    text: "World's leading trade fair brand for the automotive aftermarket industry, Automechanika's one and only event in Turkey, Automechanika Istanbul took place on June 2-5, 2022.......",
    img: "/moto/eren/n3.png",
  },
];

export default function News() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fb]">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
          <h2 className="section-title barlowCondensed font-bold text-[#000000]">Latest News & Insights</h2>
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
        </div>

        {/* Section Description */}
        <p className="section-text inter leading-relaxed text-[#111111] mb-10 text-center max-w-7xl mx-auto">
          Stay up to date with the latest company news, product developments, industry insights, events, and updates from our team. Discover what's new and follow our journey in automotive braking solutions.
        </p>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 items-center">
          {newsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col group ${
                index === 0 ? "md:col-span-2 xl:col-span-1 md:w-[80%] md:mx-auto xl:w-full" : ""
              }`}
            >
              
              {/* Image Container */}
              <div className="w-full relative z-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className={`${index === 0 ? "w-[80%] mx-auto border border-gray-200  bg-white" : "w-full"} h-auto object-contain transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              {/* Text Box */}
              <div className={`bg-white p-6 flex flex-col relative ${
                index === 0 
                  ? "shadow-lg border border-gray-100 z-10 w-[90%] mx-auto -mt-4 h-[280px]" 
                  : "border border-gray-200 border-t-0 w-full h-[260px]"
              }`}>
                <h3 className="barlowCondensed font-semibold text-[#000000] text-xl xl:text-2xl mb-4 text-center">{item.title}</h3>
                <p className="section-text inter text-[#111111] leading-relaxed text-center mb-6 flex-grow">
                  {item.text}
                </p>
                <div className="flex justify-end mt-auto">
                  <Link 
                    href="#" 
                    className="text-red-500 inter header-link hover:text-red-700 transition-colors underline underline-offset-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
