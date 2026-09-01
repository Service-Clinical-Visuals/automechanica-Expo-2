"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "News", href: "/news", hasDropdown: false },
  { name: "Distributors", href: "/distributors", hasDropdown: false },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Innovations", href: "/innovations", hasDropdown: true },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const lastScrollY = useRef(0);
  const pastBanner = useRef(false);

  useEffect(() => {
    const getBannerHeight = () => window.innerHeight;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const bannerHeight = getBannerHeight();

      setHasScrolledPast(currentY >= bannerHeight);

      if (currentY >= bannerHeight) {
        pastBanner.current = true;
        setVisible(true);
      } else {
        pastBanner.current = false;

        if (currentY <= 10) {
          setVisible(true);
        } else if (currentY > lastScrollY.current) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-[150%]"
      } ${hasScrolledPast ? "pt-0" : "pt-4 min-[1026px]:pt-5"}`}
    >
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          hasScrolledPast
            ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/20 py-3 shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
            : "bg-transparent backdrop-blur-none py-0 shadow-none border-b-0 border-transparent"
        }`}
      >
        <div className="custom-container">
          <div
            className={`relative flex items-center justify-between transition-all duration-300 ease-in-out ${
              hasScrolledPast
                ? "px-0 py-0 rounded-none border-0 bg-transparent shadow-none"
                : "px-5 sm:px-8 min-[1026px]:px-10 py-3 rounded-[100px] border border-white/25 bg-black/30 backdrop-blur-md shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
            }`}
          >
            {/* Logo + Anniversary Badge */}
            <Link href="/" className="flex items-center gap-4 flex-shrink-0">
              <img
                src="/moto/giuliano/logo1.png"
                alt="Giuliano Automotive"
                width="163"
                height="41"
                className="w-32 min-[1026px]:w-[163px] h-auto"
              />

              <img
                src="/moto/giuliano/logo2.png"
                alt="50th Anniversary"
                width="69"
                height="31"
                className="w-14 min-[1026px]:w-[69px] h-auto"
              />
            </Link>

            {/* Desktop Nav (Visible on 1026px and up) */}
            <nav className="hidden min-[1026px]:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-oswald text-[16px] leading-[30px] text-white inline-flex items-center gap-1 transition-colors hover:text-[#18A2DE] ${
                      isActive ? "font-bold underline" : "font-medium"
                    }`}
                  >
                    {link.name}

                    {link.hasDropdown && (
                      <ChevronDown
                        className="w-4 h-4 text-[#1A9FE2]"
                        strokeWidth={2.5}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Get in Touch (Visible on 1026px and up) */}
            <div className="hidden min-[1026px]:block pr-7">
              <Button text="Get in Touch" />
            </div>

            {/* Mobile/Tablet Menu Toggle (Visible up to 1025px) */}
            <button
              className="min-[1026px]:hidden text-white"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Nav Panel (Visible up to 1025px) */}
        {mobileOpen && (
          <div className="custom-container">
            <div
              className={`min-[1026px]:hidden bg-[#171717] shadow-[0_3px_8px_rgba(0,0,0,0.24)] flex flex-col py-4 mt-3 ${
                hasScrolledPast
                  ? "w-full px-4 border-b border-white/25 rounded-none"
                  : "rounded-[20px] border border-white/25"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-oswald text-[16px] text-white px-6 py-3 flex items-center gap-1 ${
                      isActive ? "font-bold underline" : "font-medium"
                    }`}
                  >
                    {link.name}

                    {link.hasDropdown && (
                      <ChevronDown
                        className="w-4 h-4 text-[#1A9FE2]"
                        strokeWidth={2.5}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="px-6 pt-3">
                <Button text="Get in Touch" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}