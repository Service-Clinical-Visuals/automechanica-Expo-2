"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  onClick,
  className = "",
  icon,
  iconPosition = "right",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 btn-text  bg-[var(--color-primary)] text-white px-6 py-2 md:px-8 md:py-2 barlowCondensed transition-colors hover:bg-blue-800/90 ${className}`}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span className="font-heading font-semibold">{text}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
