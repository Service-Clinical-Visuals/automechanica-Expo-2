"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Shield, Gauge, CheckCircle2 } from "lucide-react";

const Advanced = () => {
  return (
    <section
      id="advanced"
      className="w-full py-16 min-[3800px]:py-32 bg-[#171717] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 min-[3800px]:gap-20 items-center">
          {/* Text Content (Left side, span-5) */}
          <div
            className="lg:col-span-5 flex flex-col gap-6 min-[3800px]:gap-12 order-2 lg:order-1"
            data-aos="fade-right">
            <Typography
              variant="h2"
              color="white"
              className="font-bold leading-tight">
              Advanced Driveline Engineering
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              From precision-forged cross assemblies to high-strength bearing
              caps, every Spicer U-Joint is engineered to minimize vibration,
              maximize torque transmission, and perform reliably under demanding
              operating conditions.
            </Typography>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/30 my-2 min-[3800px]:my-4"></div>

            <ul className="flex flex-col gap-6 min-[3800px]:gap-10">
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Shield
                    className="text-[var(--color-primary)] w-6 h-6 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0"
                    strokeWidth={2}
                  />
                  <Typography
                    variant="h4"
                    color="white"
                    className="font-bold text-sm min-[3800px]:text-3xl">
                    High-Strength Construction
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed text-sm min-[3800px]:text-2xl">
                  Forged steel components provide outstanding durability under
                  heavy loads.
                </Typography>
              </li>

              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Gauge
                    className="text-[var(--color-primary)] w-6 h-6 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0"
                    strokeWidth={2}
                  />
                  <Typography
                    variant="h4"
                    color="white"
                    className="font-bold text-sm min-[3800px]:text-3xl">
                    Smooth Power Transfer
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed text-sm min-[3800px]:text-2xl">
                  Precision engineering reduces vibration and ensures efficient
                  torque delivery.
                </Typography>
              </li>

              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-[var(--color-primary)] w-6 h-6 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0"
                    strokeWidth={2}
                  />
                  <Typography
                    variant="h4"
                    color="white"
                    className="font-bold text-sm min-[3800px]:text-3xl">
                    OE-Quality Fitment
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed text-sm min-[3800px]:text-2xl">
                  Manufactured to exact specifications for dependable
                  installation and long service life
                </Typography>
              </li>
            </ul>

            <div className="mt-4 min-[3800px]:mt-8">
              <Button text="View Product" href="#products" />
            </div>
          </div>

          {/* Video (Right side, span-7) */}
          <div
            className="lg:col-span-7 w-full aspect-video relative bg-white/5 order-1 lg:order-2"
            data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
