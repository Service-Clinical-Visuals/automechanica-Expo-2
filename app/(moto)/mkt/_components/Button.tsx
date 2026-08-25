"use client";
import Link from "next/link";
import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
type ButtonVariant = "primary" | "secondary";
interface ButtonOwnProps {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Set false to render text only, no arrow icon */
  icon?: boolean;
  className?: string;
}
type ButtonAsButton = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & {
    href?: undefined;
  };
type ButtonAsLink = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonOwnProps> & {
    href: string;
  };
type ButtonProps = ButtonAsButton | ButtonAsLink;
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-white text-primary",
};
export default function Button({
  children,
  variant = "primary",
  icon = true,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = [
    "group",
    "btn-text",
    "font-accent",
    "font-medium",
    "inline-flex",
    "flex-row",
    "items-center",
    "justify-center",
    "gap-2.5",
    "px-5",
    "py-2",
    "rounded-lg",
    "shadow-[0px_3px_8px_rgba(0,0,0,0.24)]",
    "transition-all",
    "duration-300",
    "ease-out",
    "hover:opacity-90",
    "hover:scale-[1.03]",
    "active:scale-[0.98]",
    "whitespace-nowrap",
    variantClasses[variant],
    className,
  ].join(" ");
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Image
          src={
            variant === "primary"
              ? "/moto/mkt/white_arrow.png"
              : "/moto/mkt/brown_arrow.png"
          }
          alt=""
          width={15}
          height={11}
          className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}
      >
        {content}
      </Link>
    );
  }
  return (
    <button
      className={classes}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {content}
    </button>
  );
}