"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 min-[2100px]:py-28 min-[3800px]:py-40 relative overflow-hidden bg-[#1A1A1A] text-white">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 min-[2100px]:gap-14 min-[3800px]:gap-20 items-center mb-10 min-[2100px]:mb-16 min-[3800px]:mb-24">

          {/* Left: 360 Video Player */}
          <div className="w-full h-full xl:col-span-7 relative overflow-hidden flex flex-col gap-6" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full aspect-video object-cover rounded-[5px]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-5 justify-center" data-aos="fade-left">
            <h2 className="section-title text-white montserrat-font font-bold leading-tight">
              Precision You Can See From Every Angle
            </h2>

            <div className="text-white inter-font section-text font-regular tracking-normal leading-relaxed space-y-4 mb-4">
              <p>
                Take a closer look at the BendPak Ranger wheel balancer through an interactive 360° experience and discover the technology, engineering, and thoughtful design behind its professional performance. Explore the machine from every angle, from its robust construction and precision-machined shaft to its advanced sensors, intuitive controls, digital display, and accurate weight-placement system. Every component is engineered to deliver consistent balancing results while making operation faster, easier, and more efficient for technicians.
              </p>
              <p>
                Designed for professional tire and automotive service centers, the BendPak wheel balancer delivers a balance of accuracy, speed, and reliability. Its advanced features help technicians identify wheel imbalances quickly and achieve precise results with minimal effort, improving workshop productivity and customer service.
              </p>
            </div>

            <Button href="#" variant="primary" className="!w-fit !px-8 !rounded-none">
              View Product
            </Button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          <div className="bg-white border-2 border-[#FFDB00] text-black p-6 flex items-start gap-4">
            <div className="w-10 h-10 min-[2100px]:w-14 min-[2100px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 flex-shrink-0 flex items-center justify-center">
              <img src="/moto/bendpak/icon1.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
            <p className="inter-font leading-relaxed card-text text-[#000000]">
              <strong className="montserrat-font font-bold">Precision Balancing</strong> — Accurate measurement and weight placement for smoother, vibration-free performance.
            </p>
          </div>

          <div className="bg-white border-2 border-[#FFD100] text-black p-6 flex items-start gap-4">
            <div className="w-10 h-10 min-[2100px]:w-14   min-[2100px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 flex-shrink-0 flex items-center justify-center">
              <img src="/moto/bendpak/icon1.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
            <p className="inter-font leading-relaxed card-text text-[#000000]">
              <strong className="montserrat-font font-bold">Fast Cycle Times</strong> — Designed to complete each balancing operation quickly and efficiently, wheel balancer reduces unnecessary setup time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
