"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white text-[#111111]">
      <div className="custom-container px-4 xl:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="font-bold exo2 section-title text-black">
              About Akkuşsan
            </h2>
            
            <p className="inter font-semibold italic text-black section-subtitle">
              Driving Driveline Innovation Since 1969
            </p>
            
            <p className="inter section-text leading-relaxed text-black">
              Akkuşsan Otomotiv has been in the automotive sector since 1969. It has the the greatest variety in the manufacturing of shaft support sector and shaft center bearing sector. Transpart, the other brand of the company, has been part of this organisation since 2004. It has been manufacturing in passanger car, light commercial vehicles and heavy vehicles groups. It keeps its products in stock and it is a solution partner who responds your needs instantly. Its annual production capacity is five hundred thousand pcs and it has been exporting to 55 countries in the world. Due to the geopolitical position of the Turkey and Istanbul, the export is carried out within 1 week.
            </p>

            <div className="py-4 flex justify-center w-full">
              <img 
                src="/moto/akkussan/logos.png" 
                alt="Akkuşsan and Transpart Brands" 
                className="max-w-full h-auto object-contain" 
              />
            </div>

            <p className="inter section-text leading-relaxed text-black">
              With a strong focus on quality, reliability, and customer satisfaction, Akkuşsan continuously develops its manufacturing capabilities to meet the evolving demands of the automotive aftermarket. Its extensive product range, efficient stock management, and international distribution network enable the company to provide dependable solutions and maintain long-term partnerships with customers around the world.
            </p>

            <div className="mt-4">
              <Button href="#learn-more">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-lg">
              <img 
                src="/moto/akkussan/abt.png" 
                alt="Akkuşsan Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
