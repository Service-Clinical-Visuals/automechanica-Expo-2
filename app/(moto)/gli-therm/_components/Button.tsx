"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "outline" | "white-outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  showArrow?: boolean | "hover";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
  showArrow = "hover",
}: ButtonProps) {
  let buttonStyle = "bg-[#EE464B] text-white hover:bg-[#d73d42] border border-[#EE464B]";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#EE464B] border border-white hover:bg-[#EE464B] hover:text-white hover:border-[#EE464B]";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#EE464B] border border-[#EE464B] hover:bg-[#EE464B] hover:text-white hover:border-[#EE464B]";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-white border border-white hover:bg-[#EE464B] hover:text-white hover:border-[#EE464B]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[8px] rounded-[10px] px-[20px] py-[10px] w-auto h-[40px] shadow-[0px_1px_2px_0px_#0000000D] select-none transition-all duration-300 group active:scale-95 cursor-pointer font-bold font-inter opacity-100 ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-inter transition-colors duration-300">
        {children}
      </span>
      {showArrow === true && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {showArrow === "hover" && (
        <ArrowRight className="w-0 -mr-1 opacity-0 group-hover:w-4 group-hover:mr-0 group-hover:opacity-100 transition-all duration-300 shrink-0 group-hover:translate-x-0.5" />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] font-inter font-bold"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] cursor-pointer font-inter font-bold"
    >
      {content}
    </button>
  );
}
