"use client";

import { Check } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Precision Engineering",
    text: "Developed with accuracy and attention to detail for dependable performance.",
  },
  {
    title: "Thermal Efficiency",
    text: "Optimized for effective cooling and efficient heat management performance.",
  },
  {
    title: "Durable Performance",
    text: "Built to deliver reliable operation, consistent performance, and long-term durability.",
  },
  {
    title: "Innovative Solutions",
    text: "Designed to meet the evolving demands of modern and future mobility.",
  },
  // {
  //   title: "Quality Assurance",
  //   text: "Tested to maintain consistent performance and dependable quality.",
  // },
];

export default function Premium() {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden bg-[#101820]"
      id="premium">
      <Container className="relative z-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-full lg:max-w-[60%]">
            <h2 className="heading-white mb-4">
              Explore Innovation From Every Angle
            </h2>
            <p className="content-white opacity-80">
              Discover KALE&apos;s advanced thermal management solutions through
              an immersive 360° experience, highlighting the engineering,
              precision, and innovative technology behind every product. Explore
              the quality, performance, and attention to detail built into every
              solution.
            </p>
          </div>

          <a
            href="#premium"
            className="shrink-0 text-[17px]! font-medium! heading-white inline-flex items-center justify-center whitespace-nowrap transition-opacity duration-300 active:scale-95 select-none cursor-pointer px-6 py-3 text-sm rounded-md bg-primary hover:opacity-90">
            Explore 360°
          </a>
        </div>

        <div className="h-px w-full bg-white/15 mb-12" />

        {/* Content row */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-center">
          {/* Left: description + checklist */}
          <div data-aos="fade-right" className="flex flex-col gap-8">
            {/* <p className="content-white opacity-80">
              Explore advanced thermal management solutions engineered to
              deliver reliable performance, efficient cooling, and long-term
              durability across a wide range of demanding automotive
              applications. Designed with precision and innovation, each
              solution ensures consistent performance, efficiency, and
              dependable operation in every environment.
            </p> */}

            <ul className="flex flex-col gap-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 text-white mt-1" />
                  <p className="content-white">
                    <span className="font-semibold">{feature.title}</span>{" "}
                    <span className="opacity-80">— {feature.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 360 video */}
          <div
            className="relative w-full aspect-[64/21] rounded-4xl overflow-hidden"
            data-aos="zoom-in">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
