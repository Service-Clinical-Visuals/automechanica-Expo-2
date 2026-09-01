"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Manufacture() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const products = [
    {
      title: "Injector Repair Kit",
      count: "79 Products",
      image: "/moto/pek/m1.png",
      href: "#injector-repair-kit",
    },
    {
      title: "Vacuum Pump",
      count: "13 Products",
      image: "/moto/pek/m2.png",
      href: "#vacuum-pump",
    },
    {
      title: "Oil Coolers",
      count: "17 Products",
      image: "/moto/pek/m3.png",
      href: "#oil-coolers",
    },
    {
      title: "Coolant Tubes",
      count: "13 Products",
      image: "/moto/pek/m4.png",
      href: "#coolant-tubes",
    },
    {
      title: "Oil Spray Jets",
      count: "25 Products",
      image: "/moto/pek/m1.png",
      href: "#oil-spray-jets",
    },
    {
      title: "Belt Tensioner",
      count: "10 Products",
      image: "/moto/pek/m2.png",
      href: "#belt-tensioner",
    },
  ];

  return (
    <section className="relative w-full py-16 xl:py-20 2xl:py-[100px] 3k:py-[140px] bg-white overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 flex flex-col items-center">
        
        {/* Section Subtitle */}
        <span 
          data-aos="fade-down"
          data-aos-duration="600"
          className="font-semibold text-xs sm:text-sm 2xl:text-base 3k:text-lg text-[#DC2626] tracking-wider mb-2 uppercase"
        >
          What We Manufacture
        </span>

        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="font-bold text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] 3k:text-[56px] text-center mb-4 3k:mb-6 max-w-[797px] 2xl:max-w-[1000px] 3k:max-w-[1400px] leading-tight"
        >
          Driving Innovation Through Precision Engineering
        </h2>

        {/* Section Description - Fluid/Full Max Width for 4K */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="font-normal text-[#536580] text-xs sm:text-sm lg:text-base 2xl:text-lg 3k:text-xl text-center mb-10 xl:mb-[50px] 3k:mb-[80px] w-full max-w-full xl:max-w-[70%] mx-auto leading-relaxed"
        >
          Our product range includes precision timing components, camshafts, aluminum castings, machined parts, and specialized automotive solutions. Every product is engineered for quality, durability, and reliable performance to meet international standards.
        </p>

        {/* Carousel Container */}
        <div className="w-full relative mb-10 xl:mb-[50px] 3k:mb-[80px]">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full" ref={emblaRef}>
            <div className="flex gap-5 xl:gap-6 3k:gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] xl:flex-[0_0_calc(25%-18px)] min-w-0"
                >
                  <Link 
                    href={product.href}
                    className="group bg-white border border-[#E5E7EB] rounded-[16px] 3k:rounded-[24px] pt-1.5 px-1.5 pb-3 3k:pt-2.5 3k:px-2.5 3k:pb-5 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-red-200 transition-all duration-300 h-full block"
                  >
                    {/* Product Image Area */}
                    <div className="relative w-full aspect-[1.15/1] overflow-hidden flex items-center justify-center rounded-[12px] 3k:rounded-[18px] bg-slate-50">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover rounded-[12px] 3k:rounded-[18px] group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Card Footer Content */}
                    <div className="pt-3 pb-0.5 px-2 3k:pt-5 3k:pb-2 3k:px-4 flex items-end justify-between gap-2 mt-auto">
                      <div>
                        <h3 className="font-bold text-[#202020] text-sm sm:text-base lg:text-lg 2xl:text-xl 3k:text-2xl mb-1 group-hover:text-[#DC2626] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <span className="text-[#A1A1AA] text-xs sm:text-sm 2xl:text-base 3k:text-lg font-normal">
                          {product.count}
                        </span>
                      </div>

                      {/* Minimal Red Arrow */}
                      <div className="pb-1 text-[#DC2626] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 3k:w-7 3k:h-7" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <Button href="#all-products" variant="outline-red">
            View All
          </Button>
        </div>

      </div>
    </section>
  );
}