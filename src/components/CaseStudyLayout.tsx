import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";

type CaseStudyLayoutProps = {
  project: Project;
};

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <Link
          href="/projects"
          className="text-sm text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Back to projects
        </Link>
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-accent-soft">
            {project.focus}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {project.summary}
          </p>
          <p className="mt-8 text-sm text-muted">{project.status}</p>
        </div>
        <div className="mt-16 border-t border-line">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="grid gap-5 border-b border-line py-10 md:grid-cols-[240px_1fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                  Case note
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
