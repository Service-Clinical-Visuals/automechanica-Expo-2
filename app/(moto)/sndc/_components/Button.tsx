"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "outline" | "solid";
type ButtonColor = "primary" | "secondary" | "white";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  type?: "button" | "submit";
}

const colorStyles: Record<ButtonColor, { outline: string; solid: string }> = {
  primary: {
    outline:
      "border-[#D3111B] text-[#D3111B] bg-transparent hover:bg-[#D3111B] hover:text-white",
    solid: "border-[#D3111B] bg-[#D3111B] text-white hover:opacity-90",
  },
  secondary: {
    outline:
      "border-[#27337F] text-[#27337F] bg-transparent hover:bg-[#27337F] hover:text-white",
    solid: "border-[#27337F] bg-[#27337F] text-white hover:opacity-90",
  },
  white: {
    outline:
      "border-white text-white bg-transparent hover:bg-white hover:text-[#202020]",
    solid: "border-white bg-white text-[#202020] hover:opacity-90",
  },
};

export default function Button({
  text,
  href,
  onClick,
  variant = "outline",
  color = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const styles = colorStyles[color][variant];
  const baseClasses = `inline-flex flex-row items-center justify-center gap-[10px] px-[25px] py-[10px] rounded-[10px] border btn-text font-medium whitespace-nowrap transition-colors duration-200 ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
}