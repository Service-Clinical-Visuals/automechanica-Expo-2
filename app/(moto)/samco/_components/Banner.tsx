"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-end">
      {/* Background Video (Fully dynamic covering all screen ratios) */}
      <div 
        data-aos="zoom-out"
        data-aos-duration="1200"
        className="absolute inset-0 z-0 bg-[#05051a] w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </div>

        {/* Dark overlay wash */}
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.25)]" />
        {/* Secondary header-overlay wash */}
        <div className="absolute inset-0 bg-[rgba(102,102,102,0.1)]" />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
          <h1 
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="banner-title mb-6 font-bold leading-tight text-white tracking-[-0.02em] text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl"
          >
            Driven by Quality, Engineered for Superior Performance
          </h1>
          
          <div 
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            <Button variant="primary">Explore Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
}