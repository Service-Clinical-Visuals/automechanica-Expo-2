"use client";

import React from "react";

const magazines = [
  {
    category: "Maintenance",
    date: "May 20, 2025",
    title: "GTurbo Freudenberg High Efficiency Air Filter",
    desc: "GTurbo Freudenberg High Efficiency Air Filter GTurbo has teamed up with Scavenger and Freudenberg Filtration...",
    image: "/moto/gtturbo/n1.png",
  },
  {
    category: "Buyers Guide",
    date: "January 31, 2025",
    title: "Unleashing Diesel Engine Potential: The Power of Dyno Tuning",
    desc: "GTurbo Freudenberg High Efficiency Air Filter GTurbo has teamed up with Scavenger and Freudenberg Filtration...",
    image: "/moto/gtturbo/n2.png",
  },
  {
    category: "Buyers Guide",
    date: "January 22, 2025",
    title: "Mastering Diesel Engine Performance: The Vital Role of Injector Cleaning",
    desc: "In the ever-evolving world of diesel engines, keeping up with advancements can feel like a...",
    image: "/moto/gtturbo/n3.png",
  }
];

export default function Magazines() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>Our News</span>
          </div>
          <h2 className="text-[#0B0E17] font-bold text-3xl lg:text-4xl mb-4">
            GT Turbo – Magazines
          </h2>
          <p className="text-[#484848] text-sm lg:text-[15px]">
            Engine reviews, performance guides, and diesel knowledge from the GTurbo workshop.
          </p>
        </div>

        {/* Magazines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {magazines.map((mag, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 100}>
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-[15px] border border-gray-200 overflow-hidden mb-6 relative bg-white">
                <img
                  src={mag.image}
                  alt={mag.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta Data */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#E02027] text-white text-[12px] font-semibold px-4 py-1.5 rounded-full">
                  {mag.category}
                </span>
                <span className="text-gray-500 text-[13px] font-medium">
                  {mag.date}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="text-[#0B0E17] font-bold text-lg lg:text-[22px] leading-snug mb-3 group-hover:text-[#E02027] transition-colors">
                {mag.title}
              </h3>
              <p className="text-[#484848] text-sm lg:text-[15px] leading-relaxed">
                {mag.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
