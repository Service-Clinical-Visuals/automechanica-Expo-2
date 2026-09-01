"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Search } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about-us" },
  { name: "Products", id: "product" },
  { name: "Production", id: "production" },
  { name: "Corporate", id: "corporate" },
  { name: "Contact", id: "contact" },
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
                src="/moto/meha/logo.png"
                alt="Meha Automotive Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8 2xl:space-x-10 shrink-0 font-medium">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`subheading transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary! font-normal!" : "font-normal! hover:text-primary!"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Language + Search */}
            <div className="hidden xl:flex items-center gap-4 shrink-0">
              <button
                type="button"
                className="subheading font-normal! flex items-center gap-2 text-[15px] text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer"
              >
                <Globe size={18} />
                <span>Language</span>
              </button>
              <span className="h-5 w-px bg-gray-300" />
              <button
                type="button"
                aria-label="Search"
                className="text-primary hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Search size={18} />
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
                    className={`subheading transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary! font-normal!" : "font-normal! hover:text-primary!"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Language + Search */}
            <div className="flex items-center gap-4 pt-1">
              <button type="button" className=" subheading font-normal! flex items-center gap-2 text-[#1A1A1A]">
                <Globe size={18} />
                <span>Language</span>
              </button>
              <span className="h-5 w-px bg-gray-300" />
              <button type="button" aria-label="Search" className="text-primary">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
