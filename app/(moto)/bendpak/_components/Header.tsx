"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
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
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Product", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-[#161616] transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/bendpak/logo.png" alt="BendPak Logo" className="h-auto w-auto object-contain brightness-0 invert" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-10 lg:gap-10 inter-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap ${link.active
                    ? "text-white font-bold"
                    : "text-white hover:text-white hover:font-bold font-normal"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Tools Area */}
            <div className="hidden lg:flex items-center gap-6">
              <Button href="#" variant="primary" className="!w-auto">
                Request Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                className="text-white focus:outline-none"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <span className={`header-link inter-font text-sm ${link.active
                    ? "text-[#000000] font-bold"
                    : "text-[#000000] font-normal"
                    }`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-4 flex gap-4 justify-start items-center">
              <div className="flex items-center gap-2 border border-gray-300 rounded-[5px] px-3 py-1.5">
                <img src="/moto/cevam/flag2.png" alt="EN" className="h-4 w-6 object-cover rounded-sm" />
                <span className="text-[#202020] text-sm font-semibold inter-font">ENG</span>
                <ChevronDown size={16} className="text-[#202020]" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
