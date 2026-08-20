"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Performance() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
            <h2 className="section-title exo2 font-semibold text-[#2a2a2a] mb-10 md:mb-6 ">
            Reliable <span className="relative inline-block">Automotive<span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span> Performance
          </h2>
        <p className="section-text oxanium text-[#4a4a4a] text-center max-w-7xl leading-relaxed mb-12">
            With a comprehensive product portfolio, SRT Gear Industry delivers advanced gearbox and transmission solutions engineered to meet demanding automotive and aftermarket requirements. Combining precision manufacturing, durable materials, and modern production technologies, our components provide smooth operation, efficient power transmission, and dependable performance across diverse vehicle applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left: Video */}
          <div className="w-full xl:col-span-9 relative aspect-video  rounded-md overflow-hidden shadow-sm border border-gray-200">
             <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text Content */}
          <div className="xl:col-span-3 flex flex-col h-full">
            <h3 className="section-subtitle exo2 font-semibold text-[#2a2a2a] mb-4">
              Gearbox Solutions
            </h3>
            
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            
            <p className="section-text oxanium text-[#4a4a4a] leading-relaxed mb-6">
              SRT Gear Industry combines engineering expertise, advanced manufacturing, and strict quality practices to deliver reliable gearbox and transmission components.
            </p>

            {/* List shown in right column on mobile and 2xl screens */}
            <ul className="xl:hidden 2xl:block space-y-5 mb-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center mt-1">
                  <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
                </div>
                <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                  Precision Engineering – Manufactured with accurate dimensions for reliable fitment and smooth operation.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center mt-1">
                  <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
                </div>
                <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                 Advanced Manufacturing – Modern production technologies ensure consistent quality and performance.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center mt-1">
                  <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
                </div>
                <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                  Consistent Performance – Engineered to deliver dependable operation under demanding conditions.
                </p>
              </li>
            </ul>

            <div className="w-full h-px bg-gray-200 mb-6"></div>

            <p className="section-text oxanium text-gray-600 leading-relaxed mb-8">
              Our solutions are developed to support efficient power transfer, smooth vehicle operation, and dependable performance across demanding automotive applications.
            </p>

            <div className="mt-auto">
              <Button text="View Solutions" />
            </div>
          </div>
          
        </div>

        {/* List shown below grid ONLY on lg and xl screens */}
        <div className="hidden xl:block 2xl:hidden mt-8 xl:mt-12">
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center mt-1">
                <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
              </div>
              <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                Precision Engineering – Manufactured with accurate dimensions for reliable fitment and smooth operation.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center mt-1">
                <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
              </div>
              <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                Advanced Manufacturing – Modern production technologies ensure consistent quality and performance.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center mt-1">
                <img src="/moto/srt/chk1.png" alt="check" className="w-7 h-7 mt-1" />
              </div>
              <p className="section-text oxanium text-[#4a4a4a] leading-relaxed">
                Consistent Performance – Engineered to deliver dependable operation under demanding conditions.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
