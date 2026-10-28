"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section
      id="banner-section"
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#0A0D36] flex flex-col justify-end"
    >
      {/* Background Dynamic Video with Ball Joint/Bearing Animation */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Banner Content Container using global custom-container */}
      <div className="relative z-10 w-full custom-container px-4 sm:px-6 md:px-8 xl:px-25 pb-12 sm:pb-16 md:pb-28">
        <div className="max-w-[85%] xl:max-w-[70%]">
          {/* Main Hero Headline using global banner-title class */}
          <h1
            className="banner-title font-semibold text-white bricolage-font mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Advanced Solutions for Reliable
            <br className="hidden sm:block" />
            Performance
          </h1>

          {/* Action Button using global Button component and btn-text */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <Button href="#products" variant="white-outline">
              Explore Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
