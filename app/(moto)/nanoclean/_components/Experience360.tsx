"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Experience360() {
  const bulletPoints = [
    "Reduces friction and engine wear to support smoother operation and longer engine life.",
    "Creates a durable, heat-resistant protective layer on metal surfaces for enhanced component protection.",
    "Compatible with synthetic, semi-synthetic, and mineral engine oils for versatile maintenance applications.",
  ];

  return (
    <section
      id="engine-performance"
      className="relative w-full py-16 md:py-24 bg-[#1F67C8] overflow-hidden text-white"
      style={{
        backgroundImage: "url(/moto/nanoclean/bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="custom-container flex flex-col gap-10 md:gap-14 items-center">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 md:gap-4 w-full max-w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-white underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
            Engine Performance
          </span>

          <Typography
            variant="h2"
            color="white"
            className="font-semibold text-[22px] sm:text-[26px] md:text-[32px] text-white"
          >
            Enhance Engine Protection with Advanced Molybdenum Technology
          </Typography>
        </div>

        <div className="w-full flex flex-col min-[1301px]:flex-row gap-8 min-[1301px]:gap-12 items-center">
          {/* Video Player */}
          <div
            className="w-full min-[1301px]:w-[58%] relative shadow-2xl overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[30px] border border-white/20"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-full aspect-video bg-[#121c22] relative">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className="w-full min-[1301px]:w-[42%] flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              variant="p"
              color="white"
              className="font-semibold md:font-bold leading-[1.6]"
            >
              NANOCLEAN T70 Engine Oil Additive uses advanced OMX55 organic
              molybdenum technology to reduce friction, minimize engine wear, and
              support improved performance. Its ultra-low-friction formula helps
              protect metal components, enhance fuel efficiency, and extend
              engine life. Compatible with synthetic, semi-synthetic, and mineral
              oils, it provides protection for up to 5 litres of engine oil using
              a 25 ml dose.
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
        </div>
      </div>
    </section>
  );
}
