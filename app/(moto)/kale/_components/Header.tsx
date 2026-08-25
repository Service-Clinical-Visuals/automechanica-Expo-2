"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "R&D Center", id: "rd-center" },
  { name: "Quality", id: "quality" },
  { name: "News", id: "news" },
  { name: "Media", id: "media" },
  { name: "Career", id: "career" },
  { name: "Communication", id: "communication" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const SHOW_THRESHOLD = 60;

    const handleScroll = () => {
      setIsSticky(window.scrollY > SHOW_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""; 
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const isVisible = isSticky || isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-70 transition-all duration-500 transform bg-white ${
          isVisible
            ? "translate-y-0 opacity-100 shadow-md border-b border-gray-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-[100px] flex items-center">
          <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/kale/logo.png"
                alt="Kale Oto Radyatör Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0 font-medium">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`whitespace-nowrap heading font-medium! text-[17px]! transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary!" : "text-[#4B5563]! hover:text-primary!"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Language */}
            <div className="hidden xl:flex items-center shrink-0">
              <button
                type="button"
                className="flex items-center  heading-white font-medium! text-[17px]! gap-1.5 text-white rounded-md px-5 py-2.5 hover:opacity-90 transition-opacity cursor-pointer bg-primary"
              >
                <span>Languages</span>
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors shrink-0 flex items-center justify-center min-w-11 min-h-11"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-85px)] overflow-y-auto font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`heading font-medium! text-[17px]! transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-primary!" : "text-[#1A1A1A]! hover:text-primary!"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Language */}
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 text-white heading-white font-medium! text-[17px]! rounded-md px-5 py-2.5 mt-1 w-full bg-primary"
            >
              <span>Languages</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
