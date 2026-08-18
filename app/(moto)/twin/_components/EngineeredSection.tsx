"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  const cards = [
    {
      title: "Reliable Safety",
      description: "Designed with safety-focused lifting and locking systems.",
      icon: <img src="/moto/twin/i2.png" alt="Reliable Safety" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    },
    {
      title: "Robust Build",
      description: "Built with durable components for demanding workshop environments.",
      icon: <img src="/moto/twin/i3.png" alt="Robust Build" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    },
    {
      title: "Versatility",
      description: "Suitable for different vehicle types and professional servicing requirements.",
      icon: <img src="/moto/twin/i4.png" alt="Versatility" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    }
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#171717]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1 lg:col-span-6" data-aos="fade-right">
            <h2 className="section-title text-white exo-2-font font-bold mb-6 pr-4 leading-tight">
              Built for Performance. Designed for Efficiency.
            </h2>
            <div className="flex flex-col gap-6 mb-8 pr-4">
              <p className="inter-font text-[#E5E5E5] font-regular section-text leading-relaxed max-w-2xl">
                Twin Busch vehicle lifts are developed to provide dependable lifting performance across a wide range of workshop applications, helping technicians work with greater accessibility, confidence, and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-[12px] p-6 flex flex-col items-center text-center border-2 border-[#0F53CC]">
                  <div className="flex items-center gap-2 mb-4">
                    {card.icon}
                    <h4 className="exo-2-font font-semibold text-[#000000] card-title">{card.title}</h4>
                  </div>
                  <p className="inter-font font-regular text-[#404040] card-text leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#" className="w-fit">
              View Product
            </Button>
          </div>

          {/* Right Video Player */}
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-[8px] order-1 lg:order-2 lg:col-span-6 flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover rounded-[8px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
