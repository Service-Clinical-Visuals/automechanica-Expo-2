"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA]" id="service-kits">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 xl:gap-16 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <p className="text-primary font-bold mb-2">TPMS Service Kits</p>
            <h2 className="heading mb-6 leading-[120%]!">
              Everything Needed for Reliable TPMS Sensor Maintenance
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Keep every TPMS service accurate, safe, and dependable with premium-quality TPMS
                Service Kits engineered for professional tire maintenance. Each kit includes the
                essential replacement components required during tire servicing, helping restore
                proper sensor sealing, prevent air leaks, and extend TPMS sensor life.
              </p>
              <p className="content">
                Designed for broad OE compatibility, our service kits ensure quick installation,
                consistent performance, and long-lasting reliability for workshops, tire centers,
                and automotive professionals. Inspired by industry best practices, these kits
                simplify TPMS maintenance while supporting safer driving and optimal tire
                performance.
              </p>
            </div>

            <Button
              text="Explore TPMS Service Kits"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-[15px] font-bold rounded-md"
            />
          </div>

          {/* Right: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
