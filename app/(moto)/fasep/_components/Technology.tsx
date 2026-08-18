"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Technology = () => {
  return (
    <section 
      id="technology" 
      className="w-full py-16 md:py-24 text-white relative"
      style={{ backgroundColor: "#8e9192" }}
    >
      <div className="custom-container relative z-10 flex flex-col gap-10 px-4 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/20">
          <div className="flex flex-col gap-4 lg:w-2/3">
          <h2  className="font-semibold text-[#ffffff] exo2 section-title">
              Advanced Wheel Balancing Technology
            </h2>
            <p className="text-[#ffffff] oxanium section-text">

              With decades of expertise in automotive equipment, FASEP develops wheel balancers combining innovative electronics, precision mechanics, and practical functionality. Every solution provides technicians with accurate measurements, efficient operation, and dependable performance.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-start lg:justify-end shrink-0">
            <Button text="View Product Range" href="#products" />
          </div>
        </div>

        {/* Video Player */}
        <div className="w-full max-w-[90%] lg:max-w-[85%] mx-auto aspect-video relative overflow-hidden border border-white/20 shadow-xl ">      
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Technology;
