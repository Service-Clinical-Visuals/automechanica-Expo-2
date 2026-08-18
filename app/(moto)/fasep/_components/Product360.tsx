"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Product360 = () => {
  return (
    <section 
      id="360-view" 
      className="w-full py-16 md:py-24 text-white relative"
      style={{ backgroundColor: "#8e9192" }}
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-8">
        
        {/* Heading and Text Group */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-4">
          <h2  className="font-semibold text-[#ffffff] exo2 section-title">
            360° Interactive Product View
          </h2>
          <p className="text-[#ffffff] oxanium section-text">
            Experience the precision engineering of FASEP Wheel Balancers through our immersive 360° product view. Rotate the machine from every angle to examine its modern design, control panel, balancing shaft, measurement systems, and robust construction in detail. Discover the advanced technology, high-quality components, and thoughtful engineering behind every FASEP solution, giving you a complete view of the equipment before making your selection.
          </p>
        </div>

        {/* 360 Player */}
        <div className="w-full max-w-[90%] lg:max-w-[85%] aspect-video relative overflow-hidden  border-white/20 shadow-xl">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Product360;
