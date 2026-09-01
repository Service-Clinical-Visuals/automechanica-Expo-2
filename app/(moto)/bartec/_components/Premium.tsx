"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  "Delivers accurate tire pressure monitoring for enhanced vehicle safety and driving confidence.",
  "Improves fuel efficiency through optimal tire pressure and reduced rolling resistance.",
  "Programmable TPMS sensors support fast installation & broad vehicle compatibility.",
  "Professional diagnostic & programming tools simplify tire service and maintenance.",
  "Engineered for OE-level quality, durability, and long-term operational reliability.",
  "Reliable wireless communication ensures consistent sensor performance and accuracy.",
];

export default function Premium() {
  return (
    <section className="relative w-full bg-[#fafafa] py-16 md:py-24 overflow-hidden" id="premium">
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
          {/* 360 Video */}
          <div className="relative order-2 xl:order-1 w-full aspect-video" data-aos="fade-right">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <p className="text-primary font-bold mb-2">Advanced TPMS Solutions</p>
            <h2 className="heading mb-6">
              Three Decades of Advancing Tire Pressure Monitoring Technology
            </h2>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-3 h-0.5 bg-primary mt-3 shrink-0" />
                  <span className="content">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              text="Find Your TPMS"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-primary! heading text-[16px]! font-bold rounded-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
