"use client";

import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

export default function About() {
  return (
    <section className="py-16 md:py-20 bg-[#0E0E0E]">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Top: text + images */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Left: heading, copy, small banner */}
            <div className="w-full lg:w-[38%] flex flex-col" data-aos="fade-right">
              <h2 className="text-white font-bold text-[32px] md:text-[36px] font-[var(--font-exo2)]">
                Quality Without Compromise
              </h2>
              <span className="mt-3 mb-6 h-[3px] w-[180px] bg-[#D8A657]" />

              <p className="content-white">
                BENZOL® Gold Performance is a leading name in the lubricant Industry.
                It offers a wide range of lubricants and grease products that caters to
                the demand of automotive, industrial, agricultural, transport, and mining
                sectors. Building on an experience spanning over two decades and
                research at our own laboratories, our team of qualified petroleum
                engineers work proactively to meet consumer needs and deliver quality
                products consistently. BENZOL® reaches over 70 countries across 5
                continents, supported by 200+ global partners.
              </p>

              <div className="mt-8 border border-white/10 overflow-hidden">
                <img
                  src="/moto/benzol-lubricants/about1.png"
                  alt="Benzol Gold Performance — Drive the change, go green"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: large feature image */}
            <div className="w-full lg:w-[62%]" data-aos="fade-left" data-aos-delay="150">
              <img
                src="/moto/benzol-lubricants/about2.png"
                alt="Benzol at the heart of every journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom: closing copy + CTA */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="content-white md:max-w-[820px]">
              BENZOL® upholds premium quality through EELQMS, ISO 9001, ISO 14001, and ISO 45001
              certifications, while advancing energy-efficient manufacturing, carbon-neutral
              initiatives, and a safe, healthy workplace across its Global Lubricant Industry
              plant, serving customers with trusted solutions worldwide.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button className="rounded-full bg-[#B38037] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 whitespace-nowrap">
                Learn More About Us
              </button>
              <button
                aria-label="Learn more"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B38037] transition hover:bg-gray-100 shrink-0"
              >
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
