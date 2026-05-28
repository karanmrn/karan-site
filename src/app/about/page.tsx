import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Karan, a Senior Data Engineer moving into practical AI Systems Engineering.",
};

const strengths = [
  "Snowflake and lakehouse architecture",
  "Analytics platform design",
  "Data modeling and governance",
  "LLM workflow design",
  "MCP and agent experiments",
  "AI infrastructure evaluation",
];

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="A data systems foundation with an AI systems trajectory."
          description="Karan is positioned as a Senior Data Engineer with deep platform experience and a practical, systems-first move into AI engineering."
        />
        <div className="mt-12 space-y-6 text-base leading-7 text-muted">
          <p>
            The strongest through-line is data engineering: Snowflake,
            lakehouse patterns, analytics infrastructure, and the operating
            discipline needed to keep data products understandable.
          </p>
          <p>
            The AI layer builds from that foundation. Rather than presenting AI
            as a separate identity, this portfolio frames it as the next system
            surface: LLM workflows, semantic interfaces, experimentation, and
            agent tooling that depend on reliable data and clear boundaries.
          </p>
          <p>TODO: add personal background, location preference, and contact details.</p>
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
