"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Product360() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-[#262626]">
      <div className="custom-container flex flex-col items-center text-center">
        <h2 className="section-title text-white whitespace-nowrap mb-6" data-aos="fade-up">
          360° Product View
        </h2>

        <p
          className="body-text text-white max-w-[1186px] xl:max-w-[70%] mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Experience the engineering excellence of MOGESAN Pistons and
          Piston Rings through our immersive 360° interactive product view.
          Rotate each component from every angle to examine its precision
          machining, surface finish, structural design, and manufacturing
          quality. Explore every detail with confidence and discover why
          MOGESAN products are trusted in more than 80 countries for
          superior engine performance, durability, and reliability.
        </p>

        {/* Figma: Rectangle 21135 -> width 1394px, height 704px exactly
            at xl. aspect-video is kept as the fallback ratio on
            mobile/tablet where the 1394px spec doesn't apply. */}
        <div
          className="relative w-full max-w-[1394px] aspect-video xl:aspect-[1394/704] rounded-[30px] xl:rounded-[50px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}