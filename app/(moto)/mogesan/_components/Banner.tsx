"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      <div className="custom-container h-full flex flex-col justify-center pt-[102px] pb-[15px] xl:pb-[26px]">
        <div className="relative w-full h-full rounded-2xl xl:rounded-[16px] overflow-hidden border border-white/30 opacity-0 animate-scale-in [animation-delay:200ms]">
          <div className="relative w-full h-full aspect-video">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[#1A1A1A]/15 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 xl:px-[120px] pb-10 md:pb-14 xl:pb-[103px]">
            <h1 className="hero-title text-white max-w-[711px] mb-4 opacity-0 animate-fade-up [animation-delay:700ms]">
              Reliable Engine Solutions For Global Markets
            </h1>
            <p className="hero-text text-white max-w-[808px] opacity-0 animate-fade-up [animation-delay:900ms]">
              Manufacturing high-quality engine pistons, cylinder liners, and
              piston rings engineered for durability, reliability, and
              superior engine performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}