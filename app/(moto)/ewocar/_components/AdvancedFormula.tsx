"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function AdvancedFormula() {
  const bulletPoints = [
    "Advanced water-based formula for smooth and efficient polishing.",
    "Low-dust composition for a cleaner working environment.",
    "Smooth application with improved control during polishing.",
    "Reduced residue for easier and faster surface cleanup.",
    "Consistent performance throughout the polishing process.",
    "Professional-grade formulation for reliable detailing results.",
  ];

  return (
    <section
      id="advanced-formula"
      className="w-full py-16 md:py-20 lg:py-28 bg-[#020202] text-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Content Row: Tablet stacked layout kept up to 1500px, 30% | 70% from 1501px+ */}
        <div className="w-full flex flex-col min-[1501px]:flex-row gap-6 lg:gap-8 items-center">
          {/* Left Column: Copy, Formula Points, CTA (30% on screens > 1500px) */}
          <div className="w-full min-[1501px]:w-[30%] flex flex-col items-start gap-5" data-aos="fade-up">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] min-[3800px]:text-5xl font-bold leading-snug tracking-tight text-white"
            >
              Advanced Formula for Effortless Polishing
            </Typography>

            <Typography
              variant="p"
              className="text-sm leading-relaxed text-white/90 font-normal"
            >
              Ewocar Heavy Cut features an advanced water-based formula for smooth, efficient
              polishing. Its low-dust composition reduces residue, keeps the workspace clean, and
              ensures consistent performance with greater control.
            </Typography>

            {/* Bullet Points List with White Circle Indicators */}
            <ul className="flex flex-col gap-3 w-full pt-1 pb-2">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-2 shadow-sm" />
                  <p className="text-xs sm:text-sm text-white/95 font-secondary font-normal leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                text="Know More"
                href="#details"
                showIcon={true}
                variant="dark"
                iconVariant="white"
              />
            </div>
          </div>

          {/* Right Column: Video Container (70% on screens > 1500px) */}
          <div
            className="w-full min-[1501px]:w-[70%] relative shadow-2xl overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10"
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
        </div>
      </div>
    </section>
  );
}
