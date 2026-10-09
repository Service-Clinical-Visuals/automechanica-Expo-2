"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  "Designed for diesel engine cleaning and maintenance",
  "Supports cleaner engine systems",
];

export default function ProductInAction() {
  return (
    <section className="w-full bg-secondary py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12 min-[2560px]:gap-20 items-center">
          {/* 360 Video */}
          <div
            className="order-2 xl:order-1 relative w-full aspect-video rounded-md 2xl:rounded-lg overflow-hidden bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 xl:order-2" data-aos="fade-left">
            <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
              Product In Action
            </span>
            <h2 className="section-title text-white exo2-font font-bold leading-tight mb-4 2xl:mb-6">
              Powerful Cleaning for Diesel Engines
            </h2>
            <p className="section-text text-white leading-relaxed mb-5 2xl:mb-7">
              Diesel Injector Cleaner is a professional product of the latest generation for all diesel
              engines. The injection system is cleaned by the highly effective additives used with unattainable
              effectiveness. Used regularly, it restores the original state of the fuel system. It eliminates
              deposits in the entire fuel system such as e.g. tank, pipes, fuel pump, intake valves and
              injectors. Represents a full alternative to professional cleaning of injectors, it regenerates
              the injection system, as well as the fuel delivery components. Restores the performance of the
              engine to the original set up parameters. Add to tank before refuel, 300 ML of cleaner to 50 l
              of diesel.
            </p>

            <ul className="flex flex-col gap-2.5 2xl:gap-4 min-[2560px]:gap-5 mb-7 2xl:mb-9">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 2xl:gap-3">
                  <img
                    src="/moto/senfineco/Vector.webp"
                    alt=""
                    className="w-[16px] md:w-[18px] 2xl:w-[22px] min-[2560px]:w-[30px] h-auto object-contain shrink-0"
                  />
                  <p className="section-text text-white leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>

            <Button href="#" variant="primary">
              Explore Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
