"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/certifications", label: "Certs" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Builder" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/80 backdrop-blur-md">
      <Container
        size="wide"
        className="flex min-h-16 items-center justify-between"
      >
        <Link
          href="/"
          className="text-sm font-semibold text-foreground transition hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Karan home"
        >
          Karan
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href} className={item.href === "/certifications" ? "hidden sm:block" : undefined}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded px-2.5 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
