"use client";

import { ArrowRight, Check } from "lucide-react";
import Container from "./Container";

const features = [
  {
    title: "Quality",
    description:
      "We offer exclusive brands in original equipment quality, with a comprehensive range of genuine spare parts and workshop products. Our modern warehouse ensures fast, reliable, and consistent availability.",
  },
  {
    title: "Our Advantages",
    description:
      "We provide personalized customer service, fast order processing, OEM-quality products, international sales expertise, and reliable technical support from our experienced engineers.",
  },
  {
    title: "Fast and Flexible",
    description:
      "We provide fast, flexible, reliable, and efficient parts procurement tailored to workshops, retailers, and wholesalers, with simple ordering and reliable support.",
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-20 bg-[#0D0D0D]">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2
              className="heading-white"
            >
              SAROFIM GmbH
            </h2>
            <p className="content-white max-w-[1100px] mx-auto mt-4">
              Sarofim GmbH is a young German company headquartered in Ittlingen, in southern
              Germany. For several years, we have been distributing automotive parts, lubricants,
              additives, and other workshop products for industrial and technical applications.
              These products are developed and continuously improved by renowned research and
              development departments and bear the &quot;made-in-Germany&quot; seal. Sarofim
              delivers rigorously tested products backed by technical expertise and exceptional
              customer service.
            </p>
          </div>

          {/* Image + feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-10 items-stretch">
            {/* Left: image */}
            <div className="w-full" data-aos="fade-right">
              <img
                src="/moto/sarofim/about.png"
                alt="Sarofim automotive parts range"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: feature cards + CTA */}
            <div className="flex flex-col gap-2 items-center justify-center" data-aos="fade-left" data-aos-delay="150">
              <div className="flex flex-col gap-6 flex-1 items-center justify-center">
                {features.map((feature) => (
                  <div key={feature.title} className="border bg-[#191919] border-white/50 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0D0D0D]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <h3 className="content-white text-[22px]! font-semibold!">{feature.title}</h3>
                    </div>
                    <p className="content-white pl-9">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="navlink group inline-flex items-center gap-2 self-start rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
                Learn More About us
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
