"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { PlayCircle } from "lucide-react";

export default function EngineProtection() {
  const features = [
    {
      title: "Professional Workflow",
      description: "Equipment designed to support smooth and efficient workshop operations."
    },
    {
      title: "Practical Design",
      description: "Solutions developed around the everyday needs of automotive professionals."
    },
    {
      title: "Complete Workshop Solutions",
      description: "A comprehensive range of equipment for modern vehicle service environments."
    }
  ];

  return (
    <section className="py-10 lg:py-20 relative overflow-hidden bg-[#171717]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[8px] lg:col-span-7 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-5" data-aos="fade-left">
            <h2 className="section-title text-white exo-2-font font-bold mb-6 pr-4 leading-tight">
              Smart Equipment. Efficient Workspaces.
            </h2>

            <div className="flex flex-col gap-6 mb-6 pr-4">
              <p className="inter-font text-[#E5E5E5] font-regular section-text leading-relaxed">
                See how Twin Busch equipment integrates into professional workshop environments. From vehicle lifting and servicing to tyre maintenance, our solutions are designed to create a more efficient, organized, and productive workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-[12px] px-5 py-4 w-full">
                  <img src="/moto/twin/i1.png" alt="Icon" className="w-auto h-auto shrink-0 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <p className="inter-font font-regular text-[#404040] section-text">
                    <span className="font-semibold text-[#000000] section-text">{feature.title}</span> - {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#" className="w-fit px-8">
              View Product
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
