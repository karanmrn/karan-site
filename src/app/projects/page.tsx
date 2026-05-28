import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { CompanyVisual } from "@/components/CompanyVisual";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { UniversityProjectGrid } from "@/components/UniversityProjectGrid";
import { universityProjects } from "@/data/profile";
import { projects } from "@/data/projects";
import { companySystems, githubLabs, personalSystems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Company systems, personal systems, and GitHub labs across data engineering, machine learning, data science, and AI systems.",
};

const workTiers = [
  {
    label: "01",
    title: "Flagship case studies",
    description:
      "Three employer-backed systems with architecture, constraints, tradeoffs, failure modes, and measurable outcomes.",
  },
  {
    label: "02",
    title: "Company systems",
    description:
      "The broader career proof: platform ownership, stakeholder influence, and repeated delivery across real operating contexts.",
  },
  {
    label: "03",
    title: "Personal systems",
    description:
      "Independent product and city-intelligence work, separated from employer proof so the signal stays honest.",
  },
  {
    label: "04",
    title: "University projects",
    description:
      "Academic and early portfolio projects from Cardiff and self-directed learning, kept separate from employer proof.",
  },
  {
    label: "05",
    title: "GitHub labs",
    description:
      "Public implementation trail across data engineering, data science, ML foundations, and AI systems exploration.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <section>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeader
              eyebrow="Work"
              title="A proof system, not a project archive."
              description="The page is intentionally separated by signal strength. CTOs and founders should see senior data-platform proof first, then the surrounding career context, product range, and AI-systems trajectory."
            />
            <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
              {workTiers.map((tier) => (
                <article key={tier.label} className="bg-background/95 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                    §{tier.label}
                  </p>
                  <h2 className="font-display mt-4 text-xl leading-tight tracking-tight text-foreground">
                    {tier.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {tier.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeader
            eyebrow="§01 · Flagship case studies"
            title="The three systems to inspect first."
            description="These are the serious deep dives: lakehouse architecture, governed metrics, and streaming reliability. They carry the senior/staff signal and should become the most detailed pages on the site."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="§02 · Company systems"
            title="The operating record behind the case studies."
            description="This is the broader career layer: where the systems ran, what they influenced, and how the work connected architecture to commercial or operational outcomes."
          />
          <div className="mt-8 grid gap-5">
            {companySystems.map((system) => (
              <article
                key={system.company}
                className="surface-line quiet-shadow rounded-md border border-line p-6"
              >
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
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
                    {system.visual ? (
                      <CompanyVisual visual={system.visual} />
                    ) : null}
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded border border-line bg-background/35 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Architecture
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {system.architecture}
                      </p>
                    </div>
                    <div className="rounded border border-line bg-background/35 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Influence
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {system.influence}
                      </p>
                    </div>
                    <div className="rounded border border-line bg-background/35 p-4 md:col-span-2">
                      <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                        Outcomes
                      </p>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted md:grid-cols-2">
                        {system.impact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span>{item}</span>
                          </li>
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
            eyebrow="§03 · Personal systems"
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

        <section id="university-projects" className="mt-20 scroll-mt-24">
          <SectionHeader
            eyebrow="§04 · University projects"
            title="Cardiff, Kaggle, and early systems practice."
            description="This is the learning arc behind the senior work: classical ML, cloud pipelines, forecasting, scraping, and exploratory analytics. Useful context, not the main proof layer."
          />
          <div className="mt-8">
            <UniversityProjectGrid projects={universityProjects} />
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="§05 · GitHub labs"
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
