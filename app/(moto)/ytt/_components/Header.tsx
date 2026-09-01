"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Product", href: "#" },
  { name: "Company", href: "#" },
  { name: "Media", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#DA0812] z-50 transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-lg"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/moto/ytt/logo.png"
              alt="YTT Automotive"
              className="w-[160px] md:w-[190px] xl:w-[213px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link transition-opacity ${
                  link.active
                    ? "text-white font-bold"
                    : "text-white font-normal hover:opacity-80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language selector */}
          <div className="hidden xl:flex items-center">
            <button className="flex items-center gap-2.5 border border-white rounded-[10px] px-[25px] py-[10px]">
              <span className="btn-text font-bold text-white capitalize tracking-tight">
                ENG
              </span>
              <ChevronDown size={20} strokeWidth={2.5} color="#FFFFFF" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="xl:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <Menu size={28} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden w-full bg-[#DA0812] border-t border-white/20">
          <div className="custom-container">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link py-2 text-white ${
                    link.active ? "font-bold" : "font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="flex items-center justify-center gap-2.5 border border-white rounded-[10px] px-[25px] py-[10px] mt-3 w-fit">
                <span className="btn-text font-bold text-white capitalize tracking-tight">
                  ENG
                </span>
                <ChevronDown size={20} strokeWidth={2.5} color="#FFFFFF" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}