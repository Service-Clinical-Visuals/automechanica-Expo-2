"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="w-full h-[100dvh] pt-5 box-border">
      <div className="custom-container h-full">
        <div className="relative w-full h-full rounded-[30px] overflow-hidden">
          {/* Background Video */}
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-[40px] pb-10 sm:pb-16 lg:pb-[171px]">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
              className="hero-heading text-white mb-3 sm:mb-4 max-w-[90%] sm:max-w-[628px]"
            >
              Precision Wheel Service Solutions
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
              className="hero-text text-white max-w-[90%] sm:max-w-[820px]"
            >
              GIULIANO INDUSTRIAL S.p.A. delivers advanced equipment designed
              for precision, reliability, and professional performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}