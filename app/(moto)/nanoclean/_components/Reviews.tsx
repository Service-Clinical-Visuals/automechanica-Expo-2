"use client";

import React from "react";
import { Star } from "lucide-react";
import Typography from "./Typography";

interface Review {
  stars: number;
  quote: string;
  author: string;
  company: string;
}

const reviews: Review[] = [
  {
    stars: 4,
    quote:
      "“With NANOCLEAN® AIR, even high-mileage vehicles are effortless to treat. It leaves a long-lasting, clean scent. We have completely transitioned away from competing products.”",
    author: "Piotr Piszczatowski",
    company: "EuroWarsztat EURODIP AUTO SERVICE, Skrzynki",
  },
  {
    stars: 4,
    quote:
      "“We have been relying on the NANOCLEAN® line since 2018. Our customers trust that our AC cleaning and decontamination is executed to the highest standard.”",
    author: "Łukasz Nowak",
    company: "Tire & AC Service, Sejny",
  },
  {
    stars: 4,
    quote:
      "“The rapid action and yield of NANOCLEAN® AIR cut our servicing times and costs while delivering the world-class quality our dealership is known for across Poland.”",
    author: "Jan & Andrzej Garcarek",
    company: "Authorized Mercedes-Benz Dealership & Service",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="w-full py-16 md:py-24 bg-[#1F67C8] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10 md:gap-14 items-center">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 md:gap-4 w-full max-w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-white underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
            Partner & Workshop Reviews
          </span>

          <Typography
            variant="h2"
            color="white"
            className="font-bold text-[26px] sm:text-[30px] md:text-[34px] text-white"
          >
            Over 20,000 satisfied clients & partners
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-white/90 w-full xl:max-w-[70%] mx-auto pt-1"
          >
            Trusted by automotive technicians and fleet specialists, NANOCLEAN®
            delivers effective cleaning, lasting freshness, and reliable
            performance while improving service efficiency and customer
            satisfaction.
          </Typography>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-6 sm:p-7 shadow-xl flex flex-col justify-between text-left hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5 min-[1536px]:gap-2 min-[1920px]:gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 min-[1536px]:w-8 min-[1536px]:h-8 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:w-20 ${
                        i < rev.stars
                          ? "text-[#F2AE00] fill-[#F2AE00]"
                          : "text-[#F2AE00]"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[15px] sm:text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] italic leading-[1.6] text-[#404040] font-medium mb-6">
                  {rev.quote}
                </p>
              </div>

              <div>
                <div className="border-t border-dashed border-[#E5E5E5] mb-4 min-[3800px]:mb-8" />

                <h4 className="font-semibold text-[16px] sm:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] text-[#202020] mb-0.5 font-[var(--font-primary)]">
                  {rev.author}
                </h4>
                <p className="text-[13px] sm:text-[14px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-[#71717A] leading-tight">
                  {rev.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
