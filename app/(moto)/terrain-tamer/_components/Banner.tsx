"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100svh] min-h-[500px] overflow-x-hidden overflow-y-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-x-hidden overflow-y-hidden">
        <DynamicVideoPlayer
          type="banner"
          className="
            absolute
            inset-0
            w-full
            h-full
            aspect-video
            object-cover
            banner-video-enter
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 overflow-x-hidden overflow-y-hidden">
        <div className="custom-container overflow-x-hidden overflow-y-hidden">
          <div className="max-w-[432px] transition-transform duration-500 ease-out hover:-translate-y-1">
            <h1
              className="hero-title font-normal text-white leading-tight mb-3"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="650"
              data-aos-easing="ease-out-cubic"
            >
              Built Tough. Ready for Adventure.
            </h1>

            <p
              className="section-text font-normal text-white max-w-[651px]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="800"
              data-aos-easing="ease-out-cubic"
            >
              Reliable 4WD parts built for strength, durability, and
              performance on every journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}