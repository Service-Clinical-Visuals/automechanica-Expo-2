"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product360() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#656973]">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-6xl">
            <h2 className="section-title exo2 font-semibold text-[#ffffff] mb-10 md:mb-6 ">
              360° <span className="relative inline-block">Product<span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span> Experience
            </h2>
        <p className="section-text oxanium text-[#ffffff] text-left  leading-relaxed ">
              Explore SRT Gear Industry Gearbox & Transmission products from every angle with our interactive 360° view. Examine the design, construction, precision components, and engineering details to experience the quality behind every solution.
            </p>
          </div>
          <div className="flex-shrink-0 md:pt-4">
            <Button text="View 360° Experience" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10 md:my-14"></div>

        {/* Video Player Container */}
        <div className="w-full max-w-7xl mx-auto relative aspect-video bg-black overflow-hidden shadow-xl">
           <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover " />
        </div>

      </div>
    </section>
  );
}
