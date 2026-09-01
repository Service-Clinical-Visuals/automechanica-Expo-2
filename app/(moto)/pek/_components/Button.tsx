import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "solid-white" | "outline-red";
  className?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "outline-red",
  className = "",
  onClick,
  hasArrow = false,
}: ButtonProps) {
  // Base styles matching Figma auto-layout with added smooth transitions and focus rings
  const baseStyles =
    "inline-flex items-center justify-center rounded-[10px] transition-all duration-300 ease-out font-space-grotesk font-bold btn-text px-[25px] py-[12px] h-[46px] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E20A17] focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#213455] text-white hover:bg-[#1a2942] hover:shadow-md",
    secondary:
      "bg-white text-[#213455] hover:bg-gray-100 hover:shadow-md",
    outline:
      "border border-[#FFFFFF] text-white hover:bg-white/10 hover:shadow-xs",
    "solid-white":
      "bg-white text-gray-900 hover:bg-gray-100 hover:shadow-md",
    "outline-red":
      "border border-[#E20A17] text-[#E20A17] hover:bg-[#E20A17] hover:text-white hover:shadow-md hover:border-transparent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {hasArrow && (
        <ArrowRight
          className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${combinedClassName} group`}>
      {content}
    </button>
  );
}