"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "solid" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-[12px] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] font-medium btn-text " +
    "px-5 py-2 text-sm " +
    "sm:px-6 sm:py-2.5 sm:text-sm " +
    "md:px-7 md:py-2.5 md:text-base " +
    "xl:px-9 xl:py-[11px] xl:text-base " +
    "min-[1920px]:px-10 min-[1920px]:py-3 min-[1920px]:text-lg " +
    "min-[2560px]:px-12 min-[2560px]:py-4 min-[2560px]:text-xl min-[2560px]:rounded-[16px] " +
    "hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] active:translate-y-0";

  const variants = {
    primary:
      "bg-[#00355B] text-white border border-white hover:bg-[#00253f] hover:shadow-[0_8px_20px_rgba(0,53,91,0.35)]",

    solid:
      "bg-[#00355B] text-white border border-transparent hover:bg-[#00253f] hover:shadow-[0_8px_20px_rgba(0,53,91,0.25)]",

    outline:
      "bg-transparent text-[#00355B] border border-[#00355B] hover:bg-[#00355B] hover:text-white hover:shadow-[0_8px_20px_rgba(0,53,91,0.2)]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}