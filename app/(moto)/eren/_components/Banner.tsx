"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020320]">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-4 items-center">
          <div className="space-y-6 max-w-2xl">
            {/* Header Title */}
            <h1 className="barlowCondensed banner-title font-bold text-white">
              Precision Diesel Components for Reliable Performance
            </h1>

            <div>
              <Button text="Explore More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
