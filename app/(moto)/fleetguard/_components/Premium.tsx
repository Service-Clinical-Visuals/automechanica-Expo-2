"use client";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";
const features = [
  {
    title: "High-Precision Manufacturing",
    desc: "Ensures perfect engine fit and optimal compatibility with modern engine systems.",
  },
  {
    title: "Enhanced Durability",
    desc: "Built to withstand extreme operating conditions for long-lasting performance.",
  },
  {
    title: "Optimized Engine Efficiency",
    desc: "Designed to improve combustion efficiency and overall engine output",
  },
  {
    title: "Consistent Long-Term Performance",
    desc: "Maintains reliable operation throughout an extended service life.",
  },
  {
    title: "Reduced Wear and Friction",
    desc: "Engineered to minimize friction, supporting smoother engine operation and longevity.",
  },
];
export default function Premium() {
  return (
    <section
      className="relative w-full bg-[#1A1A1A] py-16 md:py-24 overflow-hidden"
      id="premium"
    >
      
      <Container className="relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-8 items-center">
          
          {/* 360 Video */}
          <div
            className="relative w-full aspect-video overflow-hidden order-2 xl:order-1"
            data-aos="fade-right"
          >
            
            {/* Placeholder checkerboard shown until a 360 video is available */}
            <div aria-hidden="true" className="absolute inset-0 aspect-video" />
            <DynamicVideoPlayer
              type="360"
              className="absolute aspect-video inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            
            <h2 className="section-title font-oswald font-semibold mb-3">
              
              Precision Designed for Reliable Engine Performance
            </h2>
            <span className="block lg:w-[70%] h-1 bg-primary mb-6 mt-2" />
            <p className="section-text font-rubik font-normal opacity-80 mb-6">
              
              Yenmak engine components are manufactured with precision to meet
              the demanding requirements of modern engines. From pistons and
              piston pins to piston rings, each component is designed for
              accurate fitment, durability and dependable performance throughout
              the engine&apos;s operating cycle.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  
                  <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                    
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#1A1A1A]"
                    />
                  </span>
                  <span className="section-text font-rubik font-normal">
                    
                    <span className="font-semibold">{feature.title}</span> -
                    {feature.desc}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              text="Explore Product"
              href="#product"
              variant="secondary"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
