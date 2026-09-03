"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section
      className="relative w-full h-dvh pt-22 pb-4 md:pt-26 md:pb-6 xl:pt-30"
      data-hero>
      <div className="custom-container-wide h-full">
        <div
          className="relative w-full h-full overflow-hidden rounded-[24px] bg-[#0a1a2b]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true">
          {/* Background video using DynamicVideoPlayer */}
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover object-fill"
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-12 sm:px-12 md:px-[68px] xl:px-[88px] pb-10 md:pb-14 xl:pb-16">
            <div className="max-w-[476px] xl:max-w-[70%]">
              <h1
                className="banner-title font-bold text-white leading-tight mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100">
                Performance you can trust.
              </h1>
              <p
                className="section-text font-normal text-white mb-6 max-w-[510px] xl:max-w-[70%]"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250">
                Since 1872, delivering high-performance belt drives engineered
                in Germany and trusted worldwide.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400">
                <Button variant="primary">Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
