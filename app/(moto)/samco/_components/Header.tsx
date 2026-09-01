"use client";

import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "Company", active: false },
  { label: "Product", active: false },
  { label: "Service", active: false },
  { label: "Contact Us", active: false },
];

function UkFlagIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        <clipPath id="uk-flag-clip">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="24" height="24" fill="#0052B4" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="4.5" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#D80027" strokeWidth="1.6" />
        <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="7" />
        <path d="M12 0V24M0 12H24" stroke="#D80027" strokeWidth="3" />
      </g>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling down past 30px
      if (window.scrollY > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileOpen(false); // Close mobile drawer when scrolling back to absolute top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[80px] md:h-[90px] bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-sm transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container h-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src="/moto/samco/logo.png"
            alt="SAMCO"
            className="h-[40px] md:h-[55px] w-auto aspect-[162/60] object-contain hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`header-link font-medium tracking-[-0.02em] pb-1 border-b-2 transition-all duration-300 ${
                link.active
                  ? "text-primary border-primary"
                  : "text-[#444444] border-transparent hover:text-primary hover:border-primary/40"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Language Switcher - Hidden on mobile & tablets (visible only on lg screens and up) */}
        <button
          type="button"
          className="hidden lg:inline-flex items-center justify-center gap-[10px] px-5 py-[10px] border-2 border-[#202020] rounded-[5px] hover:bg-[#202020] hover:text-white transition-all duration-300 group"
        >
          <span className="lang-text group-hover:text-white transition-colors">
            ENG
          </span>
          <UkFlagIcon />
        </button>

        {/* Mobile / Tablet Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md focus:outline-none"
        >
          <span
            className={`block w-6 h-[2px] bg-[#202020] transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#202020] transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#202020] transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile / Tablet Menu Panel */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-[450px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="custom-container flex flex-col">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`header-link font-medium tracking-[-0.02em] text-left py-3 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-200 ${
                link.active ? "text-primary" : "text-[#444444]"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Language switcher inside the dropdown menu */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-[10px] px-5 py-[10px] border-2 border-[#202020] rounded-[5px] mt-4 w-fit active:bg-[#202020] active:text-white transition-colors"
          >
            <span className="lang-text">ENG</span>
            <UkFlagIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}