"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10  min-[3800px]:gap-16 items-center">

        {/* Images - Mobile Order 1, Desktop Left */}
        <div className="order-1 xl:col-start-1 xl:col-span-6 xl:row-start-1 w-full flex flex-col gap-4 min-[2100px]:gap-6 min-[3800px]:gap-10" data-aos="fade-right">
          <img
            src="/moto/cemb/section21.png"
            alt="CEMB Facility"
            className="w-full h-auto aspect-[820/475] object-cover rounded-xl min-[2100px]:rounded-2xl min-[3800px]:rounded-3xl shadow-md"
          />
          <div className="grid grid-cols-3 gap-4 min-[2100px]:gap-6 min-[3800px]:gap-10 w-full">
            <img src="/moto/cemb/a1.png" alt="CEMB Detail 1" className="w-full h-auto object-cover rounded-xl min-[2100px]:rounded-2xl shadow-md aspect-[4/3] sm:aspect-video xl:aspect-[4/3]" />
            <img src="/moto/cemb/a2.png" alt="CEMB Detail 2" className="w-full h-auto object-cover rounded-xl min-[2100px]:rounded-2xl shadow-md aspect-[4/3] sm:aspect-video xl:aspect-[4/3]" />
            <img src="/moto/cemb/a3.png" alt="CEMB Detail 3" className="w-full h-auto object-cover rounded-xl min-[2100px]:rounded-2xl shadow-md aspect-[4/3] sm:aspect-video xl:aspect-[4/3]" />
          </div>
        </div>

        {/* Content Wrapper - Mobile Order 2, Desktop Right */}
        <div className="order-2 xl:col-start-7 xl:col-span-6 xl:row-start-1 flex flex-col gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14" data-aos="fade-left">

          {/* Heading */}
          <div className="flex flex-col gap-4 w-full">
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              About CEMB
            </Typography>
          </div>

          {/* Body and Button */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl text-justify xl:text-left">
                Founded in 1946 by engineer Luigi Buzzi, CEMB began with a clear ambition: to develop advanced balancing machines capable of delivering exceptional precision and reliability. From the creation of its first patented balancing machine to the introduction of innovative technologies for vehicle wheels and industrial applications, the company has continuously pushed the boundaries of balancing and vibration analysis. Over the decades, CEMB has combined engineering expertise with continuous research and development to anticipate changing market requirements and create increasingly sophisticated solutions. The company has embraced major technological developments, from early electronic systems to today's digital and automated technologies, while preserving the core values established by its founder: technical excellence, product quality, innovation and close attention to customer needs.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl text-justify xl:text-left">
                CEMB's commitment to innovation is supported by substantial investment in research, design and testing. Its experienced engineering teams follow every project from initial concept and technical specifications through prototyping, functionality testing and final production. Advanced software, specialized testing facilities and controlled operating conditions allow CEMB to verify the performance and reliability of its machines before they reach the market. Manufacturing is concentrated in Mandello del Lario, Italy, allowing CEMB to maintain direct control over its production processes and quality standards. By combining modern lean manufacturing principles with skilled craftsmanship and continuous process improvement, CEMB produces equipment designed for long-term performance, durability and dependable operation in demanding environments.
              </Typography>
            </div>

            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10 flex justify-start">
              <Button text="Learn More" href="#about" showIcon={false} variant="primary" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
