"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "High-Precision Construction",
    description:
      "Designed for accurate synchronization between the crankshaft and camshaft.",
  },
  {
    title: "Exceptional Durability",
    description:
      "Engineered to withstand demanding temperatures, loads, and operating conditions.",
  },
  {
    title: "Reliable Power Transmission",
    description:
      "Optimized tooth profiles ensure smooth and precise power transfer.",
  },
];

export default function Product360() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24">
      <div className="custom-container-wide">
        <div className="bg-[#00355B] rounded-[24px] px-6 py-14 sm:px-10 md:px-14 xl:px-[98px] xl:py-[75px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-6 text-center mb-12 xl:mb-16">
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h2 className="section-title font-bold leading-tight text-white">
                Precision That Keeps Every Engine Moving.
              </h2>
              <span className="accent-underline" />
            </div>

            <p
              className="section-text font-normal max-w-[1342px] text-white"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              Experience the world of Optibelt Automotive Timing Belts —
              engineered for precise timing, reliable power transmission,
              and long-lasting performance.
            </p>
          </div>

          {/* Video + feature list */}
          <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:items-center gap-10 min-[1100px]:gap-12">
            {/* 360 video */}
            <div
              className="group relative w-full min-[1100px]:flex-[2.1] aspect-[1065.65/570.06] rounded-[24px] overflow-hidden bg-[#012440]"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
            </div>

            {/* Text + features */}
            <div
              className="w-full min-[1100px]:flex-1 flex flex-col justify-center gap-8 min-[1200px]:max-[1500px]:gap-4"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              <div>
                <h3 className="section-title1 font-bold text-white mb-4 min-[750px]:max-[1950px]:text-lg min-[1200px]:max-[1500px]:!text-sm min-[1200px]:max-[1500px]:mb-2">
                  Explore the Timing Belt from Every Angle
                </h3>

                <p className="section-text font-normal text-white min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:leading-snug">
                  Discover the technology behind Optibelt timing belts
                  through an immersive 360° experience. Explore the belt
                  construction, materials, precision profiles, and key
                  performance features.
                </p>
              </div>

              <div className="flex flex-col gap-5 min-[750px]:max-[1950px]:gap-3 min-[1200px]:max-[1500px]:!gap-1.5">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group/card flex gap-5 bg-[rgba(0,53,91,0.4)] border border-white rounded-2xl p-5 min-[750px]:max-[1950px]:gap-3 min-[750px]:max-[1950px]:p-3 min-[1200px]:max-[1500px]:!gap-2 min-[1200px]:max-[1500px]:!p-2 min-[1200px]:max-[1500px]:!rounded-xl transition-[transform,background-color] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-1 hover:bg-[rgba(0,53,91,0.7)]"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={300 + index * 120}
                  >
                    <div className="flex-shrink-0 w-[38px] h-[38px] min-[750px]:max-[1950px]:w-[20px] min-[750px]:max-[1950px]:h-[20px] min-[1200px]:max-[1500px]:!w-[14px] min-[1200px]:max-[1500px]:!h-[14px]">
                      <img
                        src="/moto/optibelt/carbon.png"
                        alt=""
                        className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-110"
                      />
                    </div>

                    <div className="flex flex-col gap-1 min-[1200px]:max-[1500px]:!gap-0.5">
                      <span className="stat-title font-bold text-white min-[750px]:max-[1950px]:text-sm min-[1200px]:max-[1500px]:!text-[11px]">
                        {feature.title}
                      </span>

                      <span className="section-text font-normal text-white min-[750px]:max-[1950px]:text-xs min-[1200px]:max-[1500px]:!text-[10px] min-[1200px]:max-[1500px]:!leading-snug">
                        {feature.description}
                      </span>
                    </div>
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