import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";

type CaseStudyLayoutProps = {
  project: Project;
  nextProject?: Project;
};

function ArchitectureFlow({ project }: CaseStudyLayoutProps) {
  if (!project.architecture) {
    return null;
  }

  const architecture = project.architecture;

  return (
    <section className="mt-14 rounded-md border border-line bg-panel p-5 sm:p-6">
      <div className="max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
          § architecture
        </p>
        <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-foreground">
          {architecture.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted">
          {architecture.note}
        </p>
      </div>
      <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
        {architecture.steps.map((step, index) => (
          <div key={step.label} className="flex min-w-[230px] items-stretch gap-3">
            <article className="min-h-44 flex-1 rounded border border-line bg-background/45 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                §{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-base leading-tight text-foreground">
                {step.label}
              </h3>
              <p className="mt-3 text-xs leading-5 text-muted">{step.detail}</p>
            </article>
            {index < architecture.steps.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-muted"
              >
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGallery({ project }: CaseStudyLayoutProps) {
  if (!project.evidence) {
    return null;
  }

  const evidence = project.evidence;

  return (
    <section className="mt-6 rounded-md border border-line bg-background/45 p-5 sm:p-6">
      <div className="max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
          § visual proof
        </p>
        <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-foreground">
          {evidence.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted">{evidence.note}</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {evidence.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-md border border-line bg-panel"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center bg-white/95 p-4">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line px-4 py-3 text-xs leading-5 text-muted">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyLayout({ project, nextProject }: CaseStudyLayoutProps) {
  return (
    <main id="main-content" className="py-16 sm:py-24">
      <Container>
        <Link
          href="/projects"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← back to work
        </Link>
        <header className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="font-mono mt-8 text-[10px] uppercase tracking-[0.22em] text-accent-soft">
            § {project.focus}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {project.summary}
          </p>
          <p className="font-mono mt-8 text-[11px] uppercase tracking-[0.22em] text-muted">
            {project.status}
            {project.state ? ` · ${project.state.toLowerCase()}` : ""}
          </p>
        </header>
        <ArchitectureFlow project={project} />
        <EvidenceGallery project={project} />
        <div className="mt-16 border-t border-line">
          {project.sections.map((section, i) => {
            const isFailureSection =
              section.title.toLowerCase() === "what failed";
            return (
              <section
                key={section.title}
                className="group/section grid gap-5 border-b border-line py-10 transition-all hover:border-l hover:border-l-accent/30 hover:pl-2 md:grid-cols-[240px_1fr]"
              >
                <div>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                      isFailureSection ? "text-accent-warm" : "text-muted"
                    }`}
                  >
                    § {String(i + 1).padStart(2, "0")} ·{" "}
                    {isFailureSection ? "post-mortem" : "case note"}
                  </p>
                  <h2
                    className={`font-display mt-3 text-2xl ${
                      isFailureSection ? "text-accent-warm-soft" : "text-foreground"
                    }`}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-7 text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        {nextProject && (
          <div className="mt-16 border-t border-line pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              § up next
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-4 flex items-start justify-between gap-6 rounded-md border border-line bg-panel p-5 transition hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-soft">
                  {nextProject.focus}
                </p>
                <h2 className="font-display mt-3 text-2xl leading-tight text-foreground">
                  {nextProject.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                  {nextProject.summary}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-foreground"
              >
                →
              </span>
            </Link>
          </div>
        )}
      </Container>
    </main>
  );
}
