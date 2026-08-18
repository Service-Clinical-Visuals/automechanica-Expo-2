"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Corporate", href: "/corporate" },
  { name: "Products", href: "/products" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [headerPermanent, setHeaderPermanent] = useState(false);

  useEffect(() => {
    let firstScrollTimer: ReturnType<typeof setTimeout> | null = null;
    let firstScrollTriggered = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const permanentThreshold = window.innerHeight * 0.85;

      // Back at the very top
      if (scrollY <= 5) {
        setShowHeader(false);
        setHeaderPermanent(false);
        firstScrollTriggered = false;

        if (firstScrollTimer) {
          clearTimeout(firstScrollTimer);
          firstScrollTimer = null;
        }

        return;
      }

      // Once the user has moved far enough past the banner,
      // keep the navbar visible permanently.
      if (scrollY >= permanentThreshold) {
        if (firstScrollTimer) {
          clearTimeout(firstScrollTimer);
          firstScrollTimer = null;
        }

        setHeaderPermanent(true);
        setShowHeader(true);
        return;
      }

      // First scroll: show navbar temporarily
      if (!firstScrollTriggered) {
        firstScrollTriggered = true;
        setShowHeader(true);

        firstScrollTimer = setTimeout(() => {
          setShowHeader(false);
        }, 1200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (firstScrollTimer) {
        clearTimeout(firstScrollTimer);
      }
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        bg-white
        h-[70px]
        lg:h-[100px]
        flex
        items-center
        shadow-sm
        transition-all
        duration-500
        ease-out
        ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="custom-container flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/moto/sndc/logo.png"
            alt="SNDC Logo"
            width={75}
            height={60}
            className="w-16 h-auto lg:w-[75px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  group
                  header-link
                  relative
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "font-semibold text-[#D3111B]"
                      : "font-normal text-black hover:text-[#D3111B]"
                  }
                `}
              >
                {link.name}

                {/* Hover underline */}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[1px]
                    bg-[#D3111B]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Language Selector */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-[10px]
            px-[25px]
            py-[10px]
            border
            border-[#202020]
            rounded-[5px]
            cursor-pointer
            transition-all
            duration-300
            hover:bg-[#202020]
            hover:scale-[1.02]
            group
          "
        >
          <Image
            src="/moto/sndc/eng_flag.png"
            alt="English"
            width={30}
            height={30}
            className="
              rounded-full
              w-[30px]
              h-[30px]
              object-cover
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span
            className="
              font-semibold
              text-[16px]
              leading-[19px]
              tracking-[-0.02em]
              text-[#202020]
              group-hover:text-white
              transition-colors
              duration-300
            "
          >
            ENG
          </span>

          <ChevronDown
            className="
              w-[18px]
              h-[18px]
              text-[#202020]
              group-hover:text-white
              transition-all
              duration-300
              group-hover:rotate-180
            "
            strokeWidth={2.5}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="
            lg:hidden
            text-[#202020]
            transition-transform
            duration-300
            hover:scale-110
          "
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
        <div
          className="
            lg:hidden
            absolute
            top-[70px]
            left-0
            w-full
            bg-white
            shadow-md
            flex
            flex-col
            py-4
          "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  header-link
                  px-6
                  py-3
                  transition-all
                  duration-300
                  hover:pl-8
                  hover:bg-[#f8f8f8]
                  ${
                    isActive
                      ? "font-semibold text-[#D3111B]"
                      : "font-normal text-black"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex items-center gap-[10px] px-6 py-3 transition-colors duration-300 hover:bg-[#f8f8f8]">
            <Image
              src="/moto/sndc/eng_flag.png"
              alt="English"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />

            <span className="font-semibold text-[15px] text-[#202020]">
              ENG
            </span>

            <ChevronDown className="w-4 h-4 text-[#202020]" />
          </div>
        </div>
      )}
    </header>
  );
}