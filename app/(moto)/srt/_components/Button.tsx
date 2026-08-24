import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  text,
  onClick,
  className = "",
  icon = <img src="/moto/srt/btnarw.png" alt="arrow" className="w-4 h-auto" />,
  iconPosition = "right",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`exo2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-foreground)] btn-text font-medium py-2.5 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm ${className}`}
    >
      {iconPosition === "left" && icon}
      <span>{text}</span>
      {iconPosition === "right" && icon}
    </button>
  );
}
