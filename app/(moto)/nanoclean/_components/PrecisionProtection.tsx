"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function PrecisionProtection() {
  const bulletPoints = [
    "Advanced molybdenum technology helps minimize metal-to-metal friction and supports consistent engine performance during everyday driving.",
    "Helps protect critical engine components against wear while supporting smoother operation under demanding driving conditions.",
    "Suitable for mineral, semi-synthetic, and synthetic engine oils, offering convenient compatibility across different vehicle maintenance requirements.",
  ];

  return (
    <section
      id="precision-protection"
      className="relative w-full py-16 md:py-24 overflow-hidden bg-white"
      style={{
        backgroundColor: "rgba(31, 103, 200, 0.03)",
      }}
    >
      {/* Background Watermark */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10"
        style={{
          backgroundImage: "url(/moto/nanoclean/bg3.webp)",
        }}
      />

      <div className="custom-container relative z-10 flex flex-col gap-10 md:gap-14 items-center">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 md:gap-4 w-full max-w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-[var(--color-primary)] underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
            Precision Engine Protection
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="font-semibold text-[22px] sm:text-[26px] md:text-[32px] text-[#202020]"
          >
            Keep Your Engine Running Smoothly for Longer
          </Typography>
        </div>

        <div className="w-full flex flex-col min-[1301px]:flex-row gap-8 min-[1301px]:gap-12 items-center">
          {/* Video Player */}
          <div
            className="w-full min-[1301px]:w-[58%] relative shadow-2xl overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[30px] border border-gray-200"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-full aspect-video bg-[#121c22] relative">
              <DynamicVideoPlayer
                type="short-2"
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
              color="dark"
              className="font-semibold md:font-bold leading-[1.6]"
            >
              NANOCLEAN T70 Engine Oil Additive is engineered to support
              dependable engine operation through advanced organic molybdenum
              technology. By reducing friction between moving metal surfaces, it
              helps minimize wear, maintain mechanical efficiency, and protect
              essential engine components. Its versatile formulation works with
              mineral, semi-synthetic, and synthetic engine oils, making it a
              practical addition to regular vehicle maintenance.
            </Typography>

            <ul className="flex flex-col gap-3.5">
              {bulletPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#404040]"
                >
                  <span className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-primary)] shrink-0 mt-2 min-[2500px]:mt-3.5 min-[3800px]:mt-5" />
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                text="Explore Product"
                href="#products"
                variant="outline-blue"
                className="!rounded-[8px] !px-7 !py-2.5 font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
