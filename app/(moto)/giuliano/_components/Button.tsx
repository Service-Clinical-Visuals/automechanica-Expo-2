"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  text,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const content = (
    <span className={`group relative inline-flex items-center bg-white rounded-[10px] pl-4 pr-[22px] py-[10px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] ${className}`}>
      <span className="btn-text whitespace-nowrap transition-colors duration-300">
        {text}
      </span>

      {/* Diamond arrow */}
      <span className="absolute -right-[29px] top-[3px] w-[40px] h-[40px] rotate-45 rounded-[13px] bg-[#18A2DE] border border-black/[0.24] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#159BD7]">
        <ArrowRight className="w-[14px] h-[14px] text-white -rotate-45 transition-transform duration-300 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block -translate-x-3 transition-transform duration-300 hover:translate-x-[-12px]">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block -translate-x-3 transition-transform duration-300 hover:translate-x-[-12px]">
      {content}
    </button>
  );
}