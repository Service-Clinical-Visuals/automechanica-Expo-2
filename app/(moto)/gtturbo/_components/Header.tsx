"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header style when scrolled down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Power Packages", href: "#" },
    { name: "Services", href: "#" },
    { name: "Inside GT", href: "#" },
  ];

  return (
    <header className={`w-full fixed left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "top-0" : "top-4"}`}>
      <div className={`mx-auto bg-[#0B0E17] shadow-sm transition-all duration-300 ${isScrolled ? "w-full border-b border-gray-800" : "w-[96%] border border-gray-800 rounded-xl"}`}>
        <div className="custom-container relative flex items-center h-[70px] md:h-[80px] min-[3800px]:h-[130px] px-4 md:px-8">
          {/* Logo */}
          <Link href="#" className="flex items-center z-20 shrink-0">
            <img
              src="/moto/gtturbo/logo.png"
              alt="GT Turbo Logo"
              className="h-8 md:h-[42px] min-[3800px]:h-[68px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex absolute inset-x-0 justify-center z-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`navbar font-light transition-colors whitespace-nowrap ${link.active ? "text-white" : "text-white/80 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Icons */}
          <div className="ml-auto hidden xl:flex items-center gap-6 z-20 shrink-0 text-white">
            <button aria-label="Search" className="hover:text-[#E02027] transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="User Account" className="hover:text-[#E02027] transition-colors">
              <User size={20} />
            </button>
            <button aria-label="Shopping Bag" className="hover:text-[#E02027] transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden ml-auto z-20 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute left-0 right-0 top-full bg-[#0B0E17] border-b border-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"
          }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block navbar font-regular ${link.active ? "text-[#E02027]" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-center gap-6 text-white">
            <button aria-label="Search">
              <Search size={24} />
            </button>
            <button aria-label="User Account">
              <User size={24} />
            </button>
            <button aria-label="Shopping Bag">
              <ShoppingBag size={24} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
