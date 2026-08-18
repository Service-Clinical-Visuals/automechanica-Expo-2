"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-4 lg:px-10">
        {/* Top text section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-6 mb-12 md:mb-16">
          <h2  className="font-semibold text-[#2a2a2a] exo2 section-title">
            About FASEP
          </h2>
          <p  className="text-[#4a4a4a] oxanium section-text">
            Since 1969, FASEP has designed and manufactured advanced wheel aligners, wheel balancers, and tire changers in Italy. Built on passion, technical expertise, and continuous innovation, we develop specialized solutions trusted by automotive professionals in over 50 countries. Our expertise drives every FASEP solution with precision, quality, reliability, and innovation.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12 md:mb-16">
            <img 
              src="/moto/fasep/abt1.png" 
              alt="FASEP Team" 
              className="object-cover w-full h-full"
            />
            <img 
              src="/moto/fasep/abt2.png" 
              alt="FASEP Technology" 
              className="object-cover w-full h-full"
            />
        </div>

        {/* Bottom text and button section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="flex-1">
            <p className="text-[#4a4a4a] oxanium section-text max-w-6xl text-left">
              At FASEP, innovation is more than technology—it is a commitment to creating smarter, safer, and more efficient solutions for automotive professionals worldwide. Every product reflects our passion for engineering, attention to detail, and dedication to long-term customer success.
            </p>
          </div>
          <div className="shrink-0 flex justify-start lg:justify-end w-full lg:w-auto">
            <Button text="Learn More" href="#about-more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
