"use client";

import { useState, useEffect } from "react";
import Container from "./Container";

const navLinks = [
  { label: "Home", active: true },
  { label: "About Us" },
  { label: "Product" },
  { label: "Corporate" },
  { label: "Contact Us" },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled down past the hero section (e.g., 90% of viewport height)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0 shadow-md" : "-translate-y-full"} bg-white`}>
      <Container>
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/moto/gli-therm/header-logo.webp"
              alt="GLITHERM"
              className="h-auto w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors font-inter ${activeNav === link.label || link.active
                  ? "text-[#F14646] font-bold"
                  : "text-[#333333] font-normal hover:text-[#F14646]"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 border border-black rounded-md px-7 py-3 cursor-pointer hover:bg-gray-50">
              <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5" />
              <span className="text-sm font-semibold text-gray-800">ENG</span>
              <ChevronDown className="text-gray-800 ml-1" />
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveNav(link.label);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between text-left py-3 text-sm border-b border-gray-100 transition-colors ${activeNav === link.label || link.active
                  ? "text-[#F14646] font-semibold"
                  : "text-gray-800 hover:text-[#F14646]"
                  }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer">
                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5" />
                <span className="text-sm font-semibold text-gray-800">ENG</span>
                <ChevronDown className="text-gray-800 ml-1" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
