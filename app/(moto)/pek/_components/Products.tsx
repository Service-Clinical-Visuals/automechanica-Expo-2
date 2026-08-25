"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Products() {
  const smallProducts = [
    {
      codeTopLeft: "A0809982987",
      codeTopRight: "#PT-14-08-898",
      title: "Injector Holding Kit",
      image: "/moto/pek/p2.png",
      icon: (
        <img
          src="/moto/pek/iconp2.png"
          alt=""
          className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0"
        />
      ),
    },
    {
      codeTopLeft: "A0819982687",
      codeTopRight: "#PT-14-02-865",
      title: "Injector Bolt",
      image: "/moto/pek/p3.png",
      icon: (
        <img
          src="/moto/pek/iconp3.png"
          alt=""
          className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0"
        />
      ),
    },
    {
      codeTopLeft: "83P130519",
      codeTopRight: "#PT-14-03-896",
      title: "Injector Repair Kit",
      image: "/moto/pek/p4.png",
      icon: (
        <img
          src="/moto/pek/iconp2.png"
          alt=""
          className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0"
        />
      ),
    },
    {
      codeTopLeft: "A6110160738",
      codeTopRight: "#PT-14-08-897",
      title: "Injector Holding Bracket",
      image: "/moto/pek/p5.png",
      icon: (
        <img
          src="/moto/pek/iconp5.png"
          alt=""
          className="w-5 h-5 xl:w-6 xl:h-6 object-contain flex-shrink-0"
        />
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 xl:py-20 bg-white font-sans overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 flex flex-col items-center">

        {/* Subtitle Tag */}
        <span
          data-aos="fade-down"
          data-aos-duration="600"
          className="font-semibold text-xs sm:text-sm lg:text-base text-[#DC2626] tracking-wider mb-2"
        >
          Featured Products
        </span>

        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="font-bold section-title text-[#0F172A]  text-center mb-4"
        >
          Built for Performance. Designed to Last.
        </h2>

        {/* Section Description Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="font-normal text-[#0F172A] text-xs sm:text-sm lg:text-base xl:text-lg text-center mb-10 max-w-[80%] leading-relaxed"
        >
          Browse the latest additions to our product portfolio, designed for
          modern automotive and industrial applications. Each component is
          built with premium materials and advanced manufacturing processes to
          ensure long-lasting performance, precision, and dependable operation.
        </p>

        {/* Main Grid Section */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-6 mb-10">

          {/* Featured Large Product Box (p1) */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
            className="xl:col-span-4 border border-[#E5E7EB] rounded-[10px] bg-white p-1.5 sm:p-2 lg:p-2.5 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
          >

            {/* Inner Gray Area for Image - Fully covered by p1 */}
            <div className="relative bg-[#EBECEE] rounded-[6px] p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 min-h-[350px] sm:min-h-[410px] xl:min-h-[460px] overflow-hidden">
              <div className="flex justify-between items-center w-full z-10">
                {/* Featured Badge with Blue color and Bold text */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 lg:px-3.5 lg:py-1 bg-white/90 border border-[#213455]/30 rounded-full text-[11px] sm:text-xs lg:text-sm font-bold text-[#213455] shadow-2xs">
                  <img
                    src="/moto/pek/iconp1.png"
                    alt=""
                    className="w-4 h-4 lg:w-5 lg:h-5 object-contain flex-shrink-0"
                  />
                  <span>Featured</span>
                </span>

                <span className="text-xs sm:text-sm lg:text-base font-normal text-[#536580] z-10">
                  #PT-04-07-285
                </span>
              </div>

              {/* Main Product Image p1 - Absolute cover fitting the container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src="/moto/pek/p1.png"
                  alt="Oil Feed Pipe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 pb-3 lg:pt-5 lg:pb-4 px-2.5 lg:px-3.5 flex items-end justify-between bg-white">
              <div>
                <h3 className="font-bold text-[#213455] text-sm sm:text-base lg:text-xl mb-1.5 group-hover:text-[#DC2626] transition-colors duration-300">
                  Oil Feed Pipe
                </h3>

                <div className="flex items-center gap-1.5 text-[#71717A]/[0.6667] text-xs sm:text-sm lg:text-base">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#71717A]/[0.6667]" />
                  <span>Catalogue</span>
                </div>
              </div>

              <Link
                href="#oil-feed-pipe"
                className="flex items-center gap-1.5 text-xs sm:text-sm lg:text-base font-semibold text-[#71717A]/[0.6667] hover:text-[#DC2626] transition-colors pb-0.5 group/link"
              >
                <span>See Detail</span>
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#DC2626] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right 4 Small Product Cards (p2, p3, p4, p5) */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-6">
            {smallProducts.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + 100 * (index + 1)}
                className="border border-[#E5E7EB] rounded-[10px] bg-white p-1.5 sm:p-2 lg:p-2.5 flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300"
              >
                {/* Inner Gray Area */}
                <div className="bg-[#EBECEE] rounded-[6px] p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between h-[180px] sm:h-[205px] lg:h-[240px]">
                  <div className="flex justify-between items-center text-xs sm:text-sm lg:text-base">
                    <span className="font-normal text-[#213455]">{item.codeTopLeft}</span>
                    <span className="font-normal text-[#536580]">{item.codeTopRight}</span>
                  </div>

                  {/* Image Grid */}
                  <div className="relative w-full flex-1 flex items-center justify-center p-1 my-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[110px] sm:max-h-[135px] lg:max-h-[160px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Outer Footer */}
                <div className="pt-4 pb-3 lg:pt-5 lg:pb-4 px-2 lg:px-3 flex items-center justify-between bg-white gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    {item.icon}
                    <h4 className="font-bold text-xs sm:text-sm lg:text-base text-[#213455] truncate group-hover:text-[#DC2626] transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>

                  <Link
                    href="#product-detail"
                    aria-label={`View details for ${item.title}`}
                    className="text-[#DC2626] hover:opacity-80 transition-opacity flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Red Outline Button */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Link
            href="#all-products"
            className="inline-flex items-center justify-center border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-6 py-2.5 lg:px-8 lg:py-3.5 rounded-lg text-xs sm:text-sm lg:text-base font-semibold shadow-xs hover:shadow-md"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}