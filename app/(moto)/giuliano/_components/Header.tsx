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

  const lastScrollY = useRef(0);
  const pastBanner = useRef(false);

  useEffect(() => {
    // Height of the "banner zone" — while inside this zone, the header
    // hides on scroll-down / shows on scroll-up. Once the user scrolls
    // past it, the header stays permanently visible.
    const getBannerHeight = () => window.innerHeight;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const bannerHeight = getBannerHeight();

      if (currentY >= bannerHeight) {
        // Past the banner: header always visible from here on
        pastBanner.current = true;
        setVisible(true);
      } else {
        // Still within the banner zone
        pastBanner.current = false;

        if (currentY <= 10) {
          // Top of page
          setVisible(true);
        } else if (currentY > lastScrollY.current) {
          // Scrolling down within banner -> hide to reveal full banner
          setVisible(false);
        } else {
          // Scrolling up within banner -> show
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
      className={`sticky top-0 z-50 w-full pt-5 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="custom-container">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-once="true"
          className="relative flex items-center justify-between rounded-[100px] border border-white/25 bg-black/30 backdrop-blur-md shadow-[0_3px_8px_rgba(0,0,0,0.24)] px-8 py-3"
        >
          {/* Logo + Anniversary Badge */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <img
              src="/moto/giuliano/logo1.png"
              alt="Giuliano Automotive"
              width="163"
              height="41"
              className="w-32 lg:w-[163px] h-auto"
            />

            <img
              src="/moto/giuliano/logo2.png"
              alt="50th Anniversary"
              width="69"
              height="31"
              className="w-14 lg:w-[69px] h-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
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

          {/* Get in Touch */}
          <div className="hidden lg:block">
            <Button text="Get in Touch" href="/contact" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
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

        {/* Mobile Nav Panel */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 rounded-[20px] border border-white/25 bg-[#171717] shadow-[0_3px_8px_rgba(0,0,0,0.24)] flex flex-col py-4">
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
              <Button text="Get in Touch" href="/contact" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}