"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const paragraphs = [
  "E. SASSONE clutch discs are engineered to deliver smooth and efficient power transmission with exceptional durability in demanding operating conditions. Designed for passenger cars, commercial vehicles, trucks, racing, marine, and industrial applications, they provide consistent engagement, reduced vibration, and reliable torque transfer.",
  "Manufactured using high-quality friction materials and precision-controlled production processes, every clutch disc undergoes rigorous quality inspection and performance testing. The result is a dependable component that meets the technical standards of OE/OES supply while offering long-lasting performance for the global aftermarket.",
];

export default function Premium() {
  return (
    <section className="relative w-full bg-[#262930] py-16 md:py-24 overflow-hidden" id="premium">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-10 items-center">
          {/* 360 Video */}
          <div className="relative w-full aspect-video overflow-hidden order-2 xl:order-1" data-aos="fade-right">
            {/* Placeholder checkerboard shown until a 360 video is available */}
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="heading-white shrink-0">Engineered for Precision Engagement</h2>
              <span className="h-1 flex-1 max-w-25 mt-2 -ml-3 bg-primary" />
            </div>

            <div className="flex flex-col gap-4 border border-white/20 rounded-lg p-6 md:p-8 mb-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="content-white opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button text="Explore Products" href="#product" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
}
