"use client";

import { Settings, Wrench } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Settings size={20} color="#FECC00" />,
    title: "Built for Tough Conditions",
    description:
      "Durable and reliable parts designed to handle demanding off-road environments and heavy-duty use, ensuring dependable performance and lasting durability.",
  },
  {
    icon: <Wrench size={20} color="#FECC00" />,
    title: "Comprehensive 4WD Solutions",
    description:
      "A wide range of components for suspension, brakes, cooling, steering, drive train, and engine systems, designed for reliable performance.",
  },
];

export default function Discover() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24 bg-[#1C1C1C]">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">
        {/* Heading */}
        <div
          className="flex flex-col items-center gap-4 text-center max-w-[820px] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
        >
          <h2
            className="section-title font-semibold text-white leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            data-aos-easing="ease-out-cubic"
          >
            Built for 4WD. Built for Adventure.
          </h2>

          <p
            className="section-text font-normal text-white"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-out-cubic"
          >
            Terrain Tamer provides a comprehensive range of 4WD parts
            designed for reliable performance, durability, and dependable
            operation in demanding conditions.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px bg-white -mt-2 sm:-mt-4 xl:-mt-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-out-cubic"
        />

        {/* Content + video */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-10">
          {/* Left content */}
          <div
            className="w-full xl:flex-1 flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="450"
            data-aos-easing="ease-out-cubic"
          >
            <p
              className="section-text font-normal text-white [@media(min-width:1280px)_and_(max-width:1499px)]:!text-sm"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
            >
              With a strong focus on quality, practical engineering, and
              dependable performance, Terrain Tamer delivers reliable
              components for key vehicle systems. Designed for demanding
              conditions and heavy-duty use, these solutions support
              durability, dependable operation, and confidence on and off
              the road.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex items-start gap-3 bg-white rounded-[5px] p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={600 + index * 150}
                  data-aos-easing="ease-out-cubic"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1 transition-transform duration-400 ease-out group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <p className="section-text font-normal text-[#272727] [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xs transition-colors duration-300 group-hover:text-[#111111]">
                    <span className="font-semibold">{feature.title}</span>{" "}
                    – {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="900"
              data-aos-easing="ease-out-cubic"
            >
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <Button>Discover Terrain Tamer</Button>
              </div>
            </div>
          </div>

          {/* Right video */}
          <div
            className="relative w-full xl:flex-1 aspect-video rounded-2xl overflow-hidden bg-[#0d0d0d] group"
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-delay="500"
            data-aos-easing="ease-out-cubic"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Subtle video hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}