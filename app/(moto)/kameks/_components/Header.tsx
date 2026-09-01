"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;

      if (y < 150) {
        setScrollState("top");
      } else if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTop = scrollState === "top";
  const isSticky = scrollState === "sticky";

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Quality", href: "#", hasDropdown: true },
    { name: "Product", href: "#", hasDropdown: true },
    { name: "Communication", href: "#", hasDropdown: true },
  ];

  return (
    <>
      <div className="h-[110px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full z-[999] transition-all duration-500 transform ${isMobileMenuOpen
            ? "fixed translate-y-0 opacity-100 bg-white"
            : isTop
              ? "absolute translate-y-0 opacity-100 bg-white"
              : isSticky
                ? "fixed translate-y-0 opacity-100 shadow-sm border-b border-gray-100 bg-white"
                : "fixed -translate-y-full opacity-0 pointer-events-none bg-white"
          }`}
      >
        <div
          className={`w-full bg-[#001659] text-white text-xs inter-font transition-all duration-300 overflow-hidden flex items-center ${isTop || isMobileMenuOpen ? "h-auto opacity-100 py-2 md:py-3" : "h-0 opacity-0 py-0"
            }`}
        >
          <div className="custom-container">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-0">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                <div className="flex items-center section-text gap-1.5 lg:gap-2">
                  <Phone size={24} className="w-[clamp(14px,1.2vw,28px)] h-[clamp(14px,1.2vw,28px)]" />
                  <span>0 (212) 672 04 26</span>
                </div>
                <div className="flex section-text items-center gap-1.5 lg:gap-2">
                  <Mail size={24} className="w-[clamp(14px,1.2vw,28px)] h-[clamp(14px,1.2vw,28px)]" />
                  <span>info@kameks.net</span>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-5 mt-1 md:mt-0">
                <Link href="#" className="hover:text-gray-300" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[clamp(16px,1.3vw,32px)] h-[clamp(16px,1.3vw,32px)]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </Link>
                <Link href="#" className="hover:text-gray-300" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[clamp(16px,1.3vw,32px)] h-[clamp(16px,1.3vw,32px)]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link>
                <Link href="#" className="hover:text-gray-300" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(16px,1.3vw,32px)] h-[clamp(16px,1.3vw,32px)]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[clamp(16px,1.3vw,32px)] h-[clamp(16px,1.3vw,32px)]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link>
                <Link href="#" className="hover:text-gray-300" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[clamp(16px,1.3vw,32px)] h-[clamp(16px,1.3vw,32px)]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="custom-container">
            <div className="flex items-center justify-between">
              {/* Logo Area */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="#">
                  <img src="/moto/kameks/logo.png" alt="Kameks Logo" className="h-auto object-contain header-logo" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-5 inter-font">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center gap-5">
                    <Link
                      href={link.href}
                      className={`header-link transition-colors py-2 whitespace-nowrap flex items-center gap-1.5 text-sm ${link.active
                        ? "text-[#F12535] font-semibold"
                        : "text-[#001659] hover:text-[#F12535] hover:font-semibold font-regular"
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={14} />}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className="text-gray-300 text-sm">|</span>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Tools Area */}
              <div className="hidden xl:flex items-center">
                <div className="relative flex items-center border border-[#001659] rounded-[8px] px-4 py-1.5 w-70">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-sm text-[#001659] placeholder:text-[#001659] bg-transparent inter-font"
                  />
                  <button className="text-[#001659] ml-2 hover:text-[#F12535] transition-colors">
                    <Search size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center gap-4">
                <button
                  className="text-[#001659] focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X size={32} strokeWidth={2} />
                  ) : (
                    <Menu size={32} strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-[999] border-t border-gray-100">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
                >
                  <div className="custom-container py-4 flex items-center justify-between">
                    <span className={`header-link inter-font text-sm ${link.active
                      ? "text-[#F12535] font-semibold"
                      : "text-[#001659] font-medium"
                      }`}>
                      {link.name}
                    </span>
                    {link.hasDropdown && <ChevronDown size={16} className="text-[#001659]" />}
                  </div>
                </Link>
              ))}
              <div className="custom-container py-4 flex flex-col gap-4">
                <div className="relative flex items-center border border-[#001659] rounded-[8px] px-4 py-2 w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-sm text-[#001659] placeholder:text-[#001659] bg-transparent inter-font"
                  />
                  <button className="text-[#001659] ml-2">
                    <Search size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
