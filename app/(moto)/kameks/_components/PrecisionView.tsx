"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/moto/kameks/bg.png')" }}
    >
      <div className="custom-container relative z-10">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <div>
              <h3 className="text-[#F12535] font-semibold mb-3 poppins-font section-text">
                Performance Engineering
              </h3>
              <h2 className="section-title text-[#202020] poppins-font font-semibold leading-tight mb-2">
                Optimized Valve Timing for Maximum Engine Performance and Reliability
              </h2>
            </div>

            <div className="text-[#404040] font-regular inter-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                Our camshafts are engineered to deliver precise valve timing, ensuring smooth engine operation, improved power output, and consistent performance across a wide range of automotive applications. Designed to meet modern engine requirements, they contribute to enhanced fuel efficiency and reduced emissions.
              </p>
              <p>
                Manufactured using advanced materials and high-precision machining processes, each camshaft offers exceptional strength, durability, and wear resistance. Strict quality standards throughout production ensure reliable performance even under demanding operating conditions.
              </p>
            </div>

            <div className="pt-2">
              <Button href="#" variant="outline" className="!text-[#F12535] !border-[#F12535] !bg-transparent hover:!bg-[#F12535] hover:!text-white font-medium transition-colors px-8 py-2.5 rounded-[8px]">
                Explore Camshafts
              </Button>
            </div>
          </div>

          {/* Right: 360 Video Player */}
          <div className="lg:col-span-7 w-full h-full lg:min-h-0 aspect-video relative overflow-hidden flex items-center justify-center bg-gray-100/10 rounded-[5px]" data-aos="fade-left">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
