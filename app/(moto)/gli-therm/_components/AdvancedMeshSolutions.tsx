"use client";

import React from "react";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  const cards = [
    {
      id: "01",
      title: "Industrial Chemistry",
      description:
        "Concentrates and antifreeze fluids, as well as other products for heating, solar, cooling, HVAC systems, heat pumps, and more.",
      image: "/moto/gli-therm/our-service1.webp",
      bgColor: "bg-[#276FBA]", // Blue
      hoverBtnColor: "hover:!text-[#276FBA]",
    },
    {
      id: "02",
      title: "Automotive Chemistry",
      description:
        "Products designed for passenger cars and trucks to keep them in excellent condition.",
      image: "/moto/gli-therm/our-service2.webp",
      bgColor: "bg-[#DF7B17]", // Orange
      hoverBtnColor: "hover:!text-[#DF7B17]",
    },
    {
      id: "03",
      title: "Chemical Raw Materials",
      description:
        "A wide range of diverse chemical raw materials for various applications and industries.",
      image: "/moto/gli-therm/our-service3.webp",
      bgColor: "bg-[#09A588]", // Teal / Emerald
      hoverBtnColor: "hover:!text-[#09A588]",
    },
  ];

  return (
    <section id="solutions" className="py-10 md:py-10 mb-14 bg-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 text-center">
        {/* Eyebrow */}
        <h4
          className="text-[#EE464B] font-extrabold section-text tracking-wide uppercase mb-3 bricolage-font"
          data-aos="fade-up"
        >
          Our Services
        </h4>

        {/* Headline */}
        <h2
          className="section-title font-bold text-[#111111] leading-tight mb-4 bricolage-font"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Complete Chemical Solutions & Expert Support
        </h2>

        {/* Description */}
        <p
          className="section-text text-[#404040] leading-relaxed mb-12 sm:mb-16 font-inter max-w-[90%] lg:max-w-[82%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From product development and laboratory testing to system filling and fluid diagnostics, GLITHERM delivers specialized services tailored to industrial and automotive requirements. Our expertise, quality-focused approach, and customer-oriented support help businesses maintain operational efficiency, product reliability, and long-term performance.
        </p>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 items-stretch">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-[10px] overflow-hidden flex flex-col w-full shadow-md text-left transition-all duration-300 hover:-translate-y-1.5`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image Section */}
              <div className="w-full p-4 sm:p-5 pb-0">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-7 pt-5 flex flex-col flex-grow text-white">
                {/* Number & Divider */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="card-title font-extrabold text-white bricolage-font leading-none">
                    {card.id}
                  </span>
                  <div className="h-[1px] bg-white/90 flex-grow max-w-[180px] sm:max-w-[180px]"></div>
                </div>

                {/* Card Title */}
                <h3 className="card-title font-medium text-white mb-3 bricolage-font leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="section-text text-white/90 font-regular leading-relaxed mb-8 flex-grow font-inter">
                  {card.description}
                </p>

                {/* Card Button - Centered */}
                <div className="mt-auto flex justify-center w-full pt-2">
                  <Button
                    href="#contact"
                    showArrow={false}
                    className={`!bg-transparent !border !border-white/70 !text-white hover:!bg-white ${card.hoverBtnColor} !rounded-[6px] !px-8 !py-2.5 !h-auto !shadow-none transition-colors duration-300`}
                  >
                    <span className="btn-text font-semibold whitespace-nowrap font-inter">
                      Learn More
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
