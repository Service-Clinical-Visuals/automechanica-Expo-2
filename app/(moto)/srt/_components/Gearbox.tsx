"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Gearbox() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-12">
          <h2 className="section-title exo2 font-semibold text-[#2a2a2a] mb-10 md:mb-6">
            Gearbox & <span className="relative inline-block">Transmission<span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span> Excellence
          </h2>
          
        <p className="section-text oxanium text-[#4a4a4a] text-center max-w-7xl leading-relaxed mb-12">
            SRT Gear Industry manufactures high-quality gearbox and transmission components engineered for precision, durability, and reliable performance. Our solutions are designed to support smooth power transmission and efficient vehicle operation across diverse automotive applications, meeting demanding industry standards and customer expectations worldwide.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="w-full max-w-7xl mx-auto relative aspect-video bg-black overflow-hidden border border-gray-100">
           <DynamicVideoPlayer type="short" className="absolute inset-0 w-full h-full object-cover " />
        </div>

      </div>
    </section>
  );
}
