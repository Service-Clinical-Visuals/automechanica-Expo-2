"use client";

import React from "react";
import Button from "./Button";

export default function Partners() {
  const newsItems = [
    {
      image: "/moto/twin/n1.png",
      date: "27.05.2026",
      location: "Bensheim",
      title: "New build - Building No. 5 in Bensheim is taking shape.",
      description: "Right next to our training and logistics centre in Bensheim, a new building is being constructed, featuring modern offices and plenty of space for logistics."
    },
    {
      image: "/moto/twin/n2.png",
      date: "13.04.2026",
      location: "Bensheim",
      title: "10-year service anniversary - We are celebrating Hermann Schmitzer's 10th anniversary with the company!",
      description: "We would like to extend our heartfelt thanks to our colleague Hermann for 10 years of loyal service. Here's to many more successful years together!"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="custom-container">

        {/* Blue Framed Container */}
        <div className="relative px-6 py-12 lg:px-16 lg:py-15">

          {/* Top Left Bracket */}
          <div className="absolute top-0 left-0 w-[25%] lg:w-[20%] h-[15%] lg:h-[90%] border-t-[8px] border-l-[8px] lg:border-t-[15px] lg:border-l-[15px] border-[#0F53CC] rounded-tl-[24px] lg:rounded-tl-[40px] pointer-events-none"></div>

          {/* Bottom Left Bracket */}
          <div className="absolute bottom-0 left-0 w-[25%] lg:w-[20%] h-[15%] lg:h-[20%] border-b-[8px] border-l-[8px] lg:border-b-[15px] lg:border-l-[15px] border-[#0F53CC] rounded-bl-[24px] lg:rounded-bl-[40px] pointer-events-none"></div>

          {/* Top Right Bracket */}
          <div className="absolute top-0 right-0 w-[25%] lg:w-[20%] h-[15%] lg:h-[90%] border-t-[8px] border-r-[8px] lg:border-t-[15px] lg:border-r-[15px] border-[#0F53CC] rounded-tr-[24px] lg:rounded-tr-[40px] pointer-events-none"></div>

          {/* Bottom Right Bracket */}
          <div className="absolute bottom-0 right-0 w-[25%] lg:w-[20%] h-[15%] lg:h-[20%] border-b-[8px] border-r-[8px] lg:border-b-[15px] lg:border-r-[15px] border-[#0F53CC] rounded-br-[24px] lg:rounded-br-[40px] pointer-events-none"></div>

          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
            <h2 className="section-title text-[#000000] exo-2-font font-bold mb-6">
              Latest News & Insights
            </h2>
            <p className="inter-font text-[#111111] section-text font-regular max-w-[90%] mx-auto leading-relaxed">
              Stay updated with Twin Busch® news, including new product launches, technical innovations, company announcements, upcoming events, and the latest developments in professional workshop equipment. Get insights into how the brand continues to evolve and support professionals with high-quality solutions for workshops and automotive service environments.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 w-full" data-aos="fade-up" data-aos-delay="200">
            {newsItems.map((news, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white  rounded-[16px] overflow-hidden hover:-translate-y-1 transition-transform duration-300" style={{ boxShadow: '0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D' }}>
                {/* Image */}
                <div className="w-full md:w-[50%] h-65 md:h-auto shrink-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-3 lg:p-3">
                  <div className="flex items-center justify-end w-full mb-6">
                    <span className="inter-font text-[#404040] section-text font-regular">
                      {news.date} - {news.location}
                    </span>
                  </div>

                  <h3 className="exo-2-font font-semibold text-[#000000] card-title mb-4 text-center leading-snug">
                    {news.title}
                  </h3>

                  <p className="inter-font text-[#404040] card-text font-regular leading-relaxed text-center">
                    {news.description}
                  </p>

                  <div className="mt-10 flex justify-center">
                    <Button href="#" className="">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <div className="w-4 h-4 rounded-full bg-[#0F53CC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
