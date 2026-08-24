"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality2() {
  return (
    <section
      className="relative w-full bg-[#1a1d24] bg-cover bg-center bg-no-repeat py-16 md:py-24 overflow-hidden"
      style={{ backgroundImage: "url('/moto/meha/quality2bg.png')" }}
      id="product-line"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-10 items-center">
          {/* Left: Video */}
          <div className="relative order-2 xl:order-1 w-full aspect-video overflow-hidden rounded-4xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <h2 className="heading-white mb-6">Built for Reliability</h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content-white opacity-80">
                At Meha Automotive, every stage of production is carefully controlled, from
                careful material selection and advanced manufacturing to detailed inspection and
                final testing. Our experienced production team follows strict and well-managed
                processes to ensure that every component meets the required standards and
                delivers consistent performance, long-lasting durability, and reliable operation.
              </p>
              <p className="content-white opacity-80">
                Our products are tested according to international standards and undergo
                additional performance checks based on their specific applications. Through
                continuous quality control, advanced testing methods, and careful production
                practices, Meha Automotive ensures that every product delivers reliable
                performance, long-lasting durability, and consistent quality. This commitment
                helps us provide dependable rubber and metal automotive components that meet the
                needs of customers in Turkey and worldwide.
              </p>
            </div>

            <Button text="View Product" href="#" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}
