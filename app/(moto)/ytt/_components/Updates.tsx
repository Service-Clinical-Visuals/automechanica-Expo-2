"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface UpdateItem {
  thumbnail: string;
  title: string;
  date: string;
  detailImage: string;
  detailTitle: string;
  detailText: string;
}

const updates: UpdateItem[] = [
  {
    thumbnail: "/moto/ytt/u1.png",
    title: "We've Moved To Our New 32,000...",
    date: "8.9.2026",
    detailImage: "/moto/ytt/u1.png",
    detailTitle: "We've Moved To Our New 32,000 M² Factory!",
    detailText:
      "Our New, Modern Spare Parts Manufacturing Plant Has Moved To A 32,000 M² Area. This New Facility, Equipped With The Latest Technology, Further Enhances Our Company's Capacity To Provide Automotive Spare Parts Services Worldwide. Our Ability To Respond Quickly And Effectively To Customer Demands Is Strengthened By Our Expanded Capacity. The New Factory Also Allows Us To Strengthen Our Logistics Network.",
  },
  {
    thumbnail: "/moto/ytt/u2.png",
    title: "The Henn Connector...",
    date: "26.5.2027 - 29.5.2027",
    detailImage: "/moto/ytt/u2.png",
    detailTitle: "The Henn Connector Assembly Unit Has Been Commissioned.",
    detailText:
      "The New Assembly Unit Is Equipped With High-Precision Automation Systems And Modern Equipment. This Is Expected To Significantly Improve Both Efficiency And Quality In Connector Assembly Processes. Maintaining High Standards At Every Stage Of The Production Process, The Unit Will Enable Faster And More Reliable Assembly Of YTT Automotive's Products.",
  },
  {
    thumbnail: "/moto/ytt/u3.png",
    title: "Automechanika Dubai",
    date: "08.09.2026 - 12.09.2026",
    detailImage: "/moto/ytt/u3.png",
    detailTitle: "YTT Automotive To Exhibit At Automechanika Frankfurt 2026",
    detailText:
      "We Are Excited To Announce That YTT Automotive Will Be Exhibiting At Automechanika Frankfurt 2026, The World's Leading Trade Fair For The Automotive Aftermarket, Taking Place From 8–12 September 2026 In Frankfurt, Germany. The Event Brings Together Thousands Of Industry Professionals, Manufacturers, Distributors, And Mobility Experts From Around The Globe To Explore The Latest Innovations Shaping The Future Of Automotive Technology.",
  },
];

export default function Updates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = updates[activeIndex];

  return (
    <section className="w-full py-12 md:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 md:gap-10 xl:gap-12">
        
        {/* Heading */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="eyebrow font-bold text-[#DA0812]">Inside YTT</span>
          <h2 className="section-title font-bold text-[#202020] leading-tight">
            Stories Driving Our Journey Forward
          </h2>
          <p className="section-text font-normal text-[#404040] w-full text-xs sm:text-sm md:text-base">
            Stay connected with the latest from YTT Automotive. Explore product
            launches, international exhibitions, manufacturing milestones,
            technology advancements, and company news as we continue expanding
            our global presence and delivering innovative solutions for the
            automotive aftermarket.
          </p>
        </div>

        {/* List + featured panel */}
        <div className="flex flex-col [@media(min-width:1051px)]:flex-row gap-6 md:gap-8 xl:gap-10 w-full">
          
          {/* List Section */}
          <div className="w-full [@media(min-width:1051px)]:flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              {updates.map((item, i) => {
                const isActive = activeIndex === i;

                return (
                  <div key={item.title} className="flex flex-col gap-3">
                    {/* Item Button with Smooth Red Border Hover Effect */}
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      data-aos="fade-right"
                      data-aos-duration="600"
                      data-aos-delay={100 + i * 100}
                      className={`group flex items-center gap-3 sm:gap-4 bg-white rounded-[10px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] p-3 sm:p-4 text-left transition-colors duration-300 ease-in-out hover:border-[#DA0812] ${
                        isActive
                          ? "border-2 border-[#DA0812]"
                          : "border border-transparent"
                      }`}
                    >
                      {/* Thumbnail Image */}
                      <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0 rounded-[6px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Text Container */}
                      <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                        <h3 className="card-title font-bold text-[#212121] capitalize truncate text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <span className="section-text font-normal text-[#404040] capitalize text-xs sm:text-sm">
                          {item.date}
                        </span>
                      </div>

                      {/* Red Icon Button */}
                      <div className="flex-shrink-0 w-8 h-8 sm:w-[46px] sm:h-[46px] rounded-full bg-[#DA0812] flex items-center justify-center">
                        <ArrowRight
                          size={18}
                          strokeWidth={2.5}
                          color="#FFFFFF"
                          className={`sm:w-5 sm:h-5 transition-transform duration-300 ${
                            isActive
                              ? "[@media(max-width:1050px)]:rotate-90"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Inline Mobile/Tablet Detail View */}
                    {isActive && (
                      <div 
                        data-aos="fade-up"
                        data-aos-duration="400"
                        className="block [@media(min-width:1051px)]:hidden bg-white border border-[rgba(204,204,204,0.8)] rounded-[10px] p-4 sm:p-5 flex flex-col justify-between my-1"
                      >
                        <div>
                          <div className="group relative w-full aspect-[16/9] sm:aspect-[890/284] rounded-[10px] overflow-hidden border border-[rgba(204,204,204,0.8)] mb-4 cursor-pointer">
                            <Image
                              src={item.detailImage}
                              alt={item.detailTitle}
                              fill
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
                            />
                          </div>

                          <div className="flex flex-col gap-3">
                            <h3 className="card-title font-bold text-[#212121] capitalize text-base sm:text-lg">
                              {item.detailTitle}
                            </h3>
                            <p className="section-text font-normal text-[#404040] capitalize text-xs sm:text-sm">
                              {item.detailText}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link
                            href="#"
                            className="link-text font-bold text-[#E30613] underline w-fit tracking-tight inline-flex items-center gap-2 text-sm"
                          >
                            Read More
                            <ArrowRight size={18} strokeWidth={2} color="#E30613" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex justify-center [@media(min-width:1051px)]:justify-start mt-2"
            >
              <Button variant="primary">Explore Updates</Button>
            </div>
          </div>

          {/* Desktop Featured Detail Panel */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="hidden [@media(min-width:1051px)]:flex [@media(min-width:1051px)]:flex-1 bg-white border border-[rgba(204,204,204,0.8)] rounded-[10px] p-5 flex-col justify-between"
          >
            <div>
              <div className="group relative w-full aspect-[890/284] rounded-[10px] overflow-hidden border border-[rgba(204,204,204,0.8)] mb-6 cursor-pointer">
                <Image
                  src={active.detailImage}
                  alt={active.detailTitle}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="card-title font-bold text-[#212121] capitalize text-lg lg:text-xl">
                  {active.detailTitle}
                </h3>
                <p className="section-text font-normal text-[#404040] capitalize text-sm md:text-base [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]">
                  {active.detailText}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="link-text font-bold text-[#E30613] underline w-fit tracking-tight inline-flex items-center gap-2 text-base"
              >
                Read More
                <ArrowRight size={20} strokeWidth={2} color="#E30613" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}