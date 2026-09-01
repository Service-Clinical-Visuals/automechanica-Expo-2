"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  const features = [
    {
      title: "Built for Reliable Sealing",
      desc: "Enhanced sealing strength and durability",
      icon: <img src="/moto/avortex/i1.png" alt="Built for Reliable Sealing" className="precision-icon object-contain" onError={(e) => e.currentTarget.src = "/moto/avortex/abt1.png"} />
    },
    {
      title: "Precision Manufacturing",
      desc: "Accurate dimensions for consistent fitment",
      icon: <img src="/moto/avortex/i2.png" alt="Precision Manufacturing" className="precision-icon object-contain" onError={(e) => e.currentTarget.src = "/moto/avortex/abt1.png"} />
    },
    {
      title: "Reliable Engine Sealing",
      desc: "Designed for long-lasting performance",
      icon: <img src="/moto/avortex/i3.png" alt="Reliable Engine Sealing" className="precision-icon object-contain" onError={(e) => e.currentTarget.src = "/moto/avortex/abt1.png"} />
    },
    {
      title: "OEM Quality Standards",
      desc: "Built to meet demanding automotive Trends.",
      icon: <img src="/moto/avortex/i4.png" alt="OEM Quality Standards" className="precision-icon object-contain" onError={(e) => e.currentTarget.src = "/moto/avortex/abt1.png"} />
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#121212]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left: 360 Video Player */}
          <div className="w-full aspect-video relative flex items-center justify-center rounded-[2px] overflow-hidden order-2 lg:order-1 lg:col-span-6 bg-gray-100" data-aos="fade-right">
            {/* Note: Kept dynamic video player as requested, wrapped to maintain layout */}
            <DynamicVideoPlayer
              type="360"
              className="absolute aspect-video inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-8 lg:gap-8 order-1 lg:order-2 lg:col-span-6" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <h2 className="section-title text-white exo-2-font font-bold leading-tight">
                Built for Reliable Sealing
              </h2>
              <p className="inter-font text-white font-regular section-text leading-relaxed">
                Advanced materials, accurate dimensions, and durable manufacturing ensure dependable performance across demanding engine applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white border-3 border-[#27226D] p-4 flex gap-3 rounded-[2px] text-left">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-[#000000] font-semibold exo-2-font card-title leading-none">{feature.title}</h3>
                    <p className="text-[#111111] inter-font font-regular card-text">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <Button href="#" className="">
                View Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
