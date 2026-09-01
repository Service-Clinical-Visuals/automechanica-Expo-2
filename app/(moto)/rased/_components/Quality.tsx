"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  "Over 27,000 precision-engineered diesel injection components for diverse engine applications.",
  "Manufactured with advanced CNC technology for exceptional precision and durability.",
  "Extensive compatibility with leading diesel fuel injection pump manufacturers globally.",
];

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA] overflow-hidden" id="product">
      {/* Decorative background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1A1A1A 1px, transparent 1px), radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0, 24px 24px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-10 xl:gap-16 items-center">
          {/* Left: Video */}
          <div
            className="relative order-2 xl:order-1 w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <p className="text-primary font-bold mb-2">Product Ecosystem</p>
            <h2 className="heading mb-6">
              Every Component Crafted for Lasting Performance
            </h2>

            <p className="content mb-6">
              Discover an extensive portfolio of precision-engineered diesel fuel injection
              components developed to meet the demands of OEMs, aftermarket distributors, repair
              specialists, and remanufacturing companies. From traditional injection pump parts to
              advanced Common Rail and Electronic Unit Injector components, every product is
              manufactured with Italian engineering expertise to deliver exceptional durability,
              precision, and reliable performance across a wide range of diesel engine
              applications.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] mt-2.5 shrink-0" />
                  <span className="content">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              text="Find Your Product"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-[15px]! font-bold rounded-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
