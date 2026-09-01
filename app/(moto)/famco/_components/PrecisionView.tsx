"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-10 lg:py-20 relative overflow-hidden text-white" style={{ backgroundColor: "#282361" }}>
      <div className="custom-container relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-10 mb-10">
          <div className="lg:w-2/3">
            <h3 className="text-white font-semibold mb-2 rubik-font section-text">
              Gasket Solutions
            </h3>
            <h2 className="section-title text-white rubik-font font-semibold leading-tight">
              Reliable Gaskets For Efficient Engine Sealing Performance
            </h2>
          </div>
          <div className="lg:w-1/3 flex justify-start lg:justify-end">
            <Button href="#" variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-black font-medium transition-colors">
              Explore Product
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/50 mb-10"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left: 360 Video Player */}
          <div className="w-full h-full lg:min-h-0 aspect-video lg:col-span-7 relative overflow-hidden flex items-center justify-center bg-gray-100/10 rounded-[5px]" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 lg:col-span-5 justify-center" data-aos="fade-left">
            <div className="text-[#FFFFFF] inter-font section-text font-regular tracking-normal leading-relaxed space-y-6">
              <p>
                We Offer A Comprehensive Range Of High-Quality Gaskets Designed To Ensure Secure Sealing, Prevent Leakage, And Maintain Optimal Engine Performance. Manufactured Using Advanced Materials And Precision Engineering, Our Gaskets Provide Excellent Resistance To Heat, Pressure, And Harsh Operating Conditions.
              </p>
              <p>
                Built To Meet Modern Automotive Requirements, Our Solutions Support Durability, Efficiency, And Consistent Performance Across Various Vehicle Types And Engine Systems.
              </p>

              <h3 className="section-title font-semibold mt-4 mb-2 rubik-font">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1">➔</span>
                  <span className="text-[#FFFFFF] inter-font section-text font-regular">High-Quality Gasket Materials Ensuring Durability Under Extreme Temperature And Pressure Conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">➔</span>
                  <span className="text-[#FFFFFF] inter-font section-text font-regular">Designed For Precise Fitment Across Various Engine Types & Automotive Applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">➔</span>
                  <span className="text-[#FFFFFF] inter-font section-text font-regular">Prevents Leakage Of Oil, Gas, And Coolant For Efficient Engine Performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">➔</span>
                  <span className="text-[#FFFFFF] inter-font section-text font-regular">Manufactured Using Advanced Processes To Meet International Quality And Performance Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
