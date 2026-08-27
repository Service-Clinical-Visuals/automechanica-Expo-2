import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "solid-white";
  className?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  hasArrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center transition-all duration-300 rounded-[14px] px-8 py-2.5 font-semibold text-base whitespace-nowrap group";

  const variants: Record<string, string> = {
    primary: "bg-[#ed1c24] text-white hover:bg-[#c81b1e]",
    outline:
      "border border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white",
    "solid-white": "bg-white text-[var(--color-dark)] hover:bg-gray-100",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {hasArrow && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="ml-2 transition-transform group-hover:translate-x-1"
        >
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  );
}