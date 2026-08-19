"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const features = [
  "Universal TPMS sensors supporting extensive global vehicle coverage.",
  "Fast wireless programming ensures efficient installation and reduced service time.",
  "Reliable OE-level performance engineered for consistent long-term durability.",
];

export default function Quality2() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA]" id="product-line">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-10 xl:gap-16 items-center">
          {/* Left: Video */}
          <div
            className="relative order-2 xl:order-1 w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <p className="text-primary font-bold mb-2">Smart Product Line</p>
            <h2 className="heading mb-6 leading-[120%]!">
              Built Around Smarter Tire Intelligence
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="content">
                Explore a complete range of precision-engineered TPMS products designed to
                simplify diagnostics, programming, sensor replacement, and vehicle servicing.
                From universal programmable sensors and professional TPMS tools to software
                solutions and service accessories, every product is developed to deliver reliable
                performance, broad vehicle compatibility, and efficient workshop operations.
              </p>
              <p className="content">
                Engineered with innovation and quality at the core, our solutions help
                technicians perform faster, smarter, and with greater confidence.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-3 h-0.5 bg-primary mt-3 shrink-0" />
                  <span className="content">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              text="Explore TPMS Service Kits"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-[15px] font-bold rounded-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
