"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-primary">
      <div className="custom-container">
        {/* Heading + description (left) / button (right) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 pb-8 md:pb-10 border-b border-white/[0.74]">
          <div className="max-w-[1165px] xl:max-w-[70%] min-[3800px]:max-w-[2400px]">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="section-title font-heading font-semibold text-white capitalize mb-4 md:mb-5"
            >
              360° Interactive Product View
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              className="body-text font-body font-normal text-white leading-relaxed"
            >
              Experience the quality and precision engineering of MKT
              Holdings, Inc. Air Suspension through our interactive 360°
              product view. Rotate the product to examine its design,
              construction, premium materials, and technical features.
              Discover the advanced engineering and manufacturing excellence
              behind every air suspension component before making your
              selection.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="shrink-0"
          >
            <Button variant="secondary">Explore in 360°</Button>
          </div>
        </div>

        {/* 360 video */}
        <div className="mt-10 md:mt-12 lg:mt-14">
          <div
            data-aos="zoom-in"
            data-aos-duration="900"
            className="relative w-full max-w-[1394px] min-[2560px]:max-w-[1750px] min-[3800px]:max-w-[2300px] mx-auto aspect-video rounded-[20px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
