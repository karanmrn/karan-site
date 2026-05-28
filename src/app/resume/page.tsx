import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Karan Manoharan, Senior Data Engineer building AI-native data platforms and decision systems.",
};

const experience = [
  {
    company: "Pets Choice",
    location: "Blackburn, United Kingdom",
    role: "Senior Data Engineer",
    dates: "November 2024 - Present",
    bullets: [
      "Architected a Snowflake Iceberg lakehouse across 1,389 outlets, unifying Finance, Sales, Procurement, and Operations data to surface rebate leakage, trade spend patterns, and margin opportunities.",
      "Built a contribution-margin and unit-economics framework that helped Sales rebalance low-margin accounts and Finance optimise rebate structures, contributing to £2.2M revenue growth and 15% commercial uplift.",
      "Shipped a self-serve analytics platform in under 8 weeks, recovering 40+ analyst hours per month and giving 10+ Finance, Sales, and Ops stakeholders trusted access to commercial metrics.",
      "Owned the dbt semantic layer powering Power BI, Snowflake Intelligence, and ad-hoc SQL, consolidating five conflicting spreadsheets into one governed metric layer and reducing analyst bottlenecks by 30%.",
      "Defined the two-year data platform roadmap, introducing reusable deployment patterns and validation checks that cut pipeline deployment from 3 days to under 2 hours and accelerated analyst onboarding by 50%.",
    ],
  },
  {
    company: "Tenacium DC",
    location: "London, United Kingdom",
    role: "Data Engineer / Tech Lead",
    dates: "July 2023 - October 2024",
    bullets: [
      "Led a 4-person analytics team from reactive firefighting to structured delivery, improving throughput by 40% and reducing production bugs by 60% through architecture reviews and engineering standards.",
      "Architected Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming, creating reliable feature and reporting datasets for 3 production ML models.",
      "Implemented Great Expectations and Write-Audit-Publish quality gates across critical pipelines, cutting data quality incidents from 80 to under 10 per month and eliminating senior-leadership escalations.",
    ],
  },
  {
    company: "Everest",
    location: "Chennai, India",
    role: "Data Engineer",
    dates: "February 2020 - August 2022",
    bullets: [
      "Built customer funnel and cohort pipelines tracking activation, retention, and conversion across 50k+ users, giving Product teams reliable behavioural datasets that contributed to a 25% conversion rate increase.",
      "Developed experiment-analysis datasets for product and marketing A/B tests, standardising exposure, conversion, and retention logic and reducing analysis turnaround from weeks to days.",
    ],
  },
  {
    company: "Orkash Services",
    location: "Delhi, India",
    role: "Data Analyst",
    dates: "August 2018 - January 2020",
    bullets: [
      "Designed Kimball star-schema models over 100GB daily reporting pipelines, cutting report generation time by 60% and enabling weekly commercial decisions for 15 analysts.",
    ],
  },
];

const resumeProjects = [
  {
    title: "London Rental Intelligence Platform",
    meta: "Personal Project · london.rent · 2026",
    description:
      "Built a London rental intelligence platform with 130+ live data ingestors, automated failure recovery, and postcode-level rent pressure scoring across a 500m grid.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["SQL", "Python", "Bash"],
  },
  {
    title: "Cloud Services",
    items: ["AWS", "Azure"],
  },
  {
    title: "Data Platforms",
    items: ["Snowflake", "Databricks", "dbt", "Spark", "Kafka", "Airflow", "Power BI"],
  },
  {
    title: "AI Engineering",
    items: ["RAG Pipelines", "MCP", "Vector Databases", "Snowflake Cortex", "Snowflake Intelligence", "LLM Tooling"],
  },
  {
    title: "Engineering Tools",
    items: ["Git", "Docker", "Terraform", "Pytest", "Great Expectations", "Pandas"],
  },
];

const education = [
  {
    institution: "Cardiff University",
    location: "Cardiff, Wales",
    degree: "Master of Science in Data Science and Analytics",
    dates: "September 2022 - September 2023",
  },
  {
    institution: "Anna University",
    location: "Chennai, India",
    degree: "Bachelor of Engineering in Computer Science",
    dates: "July 2014 - July 2018",
  },
];

export default function ResumePage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="Karan Manoharan"
            description="I build AI-native data platforms, semantic metric layers, and intelligent decision systems."
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

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span>{site.location}</span>
          <Link href={`tel:${site.phone.replaceAll(" ", "")}`} className="hover:text-foreground">
            {site.phone}
          </Link>
          <Link href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </Link>
          <Link href={site.linkedin} className="hover:text-foreground">
            linkedin.com/in/karanmanoharan23
          </Link>
          <Link href={site.github} className="hover:text-foreground">
            github.com/karanmrn
          </Link>
        </div>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Summary</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            <p>
              I build data platforms with one core belief: elegant simplicity
              beats complex perfection.
            </p>
            <p>
              I lead from first principles, turning ambiguous business problems
              into trusted, scalable data and AI systems that help stakeholders
              make better decisions.
            </p>
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Experience</h2>
          <div className="mt-6 space-y-5">
            {experience.map((role) => (
              <article key={`${role.company}-${role.role}`} className="rounded-md border border-line bg-panel p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{role.company}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {role.role} · {role.location}
                    </p>
                  </div>
                  <p className="text-sm text-accent-soft">{role.dates}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Projects</h2>
          <div className="mt-6 space-y-5">
            {resumeProjects.map((project) => (
              <article key={project.title} className="rounded-md border border-line bg-panel p-5">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-accent-soft">{project.meta}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Technical Skills</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
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

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">Education</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="rounded-md border border-line bg-panel p-5">
                <h3 className="font-semibold text-foreground">{item.institution}</h3>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
                <p className="mt-3 text-sm text-accent-soft">
                  {item.dates} · {item.location}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
