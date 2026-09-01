"use client";

import { Check } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  {
    title: "OEM Quality",
    desc: "Manufactured to meet high OE/OES performance standards",
  },
  {
    title: "Durable Construction",
    desc: "Designed for long-lasting operation and reliable torque transmission.",
  },
];

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#262930] overflow-hidden" id="engine-performance">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[65fr_35fr] gap-10 xl:gap-16 items-center">
          {/* Left: Video */}
          <div className="relative w-full aspect-video overflow-hidden order-2 xl:order-1" data-aos="fade-right">
            <div
              aria-hidden="true"
              className="absolute inset-0"
            />
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <h2 className="heading-white max-w-115 leading-[110%]! mb-6">
              Complete Performance. One Reliable Solution.
              <span className="inline-block align-middle h-1 w-24 bg-primary ml-2" />
            </h2>

            <p className="content-white opacity-80 mb-8">
              The E. SASSONE clutch kit combines precision-engineered components for efficient
              installation, optimal torque transfer, and dependable performance in demanding
              driving conditions.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </span>
                  <div>
                    <h3 className="content-white font-bold mb-1">{feature.title}</h3>
                    <p className="content-white opacity-80">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button text="Explore Product" href="#" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}
