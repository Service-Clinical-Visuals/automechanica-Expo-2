"use client";

import React, { useRef, useState, useEffect } from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateBannerHeight = () => {
      if (!sectionRef.current || !titleBlockRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const titleRect = titleBlockRef.current.getBoundingClientRect();
      const is2Col = window.innerWidth >= 1280;
      // On 2-column desktop (>= 1280px), the banner terminates cleanly at the bottom of the title block.
      // On vertical stacked layout (< 1280px: mobile, iPad Mini, iPad Pro 13),
      // add 24px padding to cleanly frame the title above the centered video.
      const calculatedHeight = Math.round(
        titleRect.bottom - sectionRect.top + (is2Col ? 0 : 24)
      );
      if (calculatedHeight > 0) {
        setBannerHeight(calculatedHeight);
      }
    };

    updateBannerHeight();

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateBannerHeight).catch(() => {});
    }

    const ro = new ResizeObserver(() => {
      updateBannerHeight();
    });

    if (sectionRef.current) ro.observe(sectionRef.current);
    if (titleBlockRef.current) ro.observe(titleBlockRef.current);

    window.addEventListener("resize", updateBannerHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  return (
    <section
      id="precision-brake-fluid"
      ref={sectionRef}
      style={
        bannerHeight
          ? ({ "--absorbable-banner-height": `${bannerHeight}px` } as React.CSSProperties)
          : undefined
      }
      className="w-full relative overflow-hidden bg-white scroll-mt-24"
    >
      {/* Top half red background banner */}
      <div
        className="absolute top-0 left-0 w-full bg-[#EE464B] z-0 absorbable-banner pointer-events-none transition-[height] duration-150 ease-out"
        style={bannerHeight ? { height: `${bannerHeight}px` } : undefined}
      />

      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 py-12 md:py-16 xl:py-20 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-x-12 items-center">
          {/* Title Block: on mobile/iPad Mini/iPad Pro 13 rendered first at top; on desktop (xl+) placed in Column 8-12, Row 1 */}
          <div
            ref={titleBlockRef}
            className="col-span-1 xl:col-span-5 xl:col-start-8 xl:row-start-1 pb-2 xl:pb-5 text-center xl:text-left self-start"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h4 className="text-white font-extrabold section-text tracking-wide uppercase mb-2 sm:mb-3 bricolage-font">
              Precision Brake Fluid
            </h4>
            <h2 className="section-title font-bold text-white leading-tight bricolage-font max-w-3xl mx-auto xl:mx-0">
              Engineered Hydraulic Braking Performance for Demanding Conditions and Temperatures
            </h2>
          </div>

          {/* Video Card: on mobile/iPad Mini/iPad Pro 13 rendered second in center; on desktop (xl+) placed in Column 1-7, vertically centered */}
          <div
            className="col-span-1 xl:col-span-7 xl:col-start-1 xl:row-start-1 xl:row-span-2 w-full self-center flex items-center justify-center my-auto"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="w-full max-w-3xl xl:max-w-none aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative shadow-2xl border border-white/20 bg-black/5 mx-auto">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Body Content Block: on mobile/iPad Mini/iPad Pro 13 rendered third below the video vertically; on desktop placed in Column 8-12, Row 2 */}
          <div
            className="col-span-1 xl:col-span-5 xl:col-start-8 xl:row-start-2 pt-2 xl:pt-4 flex flex-col justify-between max-w-3xl mx-auto xl:mx-0 self-start w-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <p className="section-text text-[#404040] leading-relaxed mb-4 font-inter text-left">
              GLICAR DOT-4 brake fluid delivers dependable performance for hydraulic braking and clutch systems across a wide range of compatible vehicles. Its carefully developed formulation provides a minimum boiling point of 230°C, supports reliable operation in cold conditions, and helps protect system components against corrosion and foam formation. Ready to use without dilution, it meets recognized industry standards for dependable everyday performance.
            </p>
            <p className="section-text text-[#555555] leading-relaxed mb-6 sm:mb-8 font-inter text-left">
              GLITHERM DOT 4 brake fluid provides reliable braking and corrosion protection for compatible vehicles and hydraulic clutch systems.
            </p>
            <div className="flex justify-center xl:justify-start">
              <Button
                href="#products"
                variant="outline"
                className="!w-auto rounded-[8px]"
              >
                Explore Product Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
