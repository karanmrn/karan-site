import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "border-accent/70 bg-accent text-ink shadow-[0_0_32px_rgba(159,184,199,0.12)] hover:border-accent-soft hover:bg-accent-soft",
    secondary:
      "border-line bg-panel text-foreground hover:border-muted hover:bg-panel-soft",
    ghost:
      "border-transparent bg-transparent text-muted hover:border-line hover:text-foreground",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
