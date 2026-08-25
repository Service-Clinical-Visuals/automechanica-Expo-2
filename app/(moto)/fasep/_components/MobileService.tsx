"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";

const MobileService = () => {
  const mobileServices = [
    {
      img: "m1.png",
      title: "B160 Hoplà",
      desc: "Ultra-compact for trucks, to work anywhere. B160 has a space saving and tough design and hand-spin 16-bit technology."
    },
    {
      img: "m2.png",
      title: "FIXITY",
      desc: "Fully equipped to serve your customers quickly and efficiently."
    },
    {
      img: "m3.png",
      title: "RGU2680.GENSET",
      desc: "RGU2680.GENSET is an Automatic Truck Tyre Changer for Mobile service on Trucks and Buses (intensive use)."
    },
    {
      img: "m4.png",
      title: "RGU.2671.G.GENSET",
      desc: "RGU.2671.G.GENSET – Automatic tire changer for truck, bus, and HGV wheels from 13” to 26”."
    }
  ];

  return (
    <section id="mobile-service" className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-4 lg:px-10 flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
          <h2  className="font-semibold text-[#2a2a2a] exo2 section-title">
            Mobile Service Solutions
          </h2>
          <p  className="text-[#4a4a4a] oxanium section-text max-w-6xl mx-auto">
            FASEP offers a specialized range of mobile service equipment designed to bring professional tire and wheel service directly to customers. From compact balancing and alignment solutions to mobile tire changers, these systems combine portability, efficiency, and reliable performance, helping automotive professionals deliver fast and convenient services wherever they are needed.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full overflow-hidden product-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-12"
          >
            {mobileServices.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden h-full group ">
                  <img 
                    src={`/moto/fasep/${item.img}`}
                    alt={item.title}
                    className="object-contain w-full h-full scale-110 md:scale-125"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#632F05]/65 bg-opacity-65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <h3 className="text-white font-semibold exo2 card-title mb-2">{item.title}</h3>
                    <p className="text-white oxanium section-text leading-snug ">{item.desc}</p>
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

export default MobileService;
