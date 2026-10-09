"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: false, active: true },
    { name: "About Us", href: "#about", hasDropdown: false },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Catalog", href: "#catalog", hasDropdown: true },
    { name: "Contact Us", href: "#contact", hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full bg-[#020202] transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-2xl border-b border-white/10 py-3 md:py-4 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none py-3"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="block">
            <img
              src="/moto/ewocar/logo.webp"
              alt="Ewocar Logo"
              className="h-8 md:h-10 lg:h-11 min-[3800px]:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation (Visible on screens > 1030px) */}
        <nav className="hidden min-[1031px]:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1.5 transition-colors group py-2"
            >
              <Typography
                variant="span"
                color="white"
                className={`navbar transition-colors group-hover:text-gray-300 ${
                  link.active ? "font-bold text-white" : "font-normal text-white/90"
                }`}
              >
                {link.name}
              </Typography>
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-white/80 group-hover:text-gray-300 transition-transform group-hover:translate-y-0.5" />
              )}
            </Link>
          ))}
        </nav>

        {/* Header CTA Button (Visible on screens > 1030px) */}
        <div className="hidden min-[1031px]:flex items-center">
          <Button
            text="Explore Distributors"
            href="#distributors"
            showIcon={true}
            variant="dark"
            iconVariant="white"
          />
        </div>

        {/* Mobile/Tablet Menu Toggle (Kept for screens up to 1030px) */}
        <div className="min-[1031px]:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer (Kept for screens up to 1030px) */}
      {isMobileMenuOpen && (
        <div className="min-[1031px]:hidden w-full bg-[#020202] border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/5 text-white hover:text-gray-300"
              >
                <span className={`text-base font-primary ${link.active ? "font-bold" : "font-normal"}`}>
                  {link.name}
                </span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white/60" />}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                text="Explore Distributors"
                href="#distributors"
                showIcon={true}
                variant="dark"
                iconVariant="white"
                className="w-full justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
