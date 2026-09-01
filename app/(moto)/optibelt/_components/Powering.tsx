"use client";

import { Aperture } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Precision Timing",
    description: "Ensures accurate engine synchronization and smooth operation.",
  },
  {
    title: "High Durability",
    description: "Built to withstand heat, wear, and demanding engine conditions.",
  },
  {
    title: "Reliable Performance",
    description: "Delivers consistent power transmission and long-lasting reliability.",
  },
];

export default function Powering() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24">
      <div className="custom-container-wide">
        <div className="bg-[#F9F9F9] rounded-[24px] px-6 py-14 sm:px-10 md:px-14 xl:px-[98px] xl:py-[75px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-6 text-center mb-10">
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h2 className="section-title font-bold leading-tight text-[#1A1A1A]">
                Powering Every Drive with Precision
              </h2>
              <span className="accent-underline" />
            </div>
            <p
              className="section-text font-normal max-w-[1337px] min-[3840px]:max-w-[1750px] text-[#484848]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              Optibelt timing belts are engineered to deliver precise engine
              synchronization, smooth power transmission, and dependable
              performance across a wide range of automotive applications.
              Built with advanced materials and precision-engineered
              profiles, they provide excellent durability, resistance to
              wear.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[rgba(26,26,26,0.35)] mb-12" />

          {/* Video + content */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-12">
            {/* Video container */}
            <div
              className="relative w-full xl:flex-[1.42] aspect-[1065.65/570.06] rounded-2xl overflow-hidden bg-[#E6E6E6]"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="w-full xl:flex-1 flex flex-col justify-center gap-6 min-[1200px]:max-[1500px]:gap-3"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              <h3 className="section-title1 font-bold text-[#1A1A1A] min-[750px]:max-[1950px]:text-lg min-[1200px]:max-[1500px]:!text-sm">
                Engineered for Precision. Built for Performance.
              </h3>

              <div className="flex flex-col gap-4 min-[1200px]:max-[1500px]:!gap-1.5">
                <p className="section-text font-normal text-[#484848] min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                  Optibelt automotive timing belts are engineered for
                  precise synchronization, reliable power transmission, and
                  smooth engine performance. Designed with advanced
                  materials and precision profiles, they deliver dependable
                  operation under demanding automotive conditions.
                </p>
                <p className="section-text font-normal text-[#484848] min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                  From everyday vehicles to high-performance applications,
                  Optibelt combines decades of belt-drive expertise with
                  innovative automotive solutions.
                </p>
              </div>

              <div className="flex flex-col gap-5 min-[750px]:max-[1950px]:gap-3 min-[1200px]:max-[1500px]:!gap-1.5">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 min-[1200px]:max-[1500px]:!gap-2"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={300 + index * 120}
                  >
                    {/* Aperture icon size slightly increased */}
                    <Aperture
                      className="flex-shrink-0 mt-0.5 min-[750px]:max-[1950px]:w-[26px] min-[750px]:max-[1950px]:h-[26px] min-[1200px]:max-[1500px]:!w-[21px] min-[1200px]:max-[1500px]:!h-[21px]"
                      size={34}
                      color="#00355B"
                      strokeWidth={2}
                    />
                    <p className="feature-text text-[#484848] min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                      <span className="font-semibold">{feature.title}</span> —{" "}
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}