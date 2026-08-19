import React from "react";
import Link from "next/link";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";


export default function Banner() {
  return (
    <section
          id="home"
          className=" w-full  h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%]"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[#020320]">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover "
              type="banner"
            />
            </div>

      <div className="custom-container relative z-10 px-6 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="exo2 banner-title font-bold text-white leading-tight mb-6">
            Power Your Engine. Ignite Performance.
          </h1>
          <div className="flex gap-4">
            <Button href="#explore" className="px-8 py-3 inline-block">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
