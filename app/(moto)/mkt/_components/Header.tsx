"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about-us" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
            : "bg-white border-b border-[rgba(30,30,30,0.15)] shadow-md"
        }`}
      >
        <div className="custom-container">
          <div
            className={`bg-white transition-all duration-500 ease-out flex items-center justify-between gap-4 py-2.5 md:py-3 ${
              isAtTop
                ? "rounded-[19px] border border-[rgba(30,30,30,0.25)] shadow-sm px-4 md:px-6 xl:px-8"
                : "rounded-none border-transparent px-0"
            }`}
          >
            {/* Logo */}
            <Link href="#" className="shrink-0">
              <img
                src="/moto/mkt/logo.png"
                alt="MKT Holdings"
                className="h-8 md:h-9 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-[30px]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link font-heading transition-colors ${
                    link.label === "Home"
                      ? "font-semibold text-primary underline underline-offset-4"
                      : "font-medium text-body hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA - desktop */}
            <div className="hidden lg:block shrink-0">
              <Button variant="primary">Get in Touch</Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center p-2 text-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu panel */}
          {isOpen && (
            <div
              className={`lg:hidden mt-2 border border-[rgba(30,30,30,0.25)] bg-white px-6 py-5 ${
                isAtTop ? "rounded-2xl" : "rounded-b-2xl border-x-0 border-t-0 shadow-lg"
              }`}
            >
              <nav className="flex flex-col items-start gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link font-heading transition-colors ${
                      link.label === "Home"
                        ? "font-semibold text-primary underline underline-offset-4"
                        : "font-medium text-body hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="primary" className="mt-2 w-full">
                  Get in Touch
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}