"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

const navLinks = [
  { label: "Home", active: true },
  { label: "About" },
  { label: "Products" },
  { label: "Technology" },
  { label: "Catalog" },
  { label: "News" },
  { label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal header after scrolling past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMobileMenuOpen(false); // Close mobile drawer if scrolled back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "translate-y-0 opacity-100 shadow-md"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container flex items-center justify-between h-[70px] min-[1026px]:h-[90px]">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/moto/asas/logo.png"
            alt="ASAS Filter"
            className="h-[45px] w-[45px] min-[1026px]:h-[65px] min-[1026px]:w-[65px] aspect-square object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Center Nav - Desktop */}
        <nav className="hidden min-[1026px]:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`nav-link font-normal transition-colors duration-200 cursor-pointer ${
                link.active
                  ? "text-accent underline underline-offset-8 decoration-2 font-medium"
                  : "text-[#4b5563] hover:text-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA & Language - Desktop */}
        <div className="hidden min-[1026px]:flex items-center gap-8">
          <Button variant="primary">Get Started</Button>

          <button
            type="button"
            className="nav-link flex items-center gap-2 text-[#4b5563] hover:text-accent transition-colors duration-200 cursor-pointer font-medium"
          >
            {/* World Icon - Increased size to 26px */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M3 12H21M12 3C14.5 5.5 15.75 8.5 15.75 12C15.75 15.5 14.5 18.5 12 21C9.5 18.5 8.25 15.5 8.25 12C8.25 8.5 9.5 5.5 12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            EN
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="min-[1026px]:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <span
            className={`w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1a1a1a] transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="min-[1026px]:hidden bg-white border-b border-gray-200 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                className={`text-left text-lg py-1 font-medium ${
                  link.active ? "text-accent" : "text-[#4b5563]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <Button variant="primary" className="w-full justify-center">
              Get Started
            </Button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-[#4b5563] py-2 font-medium"
            >
              {/* World Icon - Increased size to 26px */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M3 12H21M12 3C14.5 5.5 15.75 8.5 15.75 12C15.75 15.5 14.5 18.5 12 21C9.5 18.5 8.25 15.5 8.25 12C8.25 8.5 9.5 5.5 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              Language: EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}