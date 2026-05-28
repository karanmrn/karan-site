import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "mailto:TODO:add-email", label: "Email", aria: "Email Karan" },
  { href: "https://www.linkedin.com/in/TODO-add-link", label: "LinkedIn", aria: "Karan on LinkedIn" },
  { href: "https://github.com/TODO-add-link", label: "GitHub", aria: "Karan on GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container
        size="wide"
        className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-muted">
          Senior Data Engineer building AI-native data systems.
        </p>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-label={link.aria}
                  className="text-sm text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
