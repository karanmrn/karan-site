import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const proofPoints = [
  {
    value: "1,389",
    label: "outlets unified through Snowflake Iceberg lakehouse work",
  },
  {
    value: "50M+",
    label: "daily events processed through Databricks streaming pipelines",
  },
  {
    value: "£2.2M",
    label: "revenue growth contribution through unit-economics work",
  },
  {
    value: "130+",
    label: "live ingestors in the London Rental Intelligence Platform",
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
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
                Snowflake · Semantic Metrics · AI Analytics
              </p>
              <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.93] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
                Karan
              </h1>
              <p className="mt-8 max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl">
                Senior Data Engineer building AI-native data platforms.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                I design Snowflake lakehouses, semantic metric layers, and
                intelligent analytics systems that turn fragmented business data
                into trusted decision infrastructure.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/projects">View Projects</Button>
                <Button href="/writing" variant="secondary">
                  Read Writing
                </Button>
                <Button href="/resume" variant="ghost">
                  Resume
                </Button>
              </div>
            </div>

            <aside className="surface-line quiet-shadow rounded-md border border-line p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                Current focus
              </p>
              <div className="mt-8 space-y-5">
                {[
                  "Snowflake Iceberg lakehouses",
                  "dbt semantic metric layers",
                  "Databricks streaming reliability",
                  "RAG, MCP, Cortex, and Snowflake Intelligence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 border-t border-line pt-5 first:border-t-0 first:pt-0">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <p className="text-sm text-muted-strong">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded border border-line bg-background/45 p-4">
                <p className="text-sm leading-6 text-muted">
                  I build at the intersection of data platforms and AI systems,
                  with the discipline of a data engineer and the situational
                  awareness to know when simplicity beats cleverness.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-panel/35 py-6">
        <Container size="wide">
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.value} className="bg-background/95 p-5">
                <p className="text-3xl font-semibold text-foreground">{point.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{point.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Featured work"
            title="Proof-led systems across lakehouses, metrics, self-serve analytics, and AI infrastructure."
            description="The portfolio is weighted toward deep data platform credibility, with practical AI-native systems layered on top of governed data foundations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Positioning"
            title="I care about the shape of the system, not just the stack."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <div key={principle} className="rounded-md border border-line bg-panel p-5">
                <p className="text-lg leading-7 text-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
