"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import Button from "./Button";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Super Promotion on Wheel Balancer Accessories",
      date: "4 August 2026",
      excerpt: "Complete your new FASEP wheel balancer with the right accessories and take advantage of an exclusive opportunity!",
      img: "b1.png",
    },
    {
      id: 2,
      title: "Automechanika Frankfurt 2026",
      date: "10 July 2026",
      excerpt: "Frankfurt, 8-12 September 2026.",
      img: "b2.png",
    },
    {
      id: 3,
      title: "Summer Holiday Closure",
      date: "3 July 2026",
      excerpt: "We will be closed for the Summer Holidays from 10 to 24 August.",
      img: "b3.png",
    },
    {
      id: 4,
      title: "New 3D Wheel Alignment Systems",
      date: "15 June 2026",
      excerpt: "Discover the next generation of precision with our newly launched 3D wheel alignment technology.",
      img: "b4.png",
    },
    {
      id: 5,
      title: "FASEP at Equip Auto Paris",
      date: "20 May 2026",
      excerpt: "Join us in Paris to experience our latest range of mobile service solutions and heavy-duty equipment.",
      img: "b5.png",
    },
    {
      id: 6,
      title: "Software Update v4.2 Released",
      date: "5 April 2026",
      excerpt: "Enhance your workshop's efficiency with our newest software update, featuring faster diagnostic tools.",
      img: "b6.png",
    },
  ];

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-4 lg:px-10 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-300">
          <div className="flex flex-col gap-4 lg:w-2/3">
                      <h2  className="font-semibold text-[#2a2a2a] exo2 section-title">

              Stay Updated With FASEP
              </h2>
          <p  className="text-[#4a4a4a] oxanium section-text">
            
              Discover the latest FASEP news, product innovations, industry events, exhibitions, and technological developments. Stay informed about our newest workshop equipment, global activities, and solutions shaping the future of professional automotive service.
          </p>
          </div>
          <div className="lg:w-1/3 flex justify-start lg:justify-end shrink-0">
            <Button text="View All News" href="#all-news" />
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full overflow-hidden product-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            wrapperClass="items-stretch"
            className="w-full pb-12 pt-4 news-swiper"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="flex flex-col h-full w-full bg-white border border-gray-200 shadow-sm overflow-hidden group">
                  
                  {/* Image Container */}
                  <div className="relative w-full overflow-hidden p-4 bg-white justify-center items-center flex shrink-0 ">
                    <img 
                      src={`/moto/fasep/${item.img}`}
                      alt={item.title}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h4  className="font-semibold exo2 mb-2 footer-link text-[#2a2a2a]">
                      {item.title}
                    </h4>
                    
                    <p className="date-text mb-4  tracking-wider  text-[#4a4a4a]">
                      {item.date}
                    </p>
                    
                    <p className="section-text mb-4  tracking-wider  text-[#4a4a4a]">
                      {item.excerpt}
                    </p>

                    <div className="mt-auto">
                      <a 
                        href="#read-more" 
                        className="header-link exo2 font-semibold text-[#e2001a] hover:opacity-80 transition-opacity underline underline-offset-4 text-sm"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default News;
