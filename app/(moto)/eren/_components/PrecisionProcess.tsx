"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PrecisionProcess() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Text & List */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
             <h2 className="section-title barlowCondensed font-bold text-[#ffffff]">
                Precision Built Into Every Brake Pad
              </h2>
              <div className="w-12 h-[2px] bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
            </div>

            <p className="section-text inter leading-relaxed text-[#ffffff] mb-10">
              From material selection to final inspection, every stage of production is carefully controlled to ensure consistent quality and dependable braking performance. Advanced manufacturing processes, experienced professionals, and rigorous quality checks come together to produce brake components that meet demanding automotive requirements.
            </p>

            <div className="bg-white border-2 border-[var(--color-primary)] p-6 md:p-8 space-y-6 mb-10">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/eren/circle.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
                <p className="section-text inter leading-relaxed text-[#111111] ">
                  <span className="font-semibold text-gray-900">Advanced Manufacturing</span> - Modern production techniques ensure accuracy and consistency throughout the manufacturing process.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/eren/circle.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
               <p className="section-text inter leading-relaxed text-[#111111] ">
                  <span className="font-semibold text-gray-900">Experienced Workforce</span> - Specialized teams bring extensive technical knowledge and manufacturing expertise.
                </p>
              </div>
            </div>

            <div className="self-start">
              <Button text="View Product" />
            </div>
          </div>
          
          {/* Right Column: Video */}
          <div className="w-full relative aspect-video  overflow-hidden shadow-lg border border-gray-800">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
