"use client";

import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Air() {
  return (
    <section className="w-full pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24 bg-cream">
      <div className="custom-container">
        {/* Heading + paragraph + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="max-w-[963px] min-[3800px]:max-w-[2000px]">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="section-title font-heading font-semibold text-dark capitalize mb-4 md:mb-5"
            >
              Air Suspension
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              className="body-text font-body font-normal text-body leading-relaxed"
            >
              MKT Holdings, Inc. manufactures premium Air Suspension systems
              engineered for superior ride comfort, vehicle stability, and
              reliable performance. Built with advanced technology and
              high-quality materials, they deliver exceptional durability for
              modern automotive applications.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="shrink-0"
          >
            <Button variant="primary">
              <span className="inline-flex items-center gap-2">
                View Product Video
              </span>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-black/[0.74] mb-10 md:mb-12 lg:mb-14" />

        {/* Video block */}
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="w-full max-w-[1394px] min-[2560px]:max-w-[1750px] min-[3800px]:max-w-[2300px] mx-auto aspect-video rounded-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] overflow-hidden bg-[#05051a]"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
