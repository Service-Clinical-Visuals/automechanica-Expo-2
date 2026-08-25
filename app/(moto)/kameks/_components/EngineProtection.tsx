"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#001659]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[8px] lg:col-span-7 bg-white/10 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
            <span className="text-[#404040] font-semibold z-10 opacity-50 relative hidden">Video 02</span>
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-left">
            <h3 className="text-white section-text font-semibold mb-2 poppins-font">
              Camshaft Engineering Range
            </h3>
            <h2 className="section-title text-white poppins-font font-semibold mb-6 pr-4 leading-tight">
              High-Accuracy Camshaft Manufacturing for Optimal Engine Control
            </h2>

            <div className="flex flex-col gap-6 mb-6 pr-4">
              <p className="inter-font text-[#E0E0E0] font-regular section-text leading-relaxed">
                Our camshafts are crafted to ensure precise synchronization between engine components, enabling efficient combustion and smooth performance. Utilizing advanced production techniques and strict quality processes, each unit is built to deliver consistent results even in high-stress operating conditions.
              </p>
            </div>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5 font-bold text-sm">›</span>
                <span className="text-[#E0E0E0] font-regular inter-font section-text">
                  Designed to maintain precise synchronization of engine valve timing mechanisms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5 font-bold text-sm">›</span>
                <span className="text-[#E0E0E0] inter-font font-regular section-text">
                  Ensures smooth engine operation with optimized fuel efficiency performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5 font-bold text-sm">›</span>
                <span className="text-[#E0E0E0] inter-font font-regular section-text">
                  Compatible with diverse engine configurations across automotive and industrial sectors
                </span>
              </li>
            </ul>

            <Button href="#" variant="outline" className="w-fit !border-[1px] !border-white !text-white bg-transparent hover:!bg-white hover:!text-[#001659] transition-colors rounded-[8px] px-8 py-2">
              Find Your Solution
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
