"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  {
    title: "Effective Diesel Engine Cleaning",
    text: "Designed to support diesel engine cleaning as part of regular vehicle maintenance.",
  },
  {
    title: "Supports Engine Maintenance",
    text: "Helps maintain engine cleanliness and supports dependable engine operation.",
  },
  {
    title: "Designed for Workshop Applications",
    text: "Suitable for automotive service professionals and maintenance environments.",
  },
  {
    title: "Convenient Product Application",
    text: "Developed for practical use during appropriate diesel engine servicing procedures.",
  },
];

export default function ProductFocus() {
  return (
    <section className="w-full bg-secondary py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-10 xl:gap-12 min-[2560px]:gap-20 items-center">
          {/* Video */}
          <div
            className="order-2 xl:order-1 relative w-full aspect-video rounded-md 2xl:rounded-lg overflow-hidden bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 xl:order-2" data-aos="fade-left">
            <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
              Product In Focus
            </span>
            <h2 className="section-title text-white exo2-font font-bold leading-tight mb-4 2xl:mb-6">
              Precision Cleaning for Diesel Engines
            </h2>
            <p className="section-text text-white leading-relaxed mb-5 2xl:mb-7">
              Discover SENFINECO&apos;s #9985 JetCleaner Diesel Engines through an immersive product video
              showcasing its design, application, and role in professional diesel engine maintenance.
            </p>

            <ul className="flex flex-col gap-3 2xl:gap-4 min-[2560px]:gap-6 mb-7 2xl:mb-9">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2.5 2xl:gap-3">
                  <img
                    src="/moto/senfineco/drum.webp"
                    alt=""
                    className="w-[16px] md:w-[18px] 2xl:w-[22px] min-[2560px]:w-[30px] h-auto object-contain shrink-0 mt-0.5"
                  />
                  <p className="section-text text-white/85 leading-relaxed">
                    <strong className="text-white font-semibold">{feature.title}</strong> – {feature.text}
                  </p>
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
