"use client";

import { Check, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Superior Wear Protection",
    description:
      "Advanced additives create a strong protective film that minimizes friction and reduces engine wear, helping extend engine life.",
  },
  {
    title: "Outstanding Thermal & Oxidation Stability",
    description:
      "Engineered to withstand extreme temperatures, the oil resists oxidation and maintains its performance even under demanding conditions.",
  },
];

export default function Quality2() {
  return (
    <section className="bg-[#1A1A1A] py-16 md:py-20" id="product-line">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Heading */}
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="heading-white md:text-[32px]">
              Reliable Engine Protection
            </h2>
            <span className="mx-auto mt-3 mb-6 block h-[3px] w-[130px] bg-[#D8A657]" />

            <p className="content-white text-center max-w-[900px] mx-auto">
              BENZOL® Industries Engine Oils are engineered to provide consistent lubrication and
              advanced protection for critical engine components. Their carefully developed
              formulations support smooth and efficient engine operation, help reduce friction and
              wear, maintain engine cleanliness, and contribute to longer engine life and
              dependable performance under demanding driving conditions.
            </p>
          </div>

          {/* Video + content */}
          <div className="grid grid-cols-1 xl:grid-cols-[58fr_42fr] gap-10 xl:gap-16 items-stretch">
            {/* Left: video */}
            <div
              className="relative w-full min-h-[360px] overflow-hidden"
              data-aos="fade-right"
            >
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right: content */}
            <div data-aos="fade-left" data-aos-delay="150">
              <h3 className="heading-white font-bold text-2xl!">Engine Oil</h3>
              <hr className="border-t border-white/15 mt-4 mb-5" />

              <p className="content-white mb-6">
                Our premium engine oils use advanced lubricant technology to deliver exceptional
                engine protection, improved efficiency, and long-lasting performance.
              </p>

              <ul className="flex flex-col gap-5 mb-6">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#1A1A1A] mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="content-white">
                      <strong className="text-white font-semibold">{feature.title}</strong> -{" "}
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="content-white mb-8">
                Designed for modern engines, they help reduce friction and wear, maintain engine
                cleanliness, and ensure smooth, reliable operation even under demanding driving
                conditions.
              </p>

              <div className="flex items-center gap-3">
                <button className="rounded-full content-white bg-[#B38037] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 whitespace-nowrap">
                  Explore Engine Oils
                </button>
                <button
                  aria-label="Explore engine oils"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B38037] transition hover:bg-gray-100 shrink-0"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
