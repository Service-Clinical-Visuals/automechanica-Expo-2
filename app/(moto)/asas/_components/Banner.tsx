"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative z-0 w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-end pb-8 md:pb-16 lg:pb-20 overflow-hidden bg-[#05051a]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover object-center lg:object-fill pointer-events-none"
        />
      </div>

      {/* Hero Content Area */}
      <div className="custom-container relative z-10 w-full">
        <div className="max-w-xl xl:max-w-[70%] 2xl:max-w-[70%] 4k:max-w-[70%]">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="hero-title font-semibold text-white mb-4 leading-tight tracking-tight drop-shadow-md">
            Advanced Automotive Filtration
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="section-text text-white/90 max-w-lg xl:max-w-[70%] 2xl:max-w-[70%] drop-shadow">
            Engineered for reliable filtration, superior engine protection, and
            consistent performance.
          </p>
        </div>
      </div>
    </section>
  );
}
