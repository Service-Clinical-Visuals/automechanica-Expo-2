"use client";

import { Check, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Modern Formulation Technology",
    description:
      "Advanced formulations developed for modern engine requirements, delivering reliable lubrication and protection.",
  },
  {
    title: "Consistent Performance",
    description:
      "Provides dependable lubrication and stable performance across varying driving conditions.",
  },
  {
    title: "Versatile Applications",
    description:
      "Suitable for passenger cars, commercial vehicles, and modern automotive applications.",
  },
];

export default function Quality2() {
  return (
    <section className="bg-[#1C1C1C] py-16 md:py-20" id="product-line">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Heading */}
          <div className="text-center" data-aos="fade-up">
            <h2
              className="heading-white"
            >
              Engineered For Reliable Performance
            </h2>

            <p className="content-white text-center max-w-[1100px] mx-auto mt-4">
              Sarofim GmbH Engine Oils combine carefully selected base oils and advanced
              formulation technology to deliver consistent performance for a wide range of modern
              vehicles. Designed to meet demanding lubrication requirements, they provide
              dependable protection while supporting engine cleanliness, efficiency, and smooth
              operation.
            </p>
          </div>

          <hr className="border-t border-white/10 mt-10 mb-10" />

          {/* Video + content */}
          <div className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-10 xl:gap-16 items-stretch">
            {/* Left: video */}
            <div
              className="relative w-full min-h-[360px] overflow-hidden"
              data-aos="fade-right"
            >
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right: content */}
            <div data-aos="fade-left" data-aos-delay="150">
              <h3 className="heading-white font-bold text-[32px]!">Key Features</h3>
              <hr className="border-t border-white/15 mt-4 mb-5" />

              <p className="content-white mb-6">
                Sarofim GmbH Engine Oils are developed using modern formulation technologies to
                meet the evolving demands of today&apos;s engines.
              </p>

              <ul className="flex flex-col gap-5 mb-6">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <span className="flex h-4 w-4 shrink-0 mt-1 items-center justify-center rounded-full bg-white text-[#0D0D0D] mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="content-white text-[15px] leading-[24px]">
                      <strong className="text-white font-semibold">{feature.title}</strong> –{" "}
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="border-t border-white/15 mb-6" />

              <p className="content-white mb-8">
                Designed for consistent performance across diverse driving conditions, these
                advanced lubricants help minimize friction and wear while protecting essential
                engine components.
              </p>

              <button className="navlink group flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
                View Specifications
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
