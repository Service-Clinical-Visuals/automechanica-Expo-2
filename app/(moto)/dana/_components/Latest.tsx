"use client";

import React from "react";
import Typography from "./Typography";

const Latest = () => {
  const images = [
    "/moto/dana/latest1.png",
    "/moto/dana/latest2.png",
    "/moto/dana/latest3.png",
  ];

  return (
    <section id="news" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8 max-w-[90%] lg:max-w-[80%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Latest Press Release
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed ">
            Stay up to date with the latest innovations, product developments, and industry insights from Spicer. Explore how our driveline technologies continue to deliver reliable performance across automotive and commercial applications.
          </Typography>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-[3800px]:gap-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[583/518] min-[3800px]:aspect-square overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={src}
                alt={`Press Release ${index + 1}`}
                className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="flex justify-end w-full" data-aos="fade-left">
          <a href="#all-news" className="text-[var(--color-primary)] font-semibold hover:underline text-sm min-[3800px]:text-2xl transition-all">
            View All
          </a>
        </div>

      </div>
    </section>
  );
};

export default Latest;
