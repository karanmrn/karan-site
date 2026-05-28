import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="py-32">
      <Container>
        <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">
          Page not found.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          This page does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← Back home
        </Link>
      </Container>
    </main>
  );
}
