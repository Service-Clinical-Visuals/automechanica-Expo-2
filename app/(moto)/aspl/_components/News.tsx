"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const newsItems = [
  {
    image: "/moto/aspl/b1.png",
    subtitle: "",
    title: "When a Remanufactured Component Is the Better Choice",
    description: "The choice between a new and a remanufactured alternator or starter motor often comes down to a simple question: is it worth paying extra for a brand-new unit?",
    link: "#",
  },
  {
    image: "/moto/aspl/b2.png",
    subtitle: "CoreLess means **remanufacturing without the need to return the CORE**. This program is for AS-PL customers.",
    title: "Remanufactured alternators and starter motors",
    description: "The CoreLess programme allows customers to purchase remanufactured alternators and starter motors without having to return the old unit (CORE).",
    link: "#",
  },
  {
    image: "/moto/aspl/b3.png",
    subtitle: "",
    title: "Why a Charging System Fails Despite a New Alternator",
    description: "The vehicle returns to the workshop after just a few days. The alternator has been replaced, yet the charging issue remains.",
    link: "#",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full bg-[#f7f7f7] py-16 md:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
            <span className="text-primary font-semibold tracking-wide language-links">
              ROTATING PARTS. POWERING PERFORMANCE.
            </span>
          </div>
          <h2 className="text-black font-semibold tracking-wide section-title">
            Explore AS-PL's Complete Rotating & Engine Management Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 ">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`${index === 2 ? 'md:col-span-2 xl:col-span-1 flex justify-center' : ''}`}
            >
              <div
                className={`bg-white rounded-[20px] p-4 flex flex-col drop-shadow-lg h-full w-full ${index === 2 ? 'md:w-[calc(50%-12px)] xl:w-full' : ''}`}
                data-aos="fade-up" 
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                {/* Image Container */}
                <div className="w-full rounded-2xl overflow-hidden mb-6 relative ">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Content Container */}
                <div className="flex flex-col flex-grow px-4 md:px-6 pb-4">
                  
                  {/* Title */}
                  <p className="news-text font-semibold text-center mb-4 leading-relaxed">
                    {item.title}
                  </p>
                  
                  {/* Description */}
                 <p className="section-text text-[#484848] leading-relaxed text-center mb-4">
                    {item.description}
                  </p>
                  
                  {/* Link */}
                  <div className="mt-auto flex justify-center">
                    <Link 
                      href={item.link} 
                      className="text-primary card-title font-semibold hover:text-primary-hover transition-colors underline decoration-2 underline-offset-4"
                    >
                      Read More
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
