"use client";

import React from "react";

type ButtonVariant = "solid" | "primary" | "outline-primary" | "outline-white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  hasArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-[#BA0C2F] text-white border border-transparent hover:bg-[#9E0A28]",
  primary: "bg-[#BA0C2F] text-white border border-transparent hover:bg-[#9E0A28]",
  "outline-primary":
    "bg-transparent border border-[#BA0C2F] text-[#BA0C2F] hover:bg-[#BA0C2F]/5",
  "outline-white":
    "bg-transparent border border-white text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "solid",
  hasArrow = false,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded font-medium text-base leading-tight whitespace-nowrap transition-colors duration-200 cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {hasArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-45 flex-shrink-0"
          aria-hidden="true"
        >
          <path
            d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}