"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeringExcellence() {
  return (
    <section className="w-full bg-secondary py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[2.6fr_1fr] gap-10 xl:gap-12 min-[2560px]:gap-20 items-center">
          {/* Video */}
          <div
            className="order-2 xl:order-1 relative w-full aspect-video rounded-md 2xl:rounded-lg overflow-hidden bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 xl:order-2" data-aos="fade-left">
            <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
              Engineering Excellence
            </span>
            <h2 className="section-title text-white exo2-font font-bold leading-tight mb-4 2xl:mb-6">
              Advanced Solutions for Automotive Care
            </h2>
            <p className="section-text text-white leading-relaxed mb-4 2xl:mb-6">
              Discover SENFINECO&apos;s innovative automotive solutions through a closer look at our product
              range, technology, and commitment to quality. Explore how our lubricants, additives, and
              maintenance products support the evolving needs of automotive professionals and vehicle owners.
            </p>
            <p className="section-text text-white leading-relaxed mb-7 2xl:mb-9">
              SENFINECO combines product innovation, quality, and performance to deliver reliable automotive
              maintenance solutions for workshops, service centers, and automotive professionals.
            </p>
            <Button href="#" variant="primary">
              Explore Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
