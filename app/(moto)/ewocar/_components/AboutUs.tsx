"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const stats = [
  {
    number: "25",
    label: "Active distributors worldwide",
  },
  {
    number: "90",
    label: "Products in the Ewocar lineup",
  },
  {
    number: "10",
    label: "Years as your partner in premium detailing",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">
        {/* Top Split: Tablet stacked layout kept up to 1300px, 2-column from 1301px+ */}
        <div className="grid grid-cols-1 min-[1301px]:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column: Text Information */}
          <div className="flex flex-col items-start gap-6 w-full" data-aos="fade-up">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-[28px] min-[3800px]:text-5xl font-semibold leading-tight text-[#000000]"
            >
              Driven by Passion. Defined by Performance.
            </Typography>

            <div className="flex flex-col gap-4 text-[#4B4B4B] w-full">
              <Typography
                variant="p"
                className="text-sm sm:text-base leading-relaxed font-normal"
              >
                At Ewocar, we believe every vehicle deserves professional care. We develop
                high-quality automotive detailing products, including ceramic coatings,
                polishing compounds, polishing pads, and microfiber accessories, designed and
                extensively tested to deliver professional-grade results. Our mission is to help
                detailing enthusiasts and professionals maintain their vehicles with confidence,
                achieving exceptional finishes, lasting shine, and reliable protection. By
                combining professional expertise with carefully developed formulations, we strive
                to make premium car care accessible to detailers around the world.
              </Typography>

              <Typography
                variant="p"
                className="text-sm sm:text-base leading-relaxed font-normal"
              >
                With over 90 products in our lineup, Ewocar continues to grow through innovation,
                quality, and industry expertise. Our comprehensive range includes exterior and
                interior cleaners, advanced polishing solutions, ceramic coatings, specialty
                accessories, and paint protection film (PPF). We continuously refine our
                products and introduce new solutions to meet the evolving needs of the automotive
                detailing industry. Supported by a growing global distributor network, we build
                strong partnerships by providing premium products, technical guidance, sales
                support, and professional expertise. Our commitment remains the same: to deliver
                outstanding detailing solutions, exceptional value, and lasting performance in
                every detail.
              </Typography>
            </div>

            <div className="pt-2">
              <Button
                text="Know About Us"
                href="#about"
                showIcon={true}
                variant="dark"
                iconVariant="white"
              />
            </div>
          </div>

          {/* Right Column: Team Image */}
          <div
            className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/moto/ewocar/about.webp"
              alt="Ewocar Team"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Split: 3 Stats Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl md:rounded-[1.5rem] bg-gradient-to-br from-[#0c0c0c] via-[#050505] to-[#000000] border border-white/10 p-6 sm:p-7 lg:p-7 xl:p-8 min-[2500px]:p-12 shadow-xl flex flex-col justify-between min-h-[200px] lg:min-h-[220px] min-[2500px]:min-h-[320px] group transition-all duration-300 hover:border-white/20"
            >
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border border-white/10 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full border border-white/5 pointer-events-none" />

              <div className="relative z-10">
                <span className="block !text-4xl sm:!text-5xl lg:!text-5xl xl:!text-6xl min-[2500px]:!text-7xl font-bold font-primary text-white tracking-tight leading-none">
                  {stat.number}
                </span>
              </div>

              <div className="relative z-10 pt-4">
                <p className="!text-base sm:!text-lg lg:!text-lg xl:!text-xl min-[2500px]:!text-3xl font-medium sm:font-semibold font-primary text-white leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
