"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProductRange() {
  return (
    <section className="relative w-full lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] py-16 lg:py-20 px-4 lg:px-0 my-8 lg:my-12">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>Our Services</span>
          </div>
          <h2 className="text-white font-semibold text-3xl lg:text-4xl">
            Our Comprehensive Service Solutions
          </h2>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 mx-auto px-4 lg:px-4">
          <div className="aspect-square bg-[#1A1E29] rounded-[20px] overflow-hidden shadow-xl border border-white/5" data-aos="fade-up" data-aos-delay="100">
            <img src="/moto/gtturbo/s1.png" alt="Service 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square bg-[#1A1E29] rounded-[20px] overflow-hidden shadow-xl border border-white/5" data-aos="fade-up" data-aos-delay="200">
            <img src="/moto/gtturbo/s2.png" alt="Service 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="aspect-square bg-[#1A1E29] rounded-[20px] overflow-hidden shadow-xl border border-white/5" data-aos="fade-up" data-aos-delay="300">
            <img src="/moto/gtturbo/s3.png" alt="Service 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <button className="flex items-center gap-4 bg-white text-[#0B0E17] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors group w-fit text-sm lg:text-[15px]">
            View All Services
            <div className="bg-[#E02027] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
