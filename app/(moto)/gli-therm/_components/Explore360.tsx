"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section
      className="py-16 md:py-24 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/moto/gli-therm/brake-fluid-bg.webp')" }}
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 relative z-10 text-center">
        {/* Eyebrow Label */}
        <h4
          className="text-[#EE464B] font-extrabold section-text mb-3 uppercase tracking-wider bricolage-font"
          data-aos="fade-up"
        >
          GLICAR DOT-4 Brake Fluid
        </h4>

        {/* Main Section Headline */}
        <h2
          className="section-title font-bold text-[#111111] leading-tight mb-5 bricolage-font"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reliable Braking with Thermal Stability
        </h2>

        {/* Description Paragraph */}
        <p
          className="section-text text-[#404040] leading-relaxed mb-10 sm:mb-12 max-w-[85%] mx-auto font-inter"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          GLICAR DOT-4 is a brake fluid for hydraulic braking and clutch systems requiring DOT-4 specifications. With a minimum boiling point of 230°C, low-temperature fluidity, and corrosion protection, it ensures reliable braking. Ready to use, it requires no dilution and meets international standards.
        </p>

        {/* 360 Video Player Container */}
        <div
          className="w-full aspect-video rounded-xl sm:rounded-2xl max-w-[75%] mx-auto flex items-center justify-center relative overflow-hidden shadow-lg bg-gray-100 border border-gray-200/60"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <DynamicVideoPlayer
            type="360"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
