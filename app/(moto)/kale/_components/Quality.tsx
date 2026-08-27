"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Quality() {
  return (
    <section
      className="relative w-full py-20 md:py-28 bg-[#0d1117] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/moto/kale/quality1bg.png')" }}
      id="engine-performance"
    >
      <Container className="relative z-10">
        <div className="text-center max-w-full lg:max-w-[60%] mx-auto mb-12" data-aos="fade-up">
          <h2 className="heading-white mb-4">Advanced Manufacturing, Proven Performance</h2>
          <p className="content-white opacity-80">
            KALE combines advanced manufacturing expertise and technology to deliver reliable
            thermal management solutions with precision, efficiency, and consistent quality.
          </p>
        </div>

        <div
          className="relative w-full max-w-full lg:max-w-[80%] mx-auto aspect-video overflow-hidden rounded-4xl"
          data-aos="zoom-in"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
