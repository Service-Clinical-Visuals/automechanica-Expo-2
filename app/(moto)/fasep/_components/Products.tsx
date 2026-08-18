"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import Button from "./Button";

const categories = [
  {
    id: "aligners",
    name: "Wheel Aligners",
    title: "Wheel Aligners",
    description: "Our wheel aligners are the result of fifty years of innovation. The NoContact touchless aligner enables fast, non-contact measurement and is ideal for high-throughput workshops. The VDP-S2, VCO-K2 and WALLY series use 3D or CCD technology with high-resolution cameras and radio heads.",
    products: [
      { name: "Wheel Aligners", img: "1.png" },
      { name: "VDP-U", img: "2.png" },
      { name: "VCO-K2", img: "3.png" },
      { name: "VCO-K.Eco", img: "4.png" },
      { name: "VDP-K.WinReflex", img: "5.png" },
      { name: "VDP-K Win10", img: "6.png" },
    ]
  },
  {
    id: "balancers",
    name: "Wheel Balancers",
    title: "Wheel Balancers",
    description: "FASEP wheel balancers offer superior precision and ease of use. Featuring advanced diagnostic capabilities and automatic data entry, these balancers are designed to handle everything from standard passenger car tires to heavy-duty commercial wheels, ensuring perfect balance every time.",
    products: [
      { name: "V788 Cayman", img: "7.png" },
      { name: "V688 Stark", img: "8.png" },
      { name: "V684 Ninja", img: "9.png" },
      { name: "V654 Revolution", img: "10.png" },
      { name: "V643 Maxima", img: "11.png" },
      { name: "V643 Maxima Variant", img: "12.png" },
    ]
  },
  {
    id: "changers",
    name: "Tire Changers",
    title: "Tire Changers",
    description: "Our range of tire changers combines robust construction with innovative features to handle any tire effortlessly. From leverless technology to dual assist arms, FASEP tire changers minimize operator effort and eliminate the risk of rim damage, making them perfect for modern tire shops.",
    products: [
      { name: "Rase.Top.4028", img: "13.png" },
      { name: "Rase.Top.3032", img: "14.png" },
      { name: "Rase.Top.3128", img: "15.png" },
      { name: "Rase.Top.3121", img: "16.png" },
      { name: "Rase.Top.3030 Variant", img: "17.png" },
      { name: "Rase.Top.2148", img: "18.png" },
    ]
  },
  {
    id: "lifters",
    name: "Lifters",
    title: "Lifters",
    description: "Designed for maximum safety and durability, FASEP lifting equipment provides reliable access for all service tasks. Whether you need scissor lifts, two-post lifts, or high-capacity column lifts, our products deliver stable, secure lifting for vehicles of all sizes.",
    products: [
      { name: "UF50.VX", img: "19.png" },
      { name: "UF45.VX", img: "20.png" },
      { name: "UF540.W", img: "21.png" },
      { name: "UFZ26", img: "22.png" },
      { name: "FW43-CT-LT", img: "23.png" },
      { name: "FZ63", img: "24.png" },
    ]
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="products" className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-4 lg:px-10 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-gray-400">
          <div className="flex flex-col gap-4 lg:w-2/3">
          <h2  className="font-semibold text-[#2a2a2a] exo2 section-title">
              Professional Equipment For Modern Workshops
            </h2>
            <p className="text-[#4a4a4a] oxanium section-text max-w-6xl text-left">
              FASEP offers professional wheel balancers, wheel aligners, tire changers, and mobile service solutions. Designed with advanced technology and precision engineering, our products help automotive professionals improve efficiency, accuracy, and service quality.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-start lg:justify-end shrink-0 pt-2">
            <Button text="Explore Products" href="#all-products" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 border transition-colors font-medium exo2section-text cursor-pointer
                ${
                  activeTab === cat.id
                    ? "border-[#8e9192] bg-[#8e9192] text-white shadow-sm"
                    : "border-gray-300 bg-white text-gray-500 hover:border-[#8e9192] hover:text-[#8e9192]"
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-12 w-full mt-8">
          
          {/* Left Gray Box */}
          <div className="w-full xl:w-1/3 relative shrink-0">
            <div className="bg-[#8e9192] h-auto xl:h-[450px] py-10 px-6 xl:p-10 rounded-sm shadow text-center flex flex-col items-center justify-center text-white relative z-10">
              <Typography variant="h3" color="white" className="font-semibold mb-6 xl:mb-8 exo2 card-title">
                {activeCategory.title}
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed section-text mb-6 xl:mb-8">
                {activeCategory.description}
              </Typography>
              <a href="#more" className="font-semibold exo2 header-link tracking-wider hover:opacity-80 transition-opacity underline underline-offset-4 mt-auto">
                Read More &gt;&gt;
              </a>
            </div>
            {/* Arrow Tail */}
            <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 -right-[25px] z-0">
              <div className="w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[30px] border-l-[#8e9192]"></div>
            </div>
            {/* Mobile Arrow Tail */}
            <div className="block xl:hidden absolute -bottom-[19px] left-1/2 -translate-x-1/2 z-0">
              <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[20px] border-t-[#8e9192]"></div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="w-full xl:w-2/3 overflow-hidden product-swiper-container flex flex-col">
            <Swiper
              key={activeTab} // Force re-render on tab change
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={20}
              slidesPerView={'auto'}
              className="w-full h-full pb-10 custom-product-swiper"
            >
              {activeCategory.products.map((product, index) => (
                <SwiperSlide key={index} className="h-full swiper-slide-custom">
                  <div className="relative group w-full h-[320px] md:h-[450px] bg-white border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                    <div className="relative w-full flex-1 flex ">
                       <img 
                        src={`/moto/fasep/${product.img}`} 
                        alt={product.name} 
                        className="w-full h-full object-contain md:object-cover object-center transition-all duration-500"
                      />
                    </div>
                    {/* Hover Text */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-black font-semibold text-sm md:text-base">
                        {product.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
