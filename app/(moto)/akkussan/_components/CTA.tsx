"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

const CTA = () => {
  return (
    <section 
      id="cta" 
      className="w-full relative py-10 md:py-20 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('/moto/akkussan/bg.png')` }}
    >

      <div className="custom-container  relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto gap-6">
        
        <h2 
          className="font-bold exo2 section-title text-black mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Let's Build the Right Solution Together
        </h2>

        <p 
          className="inter section-text leading-relaxed text-black  max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Looking for reliable automotive components tailored to your requirements? With decades of industry experience and a comprehensive product range, Akkuşsan is committed to delivering dependable solutions for passenger cars, light commercial vehicles, and heavy-duty applications.
        </p>

        <p 
         className="inter section-text leading-relaxed text-black  max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Whether you need product information, technical assistance, or support with your specific requirements, our team is ready to help. We combine quality manufacturing, efficient stock availability, and responsive service to build lasting partnerships with customers worldwide.
        </p>

        <div 
          className="mt-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Button href="#contact">
            Get In Touch
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CTA;
