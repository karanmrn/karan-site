import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { hardSkillGroups, softSkills } from "@/data/profile";
import { companySystems, githubLabs, personalSystems } from "@/data/work";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Builder Profile",
  description:
    "Builder profile for Karan Manoharan: senior data engineering depth, AI-native systems direction, and product-minded technical range.",
};

const buildLanes = [
  {
    title: "Data platforms",
    description:
      "Lakehouse foundations, governed models, semantic layers, orchestration, quality checks, and BI-ready surfaces.",
    proof: "Snowflake, Iceberg, dbt, Databricks, Spark, Kafka, Airflow",
  },
  {
    title: "AI-native interfaces",
    description:
      "Natural-language analytics, Cortex/agent surfaces, RAG/MCP experiments, and LLM workflows grounded in trusted data.",
    proof: "Snowflake Cortex, Snowflake Intelligence, Streamlit, RAG, MCP",
  },
  {
    title: "Product systems",
    description:
      "Small useful apps that turn messy signals into workflows, decisions, and repeatable operating patterns.",
    proof: "London rental intelligence, commercial apps, analytics tools",
  },
];

const builderPrinciples = [
  "Start from the decision, not the dashboard.",
  "Make the trusted path easier than the workaround.",
  "Ship the smallest useful system, then harden it around real usage.",
  "Treat AI as an interface over reliable systems, not a substitute for them.",
  "Prefer simple architecture that a team can actually operate.",
];

const careerContext = companySystems.map((system) => ({
  company: system.company,
  role: system.role,
  dates: system.dates,
  summary: system.summary,
  tags: system.tags.slice(0, 5),
}));

export default function ResumePage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionHeader
              eyebrow="Builder profile"
              title="Karan Manoharan"
              description="Senior Data Engineer building AI-native data systems, internal apps, semantic layers, and practical interfaces over governed data."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">See What I Build</Button>
              <Button href={`mailto:${site.email}`} variant="ghost">
                Contact
              </Button>
              <Button href={site.github} variant="secondary">
                GitHub
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-line bg-panel p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
              Current direction
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground">
              I want the site to show how I think and what I build: data
              platforms, AI-native analytics, internal tools, city-intelligence
              products, and experiments that turn new technology into useful
              systems.
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <SectionHeader
            eyebrow="What I build"
            title="Three lanes, one operating style."
            description="The through-line is not a job title. It is building useful systems from ambiguous problems, real constraints, and fast-changing tools."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {buildLanes.map((lane) => (
              <article
                key={lane.title}
                className="surface-line quiet-shadow rounded-md border border-line p-6"
              >
                <h2 className="font-display text-2xl leading-tight text-foreground">
                  {lane.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {lane.description}
                </p>
                <p className="font-mono mt-5 text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                  {lane.proof}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <SectionHeader
            eyebrow="Builder range"
            title="Employer systems, personal products, and labs."
            description="Company work proves depth. Personal systems and labs show curiosity, product instinct, and the habit of building beyond the job description."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {personalSystems.map((system) => (
                <article
                  key={system.name}
                  className="rounded-md border border-line bg-panel p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                    {system.status}
                  </p>
                  <h2 className="font-display mt-4 text-xl leading-tight text-foreground">
                    {system.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {system.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {system.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {githubLabs.map((lab) => (
                <article
                  key={lab.area}
                  className="rounded-md border border-line bg-panel p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {lab.repos.length} repos
                  </p>
                  <h2 className="font-display mt-4 text-lg leading-tight text-foreground">
                    {lab.area}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {lab.intent}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <SectionHeader
            eyebrow="How I think"
            title="First principles, then shipping."
            description="This is the part I want founders and AI teams to notice: I am not chasing tools. I am trying to understand the shape of the problem and build the system that makes progress easier."
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-5">
            {builderPrinciples.map((principle) => (
              <div key={principle} className="bg-background/95 p-5">
                <p className="text-sm leading-6 text-muted">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <SectionHeader
            eyebrow="Skill surface"
            title="Broad enough to build across the stack, deep enough to own the data layer."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {hardSkillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-md border border-line bg-panel p-5"
              >
                <h2 className="font-display text-xl leading-tight text-foreground">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {softSkills.slice(0, 4).map((skill) => (
              <article
                key={skill.name}
                className="rounded-md border border-line bg-background/45 p-4"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {skill.proof}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <SectionHeader
            eyebrow="Career context"
            title="Where the builder pattern has shown up professionally."
            description="This is intentionally compact. The site should be judged by the systems and thinking first, with experience as supporting context."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {careerContext.map((role) => (
              <article
                key={`${role.company}-${role.role}`}
                className="rounded-md border border-line bg-panel p-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-semibold text-foreground">
                      {role.company}
                    </h2>
                    <p className="mt-1 text-sm text-muted">{role.role}</p>
                  </div>
                  <p className="text-sm text-accent-soft">{role.dates}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {role.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Contact
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                {site.location} ·{" "}
                <Link
                  href={`mailto:${site.email}`}
                  className="text-foreground transition hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {site.email}
                </Link>{" "}
                ·{" "}
                <Link
                  href={site.linkedin}
                  className="text-foreground transition hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
            <Button href="/projects" variant="secondary">
              Inspect the Systems
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
