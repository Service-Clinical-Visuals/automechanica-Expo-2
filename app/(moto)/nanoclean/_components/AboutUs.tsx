"use client";

import React from "react";
import Typography from "./Typography";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14 items-center">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 md:gap-4 w-full mx-auto"
          data-aos="fade-up"
        >
          <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-[var(--color-primary)] underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
            About Our Company
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="font-semibold text-[22px] sm:text-[26px] md:text-[32px] text-[#202020]"
          >
            Innovative Cleaning Solutions for Every Need
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#404040] w-full max-w-full min-[1031px]:max-w-[70%] mx-auto pt-1"
          >
            NANOCLEAN is a Polish family-owned company developing advanced chemical
            solutions for cleaning, disinfection, and maintenance. Combining
            innovative technologies with a commitment to quality and environmental
            responsibility, the company serves diverse industries with solutions
            designed to improve efficiency, hygiene, safety, and everyday
            performance.
          </Typography>
        </div>

        {/* Facility Image */}
        <div
          className="w-full overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[30px] border border-[#71717A] shadow-md"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/moto/nanoclean/about.webp"
            alt="NANOCLEAN Facility"
            className="w-full aspect-[16/9] md:aspect-[1620/662] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
