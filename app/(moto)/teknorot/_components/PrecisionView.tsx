"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden text-white" style={{ backgroundColor: "#161D58" }}>
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:col-span-6 justify-center" data-aos="fade-right">
            <h2 className="section-title text-white montserrat-font font-semibold leading-tight">
              Discover the Details that Matter
            </h2>

            <div className="text-white/90 inter-font section-text font-regular tracking-normal leading-relaxed space-y-4 mb-4">
              <p>
                Experience Teknorot's engineering excellence through an immersive 360° product view. Explore every angle of our steering and suspension components and take a closer look at their design, construction, and precision-finished details. From Ball Joints and Control Arms to Tie Rod Ends and Sway Bar Links, each component reflects Teknorot's commitment to advanced engineering and manufacturing quality. The interactive experience allows users to rotate, inspect, and understand the product more closely, highlighting the robust construction, precise components, and attention to detail behind reliable automotive performance.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="bg-white border-3 border-[#66952E] grid grid-cols-1 md:grid-cols-3 mb-6 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#66952E]">
              <div className="text-center px-4 py-6 flex flex-col items-center justify-center gap-2">
                <img src="/moto/teknorot/icon1.png" alt="Precision-Engineered Components" className="w-auto h-auto object-contain mb-1" />
                <span className="text-[#000000] section-text font-semibold montserrat-font leading-tight">Precision-Engineered Components</span>
              </div>
              <div className="text-center px-4 py-6 flex flex-col items-center justify-center gap-2">
                <img src="/moto/teknorot/icon2.png" alt="Strength & Long-Term Reliability" className="w-auto h-auto object-contain mb-1" />
                <span className="text-[#000000] section-text font-semibold montserrat-font leading-tight">Built for Strength & Long-Term Reliability</span>
              </div>
              <div className="text-center px-4 py-6 flex flex-col items-center justify-center gap-2">
                <img src="/moto/teknorot/icon3.png" alt="OEM-Quality Performance" className="w-auto h-auto object-contain mb-1" />
                <span className="text-[#000000] section-text font-semibold montserrat-font leading-tight">Designed for OEM-Quality Performance</span>
              </div>
            </div>

            <Button href="#" variant="primary" className="!w-fit !px-8">
              View Product
            </Button>
          </div>

          {/* Right: 360 Video Player */}
          <div className="w-full h-full lg:col-span-6 relative overflow-hidden flex items-center justify-center rounded-[5px] p-8" data-aos="fade-left">
            <DynamicVideoPlayer
              type="360"
              className="w-full aspect-video object-cover rounded-[5px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
