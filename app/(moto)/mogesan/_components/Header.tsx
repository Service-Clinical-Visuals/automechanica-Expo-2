"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Corporate", href: "#" },
  { name: "Production", href: "#" },
  { name: "Documents", href: "#" },
  { name: "Contact", href: "#" },
  { name: "E-Catalogue", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateBannerHeight = () => {
      const bannerEl = document.querySelector<HTMLElement>("[data-hero]");
      setBannerHeight(bannerEl ? bannerEl.offsetHeight : window.innerHeight);
    };

    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  const hideThreshold = 20;
  const showThreshold = Math.max(bannerHeight - 80, hideThreshold + 1);

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
            : "bg-white border-b border-black/10 shadow-md"
        }`}
      >
        <div className="custom-container relative">
          <div
            className={`h-[72px] bg-white transition-all duration-500 ease-out flex items-center ${
              isAtTop
                ? "rounded-[19px] border border-black/10 shadow-sm"
                : "rounded-none border-transparent"
            }`}
          >
            <div className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${isAtTop ? "px-6 md:px-8" : "px-0"}`}>
              <Link href="#" className="flex-shrink-0 animate-fade-in [animation-delay:150ms]">
                <img
                  src="/moto/mogesan/logo.png"
                  alt="MOGESAN"
                  className="h-[49px] w-auto object-contain"
                />
              </Link>

              <nav className="hidden xl:flex items-center gap-10">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{ animationDelay: `${300 + index * 70}ms` }}
                    className={
                      (link.active
                        ? "nav-link-active text-[#BF1E2E]"
                        : "nav-link text-[#4A4A4A] hover:text-[#BF1E2E] transition-colors uppercase") +
                      " opacity-0 animate-fade-in"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden xl:flex animate-fade-in [animation-delay:600ms]">
                <Button href="#" circleColor="#BF1E2E" iconColor="#FFFFFF">
                  Explore Products
                </Button>
              </div>

              <button
                className="xl:hidden text-[#BF1E2E] animate-fade-in [animation-delay:600ms]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div
              className={`xl:hidden absolute left-0 w-full bg-white shadow-lg z-50 animate-fade-in ${
                isAtTop
                  ? "top-[80px] rounded-[19px]"
                  : "top-full rounded-b-[19px] border-b border-black/10"
              }`}
            >
              <div className="px-8">
                <nav className="flex flex-col py-4 gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={
                        link.active
                          ? "nav-link-active text-[#BF1E2E]"
                          : "nav-link text-[#4A4A4A] hover:text-[#BF1E2E] transition-colors uppercase"
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button href="#" circleColor="#BF1E2E" iconColor="#FFFFFF" className="w-full justify-center">
                    Explore Products
                  </Button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}