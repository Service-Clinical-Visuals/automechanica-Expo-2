"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = window.innerWidth >= 768 ? window.innerWidth * 0.5625 : window.innerWidth * 1.25;
      const threshold = bannerHeight * 0.8;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
        setIsHidden(false);
      } else if (window.scrollY > 100) {
        setIsScrolled(false);
        setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "e-catalogue", href: "#" },
    { name: "Create Catalogue", href: "#" },
    { name: "Distributors", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-100"
          : "top-4 bg-transparent py-0"
        }`}
    >
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 lg:px-0"
        : "rounded-[1.5rem] border border-gray-200 bg-white shadow-sm px-6 lg:px-8 py-3"
        }`}>

        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="block">
            <img src="/moto/skt/logo.png" alt="SKT Logo" className="w-[100px] md:w-[120px] lg:w-[120px] min-[3800px]:w-[320px] h-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex flex-col"
            >
              <Typography variant="span" color={idx === 0 ? "primary" : "dark"} className={`navbar transition-colors group-hover:text-[var(--color-primary)] ${idx === 0 ? "font-bold" : ""}`}>
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button text="Get In Touch" href="#" showIcon={true} iconVariant="dark" />
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-black focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute left-0 w-full bg-white border-b border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full`}>
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100"
              >
                <Typography variant="span" color={idx === 0 ? "primary" : "dark"} className="navbar">
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex flex-col gap-4 items-start">
              <Button text="Get In Touch" href="#" showIcon={true} iconVariant="dark" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
