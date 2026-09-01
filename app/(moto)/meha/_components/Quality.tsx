"use client";

import { Check } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  {
    title: "Advanced Production:",
    desc: "Our production includes metal processing, rubber technologies, surface finishing, vulcanization, assembly, and packaging, ensuring high-quality and durable products.",
  },
  {
    title: "Quality & Customer Service:",
    desc: "Products are tested according to international standards, while 24/7 customer support ensures reliable pre-sales and post-sales service.",
  },
];

const stats = [
  { icon: "/moto/meha/quality1/1.png", label: "30+ Export Countries" },
  { icon: "/moto/meha/quality1/2.png", label: "Product Range Available" },
  { icon: "/moto/meha/quality1/3.png", label: "Production Area" },
  { icon: "/moto/meha/quality1/4.png", label: "Production Capacity" },
];

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0d1117] overflow-hidden" id="engine-performance">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-10 xl:gap-16 items-center mb-14">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <h2 className="heading-white mb-6">Advanced Production, Trusted Quality</h2>

            <p className="content-white mb-8">
              Meha Automotive is a leading manufacturer and wholesaler in the automotive spare
              parts sector, specializing in high-quality rubber and metal products under the Meha
              brand. With a product range of 12,000+ references, the company delivers reliable
              and cost-effective automotive solutions, supported by fast shipping and professional
              service for customers across Turkey and worldwide.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <Check size={20} strokeWidth={5} className="text-white shrink-0" />
                  <p className="content-white">
                    <span className="font-bold!">{feature.title}</span> {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button text="View Product" href="#" variant="secondary" className="content-white" />
          </div>

          {/* Right: Video */}
          <div className="relative w-full aspect-video overflow-hidden rounded-4xl" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white flex flex-col items-center justify-center text-center gap-3 py-8 px-4"
            >
              <img src={stat.icon} alt="" aria-hidden="true" className="w-10 h-10 object-contain" />
              <h3 className="subheading font-semibold!">{stat.label}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
