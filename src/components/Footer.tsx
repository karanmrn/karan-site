import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const links = [
  { href: `mailto:${site.email}`, label: "Email", aria: "Email Karan", external: false },
  { href: site.linkedin, label: "LinkedIn", aria: "Karan on LinkedIn", external: true },
  { href: site.github, label: "GitHub", aria: "Karan on GitHub", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container
        size="wide"
        className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-muted">
          Senior Data Engineer building at the intersection of data platforms and AI systems.
        </p>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-label={link.aria}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
