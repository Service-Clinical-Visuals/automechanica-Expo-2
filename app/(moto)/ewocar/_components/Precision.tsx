"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Precision() {
  const features = [
    {
      title: "High Cutting Power",
      description: "Removes sanding marks down to P1000 grit.",
    },
    {
      title: "Excellent Gloss",
      description: "Delivers a refined finish despite aggressive cutting.",
    },
    {
      title: "Low-Dust Formula",
      description: "Keeps the polishing process clean and efficient.",
    },
  ];

  return (
    <section id="precision" className="w-full py-16 md:py-20 lg:py-28 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container">
        {/* Mobile & Tablet Heading (Visible up to 1500px, appears before the video) */}
        <div className="w-full mb-6 min-[1501px]:hidden" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[28px] font-bold leading-snug text-[#000000]"
          >
            Precision Cutting for a Flawless Finish
          </Typography>
        </div>

        {/* Content Row: Tablet stacked layout kept up to 1500px, 70% | 30% side-by-side from 1501px+ */}
        <div
          className="w-full flex flex-col min-[1501px]:flex-row gap-6 lg:gap-8 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left: Video Container (70% width on screens > 1500px) */}
          <div className="w-full min-[1501px]:w-[70%] relative shadow-2xl overflow-hidden rounded-2xl md:rounded-[2rem] border border-gray-300">
            <div className="w-full aspect-video bg-[#121c22] relative">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text Information (30% width on screens > 1500px) */}
          <div className="w-full min-[1501px]:w-[30%] flex flex-col items-start gap-5">
            {/* Desktop Heading (Hidden up to 1500px, shown from 1501px+) */}
            <Typography
              variant="h2"
              color="dark"
              className="hidden min-[1501px]:block text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] min-[3800px]:text-5xl font-bold leading-snug text-[#000000]"
            >
              Precision Cutting for a Flawless Finish
            </Typography>

            <Typography
              variant="p"
              className="text-sm leading-relaxed text-[#4B5563] font-normal"
            >
              Ewocar Heavy Cut is a professional-grade polishing compound engineered to remove
              heavy paint defects and sanding marks efficiently while delivering an impressive gloss
              finish. Its advanced formula ensures smooth application, consistent correction, and
              reliable results for professional detailers.
            </Typography>

            <div className="w-24 h-[2px] bg-black/20 my-1 rounded-full" />

            {/* Features List */}
            <ul className="flex flex-col gap-3.5 w-full">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#000000] font-normal leading-relaxed">
                    <strong className="font-bold">{feature.title}</strong> — {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                text="Learn More"
                href="#heavy-cut"
                showIcon={true}
                variant="dark"
                iconVariant="white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
