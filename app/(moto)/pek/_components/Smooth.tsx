"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

interface SmoothProps {
  children: ReactNode;
}

export default function Smooth({ children }: SmoothProps) {
  useEffect(() => {
    // 1. Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // 2. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 3. Sync Lenis scroll updates with AOS
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    // 4. Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}