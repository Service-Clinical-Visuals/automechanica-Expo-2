"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Experience() {
  return (
    <section className="relative w-full py-16 md:py-20 xl:py-24 bg-[#1C1C1C] overflow-x-hidden overflow-y-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 overflow-x-hidden overflow-y-hidden"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-offset="0"
      >
        <img
          src="/moto/terrain/bg.jpg"
          alt=""
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#1C1C1C]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 custom-container flex flex-col items-center gap-12 xl:gap-16 overflow-x-hidden overflow-y-hidden">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[900px] overflow-x-hidden overflow-y-hidden">
          <h2
            className="section-title font-semibold text-white leading-tight"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
          >
            360° Product Experience
          </h2>

          <p
            className="section-text font-normal text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
            data-aos-easing="ease-out-cubic"
          >
            Explore Terrain Tamer&apos;s 4WD parts from every angle with an
            interactive 360° view. Discover the design, engineering, and
            build quality behind components developed for demanding
            off-road conditions.
          </p>
        </div>

        {/* 360 Video */}
        <div
          className="relative w-full max-w-[1200px] aspect-video rounded-[42px] overflow-x-hidden overflow-y-hidden bg-[#0d0d0d] group"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="550"
          data-aos-easing="ease-out-cubic"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}