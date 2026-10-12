"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden" data-aos="fade-up">
      <div className="relative w-full h-full min-h-screen bg-[#0c1322] overflow-hidden">
        <DynamicVideoPlayer
          type="banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end pb-12 sm:pb-16 md:pb-24 min-[1031px]:pb-28">
          <div className="custom-container">
            <div
              className="text-left pointer-events-auto w-full min-[1031px]:w-[60%] xl:w-[50%] flex flex-col items-start gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typography
                variant="h1"
                color="white"
                className="font-semibold text-[26px] sm:text-[32px] md:text-[36px] min-[1031px]:text-[40px] leading-[1.3] text-white"
              >
                Excellence in Professional Chemistry & Innovation
              </Typography>

              <Button
                text="Explore Nanoclean"
                href="#products"
                variant="outline-white"
                className="!rounded-[8px] !px-7 !py-2.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
