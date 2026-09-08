"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Choose() {
  return (
    <section className="relative w-full  mx-auto rounded-[20px] lg:rounded-[30px] my-8 lg:my-12">
      <div className="custom-container">
        <div className="bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] pt-16 pb-24 lg:pt-20 lg:pb-32 ">
          {/* Header Section */}
          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up">
            <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
              <div className="w-8 h-[2px] bg-[#E02027]"></div>
              <span>High Performance Turbo</span>
            </div>
            <h2 className="text-white font-semibold text-3xl lg:text-4xl">
              Inside the Power of GT Turbo
            </h2>
          </div>
        </div>

        {/* Video Card */}
        <div
          className="rounded-2xl lg:relative z-10 -mt-20 lg:-mt-25 mx-auto overflow-hidden aspect-video max-h-[700px] w-full "
          data-aos="fade-up"
          data-aos-delay="100">
          <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center">
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
