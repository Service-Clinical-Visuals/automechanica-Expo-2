"use client";

import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="bg-[#1C1C1C] py-16 md:py-20">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px] flex flex-col items-center">
          {/* Header row */}
          <div
            className="w-full flex flex-col md:flex-row md:items-center md:justify-between! gap-6 mb-6"
            data-aos="fade-up"
          >
            <div>
              <h2
                className="text-white font-bold text-[28px] md:text-[32px]"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                360° Engine Oil Experience
              </h2>
              <p className="text-white/70 text-[15px] leading-[22px] max-w-[760px] mt-4">
                Discover Sarofim GmbH Engine Oils through an immersive 360° product experience.
                Explore the packaging, design, labeling, and key details from every angle while
                discovering the quality and engineering behind our lubricant solutions.
              </p>
            </div>

            <button className="group flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover whitespace-nowrap shrink-0">
              View 360° Experience
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-10" />

          {/* 360 video / placeholder */}
          <div
            className="relative w-[80%] aspect-video overflow-hidden"

            data-aos="fade-up"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
