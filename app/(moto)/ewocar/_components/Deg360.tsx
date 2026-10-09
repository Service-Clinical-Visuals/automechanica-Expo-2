"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Deg360() {
  return (
    <section
      id="360-experience"
      className="w-full py-16 md:py-20 lg:py-28 bg-[#020202] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#020202] to-[#020202] pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col items-center gap-10 lg:gap-14">
        {/* Center Header with SKT's xl:max-w-[70%] container pattern */}
        <div
          className="flex flex-col items-center text-center gap-4 w-full md:w-[90%] xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-[28px] min-[3800px]:text-5xl font-bold tracking-tight"
          >
            Explore Ewocar Heavy Cut in 360°
          </Typography>

          <Typography
            variant="p"
            className="text-sm sm:text-base lg:text-[16px] text-gray-300 leading-relaxed font-normal"
          >
            Discover Ewocar Heavy Cut from every angle. This professional-grade, water-based
            polishing compound delivers powerful paint correction, removes sanding marks down
            to P1000 grit, and produces an impressive high-gloss finish with minimal dust for
            clean, consistent results.
          </Typography>
        </div>

        {/* Video Container (Strictly following SKT's verified xl:max-w-[80%] and aspect-video pattern) */}
        <div
          className="w-full relative xl:max-w-[80%] mx-auto shadow-2xl overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10"
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
      </div>
    </section>
  );
}
