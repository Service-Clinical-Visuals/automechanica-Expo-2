"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const Feature360 = () => {
  const features = [
    {
      title: "Vibration Absorption",
      desc: "Helps reduce drivetrain vibration and noise."
    },
    {
      title: "Torque Shock Reduction",
      desc: "Minimizes sudden loads and impacts."
    },
    {
      title: "Flexible Driveline Connection",
      desc: "Allows controlled movement between components."
    },
    {
      title: "Durable Construction",
      desc: "Built for reliable performance under demanding conditions."
    }
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-[var(--foreground)] text-white">
      <div className="custom-container px-4 xl:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Side: 360 Video */}
          <div className="order-2 xl:order-1 w-full" data-aos="fade-right" data-aos-duration="1000">
            <div className=" w-full aspect-video relative  rounded-xs overflow-hidden flex items-center justify-center">
               <DynamicVideoPlayer 
                 type="360"
                 className="absolute inset-0 w-full h-full object-cover"
               />
              
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 xl:order-2 w-full flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="font-bold exo2 section-title text-white mb-8">
              Flexible Connection. Reliable Performance.
            </h2>
            
            <p className="inter section-text leading-relaxed text-white mb-8">
              The Flex Disc / Guibo is designed to provide a flexible connection within the vehicle drivetrain while helping absorb vibration, compensate for minor misalignment, and reduce torque shock. Its durable construction supports smooth and reliable power transmission across demanding driving conditions.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-white text-[#111111] px-4 py-3 md:py-4  ">
                  <div className="relative w-5 h-5 shrink-0">
                    <img src="/moto/akkussan/Vector.png" alt="Check" className="w-full h-full object-contain" />
                  </div>
                  <p className="inter section-text text-black">
                    <strong className="font-bold">{feature.title}</strong> &mdash; {feature.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div>
              <Button href="#product">
                View Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature360;
