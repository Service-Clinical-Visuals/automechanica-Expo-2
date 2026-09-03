"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

export default function Quality2() {
  return (
    <section
      className="relative w-full bg-[#1a1d24] bg-cover bg-center bg-no-repeat py-16 md:py-24 overflow-hidden"
      style={{ backgroundImage: "url('/moto/kale/quality2bg.png')" }}
      id="product-line">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-10 items-center">
          <div data-aos="fade-left" className="order-2 xl:order-1">
            <h2 className="heading-white mb-6">Quality Management System</h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="content-white opacity-80">
                KALE is committed to quality excellence through independent
                audits and internationally recognized certifications. In
                collaboration with Bureau Veritas (BV) and TÜRKAK, KALE
                maintains strong quality, environmental, safety, information
                security, and laboratory management systems to meet global
                automotive standards.
              </p>
              <p className="content-white opacity-80">
                KALE continuously improves its processes through Lean
                Manufacturing, Industry 4.0, Digital Transformation, PDCA, SPC,
                MSA, FMEA, and other advanced quality-management practices. With
                a strong focus on quality, cost, on-time delivery, environmental
                responsibility, and customer satisfaction, KALE maintains
                internationally recognized standards and continues to strengthen
                its position as a trusted global automotive supplier.
              </p>
            </div>

            <Button
              text="View Our Process"
              href="#"
              variant="secondary"
              className="heading-white text-[17px]! font-medium!"
            />
          </div>

          <div
            className="relative order-2 xl:order-1 w-full aspect-[64/21] overflow-hidden rounded-4xl"
            data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
