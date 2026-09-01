"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality2() {
  return (
    <section className="relative w-full bg-[#1A1A1A] py-16 md:py-24 overflow-hidden" id="product-line">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 items-center">
          {/* Left: Video */}
          <div className="relative w-full aspect-video overflow-hidden order-2 xl:order-1" data-aos="fade-right">
            {/* Placeholder checkerboard shown until a video is available */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#1A1A1A] text-lg">Video Clip 02</span>
            </div>
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <h2 className="heading-white text-[32px]! mb-3">Designed for Engine Performance</h2>
            <span className="block w-[40%] h-1 bg-primary mb-6" />

            <div className="flex flex-col gap-4 mb-8">
              <p className="content-white opacity-80">
                Yenmak pistons are precision-engineered to support efficient combustion, reliable
                engine operation, and long-term durability. Carefully controlled manufacturing
                processes ensure accurate dimensions, consistent quality, and dependable
                performance across demanding applications.
              </p>
              <p className="content-white opacity-80">
                Yenmak pistons are manufactured for precise fit, ensuring accurate installation and
                reliable engine operation. They are designed to withstand high temperatures and
                demanding combustion conditions, while optimized surface engineering helps reduce
                friction and support smoother piston movement. Built for long service life, they
                deliver durability and consistent performance throughout extended engine operation.
              </p>
            </div>

            <Button text="Explore Product" href="#" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}
