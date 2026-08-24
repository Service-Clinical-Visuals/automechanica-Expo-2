"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section 
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end"
    >
      {/* Background Video Frame */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Light Overlay Effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/25 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full pb-12 sm:pb-16 xl:pb-20 2xl:pb-[100px]">
        <div className="custom-container px-4 sm:px-6 md:px-8">
          <div className="max-w-full sm:max-w-[640px] xl:max-w-[720px] 2xl:max-w-[761px] 3k:max-w-[960px]">
            
            {/* Title */}
            <h1 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="banner-title mb-6 sm:mb-8 font-bold text-white leading-tight sm:leading-snug 2xl:leading-[1.25]"
            >
              Engineering Precision and Performance Through Automotive Manufacturing and Integrated Solutions
            </h1>

            {/* Button */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <Link 
                href="#capabilities" 
                className="inline-flex items-center justify-center px-6 2xl:px-[25px] py-3 2xl:py-[12px] border border-white rounded-[10px] text-white font-bold btn-text hover:bg-white hover:text-black active:scale-95 transition-all duration-300 ease-in-out shadow-lg hover:shadow-white/10"
              >
                Discover the Power of Engineering
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}