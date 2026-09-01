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
        
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40 2xl:pb-52 4xl:pb-64">
          
          <div
            className="max-w-4xl 2xl:max-w-6xl 4xl:max-w-7xl text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            
            <h1 className="section-title font-oswald font-semibold! tracking-[0%]! max-w-[550px] md:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[900px] 4xl:max-w-[1200px] text-white mb-8 2xl:mb-12 4xl:mb-16">
              
              Precision Engine Parts. Built for Performance.
            </h1>
          </div>
          <button className="flex gap-2 rounded-lg items-center section-text font-rubik font-normal px-5 py-1.5 2xl:px-8 2xl:py-3 4xl:px-12 4xl:py-4 bg-primary">
            
            Explore More
          </button>
        </div>
      </Container>
    </section>
  );
}
