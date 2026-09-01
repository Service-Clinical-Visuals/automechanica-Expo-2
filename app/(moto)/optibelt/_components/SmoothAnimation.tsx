"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothAnimation() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });

    // Keep AOS in sync with Lenis's scroll updates
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    // Drive Lenis's RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Refresh AOS after Lenis has settled initial layout (images/video, etc.)
    const refreshTimeout = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      clearTimeout(refreshTimeout);
    };
  }, []);

  return null;
}