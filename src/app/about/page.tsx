import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Karan Manoharan, a Senior Data Engineer building at the intersection of data platforms and AI systems.",
};

const strengths = [
  "Snowflake Iceberg lakehouses",
  "dbt semantic layers",
  "Databricks streaming pipelines",
  "Experimentation datasets",
  "Snowflake Intelligence and Cortex",
  "RAG, MCP, and vector databases",
];

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="I build data systems by reducing ambiguity."
          description="My work sits at the intersection of data platforms, semantic systems, and AI-native analytics."
        />
        <div className="mt-12 space-y-6 text-base leading-7 text-muted">
          <p>
            I build data platforms with one core belief: elegant simplicity
            beats complex perfection. Most data problems are not solved by
            adding more layers. They are solved by understanding the incentives,
            constraints, and failure modes around the system.
          </p>
          <p>
            My operating style is first-principles and systems-oriented. I try
            to separate signal from noise, map the real decision being made,
            and build the smallest reliable structure that lets people act with
            more confidence.
          </p>
          <p>
            Game theory shows up more often than people expect in data work:
            teams optimise for the metrics and workflows available to them. A
            good platform changes those incentives by making the trusted path
            easier than the improvised one.
          </p>
          <p>
            I work across Snowflake, Databricks, dbt, Kafka, Spark, Power BI,
            and practical AI tooling such as Snowflake Intelligence, Cortex,
            RAG pipelines, MCP, and vector databases. The through-line is not
            the toolset. It is building systems that make better decisions more
            likely.
          </p>
          <p>
            I am based in the United Kingdom.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {strengths.map((strength) => (
            <Badge key={strength}>{strength}</Badge>
          ))}
        </div>
      </Container>
    </main>
  );
}
