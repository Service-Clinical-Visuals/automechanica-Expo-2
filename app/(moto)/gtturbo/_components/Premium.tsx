"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Premium() {
  return (
    <section className="w-full py-16 lg:py-2o bg-white">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-right">
            <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
              <div className="w-8 h-[2px] bg-[#E02027]"></div>
              <span>Reliable Performance</span>
            </div>

            <h2 className="text-[#0B0E17] font-bold text-3xl lg:text-4xl leading-tight mb-8">
              Discover the Engineering Behind GT Turbo's High-Performance
            </h2>

            <div className="flex flex-col gap-6 text-[#484848] text-sm lg:text-[15px] leading-[1.8]">
              <p>
                GT Turbo's turbocharger is designed with a focus on performance, precision, and efficient airflow, helping engines deliver stronger power and responsive acceleration. Every component is engineered to work together seamlessly, optimizing the flow of compressed air into the engine for improved combustion and consistent performance across demanding driving conditions.
              </p>
              <p>
                Take a closer look at the technology and craftsmanship behind GT Turbo through this immersive video experience. From its precision-engineered internal components to its robust construction, the turbocharger is built to deliver reliable boost, enhanced engine efficiency, and dependable performance. Witness how advanced turbocharging technology transforms airflow into usable engine power.
              </p>
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="100">
            <div className="relative w-full aspect-video bg-[#f0f0f0] rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center">
              {/* Checkerboard pattern for placeholder if no video */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <span className="font-semibold text-xl text-black">Video Clip 02</span>
              </div>
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
                0              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
