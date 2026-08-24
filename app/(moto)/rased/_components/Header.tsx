"use client";

import Link from "next/link";
import { useState, useEffect, useId } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Company", id: "company" },
  { name: "product", id: "product" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
];

function UkFlagIcon({ className = "" }: { className?: string }) {
  const uid = useId();
  const clipOuter = `uk-outer-${uid}`;
  const clipDiag = `uk-diag-${uid}`;

  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id={clipOuter}>
        <path d="M0,0 h60 v30 h-60 z" />
      </clipPath>
      <clipPath id={clipDiag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${clipOuter})`}>
        <path d="M0,0 h60 v30 h-60 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clipDiag})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

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
        <div className="w-full h-22.5 flex items-center">
          <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/rased/logo.png"
                alt="Spaco Diesel R.A.S.E.D. Logo"
                className="h-10 w-auto object-contain"
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
                    className={`text-[15px] 2xl:text-base transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary font-bold" : "text-[#1A1A1A] font-medium hover:text-primary"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Language Selector */}
            <div className="hidden xl:flex items-center shrink-0">
              <button
                type="button"
                className="flex items-center gap-2 border border-[#D9D9D9] rounded-md px-3.5 py-2.5 hover:border-primary transition-colors"
              >
                <UkFlagIcon className="h-3.5 w-5 rounded-xs shrink-0" />
                <span className="text-[15px] font-bold text-[#1A1A1A]">ENG</span>
                <ChevronDown size={16} strokeWidth={2.5} className="text-[#1A1A1A]" />
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
                  className={`border-b border-gray-100 pb-3 text-lg cursor-pointer ${
                    isActive ? "text-primary font-bold" : "text-[#1A1A1A] hover:text-primary"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Language Selector */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#D9D9D9] rounded-md px-3.5 py-2.5 w-fit"
            >
              <span className="text-lg leading-none">🇬🇧</span>
              <span className="text-[15px] font-bold text-[#1A1A1A]">ENG</span>
              <ChevronDown size={16} strokeWidth={2.5} className="text-[#1A1A1A]" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
