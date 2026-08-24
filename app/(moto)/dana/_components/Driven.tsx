"use client";

import React from "react";
import Typography from "./Typography";

const Driven = () => {
  // Array of logos a1 to a12
  const logos = Array.from({ length: 12 }, (_, i) => `/moto/dana/a${i + 1}.png`);

  // Create 3 sets for a perfectly seamless infinite scroll
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section className="w-full flex flex-col bg-white overflow-hidden">

      {/* Top Text Section with Background Image */}
      <div
        className="w-full py-16 min-[3800px]:py-32 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: "url('/moto/dana/bg.jpg')" }}
      >
        <div className="custom-container flex flex-col items-center text-center max-w-[90%]   min-[3800px]:max-w-[60%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight mb-4 min-[3800px]:mb-8">
            Driven by Dana, Powered by Spicer
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed lg:max-w-[80%] ">
            Explore Dana's trusted driveline solutions engineered for strength, durability, and reliable performance. From aftermarket replacement parts to heavy-duty axle systems, each product line is designed to meet the demands of on-road and off-road applications.
          </Typography>
        </div>
      </div>

      {/* Autoplay Slider Section */}
      <div className="w-full py-12 min-[3800px]:py-24 relative overflow-hidden bg-white">

        {/* CSS Animation for Marquee */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); } 
          }
          .animate-fast-marquee {
            animation: slide-marquee 18s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-fast-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="animate-fast-marquee gap-4 min-[3800px]:gap-8 px-2">
          {marqueeItems.map((src, idx) => (
            <div
              key={idx}
              className="bg-secondary flex items-center justify-center shrink-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-[247px] aspect-[247/179] min-[3800px]:w-[500px]"
            >
              <img
                src={src}
                alt={`Dana Brand ${idx}`}
                className="w-[85%] h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Driven;
