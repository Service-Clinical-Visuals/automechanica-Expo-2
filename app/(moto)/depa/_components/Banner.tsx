"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Banner = () => {
  return (
    <section
      id="home"
      className=" w-full  h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020320]">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover "
          type="banner"
        />
        
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full custom-container  ">
        <div className="grid grid-cols-1  gap-4 items-center">
          <div className=" space-y-4 max-w-full">
            {/* Header Title */}
            <h1 className="banner-title leading-tight oswald font-semibold text-white">
              Advancing Automotive Remanufacturing
            </h1>

            <p className="rubik section-text leading-relaxed text-gray-200">
              Reliable remanufactured parts for a sustainable automotive future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
