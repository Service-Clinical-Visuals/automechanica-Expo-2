"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Explore() {
  return (
    <section className="relative w-full py-16 md:py-20 xl:py-24 bg-[#1C1C1C] overflow-x-hidden overflow-y-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 overflow-x-hidden overflow-y-hidden"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-easing="ease-out-cubic"
      >
        <img
          src="/moto/terrain/bg_explore.jpg"
          alt=""
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#1C1C1C]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 custom-container overflow-x-hidden overflow-y-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 xl:items-center overflow-x-hidden overflow-y-hidden">

          {/* Video */}
          <div
            className="order-2 xl:order-1 relative w-full aspect-video rounded-2xl overflow-x-hidden overflow-y-hidden bg-[#0d0d0d] group"
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
          </div>

          {/* Right Content */}
          <div className="order-1 xl:order-2 flex flex-col justify-center overflow-x-hidden overflow-y-hidden">

            {/* Heading */}
            <h2
              className="section-title font-semibold text-white leading-tight mb-0 [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xl"
              data-aos="fade-left"
              data-aos-duration="850"
              data-aos-delay="400"
              data-aos-easing="ease-out-cubic"
            >
              The Terrain Tamer Connection
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 mt-5 overflow-x-hidden overflow-y-hidden">
              <p
                className="section-text font-normal text-white [@media(min-width:1280px)_and_(max-width:1499px)]:!text-sm"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-easing="ease-out-cubic"
              >
                The Terrain Tamer Connection is more than just quality 4WD
                parts—it is the confidence and peace of mind that comes
                with knowing you have the right support when the journey
                gets tough. From demanding off-road conditions to remote
                locations, our products are built to handle the toughest
                challenges and keep your vehicle performing when you need
                it most.
              </p>

              <p
                className="section-text font-normal text-white [@media(min-width:1280px)_and_(max-width:1499px)]:!text-sm"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-easing="ease-out-cubic"
              >
                With expert advice, a massive range of quality 4WD parts,
                and a strong network of trusted repairers across Australia,
                Terrain Tamer provides dependable support wherever your
                journey takes you. Our experience, product availability,
                and industry connections help you find the right solution
                when you need it most, giving you the confidence to keep
                moving through demanding conditions and get back on the
                road safely.
              </p>
            </div>

            {/* Button */}
            <div
              className="mt-5 overflow-x-hidden overflow-y-hidden"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
            >
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <Button>Explore More</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}