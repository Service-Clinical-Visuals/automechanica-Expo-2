"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product360() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Video */}
          <div className="order-2 xl:order-1 w-full relative aspect-video  overflow-hidden ">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Column: Text */}
          <div className="order-1 xl:order-2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="section-title barlowCondensed font-bold text-[#ffffff]">
                Precision Brake Pads for Confident Braking
              </h2>
              <div className="w-12 h-[3px] bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
            </div>

            <p className="section-text inter leading-relaxed text-[#ffffff] mb-6">
              Engineered to deliver reliable stopping power, consistent friction, and dependable performance, our brake pads are developed to meet the demanding requirements of modern braking systems. Designed for a wide range of automotive applications, they provide a balanced combination of braking efficiency, durability, and driving comfort. Each brake pad is manufactured with carefully selected friction materials and precision-controlled processes to achieve consistent performance and dependable fitment. The design focuses on maintaining stable friction characteristics across varying temperatures and operating conditions, helping provide smooth and controlled braking when it matters most.
            </p>
            
            <p className="section-text inter leading-relaxed text-[#ffffff] mb-10">
              From everyday urban driving to demanding highway and commercial applications, the brake pads are designed to perform reliably under repeated braking cycles. Their durable construction helps withstand heat, pressure, and continuous use while supporting long-lasting service performance.
            </p>

            <div className="self-start">
              <Button text="View Product" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
