"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Choose() {
  return (
    <section className="relative w-full h-[70%] lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] py-16 lg:py-20 px-4 lg:px-0 my-8 lg:my-12">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>High Performance Turbo</span>
          </div>
          <h2 className="text-white font-semibold text-3xl lg:text-4xl">
            Inside the Power of GT Turbo
          </h2>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-[20px] lg:rounded-[30px] relative z-10 -mb-24 lg:-mb-32 shadow-2xl overflow-hidden aspect-video max-h-[700px] w-full" data-aos="fade-up" data-aos-delay="100">
          {/* Checkerboard pattern for placeholder if no video */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span className="font-semibold text-xl text-black">Video Clip 01</span>
          </div>
          <div className="relative z-20 w-full h-full flex items-center justify-center">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Spacer to handle the negative margin below the section */}
      <div className="h-24 lg:h-32 bg-transparent"></div>
    </section>
  );
}
