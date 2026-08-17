"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full lg:w-[95%] mx-auto rounded-[20px] lg:rounded-[30px] my-8 lg:my-12 overflow-hidden bg-gray-900 shadow-2xl min-h-[400px] lg:min-h-[500px] flex items-center">
      {/* Background Image */}
      <img
        src="/moto/gtturbo/v2.png"
        alt="GT Turbo Unleash Power"
        className="absolute inset-0 w-full h-full object-cover"
      // Using banner2 or any available fallback image
      />


      {/* Content */}
      <div className="relative z-10 custom-container w-full">
        <div className="max-w-[600px] text-white" data-aos="fade-up">
          <h2 className="text-3xl lg:text-[42px] font-bold leading-[1.1] mb-6 uppercase tracking-wide">
            Ready to Unleash<br />More Power?
          </h2>

          <p className="text-lg lg:text-xl font-medium mb-10">
            Tell us your vehicle. We'll build the kit.
          </p>

          <button className="flex items-center gap-4 bg-white text-[#0B0E17] font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors group w-fit text-sm lg:text-[15px]">
            Find a Power Package
            <div className="bg-[#E02027] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
