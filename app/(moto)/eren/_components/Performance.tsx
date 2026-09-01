"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Performance() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Text & List */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
             <h2 className="section-title barlowCondensed font-bold text-[#ffffff]">
                Built for Reliable Braking Performance
              </h2>
              <div className="w-12 h-[3px] bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
            </div>

            <p className="section-text inter leading-relaxed text-[#ffffff] mb-6">
              Our brake pads combine carefully selected friction materials with precise manufacturing to deliver dependable performance, reduced wear, and consistent braking under demanding conditions.
            </p>

            <div className="space-y-4 mb-10">
              {/* Item 1 */}
              <div className="border border-[var(--color-primary)] p-4 flex items-start justify-center gap-4 hover:border-[var(--color-primary)] transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/eren/circle.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
                <p className="section-text inter leading-relaxed text-[#ffffff]">
                  <span className="font-semibold text-white">Consistent Braking Performance</span> - Delivers stable friction and dependable stopping power across different driving conditions.
                </p>
              </div>

              {/* Item 2 */}
              <div className="border border-[var(--color-primary)] p-4 flex items-start justify-center gap-4 hover:border-[var(--color-primary)] transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/eren/circle.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
                <p className="section-text inter leading-relaxed text-[#ffffff]">
                  <span className="font-semibold text-white">High Heat Resistance</span> - Designed to maintain reliable braking performance during repeated and demanding braking.
                </p>
              </div>

              {/* Item 3 */}
              <div className="border border-[var(--color-primary)] p-4 flex items-start justify-center gap-4 hover:border-[var(--color-primary)] transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <img src="/moto/eren/circle.png" alt="Icon" className="w-5 h-5 object-contain" />
                </div>
                <p className="section-text inter leading-relaxed text-[#ffffff]">
                  <span className="font-semibold text-white">Durable Construction</span> - Manufactured to withstand continuous use while providing long service life.
                </p>
              </div>
            </div>

            <div className="self-start">
              <Button text="View Product" />
            </div>
          </div>
          
          {/* Right Column: Video */}
          <div className="w-full relative aspect-video  overflow-hidden ">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
