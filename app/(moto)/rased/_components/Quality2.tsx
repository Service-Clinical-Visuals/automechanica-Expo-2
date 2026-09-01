"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality2() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA]" id="product-line">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 xl:gap-16 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <p className="text-primary font-bold mb-2">Engineered Product Portfolio</p>
            <h2 className="heading mb-6">
              Innovative Diesel Components Built For Every Fuel Injection System
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Explore an extensive range of high-precision diesel fuel injection components
                developed to meet the evolving needs of modern engines and global industries. Our
                portfolio spans conventional fuel injection pumps, advanced Common Rail systems,
                Electronic Unit Injectors, and specialized replacement parts&mdash;each engineered
                with uncompromising quality, exceptional dimensional accuracy, and long-lasting
                durability.
              </p>
              <p className="content">
                Designed to support manufacturers, distributors, and diesel professionals, every
                component reflects decades of Italian engineering excellence and trusted
                manufacturing expertise.
              </p>
            </div>

            <Button
              text="Find Your Product"
              href="#"
              variant="outline"
              showIcon
              className="px-6 py-2.5 text-[15px]! font-bold rounded-md"
            />
          </div>

          {/* Right: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
