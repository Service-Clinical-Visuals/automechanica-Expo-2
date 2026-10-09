"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const testimonials = [
  {
    logo: "/moto/ewocar/n1.webp",
    logoAlt: "Djak Detailing Poland",
    quote:
      "“Working with Ewocar means having the assurance of top-quality products and professional support at every stage. As the official distributor in Poland, we value not only the effectiveness and innovation of Ewocar’s solutions but also the brand’s partnership approach and commitment to developing the detailing industry.”",
    author: "djakdetailing.com.pl, Poland – Distributor",
  },
  {
    logo: "/moto/ewocar/n2.webp",
    logoAlt: "AS Detailing Bosnia & Herzegovina",
    quote:
      "“We’ve had an excellent experience working with Ewocar — the products are top quality, and the brand’s support has been outstanding. We’re growing together with Ewocar, and it’s great to be part of a brand that truly values innovation and its partners.”",
    author: "AS Detailing d.o.o., Bosnia & Herzegovina – Distributor",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="w-full py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        {/* Header Row with SKT max-width pattern */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 gap-6 w-full"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 w-full md:w-[75%] xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-[28px] min-[3800px]:text-5xl font-bold tracking-tight text-[#000000]"
            >
              What Our Partners Say About Us
            </Typography>
            <Typography
              variant="p"
              className="text-sm sm:text-base leading-relaxed text-[#4B5563] font-normal"
            >
              Hear from our global distributors about their experience with Ewocar, our premium
              detailing products, and our commitment to quality, innovation, and long-term
              partnerships.
            </Typography>
          </div>

          <div className="flex-shrink-0">
            <Button
              text="View ALL"
              href="#partners-all"
              showIcon={true}
              variant="dark"
              iconVariant="white"
            />
          </div>
        </div>

        {/* Testimonials Grid: Tablet layout kept up to 1300px, 2-column from 1301px+ */}
        <div
          className="grid grid-cols-1 min-[1301px]:grid-cols-2 gap-6 w-full xl:max-w-[95%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#020202] text-white rounded-2xl md:rounded-[1.5rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 lg:gap-7 items-center shadow-xl border border-neutral-900"
            >
              {/* Partner Logo Card Container */}
              <div className="w-full sm:w-[200px] lg:w-[220px] xl:w-[250px] aspect-square bg-white rounded-xl p-6 flex items-center justify-center shrink-0 border border-black/10 shadow-sm">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Quote & Author Info */}
              <div className="flex flex-col justify-between h-full py-1">
                <p className="text-sm sm:text-[15px] min-[3800px]:text-lg text-white font-secondary leading-relaxed mb-4">
                  {item.quote}
                </p>
                <span className="text-xs sm:text-sm min-[3800px]:text-base font-semibold font-primary text-[#F6F6F6] mt-auto">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Indicator matching Figma */}
        <div className="flex items-center justify-center gap-2 mt-4" data-aos="fade-up">
          <div className="w-20 h-2.5 rounded-full border border-black bg-white" />
          <div className="w-2.5 h-2.5 rounded-sm bg-black" />
          <div className="w-2.5 h-2.5 rounded-sm bg-black" />
        </div>
      </div>
    </section>
  );
}
