"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Digital = () => {
  return (
    <section
      id="digital"
      className="w-full py-16 min-[3800px]:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/moto/dana/bg.jpg')` }}
    >
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center xl:max-w-[80%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" className="font-bold leading-tight text-[var(--color-primary)]">
            One-Piece Digital Protractor, Electronic Level, and Driveline Inclinometer
          </Typography>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side: Text and Button */}
          <div className="flex flex-col gap-6 min-[3800px]:gap-12" data-aos="fade-right">
            <Typography variant="p" color="dark" className="leading-relaxed">
              The Anglemaster® is a precision-engineered tool designed to provide exceptional accuracy and ease of use when measuring angles and slopes. Originally developed to measure driveshaft and universal joint working angles, it helps technicians identify and correct alignment issues that can lead to vibration, premature wear, and reduced driveline efficiency.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              Beyond automotive applications, its high level of precision makes the Anglemaster® an invaluable measuring instrument across a wide range of industries. It is widely used in scientific research, machinery setup, woodworking, marine installations, appliance repair, bicycle maintenance, motion picture equipment, and physical therapy—wherever accurate angle and slope measurement is essential for reliable performance and professional results.
            </Typography>

            <div className="mt-2 min-[3800px]:mt-6">
              <Button text="View Product" href="#digital-product" />
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full aspect-[677/394]" data-aos="fade-left">
            <img
              src="/moto/dana/section3.png"
              alt="Anglemaster II Tool"
              className="w-full h-full object-cover shadow-sm"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Digital;
