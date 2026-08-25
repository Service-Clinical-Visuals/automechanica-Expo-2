"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
    
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div className="text-left" data-aos="fade-up" data-aos-delay="200">
            <h1 className="heading-white font-semibold! text-[36px]! leading-[120%]! mb-6 tracking-[0%]! text-white">
              They design the technology of the future.
            </h1>
            <p className="content-white">
              Innovative thermal solutions shaping the future of mobility.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
