"use client";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";
import { Check } from "lucide-react";
export default function Quality() {
  return (
    <section
      className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 bg-[#1C1C1C] overflow-hidden"
      id="engine-performance"
    >

      <Container className="relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 2xl:gap-24 4xl:gap-32 items-center mb-16 2xl:mb-24 4xl:mb-32">

          {/* Left: Text content */}
          <div data-aos="fade-right" className="lg:col-span-5">

            <h2 className="section-title font-oswald font-semibold mb-6 2xl:mb-10 4xl:mb-16 text-white font-semibold">
              Engineered for Performance. Built for Protection.
            </h2>
            <p className="section-text font-rubik font-normal text-white leading-relaxed mb-8 2xl:mb-12 4xl:mb-20">

              Discover Fleetguard products designed to deliver dependable
              filtration and protection across demanding engine and equipment
              applications. Each product combines advanced technology, precision
              engineering, and proven filtration science to support efficient
              operation and long-lasting performance.
            </p>
            <ul className="flex flex-col gap-5 2xl:gap-8 4xl:gap-12">

              <li className="flex items-start gap-4">

                <Check
                  className="w-6 h-6 2xl:w-8 2xl:h-8 4xl:w-10 4xl:h-10 text-white mt-2 shrink-0"
                  strokeWidth={4}
                />
                <p className="section-text font-rubik font-normal text-white leading-snug">

                  <strong className="text-white font-bold">Superior Filtration</strong> –
                  Effectively removes harmful contaminants to maintain clean and
                  efficient engine operation.
                </p>
              </li>
              <li className="flex items-start gap-4">

                <Check
                  className="w-6 h-6 2xl:w-8 2xl:h-8 4xl:w-10 4xl:h-10 text-white mt-2 shrink-0"
                  strokeWidth={4}
                />
                <p className="section-text font-rubik font-normal text-white leading-snug">

                  <strong className="text-white font-bold">Engine Protection</strong> –
                  Helps safeguard critical components and reduce wear for
                  improved equipment reliability.
                </p>
              </li>
              <li className="flex items-start gap-4">

                <Check
                  className="w-6 h-6 2xl:w-8 2xl:h-8 4xl:w-10 4xl:h-10 text-white mt-2 shrink-0"
                  strokeWidth={4}
                />
                <p className="section-text font-rubik font-normal text-white leading-snug">

                  <strong className="text-white font-bold">
                    Optimized Performance
                  </strong>
                  – Supports efficient operation, consistent performance, and
                  reduced downtime.
                </p>
              </li>
              <li className="flex items-start gap-4">

                <Check
                  size={25}
                  className="text-white mt-2 shrink-0"
                  strokeWidth={4}
                />
                <p className="section-text font-rubik font-normal text-white leading-snug">

                  <strong className="text-white text-white font-bold">Built to Last</strong> –
                  Engineered to withstand demanding conditions and deliver
                  dependable, long-lasting service.
                </p>
              </li>
            </ul>
          </div>
          {/* Right: Video */}
          <div
            className="lg:col-span-7 relative w-full h-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-1" className="w-full h-full aspect-video" />
          </div>
        </div>
        {/* Bottom Section */}
        <div
          className="border-t border-white pt-6 2xl:pt-10 4xl:pt-16 flex flex-col md:flex-row items-center justify-between gap-8 2xl:gap-12"
          data-aos="fade-up"
        >

          <p className="section-text font-rubik font-normal max-w-[100%] md:max-w-[60%] text-gray-300 leading-relaxed">

            From advanced air and fuel filtration to specialized filtration
            solutions, Fleetguard products are engineered to deliver dependable
            protection, consistent performance, and long-lasting reliability.
            Designed for demanding applications, our solutions help keep your
            equipment operating efficiently and reliably every day.
          </p>
          <Button
            text="Discover More"
            href="#"
            variant="primary"

          />
        </div>
      </Container>
    </section>
  );
}
