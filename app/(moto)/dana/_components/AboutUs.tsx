"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Content (Text + Button) */}
        {/* Mobile: Order 1, Desktop: Order 1 */}
        <div className="order-1 lg:order-1 w-full lg:w-1/2 flex flex-col gap-6 min-[3800px]:gap-12" data-aos="fade-right">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            About Dana Investment GmbH
          </Typography>

          <div className="flex flex-col gap-4 min-[3800px]:gap-8">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Founded on a legacy of driveline innovation, Dana Investment GmbH represents the renowned Spicer brand in delivering premium universal joint (U-Joint) solutions for automotive and industrial applications. Engineered to original equipment standards, Spicer U-Joints provide exceptional strength, precise power transmission, and long-lasting durability for passenger vehicles, commercial trucks, agricultural machinery, and off-highway equipment.
            </Typography>
            
            <Typography variant="p" color="dark" className="leading-relaxed">
              With over a century of engineering expertise, Dana continues to develop high-performance driveline technologies trusted by OEMs and aftermarket professionals worldwide.
            </Typography>
          </div>
          
          <div className="mt-2 min-[3800px]:mt-6" data-aos="fade-up" data-aos-delay="100">
             <Button text="Learn More" href="#about" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] px-8 py-3 min-[3800px]:px-14 min-[3800px]:py-6 text-sm min-[3800px]:text-2xl font-semibold" />
          </div>
        </div>

        {/* Image */}
        {/* Mobile: Order 2, Desktop: Order 2 */}
        <div className="order-2 lg:order-2 w-full lg:w-1/2" data-aos="fade-left">
          <img
            src="/moto/dana/section2.png"
            alt="Dana Spicer Facility"
            className="w-full object-cover shadow-lg"
            style={{ aspectRatio: "963/568" }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
