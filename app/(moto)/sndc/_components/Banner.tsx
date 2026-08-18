"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[100svh]
        bg-[#05051a]
        overflow-hidden
      "
    >
      {/* Background Video */}
      <DynamicVideoPlayer
        type="banner"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          xl:max-w-[100%]
          xl:max-h-[100%]
          aspect-video
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(26,26,26,0.15)]" />
      <div className="absolute inset-0 bg-[rgba(102,102,102,0.1)]" />

      {/* Content */}
      <div
        className="
          custom-container
          relative
          z-10
          h-full
          flex
          flex-col
          justify-end
          pb-10
          sm:pb-14
          lg:pb-16
        "
      >
        <p
          className="banner-subtitle text-white font-medium mb-2 sm:mb-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Automotive HVAC Equipment Manufacturer
        </p>

        <h1
          className="
            banner-title
            text-white
            font-semibold
            leading-tight
            mb-6
            sm:mb-8
            max-w-[90%]
            sm:max-w-[500px]
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          HIGH AIR QUALITY AND THERMAL COMFORT
        </h1>

        <div data-aos="fade-up" data-aos-delay="350">
          <Button
            text="Explore HVAC Solutions"
            variant="outline"
            color="white"
            href="/products"
          />
        </div>
      </div>
    </section>
  );
}