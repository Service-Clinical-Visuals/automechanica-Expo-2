"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "Products" },
  { label: "News" },
  { label: "Career" },
  { label: "Distribution" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-5 z-50 w-full bg-[#0D0D0D]">
      <Container className="relative">
        <div className="flex rounded-lg items-center justify-between h-[64px] px-4 sm:px-8 md:px-14 lg:px-[60px] border border-white/25">
          {/* Logo */}
          <div className="flex items-center shrink-0 border border-white/25 p-2">
            <img src="/moto/sarofim/logo.png" alt="Sarofim" className="h-9 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={` navlink whitespace-nowrap pb-1 text-[15px] font-medium transition-colors ${
                  activeNav === link.label
                    ? "text-primary! border-b-2 border-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right action */}
          <div className="hidden lg:flex items-center shrink-0">
            <button className="navlink group flex items-center gap-2 rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
              Get In Touch
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveNav(link.label);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between text-left py-3 text-sm border-b border-white/10 transition-colors ${
                  activeNav === link.label
                    ? "text-primary font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
            <div className="mt-4 flex justify-center">
              <button className="navlink group flex items-center gap-2 rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white">
                Get In Touch
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
