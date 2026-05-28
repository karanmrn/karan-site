import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { companySystems, githubLabs, personalSystems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Company systems, personal systems, and GitHub labs across data engineering, machine learning, data science, and AI systems.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Work"
          title="Depth in company systems. Breadth in public labs."
          description="The goal is not to look like a narrow specialist or a shallow generalist. It is to show judgement across data platforms, ML data infrastructure, analytics, AI systems, and product-minded personal work."
        />

        <section className="mt-14">
          <SectionHeader
            eyebrow="Company systems"
            title="Architecture, system design, influence, impact, and outcomes."
            description="Each company represents a different layer of the progression: reporting foundations, experimentation, streaming reliability, and AI-native data platforms."
          />
          <div className="mt-8 space-y-5">
            {companySystems.map((system) => (
              <article
                key={system.company}
                className="surface-line quiet-shadow rounded-md border border-line p-6"
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                      {system.dates}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold text-foreground">
                      {system.company}
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      {system.role} / {system.location}
                    </p>
                    <p className="mt-5 text-sm leading-6 text-muted">
                      {system.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {system.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Architecture
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {system.architecture}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Influence
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {system.influence}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Outcomes
                      </p>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted md:grid-cols-2">
                        {system.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Deep dives"
            title="Detailed case studies for the strongest systems."
            description="These are the pages to expand with architecture diagrams, failure modes, tradeoffs, and screenshots as the site matures."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Personal systems"
            title="Independent systems that show product thinking and builder range."
            description="These are intentionally separated from company proof. They show curiosity, taste, and ambition without overstating production adoption."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {personalSystems.map((system) => (
              <article
                key={system.name}
                className="rounded-md border border-line bg-panel p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                  {system.status}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {system.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {system.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                  {system.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {system.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="GitHub labs"
            title="A public implementation trail across data engineering, data science, ML, and AI systems."
            description="Forks are marked honestly as implementation labs. The plan is to rebuild, document, and turn the best ones into polished proof assets."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {githubLabs.map((lab) => (
              <article
                key={lab.area}
                className="rounded-md border border-line bg-panel p-5"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  {lab.area}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {lab.intent}
                </p>
                <div className="mt-6 space-y-4">
                  {lab.repos.map((repo) => (
                    <div key={repo.href} className="border-t border-line pt-4">
                      <Link
                        href={repo.href}
                        className="text-sm font-medium text-foreground transition hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {repo.name}
                      </Link>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {repo.note}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent-soft">
                        {repo.type}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
