"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function GlimpseGallery() {
  return (
    <section
      id="braking-solutions"
      className="py-16 md:py-24 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/moto/gli-therm/brake-fluid-bg.webp')" }}
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className="col-span-1 lg:col-span-5 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h4 className="text-[#EE464B] font-extrabold section-text tracking-wide uppercase mb-3 bricolage-font">
              Advanced Braking Solutions
            </h4>
            <h2 className="section-title font-bold text-[#111111] leading-tight mb-6 bricolage-font">
              Consistent Braking, Component Protection &amp; Thermal Stability
            </h2>
            <p className="section-text text-[#404040] leading-relaxed mb-4 font-inter">
              GLICAR DOT-4 is formulated to support dependable braking and clutch operation across diverse driving conditions. Made using primary raw materials and advanced additives, it combines a high boiling point with low-temperature fluidity and effective corrosion protection. Its ready-to-use formulation requires no dilution, making it a practical solution for vehicles and equipment that specify DOT-4 brake fluid.
            </p>
            <p className="section-text text-[#404040] leading-relaxed mb-8 font-inter">
              GLITHERM DOT 4 brake fluid offers a minimum dry boiling point of 230°C and reliable fluidity down to -40°C, meeting PN-C-40005, FMVSS 116, ISO 4925, and SAE J1704 requirements.
            </p>

            <div>
              <Button
                href="#products"
                variant="outline"
                className="!w-auto rounded-[8px]"
              >
                View Technical Details
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div
            className="col-span-1 lg:col-span-7"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="w-full aspect-[16/9] bg-gray-200/60 rounded-xl flex items-center justify-center relative overflow-hidden shadow-xl border border-gray-200">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
