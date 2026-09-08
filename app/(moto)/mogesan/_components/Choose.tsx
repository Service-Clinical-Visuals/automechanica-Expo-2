"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Choose() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-[#262626]">
      <div className="custom-container">
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 pb-8 xl:pb-[41px] mb-10 xl:mb-[50px] border-b border-white/24"
          data-aos="fade-up">
          <div className="w-full xl:max-w-[70%]">
            <h2 className="section-title text-white mb-4 xl:mb-6">
              Advanced Engineering Excellence
            </h2>
            <p className="body-text text-white">
              At MOGESAN, every piston and piston ring is engineered with
              precision to withstand the toughest engine operating conditions.
              Our advanced manufacturing processes, strict quality inspections,
              and continuous product development ensure every component delivers
              consistent performance, maximum reliability, and long-term
              durability.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button href="#" circleColor="#FFFFFF" iconColor="#BF1E2E">
              Why Choose MOGESAN
            </Button>
          </div>
        </div>

        {/* Figma: Rectangle 21135 -> width 1394px, height 704px exactly
            at xl. aspect-video is kept as the fallback ratio on
            mobile/tablet where the 1394px spec doesn't apply. */}
        <div
          className="relative w-full max-w-[1394px] mx-auto aspect-video xl:aspect-[1394/704] rounded-[30px] xl:rounded-[50px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          data-aos="zoom-in"
          data-aos-delay="100">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover object-fill"
          />
        </div>
      </div>
    </section>
  );
}
