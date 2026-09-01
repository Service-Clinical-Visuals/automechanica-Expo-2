import { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "white";
  className?: string;
  // HTMLButtonAttributes already provides onClick, type, data-*, etc.
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] border bg-transparent transition-colors duration-300 font-bold btn-text px-[25px] py-[10px] group";

  const variants = {
    primary:
      "border-[#DA0812] text-[#DA0812] hover:bg-[#DA0812] hover:text-white",
    white: "border-white text-white hover:bg-white hover:text-[#202020]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
      <ArrowRight
        size={20}
        strokeWidth={2}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}