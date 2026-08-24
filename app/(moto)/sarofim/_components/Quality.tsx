"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Quality() {
  return (
    <section className="bg-[#1C1C1C] py-16 md:py-20" id="service-kits">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px] flex flex-col items-center">
          {/* Heading */}
          <div className="text-center" data-aos="fade-up">
            <h2
              className="text-white font-bold text-[28px] md:text-[32px]"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Advanced Engine Oil Solutions
            </h2>

            <p className="content-white text-center max-w-[900px] mx-auto mt-4">
              Sarofim GmbH offers a comprehensive range of high-performance Engine Oils developed
              to deliver reliable lubrication, advanced engine protection, and efficient operation
              across modern automotive applications. Specially formulated for demanding driving
              conditions, these premium oils help reduce friction and wear, maintain engine
              cleanliness, support smooth operation, and contribute to long-term engine
              performance and reliability.
            </p>
          </div>

          {/* Video / placeholder */}
          <div
            className="relative mt-10 w-[80%] aspect-video overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 aspect-video object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
