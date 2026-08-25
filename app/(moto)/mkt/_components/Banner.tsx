"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full pt-2">
      <div className="wide-container">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative w-full aspect-video h-[calc(100svh-var(--header-h,96px)-24px)] md:h-[calc(100svh-var(--header-h,112px)-32px)] rounded-[20px] md:rounded-[30px] overflow-hidden bg-[#05051a]"
        >
          {/* Background video */}
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-8 md:px-10 lg:px-[45px] pb-8 sm:pb-10 md:pb-14 lg:pb-16">
            <div className="max-w-[677px] lg:max-w-none">
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                className="hero-title font-heading font-semibold text-white capitalize leading-tight mb-3 md:mb-4 lg:whitespace-nowrap"
              >
                Precision Suspension Solutions
              </h1>

              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="450"
                className="hero-text font-body font-normal text-white mb-5 md:mb-6 leading-relaxed max-w-[677px]"
              >
                Premium shock absorbers and suspension systems engineered for
                superior comfort, stability, and reliable performance.
              </p>

              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <Button variant="secondary">Explore Products</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
