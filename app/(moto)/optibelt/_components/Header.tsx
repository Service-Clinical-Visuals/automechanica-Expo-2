"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About Optibelt", href: "#" },
  { name: "Products & Shop", href: "#" },
  { name: "Service & Support", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector<HTMLElement>("[data-hero]");

    const updateHeroHeight = () => {
      setHeroHeight(heroEl?.offsetHeight ?? window.innerHeight);
    };
    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    const mountTimer = setTimeout(() => setMounted(true), 50);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeroHeight);
      clearTimeout(mountTimer);
    };
  }, []);

  const hideThreshold = 20;
  const showThreshold = Math.max(heroHeight - 80, hideThreshold + 1);

  const isAtTop = scrollY <= hideThreshold;
  const isPastBanner = scrollY >= showThreshold;
  const isVisible = mounted && (isAtTop || isPastBanner);

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
        isAtTop ? "top-4 md:top-6" : "top-0"
      } ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ease-out ${
          isAtTop
            ? "bg-transparent shadow-none"
            : "bg-white border-b border-[rgba(26,26,26,0.35)] shadow-sm"
        }`}
      >
        <div className="custom-container-wide">
          <div
            className={`relative bg-white transition-all duration-500 ease-out ${
              isAtTop
                ? "rounded-[24px] border border-[rgba(26,26,26,0.35)]"
                : "rounded-none border-transparent"
            }`}
          >
            {/* Main nav row */}
            <div
              className={`flex items-center justify-between py-2 md:py-3 transition-all duration-500 ease-out ${
                isAtTop ? "px-6 md:px-8 xl:px-10" : "px-0"
              }`}
            >
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-105"
              >
                <img
                  src="/moto/optibelt/logo.png"
                  alt="Optibelt Logo"
                  className="w-[70px] md:w-[85px] xl:w-[101px] h-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group relative header-link transition-colors duration-300 ${
                      link.active
                        ? "text-[#00355B] font-medium"
                        : "text-[#484848] font-normal hover:text-[#00355B]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#00355B] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                        link.active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              {/* Right actions */}
              <div className="hidden xl:flex items-center gap-8 2xl:gap-10">
                <button
                  aria-label="More options"
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:opacity-70 hover:rotate-90"
                >
                  <img
                    src="/moto/optibelt/align.png"
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                </button>
                <Button variant="solid">Contact Us</Button>
              </div>

              {/* Mobile menu toggle */}
              <div className="xl:hidden flex items-center">
                <button
                  aria-label="Toggle menu"
                  className="text-[#00355B] focus:outline-none transition-transform duration-300 ease-out active:scale-90"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span
                    className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                      isMobileMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isMobileMenuOpen ? (
                      <X size={28} strokeWidth={2} />
                    ) : (
                      <Menu size={28} strokeWidth={2} />
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`xl:hidden absolute top-full left-0 w-full bg-white border border-[rgba(26,26,26,0.35)] ${
                isAtTop ? "rounded-[24px] mt-2" : "rounded-b-[24px] border-x-0 border-t-0"
              } z-50 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0 max-h-[500px]"
                  : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`header-link py-2 transition-colors duration-300 ${
                      link.active
                        ? "text-[#00355B] font-medium"
                        : "text-[#484848] font-normal hover:text-[#00355B]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button variant="solid" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}