"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Available() {
  return (
    <section className="relative w-full py-16 xl:py-20 2xl:py-[100px] bg-[#F3F3F3]/50 overflow-hidden">
      {/* Outer wrapper matching layout structure */}
      <div className="custom-container px-4 sm:px-6 md:px-8">
        
        {/* Main Flex Layout: Vertical stack on mobile/tablet, side-by-side on xl (1280px+) */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 2xl:gap-[50px]">
          
          {/* Header Block (Displays FIRST on mobile/tablet, CENTERED) */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex flex-col items-center text-center w-full xl:hidden"
          >
            <span className="font-bold text-xs sm:text-sm text-accent tracking-wider mb-3 sm:mb-[15px]">
              Integrated Product Spectrum
            </span>

            <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020]">
              Versatile Automotive Components Engineered for Precision
            </h2>
          </div>

          {/* Video Container (Displays SECOND on mobile/tablet, CENTERED, RIGHT on desktop) */}
          <div 
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="relative w-full xl:w-1/2 aspect-video min-h-[260px] sm:min-h-[360px] 2xl:min-h-[480px] rounded-[10px] overflow-hidden shadow-lg bg-black flex-shrink-0 xl:order-2 mx-auto"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Block (Displays THIRD on mobile/tablet, LEFT-aligned paragraphs) */}
          <div className="flex flex-col items-start text-left w-full xl:w-1/2 max-w-none xl:order-1">
            
            {/* Header Block (Displays ONLY on desktop, LEFT-aligned) */}
            <div 
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
              className="hidden xl:flex flex-col"
            >
              <span className="font-bold text-xs sm:text-sm text-accent tracking-wider mb-3 sm:mb-[15px]">
                Integrated Product Spectrum
              </span>

              <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020] mb-4 sm:mb-[25px]">
                Versatile Automotive Components Engineered for Precision
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p 
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
              className="section-text font-normal text-[#404040] mb-4 sm:mb-[20px] leading-relaxed"
            >
              We deliver a broad range of automotive components developed through advanced manufacturing processes, including casting, machining, and pipe forming. Our product lineup is designed to support critical vehicle systems with high precision, durability, and consistent performance across demanding environments.
            </p>

            {/* Paragraph 2 */}
            <p 
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="400"
              className="section-text font-normal text-[#404040] mb-6 sm:mb-[30px] leading-relaxed"
            >
              With a strong engineering foundation and modern production facilities, our solutions ensure seamless integration, efficient operation, and long-term reliability for global automotive applications.
            </p>

            {/* CTA Button */}
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              className="pt-2"
            >
              <Button href="#whats-available" variant="outline-red">
                See What&apos;s Available
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}