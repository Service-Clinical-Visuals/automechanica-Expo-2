"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Performance() {
  return (
    <section className="relative w-full py-16 xl:py-20 2xl:py-[100px] overflow-hidden bg-white">
      {/* Background Pattern Image */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <img 
          src="/moto/pek/bg.png" 
          alt="Background Engineering Pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="custom-container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-[50px]">
            
            {/* Header Block (Displays FIRST on mobile/tablet, CENTERED) */}
            <div 
              data-aos="fade-down"
              data-aos-duration="800"
              className="flex flex-col items-center text-center w-full xl:hidden"
            >
              <span className="font-bold text-xs sm:text-sm text-accent uppercase tracking-wider mb-3 sm:mb-[15px]">
                Turbo Performance Systems
              </span>

              <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020]">
                Complete Turbo Assembly Kits for Maximum Engine Efficiency
              </h2>
            </div>

            {/* Video Container (Displays SECOND on mobile/tablet, CENTERED, RIGHT on desktop) */}
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="relative w-full xl:w-1/2 aspect-video min-h-[260px] sm:min-h-[360px] 2xl:min-h-[480px] rounded-[10px] overflow-hidden shadow-lg bg-black flex-shrink-0 xl:order-2 mx-auto"
            >
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content Block (Displays THIRD on mobile/tablet, LEFT-aligned paragraphs) */}
            <div className="flex flex-col items-start text-left w-full xl:w-1/2 max-w-none xl:order-1">
              
              {/* Header Block (Displays ONLY on desktop, LEFT-aligned) */}
              <div 
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
                className="hidden xl:flex flex-col"
              >
                <span className="font-bold text-xs sm:text-sm text-accent uppercase tracking-wider mb-3 sm:mb-[15px]">
                  Turbo Performance Systems
                </span>

                <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020] mb-4 sm:mb-[25px]">
                  Complete Turbo Assembly Kits for Maximum Engine Efficiency
                </h2>
              </div>

              {/* Paragraph 1 */}
              <p 
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
                className="section-text font-normal text-[#404040] mb-4 sm:mb-[20px] leading-relaxed"
              >
                Our turbo assembly kits are designed to deliver a complete and reliable solution for turbocharger installation and performance enhancement. Each kit includes essential components required for efficient turbo operation, ensuring proper airflow, optimized combustion, and improved engine output.
              </p>

              {/* Paragraph 2 */}
              <p 
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
                className="section-text font-normal text-[#404040] mb-6 sm:mb-[30px] leading-relaxed"
              >
                Engineered with precision and high-quality materials, these kits support durability, easy integration, and consistent performance under demanding conditions, making them ideal for modern automotive and industrial applications. Turbo kits typically include components like housings, bearings, and fittings that ensure efficient operation and improved performance.
              </p>

              {/* Button Container */}
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
                className="pt-2"
              >
                <Button href="#peak-performance" variant="outline-red">
                  Unlock Peak Performance
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}