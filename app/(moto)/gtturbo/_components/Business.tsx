"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Business() {
  return (
    <section
      className="relative w-full h-[70%] lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] py-16 lg:py-20 px-4 lg:px-0 my-8 lg:my-12 bg-cover bg-center"
      style={{ backgroundImage: 'url("/moto/gtturbo/b1.png")' }}
    >
      {/* Dark gradient overlay on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E17] via-[#0B0E17]/80 to-transparent"></div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full min-h-[400px]">
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center px-4 lg:pl-[10%] lg:pr-16" data-aos="fade-right">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>Get Quote</span>
          </div>

          <h2 className="text-white font-bold text-3xl lg:text-4xl leading-tight mb-6">
            GT Turbo for Business
          </h2>

          <div className="flex flex-col gap-4 text-white/80 text-sm lg:text-[15px] leading-[1.8] mb-8 max-w-[600px]">
            <p>
              As a trusted diesel turbochargers store, GTurbo supplies performance diesel components to a national network of dealers, workshops, mining operators, and government fleet managers. Trade pricing, dedicated account management, and volume supply, talk to our trade team.
            </p>
          </div>

          <button className="flex items-center gap-4 bg-white text-[#0B0E17] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors group w-fit text-sm lg:text-[15px]">
            Dealer Program
            <div className="bg-[#E02027] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Right side is intentionally empty to show the background image */}
        <div className="w-full lg:w-[40%] hidden lg:block"></div>
      </div>
    </section>
  );
}
