"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-end pb-8 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Background Video Layer */}
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="absolute inset-0 w-full h-full bg-[#05051a]"
      >
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

      </div>

      {/* Hero Content Area */}
      <div className="custom-container relative z-10 w-full">
        <div className="max-w-xl 2xl:max-w-3xl 4k:max-w-5xl">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="hero-title font-semibold text-white mb-4 leading-tight tracking-tight drop-shadow-md"
          >
            Advanced Automotive Filtration
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="section-text text-white/90 max-w-lg 2xl:max-w-xl drop-shadow"
          >
            Engineered for reliable filtration, superior engine protection,
            and consistent performance.
          </p>
        </div>
      </div>
    </section>
  );
}