"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

interface SmoothProps {
  children?: React.ReactNode;
}

export default function Smooth({ children }: SmoothProps) {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 2. Sync Lenis scroll events with AOS updates
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    // 3. RequestAnimationFrame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // 4. Initialize AOS Animations
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
      delay: 0,
    });

    // Clean up instances on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen antialiased">
      {children}
    </div>
  );
}