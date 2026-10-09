"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen h-[100dvh] bg-[#020202] overflow-hidden">
      {/* Full-screen Dynamic Banner Video Player */}
      <DynamicVideoPlayer
        type="banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content aligned cleanly at bottom left with 70% width across all wide/4K screens */}
      <div className="custom-container relative h-full flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 lg:pb-24 min-[2500px]:pb-36 min-[3500px]:pb-44 z-20">
        <div
          className="text-left w-full lg:w-[70%] xl:w-[70%] min-[2500px]:w-[70%] min-[3500px]:w-[70%] max-w-[70%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typography
            variant="h1"
            color="white"
            className="text-3xl sm:text-4xl lg:text-[40px] min-[2500px]:text-6xl min-[3500px]:text-7xl min-[3800px]:text-8xl font-semibold leading-[1.2] min-[2500px]:leading-tight mb-4 min-[2500px]:mb-8 text-white w-full"
          >
            Professional quality.
            <br />
            Global trust.
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="mb-8 min-[2500px]:mb-12 leading-relaxed text-sm sm:text-base min-[2500px]:text-3xl min-[3500px]:text-4xl text-gray-200 font-normal w-full"
          >
            Ewocar delivers professional-grade detailing solutions, engineered for
            superior paint correction, lasting protection, and exceptional finishes worldwide.
          </Typography>

          <div className="min-[2500px]:scale-125 min-[3500px]:scale-150 min-[2500px]:origin-left">
            <Button
              text="Explore Solutions"
              href="#products"
              showIcon={true}
              variant="dark"
              iconVariant="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
