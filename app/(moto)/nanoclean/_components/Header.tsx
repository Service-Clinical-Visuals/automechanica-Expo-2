"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#about" },
    { name: "Product", href: "#products" },
    { name: "Corporate", href: "#corporate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out w-full bg-white ${
        isScrolled
          ? "translate-y-0 opacity-100 shadow-md py-3.5"
          : "-translate-y-full opacity-0 pointer-events-none py-0"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="block">
            <img
              src="/moto/nanoclean/logo.webp"
              alt="NANOCLEAN Logo"
              className="w-[170px] sm:w-[210px] md:w-[239px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group"
            >
              <Typography
                variant="span"
                color={link.active ? "primary" : "dark"}
                className={`navbar transition-colors group-hover:text-[var(--color-primary)] ${
                  link.active
                    ? "font-bold text-[var(--color-primary)] underline underline-offset-8 decoration-2"
                    : "font-normal text-[#404040]"
                }`}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-2.5 px-6 py-2.5 border border-[#71717A] rounded-[10px] bg-white cursor-pointer hover:border-[var(--color-primary)] transition-colors">
            <Search className="w-4 h-4 text-[#404040]" strokeWidth={2} />
            <span className="font-medium text-[14px] text-[#404040] select-none">
              Search Item
            </span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            className="text-[#202020] focus:outline-none p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col z-50 top-full animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col py-4 custom-container gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 border-b border-gray-100 ${
                  link.active
                    ? "text-[var(--color-primary)] font-bold"
                    : "text-[#404040]"
                }`}
              >
                <Typography variant="span" color={link.active ? "primary" : "dark"}>
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 border border-[#71717A] rounded-[10px] w-full">
                <Search className="w-4 h-4 text-[#404040]" strokeWidth={2} />
                <span className="font-medium text-[14px] text-[#404040]">
                  Search Item
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
