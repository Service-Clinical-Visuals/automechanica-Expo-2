"use client";

import { useEffect, useRef, useState } from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  {
    title: "High-Strength Alloy Construction",
    text: "Manufactured using premium-grade aluminum alloys and advanced materials to provide exceptional durability, structural strength, and long-lasting reliability.",
  },
  {
    title: "Extended Service Life",
    text: "Built to deliver dependable performance over extended operating periods, minimizing maintenance requirements and lowering overall operating costs.",
  },
  {
    title: "Outstanding Sealing Capability",
    text: "High-quality piston rings provide excellent compression, effective oil control, reduced blow-by, and cleaner engine operation.",
  },
];

export default function Premium() {
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [videoHeight, setVideoHeight] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function recalc() {
      if (!videoWrapRef.current || !contentRef.current) return;

      // Only apply the match/shrink logic on the xl breakpoint (1280px+),
      // where video + content sit side by side. Below that they stack
      // normally and should keep their natural size.
      if (window.innerWidth < 1280) {
        setVideoHeight(null);
        setScale(1);
        return;
      }

      const vHeight = videoWrapRef.current.offsetHeight;
      setVideoHeight(vHeight);

      // Reset scale to measure the content's true natural height first.
      contentRef.current.style.transform = "scale(1)";
      contentRef.current.style.width = "100%";
      const naturalHeight = contentRef.current.scrollHeight;

      // Only shrink (never enlarge) — if content already fits, scale stays 1.
      const nextScale = Math.min(1, vHeight / naturalHeight);
      setScale(nextScale);
    }

    recalc();

    const resizeObserver = new ResizeObserver(recalc);
    if (videoWrapRef.current) resizeObserver.observe(videoWrapRef.current);
    window.addEventListener("resize", recalc);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-[#262626]">
      <div className="custom-container">
        {/* Header */}
        <div
          className="text-center pb-8 xl:pb-10 mb-10 xl:mb-[40px] border-b border-white/30"
          data-aos="fade-up"
        >
          <h2 className="section-title text-white mb-4 xl:mb-6">
            Premium Piston &amp; Piston Rings
          </h2>

          <p className="body-text text-white max-w-[1172px] mx-auto">
            MOGESAN manufactures premium Pistons and Piston Rings designed to
            deliver outstanding engine performance, exceptional durability, and
            long-lasting reliability. Manufactured using advanced technologies
            and premium-grade materials, our products ensure efficient
            combustion, reduced friction, excellent sealing, and superior heat
            resistance.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-[41px] xl:items-stretch">
          {/* Video — always keeps its own aspect ratio, never cropped/stretched */}
          <div
            ref={videoWrapRef}
            className="relative w-full xl:w-[65%] aspect-video rounded-[30px] xl:rounded-[50px] overflow-hidden flex-shrink-0 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content — height locked to video height (xl only),
              vertically centered, text shrinks only if it would overflow */}
          <div
            className="w-full xl:w-[35%] flex xl:items-center overflow-hidden"
            style={videoHeight ? { height: videoHeight } : undefined}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              ref={contentRef}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center",
                width: "100%",
              }}
            >
              <h3 className="section-title-lg text-white mb-6">
                Precision Engine Components For Maximum Performance
              </h3>

              <p className="body-text text-white mb-8">
                Trusted in over 80 countries, MOGESAN components meet
                international quality standards for passenger vehicles,
                commercial vehicles, and heavy-duty engines.
              </p>

              <ul className="flex flex-col gap-6 mb-8">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-4">
                    <img
                      src="/moto/mogesan/tick.png"
                      alt="Check"
                      className="w-8 h-8 flex-shrink-0 object-contain mt-1"
                    />

                    <p className="body-text text-white">
                      <span className="font-semibold">{feature.title}</span> –{" "}
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div>
                <Button href="#" circleColor="#FFFFFF" iconColor="#BF1E2E">
                  View Specification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}