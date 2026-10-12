"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function AdvancedCare() {
  const bulletPoints = [
    "Advanced organic molybdenum technology helps reduce friction and minimize wear across critical engine components.",
    "Protective lubrication supports smoother engine operation while helping maintain performance under demanding driving conditions.",
  ];

  return (
    <section
      id="advanced-care"
      className="relative w-full py-16 md:py-24 bg-[#1F67C8] overflow-hidden text-white"
    >
      {/* Background Graphic */}
      <div
        className="absolute inset-0 -scale-x-100 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url(/moto/nanoclean/bg.webp)",
        }}
      />

      <div className="custom-container relative z-10 flex flex-col min-[1301px]:flex-row gap-10 min-[1301px]:gap-14 items-center">
        {/* Text Content */}
        <div
          className="w-full min-[1301px]:w-[42%] flex flex-col gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-white underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
              Advanced Engine Care
            </span>

            <Typography
              variant="h2"
              color="white"
              className="font-semibold text-[22px] sm:text-[26px] md:text-[32px] text-white leading-tight"
            >
              Minimize Friction and Maximize Engine Efficiency
            </Typography>
          </div>

          <Typography
            variant="p"
            color="white"
            className="font-semibold md:font-bold leading-[1.6]"
          >
            NANOCLEAN T70 Engine Oil Additive is formulated with advanced organic
            molybdenum technology to support smoother engine operation and reduce
            friction between moving metal components. Designed for compatibility
            with synthetic, semi-synthetic, and mineral engine oils, it helps limit
            wear, improve mechanical efficiency, and provide lasting protection
            under demanding operating conditions.
          </Typography>

          <ul className="flex flex-col gap-3.5">
            {bulletPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-white"
              >
                <span className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-white shrink-0 mt-2 min-[2500px]:mt-3.5 min-[3800px]:mt-5" />
                <Typography variant="p" color="white" className="leading-relaxed">
                  {point}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button
              text="Explore Product"
              href="#products"
              variant="outline-white"
              className="!rounded-[8px] !px-7 !py-2.5 font-semibold"
            />
          </div>
        </div>

        {/* Video Player */}
        <div
          className="w-full min-[1301px]:w-[58%] relative shadow-2xl overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[30px] border border-white/20"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="w-full aspect-video bg-[#121c22] relative">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
