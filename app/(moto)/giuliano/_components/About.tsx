"use client";

import React from "react";
import Button from "./Button";

const stats = [
  {
    icon: "/moto/giuliano/cal.png",
    title: "50 Years by your side",
    text: "Trusted experience in automotive solutions worldwide.",
  },
  {
    icon: "/moto/giuliano/cust.png",
    title: "3,000 Satisfied Customers",
    text: "Building lasting partnerships through quality and service.",
  },
  {
    icon: "/moto/giuliano/130.png",
    title: "130 Countries Supported",
    text: "Global support you can always rely on.",
  },
  {
    icon: "/moto/giuliano/patent.png",
    title: "150 Patents",
    text: "Innovation continually driving better solutions.",
  },
];

export default function AboutUs() {
  return (
    <section className="w-full bg-[#0D0D0D] overflow-hidden py-12 sm:py-16 lg:py-24 2xl:py-28">
      <div className="custom-container mx-auto">

        {/* Intro */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-duration="900">
          <h2 className="section-heading text-white mb-4 sm:mb-6">
            Giuliano Automotive Equipment Since 1976.
          </h2>

          <p className="section-text text-white xl:max-w-[70%] mx-auto px-2 sm:px-0">
            GIULIANO AUTOMOTIVE has over 50 years of experience delivering
            quality, reliable, and innovative tyre service equipment. Founded
            in Correggio, Italy, the company offers tyre changers, wheel
            balancers, lifting equipment, wheel aligners, and advanced
            testing solutions for professional workshops worldwide.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-soft mb-8 sm:mb-10 lg:mb-12" data-aos="fade-in" data-aos-duration="700" data-aos-delay="100" />

        {/* Main Content */}
        <div className="grid grid-cols-1 min-[1500px]:grid-cols-2 gap-8 sm:gap-10 min-[1500px]:gap-16 2xl:gap-20 items-start min-[1500px]:items-center">

          {/* LEFT - IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">

            {/* Image 1 */}
            <div className="group relative w-full aspect-[390/603] border border-mid overflow-hidden transition-all duration-700 ease-out hover:border-primary hover:-translate-y-1" data-aos="fade-right" data-aos-duration="900" data-aos-delay="150">
              <img src="/moto/giuliano/about1.jpg" alt="Giuliano workshop" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
            </div>

            {/* Image 2 */}
            <div className="group relative w-full aspect-[390/603] border border-mid overflow-hidden transition-all duration-700 ease-out hover:border-primary hover:-translate-y-1" data-aos="fade-right" data-aos-duration="900" data-aos-delay="300">
              <img src="/moto/giuliano/about2.jpg" alt="Giuliano workshop equipment" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex flex-col min-w-0">

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-8 sm:gap-x-12 lg:gap-x-8 2xl:gap-x-10 mb-8 sm:mb-10 ml-0 sm:ml-6 lg:mx-6 2xl:mx-8">

              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="group relative ml-3 w-[calc(100%-12px)] sm:ml-10 sm:w-[calc(100%-40px)] lg:ml-10 lg:w-[calc(100%-40px)] min-h-[100px] sm:min-h-[110px] 2xl:min-h-[125px] flex items-center bg-surface-1 border border-mid shadow-[0_3px_8px_rgba(0,0,0,0.24)] pl-[52px] sm:pl-[58px] pr-3 sm:pr-4 py-3 sm:py-4 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={100 + index * 120}
                >

                  {/* Blue Corner */}
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary transition-all duration-500 group-hover:w-6 group-hover:h-6" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

                  {/* Icon Box */}
                  <div className="absolute left-[-36px] sm:left-[-40px] top-1/2 -translate-y-1/2 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] 2xl:w-[88px] 2xl:h-[88px] bg-surface-3 flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-out group-hover:bg-primary group-hover:scale-110 group-hover:-translate-x-1">
                    <img src={stat.icon} alt={stat.title} width={50} height={50} className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] 2xl:w-[56px] 2xl:h-[56px] object-contain transition-all duration-500 ease-out group-hover:scale-110" />
                  </div>

                  {/* Card Content */}
                  <div className="min-w-0">
                    <h3 className="stat-title text-white mb-1.5 sm:mb-2 transition-all duration-300 group-hover:text-primary">
                      {stat.title}
                    </h3>

                    <p className="section-text text-white transition-opacity duration-300 group-hover:opacity-90">
                      {stat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full border-t border-soft mb-6 sm:mb-8" data-aos="fade-in" data-aos-duration="700" />

            {/* Paragraph */}
            <p className="section-text text-white mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
              Our R&amp;D Department and Engineering Team are always careful
              about tyre and automobile market evolutions. Successful
              cooperation with valued customers, OEM partners, car and tyre
              manufacturers, and international regulation authorities has
              enabled us to develop a state-of-the-art product range, always
              updated and reliable.
            </p>

            {/* Button */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <Button text="Learn More About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}