"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
export default function Banner() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end"
      id="home"
    >
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        
        {/* Placeholder for the blue sphere video */}
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Content Overlay */}
      <Container>
        
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-35">
          
          <div
            className="text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            
            <h1 className="banner-title font-normal text-white mb-6 font-oswald font-semibold">
              Run Cleaner, Longer With Filtration Science
            </h1>
            <p className="section-text font-normal text-white font-rubik">
              
              Advanced filtration solutions that protect engines and maximize
              performance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
