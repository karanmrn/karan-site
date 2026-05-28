import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "HTML resume for Karan, Senior Data Engineer transitioning into AI Systems Engineering.",
};

const skillGroups = [
  {
    title: "Data Engineering",
    items: ["Snowflake", "Lakehouse architecture", "Analytics platforms", "Data modeling"],
  },
  {
    title: "AI Systems",
    items: ["LLM workflows", "Document AI", "Natural-language analytics", "MCP experiments"],
  },
  {
    title: "Operating Practices",
    items: ["Governance", "Data quality", "Experimentation", "Technical tradeoffs"],
  },
];

export default function ResumePage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="Karan"
            description="Senior Data Engineer building AI-native data systems."
          />
          <Link
            href="/resume.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-panel px-4 py-2 text-sm font-medium text-foreground transition hover:border-muted hover:bg-panel-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Download PDF
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted">
          TODO: add resume.pdf to public folder and confirm this link.
        </p>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Profile</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Senior Data Engineer with experience across Snowflake, lakehouse
            architecture, analytics platforms, and data systems. Currently
            extending that foundation into AI Systems Engineering through LLM
            workflows, semantic analytics, experimentation, and agent
            infrastructure.
          </p>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Experience</h2>
          <div className="mt-5 rounded-md border border-line bg-panel p-5">
            <h3 className="font-semibold text-foreground">
              TODO: add employer and role
            </h3>
            <p className="mt-1 text-sm text-muted">TODO: add dates</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              <li>TODO: add verified responsibility or achievement.</li>
              <li>TODO: add verified data platform or Snowflake work.</li>
              <li>TODO: add verified AI systems or experimentation work.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Skills</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-md border border-line bg-panel p-5">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
