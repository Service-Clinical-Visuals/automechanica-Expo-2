import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Tested() {
  const points = [
    "Advanced automated production lines for consistent precision and repeatability across high-volume manufacturing.",
    "Comprehensive multi-stage quality inspection system, including in-process checks, dimensional verification, and final validation at every critical step.",
    "High-temperature and durability testing for reliability under extreme operating conditions, simulating real-world engine stress, thermal cycling, and long-term usage to ensure consistent performance in demanding environments."
  ];

  return (
    <section className="py-24 bg-[#18181b]" id="tested">
      <div className="custom-container px-6 xl:px-12">
        <div className="flex flex-col xl:grid xl:grid-cols-12  items-center gap-8 xl:gap-10">
          
          {/* Left Video */}
          <div className="w-full order-2 xl:order-1 xl:col-span-6  aspect-video  relative rounded-lg overflow-hidden bg-white/5 flex items-center justify-center shrink-0 mt-8 xl:mt-0">
             <DynamicVideoPlayer type="short-2" />
            
          </div>

          {/* Right Content */}
          <div className="w-full order-1 xl:order-2 xl:col-span-6  space-y-6">
            <h2 className="exo2 section-title font-bold text-white leading-tight">
              Built with Precision. Tested for Performance.
            </h2>
            
            <p className="inter section-text text-white leading-relaxed">
              From advanced production technologies to rigorous quality inspections, every stage is carefully controlled to ensure consistent quality, reliable ignition, and dependable performance.
            </p>

            <hr className="border-white/40 my-6" />

            <div className="space-y-5">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/moto/ukde-muhendislik/hand.png" alt="Point" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
                  <p className="inter section-text text-white leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button>
                View Product
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
