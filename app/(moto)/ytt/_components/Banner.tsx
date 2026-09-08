"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video with AOS animation */}
      <DynamicVideoPlayer
        type="banner"
        data-aos="fade-right"
        data-aos-duration="1200"
        className="absolute inset-0 w-full h-full object-cover lg:object-fill"
      />

      {/* Overlay wash */}
      <div className="absolute inset-0 bg-[rgba(26,26,26,0.15)] pointer-events-none" />
      <div className="absolute inset-0 bg-[rgba(102,102,102,0.1)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 xl:pb-24">
        <div className="custom-container">
          <div className="max-w-[816px] xl:max-w-[70%] flex flex-col gap-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="hero-title font-bold text-white leading-tight">
              Where Advanced Engineering Meets Everyday Automotive Reliability
              And Performance
            </h1>

            <div data-aos="fade-up" data-aos-delay="500">
              <Button variant="white">Find Your Perfect Fit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
