"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;
      if (window.scrollY >= threshold) {
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
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <header
        className={`top-0 left-0 w-full z-[999] transition-all duration-500 transform ${isVisible || isMobileMenuOpen
          ? "fixed translate-y-0 opacity-100 shadow-sm border-b border-[#0F53CC] bg-white"
          : "fixed -translate-y-full opacity-0 pointer-events-none bg-white"
          }`}
      >
        <div className="py-3">
          <div className="custom-container">
            <div className="flex items-center justify-between gap-8 lg:gap-8">
              {/* Logo Area */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="#">
                  <img src="/moto/twin/logo.png" alt="Twin Busch Logo" className="header-logo h-auto object-contain" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-12 inter-font">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`header-link transition-colors py-2 whitespace-nowrap flex items-center text-sm ${link.active
                      ? "text-[#000000] font-bold"
                      : "text-[#000000] hover:text-[#0F53CC] font-medium"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Right Tools Area */}
              <div className="hidden lg:flex items-center">
                <Button href="#" className="">
                  Request Quote
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-4">
                <button
                  className="text-[#000000] focus:outline-none"
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
          <div className="lg:hidden fixed h-[calc(100vh-80px)] overflow-y-auto top-full left-0 w-full bg-white shadow-lg flex flex-col z-[999] border-t border-gray-100">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
                >
                  <div className="custom-container py-4 flex items-center justify-between">
                    <span className={`inter-font text-sm ${link.active
                      ? "text-[#000000] font-bold"
                      : "text-[#000000] font-medium"
                      }`}>
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
              <div className="custom-container py-4 mt-2 flex justify-center">
                <Button href="#" className="w-full max-w-sm">
                  Request Quote
                </Button>
              </div>            </nav>
          </div>
        )}
      </header>
    </>
  );
}
