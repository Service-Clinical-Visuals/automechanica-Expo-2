"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-14 items-center">

        {/* Top Section: Heading and Description */}
        <div className="flex flex-col items-center xl:max-w-[70%] text-center gap-5  w-full max-w-5xl" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            About CORMACH Srl
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Cormach is located in Correggio, the house land of the Automotive Service equipment for garage and tyreshops, just like Tyre Changers. Born in 1989, it was established by its founder Mr Gianfranco Cabassi. Since the beginning, the target of the company was to introduce on the market up-to-date equipment together with the continuous aim of their customers' maximum satisfaction. Dynamic, flexible and with a modern vision and the desire to afford the challenges and incentives of an evolving market.
          </Typography>
        </div>

        {/* Middle Section: Images Side by Side */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full md:w-1/2 flex">
            <img
              src="/moto/cormach/section21.jpg"
              alt="Cormach Facility 1"
              className="w-full h-auto object-cover border border-gray-200"
            />
          </div>
          <div className="w-full md:w-1/2 flex">
            <img
              src="/moto/cormach/section22.jpg"
              alt="Cormach Facility 2"
              className="w-full h-auto object-cover border border-gray-200"
            />
          </div>
        </div>

        {/* Bottom Section: Footer Text and Button */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-8 md:gap-12 min-[2100px]:gap-20 min-[3800px]:gap-28 mt-4" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full xl:max-w-[70%]">
            <Typography variant="p" color="muted" className="leading-relaxed  tracking-wider text-sm font-medium">
              NEW TECHNOLOGIES AND HIGH QUALITY: the Cormach products are always in progress for being updated, under the point of technology as well as in the performances. All manufactured in accordance with EEC rules, they are each one-by-one quality tested.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0">
            <Button text="Learn More" href="#learn" variant="primary" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
