"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality2() {
  return (
    <section className="relative w-full bg-[#262930] py-16 md:py-24 overflow-hidden" id="product-line">
      <Container className="relative z-10">
        <div className="border border-primary p-6 md:p-10 md:py-15">
          <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-8 items-center">
            {/* Left: Text content */}
            <div data-aos="fade-right">
              <h2 className="heading-white mb-6">
                Engineered for Precision Engagement
                <span className="inline-block align-middle h-1 w-24 bg-primary ml-4" />
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <p className="content-white opacity-80">
                  Every clutch kit is engineered for accurate fitment, reduced vibration, and
                  long-lasting durability. Manufactured under strict quality standards, it ensures
                  consistent performance across automotive and commercial applications. It delivers
                  smooth torque transfer through optimized friction materials that provide
                  consistent and reliable engagement, helping to maintain stable power delivery
                  even under heavy load conditions.
                </p>
                <p className="content-white opacity-80">
                  In addition, each component is designed to minimize wear and heat buildup,
                  contributing to improved efficiency and reduced maintenance needs over time. The
                  robust construction supports demanding operating environments, making it suitable
                  for both everyday driving and intensive commercial use. With enhanced durability
                  and precision engineering, the clutch kit provides dependable operation, smoother
                  gear transitions, and a longer overall service life.
                </p>
              </div>

              <Button text="Explore Product" href="#" variant="secondary" />
            </div>

            {/* Right: Video */}
            <div className="relative w-full aspect-video overflow-hidden" data-aos="fade-left">
              {/* Placeholder checkerboard shown until a video is available */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
                  backgroundSize: "40px 40px",
                  backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                  backgroundColor: "#fafafa",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#1A1A1A] text-lg">Video Clip 02</span>
              </div>
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
