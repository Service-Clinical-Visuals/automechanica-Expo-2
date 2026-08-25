"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Products() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const accordionData = [
    {
      title: "Production",
      imgSrc: "/moto/kameks/i1.png",
      content:
        "Our production facility is equipped with state-of-the-art machinery to manufacture high-quality camshafts efficiently and accurately, meeting all industry standards.",
    },
    {
      title: "Product Development",
      imgSrc: "/moto/kameks/i2.png",
      content:
        "Requests received from customers based on samples or technical drawings are reviewed by our expert team and modeled in a three-dimensional (3D) environment. Technical drawings for all planned operations are prepared with the necessary dimensions and tolerances, taking into account the machinery and required standards.",
    },
    {
      title: "Quality",
      imgSrc: "/moto/kameks/i3.png",
      content:
        "Every camshaft undergoes rigorous quality control checks throughout the production process to ensure it meets our strict standards for durability and performance.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div
            className="lg:col-span-6 w-full h-full aspect-[4/3] lg:aspect-auto"
            data-aos="fade-right">
            <img
              src="/moto/kameks/production.png"
              alt="Production Process"
              className="w-full h-full object-cover "
              onError={(e) => {
                e.currentTarget.src = "/moto/kameks/abt1.png";
              }}
            />
          </div>

          {/* Right: Accordion */}
          <div
            className="lg:col-span-6 flex flex-col gap-6"
            data-aos="fade-left">
            <div>
              <h3 className="text-[#F12535] font-semibold mb-3 poppins-font section-text">
                Production Process
              </h3>
              <h2 className="section-title text-[#202020] poppins-font font-semibold leading-tight mb-3">
                From Design to Flawless Final Production
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border ${isOpen ? "border-[#EAEAEA] shadow-[0px_4px_14px_0px_#959DA533]" : "border-[#EAEAEA]"} rounded-[10px] shadow-[0px_4px_14px_0px_#959DA533] overflow-hidden transition-all duration-300`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 px-10 bg-white cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className="transition-colors duration-300 flex items-center justify-center w-6 h-6">
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-full h-full object-contain transition-all duration-300"
                            style={{
                              filter: isOpen
                                ? "brightness(0) saturate(100%) invert(23%) sepia(85%) saturate(7186%) hue-rotate(346deg) brightness(96%) contrast(96%)"
                                : "brightness(0) saturate(100%)",
                            }}
                          />
                        </span>
                        <span
                          className={`poppins-font card-title font-semibold transition-colors duration-300 ${isOpen ? "text-[#F12535]" : "text-[#202020]"}`}>
                          {item.title}
                        </span>
                      </div>
                      <span
                        className={
                          isOpen ? "text-[#F12535]" : "text-[#404040]"
                        }>
                        {isOpen ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 bg-white">
                        <div className="pl-9">
                          <p className="text-[#404040] inter-font font-regular card-text tracking-normal leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
