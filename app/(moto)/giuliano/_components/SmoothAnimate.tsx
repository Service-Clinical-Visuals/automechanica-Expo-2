"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * SmoothAnimate
 * -------------
 * Mount this once near the root of your app (e.g. in app/layout.tsx,
 * inside the <body>, wrapping your children) to enable:
 *  - Lenis smooth scrolling
 *  - AOS (Animate On Scroll) for data-aos elements
 *
 * Usage in layout.tsx:
 *
 *   <body>
 *     <SmoothAnimate>
 *       {children}
 *     </SmoothAnimate>
 *   </body>
 */
export default function SmoothAnimate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // ---- Lenis smooth scroll setup ----
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ---- AOS setup ----
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    // Keep AOS in sync with Lenis' virtual scroll position
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    // Refresh AOS after layout/content is fully ready
    const refreshTimeout = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}