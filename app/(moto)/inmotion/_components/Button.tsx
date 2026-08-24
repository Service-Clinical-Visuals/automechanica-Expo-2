"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  showIcon?: boolean;
}

const Button = ({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = false,
}: ButtonProps) => {
  const baseStyles = "btn-text inline-flex items-center justify-center transition-colors duration-300 active:scale-95 select-none cursor-pointer px-[20px] py-[12px] gap-[10px] shadow-[0px_3px_8px_0px_#0000003D]";

  let variantStyles = "";

  if (variant === "primary") {
    // Red button
    variantStyles = "bg-[#C00F1F] text-white hover:bg-red-800";
  } else if (variant === "secondary") {
    // Dark blue button
    variantStyles = "bg-[#C00F1F] text-white hover:opacity-90";
  } else if (variant === "white") {
    variantStyles = "bg-white text-[#062AAA] hover:bg-gray-100";
  }

  const content = (
    <>
      <span>{text}</span>
      {showIcon && (
        <ArrowRight size={18} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  const finalStyles = `group ${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles}>
      {content}
    </button>
  );
};

export default Button;
