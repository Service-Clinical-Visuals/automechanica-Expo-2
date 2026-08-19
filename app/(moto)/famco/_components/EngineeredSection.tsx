"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-10 lg:py-20 relative overflow-hidden bg-[#F3F3F380]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1 lg:col-span-5" data-aos="fade-right">
            <h3 className="text-[#10276D] section-text font-semibold mb-2 rubik-font text-sm">
              Engineered Product Ecosystem
            </h3>
            <h2 className="section-title text-[#202020] rubik-font font-semibold mb-6 pr-4">
              Comprehensive Automotive Components For Modern Mobility
            </h2>
            <div className="flex flex-col gap-6 mb-8 pr-4">
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                We Provide A Wide Range Of High-Quality Automotive Components Engineered To Meet The Evolving Demands Of Modern Vehicles. From Core Engine Parts To Advanced Supporting Systems, Our Products Are Designed To Deliver Durability, Precision, And Consistent Performance Across Various Driving Conditions.
              </p>
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                With A Strong Focus On Innovation And Manufacturing Excellence, Our Solutions Ensure Reliability, Efficiency, And Compatibility For Passenger Cars, Commercial Vehicles, And Industrial Applications Worldwide.
              </p>
              <p className="inter-font text-[#404040] font-regular section-text leading-relaxed">
                A Wide Range Of Automotive Components Supporting Multiple Vehicle Systems Worldwide, Engineered For Durability, Precision, And Consistent Performance In Demanding Conditions.
              </p>
            </div>

            <Button href="#" variant="outline" className="w-fit !border-[#border: 1px solid #282361] !text-[#282361] hover:!bg-[#282361] hover:!text-white transition-colors">
              Explore Product
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[8px] order-1 lg:order-2 lg:col-span-7 bg-gray-200/50 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
