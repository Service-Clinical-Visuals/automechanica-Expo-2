"use client";

import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "Products", dropdown: true },
  { label: "Certificates" },
  { label: "Gallery", dropdown: true },
  { label: "Catalogue" },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#D8A657"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-2 z-50 w-full bg-transparent overflow-hidden">
      <Container className="relative">
        <div className="flex items-center bg-black border border-white/25  rounded-full justify-between h-[64px] px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/moto/sarofim/logo.png"
              alt="Benzol Lubricants"
              className="h-9 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 navlink">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`flex items-center gap-1.5 whitespace-nowrap pb-1 text-[15px] font-medium transition-colors ${
                  activeNav === link.label
                    ? "text-white border-b-2 border-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown />}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button className="content-white rounded-full bg-[#B38037] px-6 py-2.5 text-sm font-semibold text-[#ffffff]! transition hover:brightness-105">
              Oil Finder
            </button>
            <button
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1A1A1A] transition hover:bg-gray-100"
            >
              <SearchIcon />
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
        <div className="lg:hidden bg-[#161616] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveNav(link.label);
                  setMenuOpen(false);
                }}
                className={`navlink flex items-center justify-between text-left py-3 text-sm border-b border-white/10 transition-colors ${
                  activeNav === link.label
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {link.dropdown && <ChevronDown />}
              </button>
            ))}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button className="rounded-full content-white bg-[#B38037] px-6 py-2.5 text-sm font-semibold text-[#ffffff]!">
                Oil Finder
              </button>
              <button
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1A1A1A]"
              >
                <SearchIcon />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
