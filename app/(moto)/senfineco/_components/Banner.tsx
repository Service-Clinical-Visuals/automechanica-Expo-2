"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end bg-black">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pb-24 md:pb-28 lg:pb-[18vh]">
        <div className="max-w-[90%] md:max-w-[55%] xl:max-w-[42%] text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title text-white leading-snug exo2-font font-bold mb-5 2xl:mb-8">
            Engineered for Performance. Designed for Protection.
          </h1>
          <Button href="#" variant="primary">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
