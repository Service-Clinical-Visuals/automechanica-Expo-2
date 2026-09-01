"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#121212]">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Video Player (Video clip 01) */}
          <div className="w-full h-full aspect-video relative overflow-hidden lg:col-span-7 flex items-center justify-center" data-aos="fade-right">
            {/* Using DynamicVideoPlayer as placeholder, wrapping to maintain layout */}
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-5 text-white" data-aos="fade-left">
            <h2 className="section-title text-white exo-2-font font-bold mb-4 leading-tight">
              Premium Gasket Solutions
            </h2>
            <div className="w-full h-[1px] bg-white mb-8"></div>

            <div className="flex flex-col gap-6 mb-8 section-text border-1 border-[#27226D] px-5 py-3 leading-relaxed text-white inter-font font-regular">
              <p className="section-text text-white font-regular">
                Avortex gasket sets are engineered to deliver highly dependable sealing performance specifically for the Fiat 1.3 Multijet 16V engine, ensuring optimal protection across critical engine interfaces such as combustion chambers, oil passages, and coolant channels. Manufactured using precision-grade materials and developed under strict quality control standards, they provide exceptional resistance to heat, pressure fluctuations, and chemical exposure. This results in accurate OEM-level fitment, enhanced durability, and consistently reliable performance during complete engine overhaul applications.
              </p>
              <p className="section-text text-white font-regular">
                Precision Fitment ensures exact dimensional accuracy for easy installation and leak-free sealing, while Long-Lasting Durability uses advanced materials to withstand high temperatures and pressure, extending engine life.
              </p>
            </div>

            <Button href="#" className="w-max">
              View Products
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
