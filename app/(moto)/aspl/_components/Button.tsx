"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline-white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true, 
  variant = "primary"
}: ButtonProps) => {

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

  let content;

  if (variant === "outline-white") {
    // 1st image style: transparent bg with tl and br rounded
    content = (
      <div 
        className={`flex items-center justify-center px-8 py-3 transition-colors shadow-sm 
        rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none
        language-links bg-transparent text-white border border-white hover:bg-[#212733]/80 font-semibold ${className}`}
      >
        <div className={`button whitespace-nowrap ${showIcon ? 'mr-3 sm:mr-4' : ''}`}>
          {text}
        </div>
        
      </div>
    );
  } else if (variant === "primary") {
    // 2nd image style: bg:#111111 and white arrow with 2xl rounded on all sides
    content = (
      <div 
        className={`inline-flex items-center bg-[#111111] hover:bg-black transition-colors rounded-2xl p-1.5 pl-6 group ${className}`}
      >
        <span className="text-white font-semibold language-links mr-4 whitespace-nowrap">
          {text}
        </span>
        {showIcon && (
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <img src="/moto/aspl/arrow-up-right.png" alt="Arrow" className="w-5 h-5 " />
          </div>
        )}
      </div>
    );
  } else {
    // Fallback/secondary style
    content = (
      <div 
        className={`flex items-center justify-center px-8 py-3 transition-colors shadow-sm 
        rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none
        language-links bg-white text-primary hover:bg-gray-100 border border-transparent font-semibold ${className}`}
      >
        <div className={`button whitespace-nowrap ${showIcon ? 'mr-3 sm:mr-4' : ''}`}>
          {text}
        </div>
        {showIcon && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2.5} />
        )}
      </div>
    );
  }

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
