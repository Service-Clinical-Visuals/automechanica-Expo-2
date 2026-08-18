"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  image: string;
  tagLabel: string;
  tagIcon: string;
  date: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    image: "/moto/sndc/news1.png",
    tagLabel: "Event",
    tagIcon: "/moto/sndc/cal.png",
    date: "17 - 21 NOV 2025",
    title: "SNDC ECOCLIM will be present at Solutrans 2025",
    description:
      "At Solutrans 2025, SNDC ECOCLIM will present its refrigerant innovations, its partnership with Carrier Transicold and its solutions to accelerate the transition to sustainable road refrigeration.",
    linkText: "Read More",
    href: "/news/solutrans-2025",
  },
  {
    image: "/moto/sndc/news3.png",
    tagLabel: "Tutorial",
    tagIcon: "/moto/sndc/tutorial.png",
    date: "14 OCT 2025",
    title: "SNDC ECOCLIM will be present at Solutrans 2025",
    description:
      "Getting started, setup, and handling of R404A and R452A refrigerants.",
    linkText: "Watch Now",
    href: "/news/tutorial-rf-stations",
  },
  {
    image: "/moto/sndc/news2.png",
    tagLabel: "News and Events",
    tagIcon: "/moto/sndc/product.png",
    date: "",
    title: "SNDC ECOCLIM will be present at Solutrans 2025",
    description:
      "How can you enjoy air conditioning in the cab while the engine is at a standstill?",
    linkText: "Discover More",
    href: "/news/climapark",
  },
];

export default function NewsEvents() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="custom-container text-center">
        {/* Section Heading */}
        <div>
          <p
            className="eyebrow-text mb-4"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            News and Events
          </p>

          <h2
            className="section-title font-semibold mb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Explore Breakthrough Technologies, Product Launches and Industry
            Events from SNDC
          </h2>

          <p
            className="section-text max-w-[1165px] mx-auto mb-12"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            From breakthrough technologies to industry events and product
            innovations, explore the stories driving SNDC&apos;s commitment to
            smarter, more sustainable mobility.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 text-left">
          {newsItems.map((item, index) => (
            <div
              key={`${item.title}-${item.linkText}-${index}`}
              className="
                bg-white
                border
                border-[rgba(204,204,204,0.8)]
                rounded-[10px]
                overflow-hidden
                flex
                flex-col
                transition-colors
                duration-300
                hover:border-[#27337F]
                group
              "
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={200 + index * 100}
              data-aos-anchor-placement="top-bottom"
            >
              {/* Image */}
              <div className="p-[10px]">
                <div
                  className="
                    relative
                    w-full
                    aspect-[496/266]
                    rounded-[4px]
                    overflow-hidden
                    bg-[#F8F8F8]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-contain
                      p-1
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                {/* Tag + Date */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-[5px]
                      border
                      border-[#27337F]
                      px-[15px]
                      py-[5px]
                    "
                  >
                    <img
                      src={item.tagIcon}
                      alt={item.tagLabel}
                      width={12}
                      height={12}
                      className="w-3 h-3 object-contain"
                    />

                    <span className="tag-text text-[#27337F]">
                      {item.tagLabel}
                    </span>
                  </span>

                  {item.date && (
                    <span
                      className="
                        text-[#202020]
                        font-medium
                        text-[16px]
                        leading-[19px]
                        font-worksans
                      "
                    >
                      {item.date}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="
                    font-semibold
                    text-[16px]
                    leading-[19px]
                    text-[#27337F]
                    mb-4
                    font-worksans
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="section-text mb-6 flex-1">
                  {item.description}
                </p>

                {/* Link */}
                <Link
                  href={item.href}
                  className="
                    link-underline
                    text-[#202020]
                    inline-flex
                    items-center
                    gap-2
                    w-fit
                  "
                >
                  {item.linkText}

                  <ArrowRight
                    className="
                      w-[18px]
                      h-[18px]
                      text-[#D3111B]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}