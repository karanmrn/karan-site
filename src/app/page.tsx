import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications, featuredCertifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { companySystems, githubLabs, personalSystems } from "@/data/work";
import { site } from "@/lib/site";

const proofPoints = [
  {
    value: "1,389",
    label: "outlets unified through Snowflake Iceberg lakehouse work",
  },
  {
    value: "GBP 2.2M",
    label: "revenue growth contribution through unit-economics work",
  },
  {
    value: "50M+",
    label: "daily events processed through Databricks streaming pipelines",
  },
  {
    value: "80 -> <10",
    label: "monthly data quality incidents after reliability work",
  },
];

const operatingPrinciples = [
  "Elegant simplicity over complex perfection",
  "First principles before fashionable architecture",
  "Situational awareness before premature optimisation",
  "Systems that align incentives, not just data models",
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                § 00 · Field notes · London · 2026
              </p>
              <h1 className="font-display mt-10 max-w-5xl text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Most data platforms fail because they model{" "}
                <span className="italic text-accent-soft">data</span>, not{" "}
                <span className="italic text-accent-warm">incentives</span>.
              </h1>
              <p className="font-mono mt-10 text-xs uppercase tracking-[0.22em] text-accent-soft">
                Karan Manoharan · Senior Data Engineer · AI Engineer
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                I build data platforms with one core belief: elegant simplicity
                beats complex perfection. I lead from first principles, turning
                ambiguous business problems into trusted, scalable data and AI
                systems that help stakeholders make better decisions.
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-line bg-panel/70 px-4 py-2">
                <span className="live-dot h-2 w-2 rounded-full" />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm-soft">
                  Open to Senior / Staff / AI Engineer roles / UK
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/projects">View Work</Button>
                <Button href="/resume" variant="secondary">
                  Resume
                </Button>
                <Button href={`mailto:${site.email}`} variant="ghost">
                  Get in Touch
                </Button>
              </div>
              <Link
                href={site.linkedin}
                className="font-mono mt-6 inline-flex text-xs uppercase tracking-[0.18em] text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                linkedin.com/in/karanmanoharan23 →
              </Link>
            </div>

            <aside className="sql-block quiet-shadow overflow-hidden">
              <div className="flex items-center justify-between border-b border-line bg-background/60 px-4 py-2.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  karan.shipped · worksheet
                </p>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-accent-warm/70" />
                </div>
              </div>
              <pre className="overflow-x-auto px-5 py-6 text-[13px] leading-6 text-muted-strong">
{`  `}<span className="sql-keyword">SELECT</span>{` `}<span className="sql-keyword">*</span>{` `}<span className="sql-keyword">FROM</span>{` karan.shipped`}<span className="sql-keyword">;</span>
              </pre>
              <div className="border-t border-line bg-background/40">
                <div className="grid grid-cols-2 divide-x divide-line">
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      outlets
                    </p>
                    <p className="font-mono sql-result-num mt-2 text-2xl">
                      1,389
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      revenue_growth
                    </p>
                    <p className="font-mono sql-result-num mt-2 text-2xl">
                      GBP 2.2M
                    </p>
                  </div>
                  <div className="border-t border-line p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      daily_events
                    </p>
                    <p className="font-mono sql-result-num mt-2 text-2xl">
                      50M+
                    </p>
                  </div>
                  <div className="border-t border-line p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      incident_drop
                    </p>
                    <p className="font-mono sql-result-num mt-2 text-2xl">
                      80 -&gt; &lt;10
                    </p>
                  </div>
                </div>
                <div className="border-t border-line px-4 py-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    4 rows · 0.12s · cached
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-panel/40">
        <Container size="wide">
          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              § track record · shipped at
            </p>
            <div className="font-mono flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-strong">
              {companySystems.map((c, i) => (
                <span key={c.company} className="inline-flex items-center gap-5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-line-strong">
                      ·
                    </span>
                  )}
                  <span>{c.company}</span>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-14 sm:py-16">
        <Container>
          <SectionHeader
            eyebrow="Operating system"
            title="I care about the shape of the system, not just the stack."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <div
                key={principle}
                className="rounded-md border border-line bg-panel p-5"
              >
                <p className="text-lg leading-7 text-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-panel/35 py-6">
        <Container size="wide">
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
            {proofPoints.map((point, i) => (
              <div key={point.value} className="bg-background/95 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  §{String(i + 1).padStart(2, "0")} · proof
                </p>
                <p className="font-mono mt-4 text-3xl text-accent-warm">
                  {point.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Company systems"
            title="The senior proof layer: architecture, influence, and measurable outcomes."
            description="Company work shows depth: platform decisions, stakeholder alignment, business impact, and the judgement to make systems easier to operate."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {companySystems.map((system) => (
              <article
                key={system.company}
                className="surface-line quiet-shadow rounded-md border border-line p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                  {system.dates}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">
                  {system.company}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {system.role} / {system.location}
                </p>
                <p className="mt-5 text-sm leading-6 text-muted">
                  {system.summary}
                </p>
                <div className="mt-6 grid gap-4 border-t border-line pt-5 md:grid-cols-2">
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
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Deep dives"
            title="Three proof-led case studies across lakehouses, metrics, and streaming reliability."
            description="These are the detailed systems I would expect a founder, CTO, or staff-level hiring panel to inspect first."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Certifications"
            title="Credentials, not collected. Earned alongside the work."
            description={`${certifications.length} certifications across dbt, DataCamp, LinkedIn, and HackerRank. The homepage shows the strongest signal; the full archive has the rest.`}
          />
          <div className="mt-6">
            <Button href="/certifications" variant="secondary">
              View Certifications
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCertifications.slice(0, 6).map((cert, i) => (
              <article
                key={`${cert.name}-${i}`}
                className="surface-line quiet-shadow flex flex-col rounded-md border border-line p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                  §{String(i + 1).padStart(2, "0")} · cert
                </p>
                <h3 className="font-display mt-5 text-lg leading-tight text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {cert.issuer}
                </p>
                <p className="font-mono mt-auto pt-5 text-[11px] uppercase tracking-[0.22em] text-accent-soft">
                  {cert.issued ? `Issued ${cert.issued}` : "Credential"}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Builder range"
            title="Personal systems and GitHub labs show breadth without diluting the senior story."
            description="The company work proves depth. The labs show range across product thinking, data science, machine learning, and AI systems."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {personalSystems.map((system) => (
                <article
                  key={system.name}
                  className="rounded-md border border-line bg-panel p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {system.status}
                    </p>
                    <span className="font-mono whitespace-nowrap rounded-sm border border-accent-warm/40 bg-accent-warm/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] text-accent-warm">
                      Personal
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl leading-tight text-foreground">
                    {system.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {system.summary}
                  </p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {githubLabs.map((lab) => (
                <article
                  key={lab.area}
                  className="rounded-md border border-line bg-panel p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {lab.repos.length} repos
                    </p>
                    <span className="font-mono whitespace-nowrap rounded-sm border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] text-accent-soft">
                      Lab
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg leading-tight text-foreground">
                    {lab.area}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {lab.intent}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
