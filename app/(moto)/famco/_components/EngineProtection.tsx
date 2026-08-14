"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-[#F3F3F380]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[5px] lg:col-span-7 bg-gray-100 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
            <span className="text-[#404040] font-semibold z-10 opacity-50 relative">Video 02</span>
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-left">
            <h3 className="text-[#10276D] section-text font-semibold mb-2 rubik-font text-sm">
              Dynamic Engineering Solutions
            </h3>
            <h2 className="section-title text-[#202020] rubik-font font-semibold mb-6 pr-4">
              Smart Components Built For Modern Vehicle Systems
            </h2>

            <div className="flex flex-col gap-6 mb-8 pr-4">
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                We Deliver A Diverse Selection Of Automotive Components Designed To Support Engine Cooling, Thermal Management, And System Efficiency. Our Product Lineup Is Developed With Precision Engineering And Modern Production Methods, Ensuring Consistent Performance And Durability Across Demanding Operating Environments.
              </p>
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                Focused On Innovation And Reliability, Our Solutions Are Created To Meet Evolving Automotive Standards While Providing Dependable Results For Both Passenger And Commercial Vehicle Applications.
              </p>
            </div>

            <ul className="flex flex-col gap-5 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#282361] mt-1 font-regular">➔</span>
                <span className="text-[#404040] font-regular inter-font section-text">
                  Wide Selection Of Components Supporting Cooling Systems And Thermal Management Performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#282361] mt-1 font-regular">➔</span>
                <span className="text-[#404040] inter-font font-regular section-text">
                  Developed Using Advanced Engineering Methods For Consistent Durability And Reliability
                </span>
              </li>
            </ul>

            <Button href="#" variant="outline" className="w-fit !border-[1px] !border-[#282361] !text-[#282361] hover:!bg-[#282361] hover:!text-white transition-colors">
              Explore Product
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
