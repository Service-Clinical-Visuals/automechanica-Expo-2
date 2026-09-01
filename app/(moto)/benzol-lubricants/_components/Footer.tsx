"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";

const menuLinks = ["Home", "About", "Products", "Certificates"];

const productLinks = [
  "Automotive Lubricants",
  "Commercial Lubricants",
  "Industrial Lubricants",
  "Marine Lubricants",
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="6.7" r="1.3" fill="currentColor" />
      <line x1="7" y1="10.3" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M11 17v-4.5c0-1.5.9-2.5 2.3-2.5 1.3 0 2.2.9 2.2 2.6V17"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11" y1="10.3" x2="11" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5 8.5h1.9V6.1h-1.9c-2.05 0-3.5 1.45-3.5 3.5v1.6H8.7v2.4h2.3V21h2.6v-7.4h2l.4-2.4h-2.4v-1.4c0-.66.54-1.3 1.4-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "YouTube", icon: YoutubeIcon },
  { label: "X", icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-14 pb-8">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[30fr_15fr_17fr_20fr_18fr] gap-10">
            {/* Col 1: Logo + tagline */}
            <div className="flex flex-col gap-4">
              <img src="/moto/benzol-lubricants/logo.png" alt="Benzol Lubricants" className="h-ayto w-70" />
              <p className="content-white max-w-[420px]">
                BENZOL® Gold Performance is a global lubricant brand engineered for performance,
                protection, and reliability across demanding applications.
              </p>
            </div>

            {/* Col 2: Menu */}
            <div>
              <h4 className="content-white font-bold text-xl! mb-5">Menu</h4>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content-white">
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-[#D8A657] text-sm font-semibold underline hover:text-[#e6bb78] transition-colors">
                    See More &gt;&gt;
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div>
              <h4 className="content-white font-bold text-xl! mb-5">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content-white text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-[#D8A657] text-sm font-semibold underline hover:text-[#e6bb78] transition-colors">
                    See More &gt;&gt;
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <h4 className="content-white font-bold text-xl! mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[#D8A657] shrink-0 mt-0.5" />
                  <span className="content-white text-sm">+49 174 2131885</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-[#D8A657] shrink-0 mt-0.5" />
                  <span className="content-white text-sm">info@benzollubricants.de</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D8A657] shrink-0 mt-0.5" />
                  <span className="content-white text-sm">
                    Headquarters
                    <br />
                    Germany , DE
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 5: Social Media Links */}
            <div>
              <h4 className="content-white font-bold text-xl! mb-5">Social Media Links</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B38037] text-white transition hover:brightness-105"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-center content-white text-sm">
              Copyright © 2026 Benzol Deutschland | All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
