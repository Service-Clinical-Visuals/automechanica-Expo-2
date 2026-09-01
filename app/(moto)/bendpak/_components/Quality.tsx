"use client";

import React from "react";
import Button from "./Button";

export default function Quality() {
  const leaders = [
    { name: "Jeff Kritzer", title: "President & CEO" },
    { name: "Don Henthorn", title: "Founder & Chairman Emeritus" },
    { name: "Javier Arias", title: "Vice President of Operations" },
    { name: "Jim Fornear", title: "Chief Financial Officer" }
  ];

  return (
    <section
      className="py-16 xl:py-20 min-[2100px]:py-28 min-[3800px]:py-40 relative overflow-hidden bg-white text-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/moto/bendpak/bg.png")' }}
    >
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10  min-[3800px]:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 xl:col-span-5 justify-center" data-aos="fade-right">
            <h2 className="section-title montserrat-font font-bold leading-tight">
              Leadership & Vision
            </h2>

            <p className="section-text inter-font text-[#000000] f italic mt-2">
              Driven by Experience. Guided by Innovation.
            </p>

            <p className="inter-font text-[#000000] section-text font-regular tracking-normal leading-relaxed mt-2 mb-4">
              BendPak is led by an experienced leadership team committed to innovation, quality, and continuous growth. Their combined expertise across engineering, operations, finance, and business development drives the company's vision and strengthens its position in the global automotive equipment industry.
            </p>

            <ul className="space-y-4 mb-4">
              {leaders.map((leader, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-auto h-auto flex-shrink-0 flex items-center justify-center rounded-full">
                    <img src="/moto/bendpak/icon1.png" alt="icon" className="w-full h-full min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
                  </div>
                  <p className="inter-font section-text text-[#000000] font-regular">
                    {leader.name}—{leader.title}
                  </p>
                </li>
              ))}
            </ul>

            <Button href="#" variant="primary" className="!w-fit !px-8 !py-2.5 !rounded-[2px] inter-font">
              Meet Our Team
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full h-full relative overflow-hidden xl:col-span-7 flex items-center justify-center" data-aos="fade-left">
            <img
              src="/moto/bendpak/q1.png"
              alt="BendPak Leadership Team"
              className="w-full h-full object-cover border-4 border-white shadow-lg"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full aspect-video bg-gray-200 flex items-center justify-center font-bold text-gray-500">Leadership Team Image</div>' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
