"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Fit() {
  const brands = [
    { name: "BMW", logo: "/moto/pek/f1.png", href: "#bmw" },
    { name: "Land Rover", logo: "/moto/pek/f2.png", href: "#land-rover" },
    { name: "Mercedes-Benz", logo: "/moto/pek/f3.png", href: "#mercedes" },
    { name: "Volkswagen", logo: "/moto/pek/f4.png", href: "#volkswagen" },
    { name: "Volvo", logo: "/moto/pek/f5.png", href: "#volvo" },
    { name: "Mitsubishi Motors", logo: "/moto/pek/f6.png", href: "#mitsubishi" },
    { name: "Jeep", logo: "/moto/pek/f7.png", href: "#jeep" },
    { name: "Mazda", logo: "/moto/pek/f8.png", href: "#mazda" },
    { name: "Kia", logo: "/moto/pek/f9.png", href: "#kia" },
    { name: "Honda", logo: "/moto/pek/f10.png", href: "#honda" },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 xl:py-20 2xl:py-[100px] 3k:py-[140px] bg-white overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 flex flex-col items-center">
        
        {/* Section Subtitle */}
        <span 
          data-aos="fade-down"
          data-aos-duration="600"
          className="font-bold text-xs sm:text-sm 2xl:text-base 3k:text-lg text-accent uppercase tracking-wider mb-2 sm:mb-3 3k:mb-5 text-center"
        >
          Find Your Fit
        </span>

        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="section-title font-bold text-[#202020] text-center mb-3 sm:mb-5 3k:mb-8 max-w-[797px] 2xl:max-w-[1000px] 3k:max-w-[1400px]"
        >
          Choose Your Brand. Find the Right Parts.
        </h2>

        {/* Section Subtext */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="section-text font-normal text-[#404040] text-center mb-8 sm:mb-12 xl:mb-[60px] 3k:mb-[90px] w-full max-w-full xl:max-w-[70%] mx-auto leading-relaxed"
        >
          Choose your vehicle brand to discover precision-engineered components designed for seamless compatibility and dependable performance.
        </p>

        {/* Responsive Brand Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 xl:gap-6 2xl:gap-7 3k:gap-9 items-stretch">
          {brands.map((brand, index) => (
            <Link 
              key={index}
              href={brand.href}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={100 + (index * 40)}
              className="group relative w-full h-[150px] xs:h-[170px] sm:h-[190px] xl:h-[210px] 2xl:h-[250px] 3k:h-[300px] bg-white border border-[#E5E7EB] rounded-[10px] 3k:rounded-[16px] flex items-center justify-center p-3 sm:p-4 2xl:p-6 shadow-xs hover:shadow-md hover:border-red-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2 3k:p-4">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
            </Link>
          ))}

          {/* Equal-height Contact Card with Flexible Mobile Min-Height */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={100 + (brands.length * 40)}
            className="col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-2 min-h-[170px] sm:h-[190px] xl:h-[210px] 2xl:h-[250px] 3k:h-[300px] bg-white border border-[#E5E7EB] rounded-[10px] 3k:rounded-[16px] p-4 sm:p-4 2xl:p-6 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md hover:border-red-200 transition-all duration-300"
          >
            <div className="my-auto flex flex-col items-center">
              <h3 className="card-text font-bold text-[#202020] mb-1 sm:mb-1.5 leading-tight text-xs xs:text-sm sm:text-base 2xl:text-lg 3k:text-2xl">
                Can’t Find your Brand?
              </h3>
              <p className="section-text text-[#71717A] text-[11px] xs:text-xs sm:text-sm 2xl:text-base 3k:text-xl mb-3 sm:mb-3 max-w-[240px] sm:max-w-[280px] 2xl:max-w-[340px] 3k:max-w-[450px] leading-snug sm:leading-relaxed">
                We’re constantly adding more brands—contact us for more information.
              </p>
            </div>
            <div>
              <Button href="#contact" variant="outline-red">
                Contact Us
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
