"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  "Precision-engineered gaskets ensure dependable sealing under extreme operating conditions.",
  "Premium materials deliver exceptional resistance against heat, oil, fuel, and pressure.",
  "Manufactured with tight tolerances for consistent fit & reliable sealing performance.",
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
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 xl:gap-16 items-center">
          {/* Text content */}
          <div data-aos="fade-right">
            <p className="text-primary font-bold mb-2">Precision Sealing Solutions</p>
            <h2 className="heading mb-6">
              Engineered Gaskets That Seal With Confidence
            </h2>

            <p className="content mb-6">
              Designed for demanding automotive and diesel fuel injection applications, our
              gasket solutions deliver exceptional sealing performance, durability, and
              precision. Manufactured using premium materials and advanced production processes,
              they withstand extreme temperatures, pressure variations, and harsh operating
              conditions while ensuring reliable leak prevention and long-lasting engine
              efficiency.
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
              text="Explore TPMS Service Kits"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-[15px]! font-bold rounded-md"
            />
          </div>

          {/* 360 Video */}
          <div className="relative w-full aspect-video" data-aos="fade-left">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
