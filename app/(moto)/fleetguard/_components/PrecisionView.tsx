"use client";
import Container from "./Container";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
export default function PrecisionView() {
  return (
    <section
      className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 overflow-hidden"
      id="premium"
    >

      {/* Dark mechanical background placeholder */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/moto/fleetguard/bg.png")',
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <Container className="relative z-10">

        <div className="text-center mx-auto mb-12 2xl:mb-16 4xl:mb-24" data-aos="fade-up">

          <h2 className="section-title font-oswald font-semibold mb-4 font-semibold text-white">

            360° Product Experience
          </h2>
          <p className="section-text font-rubik font-normal text-white">

            We believe in continuous innovation, quality, integrity, and
            collaboration, creating smarter and more <br className="hidden md:block" /> efficient solutions for the
            evolving automotive industry.
          </p>
        </div>
        <div
          className="relative aspect-video w-full h-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="aspect-video h-full w-full relative">
            <DynamicVideoPlayer type="360" />
          </div>
        </div>
      </Container>
    </section>
  );
}
