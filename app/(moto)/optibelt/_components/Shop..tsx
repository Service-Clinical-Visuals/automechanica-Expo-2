"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Shop() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24">
      <div className="custom-container-wide">
        <div className="bg-[#00355B] rounded-[24px] px-6 py-10 sm:px-10 md:px-14 xl:px-[52px] xl:py-[46px]">
          {/* Video + content — video left, content right, vertically centered, proportional widths from xl up */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-12">
            {/* Video — 2nd on mobile, 1st (left) on xl */}
            <div
              className="order-2 xl:order-1 group relative w-full xl:flex-[1.42] aspect-[926/520.52] rounded-2xl overflow-hidden bg-[#012440]"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
            </div>

            {/* Content wrapper — becomes invisible on mobile (children ordered independently),
                becomes a real flex column from xl up (children follow normal document order) */}
            <div
              className="contents xl:flex xl:flex-col xl:w-full xl:flex-1 xl:justify-center xl:gap-6 min-[1200px]:max-[1500px]:xl:gap-3"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              {/* Heading — 1st on mobile, normal order on xl */}
              <h3 className="order-1 xl:order-none section-title1 font-bold text-white min-[750px]:max-[1950px]:text-lg min-[1200px]:max-[1500px]:!text-sm">
                Engineered for Precision. Built for Performance.
              </h3>

              {/* Paragraphs — 3rd on mobile, normal order on xl */}
              <div className="order-3 xl:order-none flex flex-col gap-4 min-[1200px]:max-[1500px]:!gap-1.5">
                <p className="section-text font-normal text-white min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                  Optibelt automotive timing belts are engineered for
                  precise synchronization, reliable power transmission, and
                  smooth engine performance. Designed with advanced
                  materials and precision profiles, they deliver dependable
                  operation under demanding automotive conditions.
                </p>

                <p className="section-text font-normal text-white min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                  From everyday vehicles to high-performance applications,
                  Optibelt combines decades of belt-drive expertise with
                  innovative automotive solutions.
                </p>
              </div>

              {/* Button — 4th on mobile, normal order on xl */}
              <div
                className="order-4 xl:order-none"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <Button href="#" variant="primary">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}