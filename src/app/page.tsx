import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="py-20 sm:py-28 lg:py-36">
        <Container>
          <p className="text-sm font-medium text-accent-soft">
            Data engineering depth. AI systems direction.
          </p>
          <h1 className="mt-6 text-6xl font-semibold tracking-normal text-foreground sm:text-7xl lg:text-8xl">
            Karan
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-9 text-foreground sm:text-3xl sm:leading-10">
            Senior Data Engineer building AI-native data systems.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Focused on Snowflake, LLM systems, analytics platforms,
            experimentation, and AI infrastructure.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects">Projects</Button>
            <Button href="/writing" variant="secondary">
              Writing
            </Button>
            <Button href="/resume" variant="ghost">
              Resume
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-line py-16 sm:py-20">
        <Container size="wide">
          <SectionHeader
            eyebrow="Featured work"
            title="Systems that connect trusted data with practical AI interfaces."
            description="The work is weighted toward data-engineering fundamentals, with a growing focus on LLM systems, semantic analytics, and agent infrastructure."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
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
            title="Senior Data Engineer moving into AI Systems Engineering."
          />
          <div className="mt-10 grid gap-8 text-base leading-7 text-muted md:grid-cols-2">
            <p>
              Karan&apos;s foundation is in Snowflake, lakehouse architecture,
              analytics platforms, and the data systems that make trustworthy
              reporting possible.
            </p>
            <p>
              The next layer is AI-native: LLM workflows, natural-language
              analytics, MCP experiments, and infrastructure that treats AI as
              a practical system rather than a slogan.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
