"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Product", href: "#products" },
  { label: "Corporate", href: "#corporate" },
  { label: "Contact Us", href: "#contact" },
];

const LANGUAGES = [
  { code: "ENG", label: "English", flag: "https://flagcdn.com/w20/in.png" },
  { code: "DEU", label: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
  { code: "TUR", label: "Türkçe", flag: "https://flagcdn.com/w20/tr.png" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner =
        document.getElementById("banner-section") ||
        document.getElementById("home");
      let threshold = 80;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        // Reveal header as user scrolls past initial part of the banner
        threshold = Math.min(rect.height * 0.35, 300);
      }

      if (scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setActiveNav(item.label);
    setMobileMenuOpen(false);

    if (item.href.startsWith("#")) {
      const targetId = item.href.substring(1);
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isScrolled
        ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[72px] sm:h-[100px]">
          {/* Brand Logo */}
          <Link
            href="/gli-therm"
            className="flex items-center flex-shrink-0 focus:outline-none"
            aria-label="GLITHERM Home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/moto/gli-therm/header-logo.webp"
              alt="GLITHERM"
              className="h-auto w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11 font-inter">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.label;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`header-link transition-colors duration-200 ${isActive
                    ? "text-[#EE464B] font-semibold"
                    : "text-[#202020] hover:text-[#EE464B] font-normal"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Selector & Mobile Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Language Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 border border-black/80 hover:border-black rounded-lg px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white transition-all duration-200 cursor-pointer focus:outline-none shadow-xs"
                aria-label="Select language"
              >
                <img
                  src={selectedLang.flag}
                  alt={selectedLang.code}
                  className="w-5 h-auto object-contain rounded-[2px]"
                />
                <span className="header-link font-bold text-neutral-900 tracking-wide">
                  {selectedLang.code}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-800 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Language Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-white shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2 header-link text-left hover:bg-gray-50 transition-colors ${selectedLang.code === lang.code
                        ? "font-semibold text-[#F14646]"
                        : "text-gray-700"
                        }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.code}
                        className="w-4 h-auto object-contain rounded-[1px]"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 text-gray-800 flex items-center justify-center hover:bg-gray-200 hover:text-[#F14646] transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mb-4 rounded-2xl bg-white shadow-xl border border-gray-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 font-inter">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.label;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`header-link py-2.5 px-3 rounded-lg border-b border-gray-50 last:border-b-0 transition-colors ${isActive
                      ? "text-[#EE464B] font-semibold bg-red-50/50"
                      : "text-[#202020] hover:text-[#EE464B] hover:bg-gray-50"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
