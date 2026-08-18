"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#F3F3F380]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1 lg:col-span-5" data-aos="fade-right">
            <h3 className="text-[#F12535] section-text font-semibold mb-2 poppins-font">
              Camshaft Engineering Range
            </h3>
            <h2 className="section-title text-[#202020] poppins-font font-semibold mb-6 pr-4 leading-tight">
              Precision Camshafts Built for Engine Performance
            </h2>
            <div className="flex flex-col gap-6 mb-6 pr-4">
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                We specialize in the design and manufacturing of high-quality camshafts engineered to optimize engine timing, efficiency, and overall performance. Our products are developed using advanced machining technologies and strict quality control processes, ensuring precise operation and long-lasting durability under demanding engine conditions.
              </p>
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                Designed for a wide range of automotive applications, our camshafts deliver reliable performance, smooth engine operation, and enhanced power output across passenger and commercial vehicles.
              </p>
            </div>

            <Button href="#" variant="outline" className="w-fit !border-[1px] !border-[#F12535] !text-[#F12535] bg-transparent hover:!bg-[#F12535] hover:!text-white transition-colors rounded-[8px] px-8 py-2">
              Discover What's Inside
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[8px] order-1 lg:order-2 lg:col-span-7 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
