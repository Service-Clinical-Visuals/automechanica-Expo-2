"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden bg-[#0d1117] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/meha/premiumbg.png')" }}
      id="premium"
    >
      <Container className="relative z-10 text-center">
        <h2 className="heading-white mb-4">360° Product View</h2>
        <p className="content-white opacity-80 w-full lg:max-w-[70%]  mx-auto mb-12">
          Explore our automotive products with an interactive 360° view. Discover their design,
          quality, structure, and key features from every angle. Experience Meha Automotive
          products in detail.
        </p>

        <div
          className="relative w-full lg:max-w-[80%] mx-auto aspect-video rounded-4xl overflow-hidden"
          data-aos="zoom-in"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
