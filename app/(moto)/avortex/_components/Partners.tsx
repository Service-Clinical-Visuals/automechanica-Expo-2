"use client";

import React from "react";
import Button from "./Button";

export default function Partners() {
  const newsItems = [
    {
      image: "/moto/avortex/n1.png",
      title: "Avortex Gasket Automotive at Automechanika Istanbul 2025!",
      description: "We're excited to announce that Avortex Gasket Automotive will be participating in one of the most significant international events in the automotive industry ....."
    },
    {
      image: "/moto/avortex/n2.png",
      title: "We attended the 2025 IFEMA MADRID Motortec fair",
      description: "The IFEMA MADRID Motortec Fair, one of the most important meeting points for innovation and international partnerships in the automotive industry,...."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="custom-container max-w-[1200px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold text-[#000000] exo-2-font mb-4">
            Latest News
          </h2>
          <p className="flex item-center justify-center inter-font section-text text-[#333333] font-regular lg:px-40 lg:full leading-relaxed">
            Stay updated with Avortex's newest product developments, manufacturing innovations, international exhibitions, and company announcements. From breakthrough gasket technologies to global trade show appearances, we regularly share insights into how our engineering and production teams are driving performance and reliability across the automotive industry.<br />
            Follow our updates to learn more about our latest achievements and upcoming initiatives.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((news, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white border border-[#EAEAEA] rounded-[2px] overflow-hidden transition-transform duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              {/* Image (Left half) */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto shrink-0 relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/moto/avortex/abt1.png"; }}
                />
              </div>

              {/* Content (Right half) */}
              <div className="flex flex-col flex-grow p-6 lg:p-10 md:w-1/2 justify-center items-center text-center md:items-start md:text-left">
                <h3 className="exo-2-font font-semibold text-[#000000] card-title1 mb-4 leading-snug w-full">
                  {news.title}
                </h3>
                <p className="inter-font card-text text-[#000000] font-regular leading-relaxed mb-6 w-full">
                  {news.description}
                </p>
                <div className="flex justify-center md:justify-start w-full">
                  <Button href="#" className="">
                    Read More
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
