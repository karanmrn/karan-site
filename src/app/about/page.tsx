import type { Metadata } from "next";
import Link from "next/link";
import { AcademicProof } from "@/components/AcademicProof";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillMatrix } from "@/components/SkillMatrix";
import { certifications } from "@/data/certifications";
import { hardSkillGroups, softSkills } from "@/data/profile";
import { characterNotes } from "@/data/work";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Karan Manoharan, a Senior Data Engineer building at the intersection of data platforms and AI systems.",
};

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="I build data systems by reducing ambiguity."
          description="My work sits at the intersection of data platforms, semantic systems, and AI-native analytics — with a principal-mindset across product, data science, data engineering, and AI engineering."
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
          <p>I am based in the United Kingdom.</p>
        </div>

        <section className="mt-16 border-t border-line pt-10">
          <SectionHeader
            eyebrow="Skills"
            title="The practical stack and the human operating system."
            description="Hard skills get the system built. Soft skills get the right system built with the right people."
          />
          <div className="mt-8">
            <SkillMatrix hardSkills={hardSkillGroups} softSkills={softSkills} />
          </div>
          <div className="mt-8 flex flex-col gap-3 rounded-md border border-line bg-panel p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                § credentials
              </p>
              <p className="font-display mt-2 text-xl leading-tight text-foreground">
                {certifications.length} certifications across dbt, Snowflake,
                SQL, cloud, Python, and BI.
              </p>
            </div>
            <Link
              href="/certifications"
              className="font-mono inline-flex whitespace-nowrap text-[11px] uppercase tracking-[0.22em] text-accent-soft transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View the archive →
            </Link>
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <AcademicProof />
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <SectionHeader
            eyebrow="Character"
            title="The same systems lens shows up outside work."
            description="I want the site to show judgement and range, not just a list of technologies."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {characterNotes.map((note) => (
              <article
                key={note}
                className="rounded-md border border-line bg-panel p-5"
              >
                <p className="text-sm leading-6 text-muted">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <SectionHeader
            eyebrow="What I am aiming for"
            title="High-agency engineering roles where judgement compounds."
            description="The target is a senior or staff-level role at a startup, top technology company, or AI-native team where data platforms, ML systems, and product judgement meet."
          />
          <div className="mt-8 space-y-5 text-base leading-7 text-muted">
            <p>
              I am not trying to present as a narrow tool specialist. The
              positioning is broader: a data engineer with enough systems
              judgement to operate across platform architecture, analytics,
              machine learning foundations, and practical AI interfaces.
            </p>
            <p>
              The ideal environment is one where the data platform is close to
              the product, decisions happen quickly, and good engineering
              judgement changes the trajectory of the business.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
