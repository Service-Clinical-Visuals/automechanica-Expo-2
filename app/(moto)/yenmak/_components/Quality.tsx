"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const cards = [
  {
    icon: "/moto/yenmak/quality/setting.png",
    iconHover: "/moto/yenmak/quality/setting-white.png",
    title: "Precision Manufacturing",
    desc: "Accurate dimensions and controlled processes ensure precise fit and consistent performance.",
  },
  {
    icon: "/moto/yenmak/quality/arm.png",
    iconHover: "/moto/yenmak/quality/arm-white.png",
    title: "High Durability",
    desc: "Components are engineered to withstand demanding temperatures, pressure, and continuous engine operation.",
  },
  {
    icon: "/moto/yenmak/quality/search.png",
    iconHover: "/moto/yenmak/quality/search-white.png",
    title: "Quality Control",
    desc: "Careful inspection and quality processes help maintain consistent product standards across the range.",
  },
];

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#1A1A1A] overflow-hidden" id="engine-performance">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-10 xl:gap-16 items-center">
          {/* Left: Text content + cards */}
          <div data-aos="fade-right">
            <h2 className="heading-white text-[32px]! mb-3">Built for Engine Performance</h2>
            <span className="block w-[40%] h-1 bg-primary mb-6" />

            <p className="content-white opacity-80 mb-8">
              Every component plays a critical role in maintaining efficient engine operation.
              Yenmak focuses on precise manufacturing and consistent quality to deliver components
              that perform reliably under demanding operating conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="group bg-white border-2 border-primary p-10 py-6 text-center transition-colors duration-300 hover:bg-primary"
                >
                  <div className="relative w-10 h-10 mx-auto mb-4">
                    <img
                      src={card.icon}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={card.iconHover}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#666666] transition-colors duration-300 group-hover:text-white">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button text="Explore Product" href="#" variant="secondary" />
          </div>

          {/* Right: Video */}
          <div className="relative w-full aspect-video overflow-hidden" data-aos="fade-left">
            {/* Placeholder checkerboard shown until a video is available */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                backgroundColor: "#fafafa",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#1A1A1A] text-lg">Video Clip 01</span>
            </div>
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
