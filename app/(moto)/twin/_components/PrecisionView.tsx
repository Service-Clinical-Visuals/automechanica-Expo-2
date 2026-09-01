"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { PlayCircle } from "lucide-react";

export default function PrecisionView() {
  const features = [
    "Heavy-Duty Steel Construction for Long-Term Durability and Reliable Workshop Performance",
    "High Load Capacity for Versatile Vehicle Lifting and Professional Workshop Applications",
    "Advanced Safety Locking System for Secure, Stable, and Confident Vehicle Lifting",
    "Smooth and Efficient Lifting Performance for Faster, Easier, and More Precise Vehicle Servicing",
    "Designed for Professional Workshop Environments with Practical, Durable, and Efficient Operation"
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#171717]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: 360 Video Player */}
          <div className="w-full aspect-video relative flex items-center justify-center rounded-[8px] overflow-hidden lg:col-span-6" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
            />

          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-8 lg:gap-8 lg:col-span-6" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <h2 className="section-title text-white exo-2-font font-bold leading-tight">
                Precision Lifting for Professional Workshops
              </h2>
              <p className="inter-font text-[#E5E5E5] font-regular section-text leading-relaxed">
                Twin Busch vehicle lifts combine robust construction, reliable lifting technology, and practical workshop design. Explore the lift from every angle and discover the engineering details built to support safe and efficient vehicle servicing.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src="/moto/twin/i1.png" alt="Check" className="w-auto h-auto shrink-0 mt-0.5 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="text-[#E5E5E5] inter-font text-sm leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Button href="#" className="font-medium px-8 py-2.5 rounded-[8px] text-sm">
                View Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
