"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const navLinks = [
  { label: "Home" },
  { label: "Automotive" },
  { label: "Industrial" },
  { label: "Super Precision" },
  { label: "Production", hasDropdown: true },
  { label: "Quality" },
  { label: "Contact us" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 pb-15 ${isScrolled ? "pt-0" : "pt-3 sm:pt-4"}`}>
      <Container className={`transition-all duration-300 ${isScrolled ? "!max-w-full !px-0" : "!max-w-[92%] w-[92%]"}`}>
        <div className={`bg-white overflow-hidden transition-all duration-300 ${isScrolled ? "rounded-none border-b border-gray-300 shadow-sm" : "rounded-[15px] sm:rounded-[20px] border border-gray-300 shadow-sm"}`}>
          <div className="flex items-center xl:py-3 px-4 sm:px-6 xl:px-8">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <img src="/moto/inmotion/logo.png" alt="In Motion Automotive" className="w-auto h-auto sm:h-[48px] w-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex flex-1 items-center justify-center nav-spacing">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`navlink flex items-center gap-1 whitespace-nowrap transition-colors ${activeNav === link.label
                    ? "text-[#C00F1F] font-semibold underline underline-offset-4 decoration-2 decoration-[#C00F1F]"
                    : "text-[#4A4A4A] hover:text-[#C0121C] font-regular"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} className={activeNav === link.label ? "text-[#C0121C]" : "text-[#4A4A4A]"} />}
                </button>
              ))}
            </nav>

            <div className="hidden xl:flex ml-auto">
              <Button text="View All Products" showIcon={true} variant="primary" />
            </div>

            {/* Mobile hamburger */}
            <div className="flex xl:hidden items-center ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="xl:hidden border-t border-gray-100 bg-white">
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                    className={`navlink flex items-center justify-between  text-left py-3  tracking-wide border-b border-gray-100 transition-colors ${activeNav === link.label
                      ? "text-[#C0121C] font-semibold"
                      : "text-gray-700 hover:text-[#C0121C] font-normal"
                      }`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={18} className="text-gray-500" />}
                  </button>
                ))}
                <div className="mt-4 flex items-center overflow-hidden">
                  <Button text="View All Products" showIcon={true} variant="primary" className="w-full" />
                </div>
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
