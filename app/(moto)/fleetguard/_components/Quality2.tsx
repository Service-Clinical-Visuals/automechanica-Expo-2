"use client";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
export default function Quality2() {
  return (
    <section
      className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 overflow-hidden"
      id="product-line"
    >

      {/* Background with a subtle dark mechanical texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/moto/fleetguard/bg1.png")',
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <Container className="relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 2xl:gap-16 4xl:gap-24 items-center">

          {/* Left: Text content */}
          <div data-aos="fade-right" className="lg:col-span-6 order-2 lg:order-1">

            <h2 className="section-title font-oswald font-semibold mb-6 2xl:mb-10 4xl:mb-16 font-semibold text-white">
              Quality Products for Uninterrupted Power
            </h2>
            <div className="flex flex-col gap-6 2xl:gap-10 4xl:gap-16 mb-6 2xl:mb-12 4xl:mb-20">

              <p className="section-text font-rubik font-normal text-white leading-relaxed">

                Critical facilities depend on reliable generators to keep
                operations running without interruption. Fleetguard provides
                advanced filtration and cooling solutions that protect engines,
                improve efficiency, reduce downtime, and deliver dependable
                performance in demanding environments. With proven technology
                and durable products, Fleetguard helps ensure reliable power
                when it matters most.
              </p>
              <p className="section-text font-rubik font-normal text-white leading-relaxed">

                Every component plays a vital role in maintaining efficient and
                reliable power generation. Fleetguard solutions are designed to
                extend service intervals, reduce maintenance needs, minimize
                downtime, and lower operating costs. With advanced filtration
                technology and smart monitoring solutions, Fleetguard helps
                power-generation equipment deliver consistent performance and
                keep critical operations running smoothly.
              </p>
            </div>
            <div>

              <Button
                text="Discover More"
                href="#"
                variant="primary"

              />
            </div>
          </div>
          {/* Right: Video Placeholder */}
          <div
            className="lg:col-span-6 relative w-full h-full aspect-video overflow-hidden rounded-xl order-1 lg:order-2 shadow-2xl"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-2" className="w-full h-full aspect-video" />
          </div>
        </div>
      </Container>
    </section>
  );
}
