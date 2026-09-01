"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Support", id: "support" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
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
                src="/moto/bartec/logo.png"
                alt="Bartec TPMS Logo"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-9 shrink-0 font-medium">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`relative group text-[15px] 2xl:text-base font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5 hover:text-primary ${
                      isActive ? "text-primary" : "text-[#1A1A1A]"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <span>{link.name}</span>
                    {link.name === "Products" && (
                      <ChevronDown size={16} strokeWidth={2.5} className="mt-0.5" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Search */}
            <div className="hidden xl:flex items-center shrink-0">
              <div className="flex items-center border border-primary rounded-md overflow-hidden h-11 w-65 2xl:w-75">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 h-full px-5 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="h-full aspect-square flex items-center justify-center bg-transparent text-white hover:bg-primary-hover transition-colors"
                >
                  <Search className="text-primary" size={18} strokeWidth={2.5} />
                </button>
              </div>
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
                  className={`border-b border-gray-100 pb-3 text-lg cursor-pointer flex justify-between ${
                    isActive ? "text-primary font-bold" : "text-[#1A1A1A] hover:text-primary"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                  {link.name === "Products" && (
                    <ChevronDown size={16} strokeWidth={2.5} className="opacity-50" />
                  )}
                </a>
              );
            })}

            {/* Mobile Search */}
            <div className="flex items-center border border-primary rounded-full overflow-hidden h-11 w-full">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-full px-5 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none bg-transparent"
              />
              <button
                type="button"
                aria-label="Search"
                className="h-full aspect-square flex items-center justify-center bg-transparent text-white"
              >
                <Search className="text-primary" size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
