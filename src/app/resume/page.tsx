import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredCertifications } from "@/data/certifications";
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
      "Delivered GBP 2.2M revenue growth (15%) by partnering with Commercial leadership to architect a customer analytics platform across 1,389 retail outlets — identifying top-performing retailers, optimising rebate structures, and reducing trade spend by 5%.",
      "Led platform transformation as lead technical voice, re-engineering 200+ ELT pipelines and eliminating 90% of failures through observability, governance, and reliability practices that restored stakeholder trust.",
      "Architected a Snowflake Iceberg medallion lakehouse with pre-aggregated gold models, reducing Power BI dashboard refresh from 30 minutes to under 1 minute and eliminating 40+ hours/month of ad-hoc analyst requests.",
      "Designed a unit-economics framework with Finance, Operations, and Procurement to track warehouse efficiency, inventory turns, and margin — enabling data-driven budgeting that reduced operational waste by 8% and improved forecast accuracy by 25%.",
      "Designed dimensional models using SCD Type 2, One Big Tables, and cumulative aggregates; optimised Snowflake tables with clustering keys and partition pruning to reduce query costs.",
      "Shipped Snowflake Cortex Search, Cortex Analyst, and Cortex Agent integrations over the governed semantic layer, giving Finance and Sales natural-language access to trusted commercial data without bypassing metric definitions.",
      "Built Streamlit-in-Snowflake dashboards and internal apps for margin inspection, rebate review, and Cortex-powered conversational analytics, embedded directly in the warehouse with no separate hosting.",
      "Established and mentored analysts on CI/CD workflows, dbt testing standards (schema, data quality, referential integrity), documentation, monitoring, and security — creating repeatable patterns for reliable deployments.",
    ],
  },
  {
    company: "Tenacium DC",
    location: "London, United Kingdom",
    role: "Data Engineer / Tech Lead",
    dates: "July 2023 - October 2024",
    bullets: [
      "Led technical direction for a 4-person analytics team including architecture reviews, code quality standards, and engineering practices — improving team delivery by 40% and reducing production bugs by 60%.",
      "Architected a Databricks Lakehouse platform ingesting 50M+ daily events into Delta Lake using Kafka pub-sub and Spark Structured Streaming for micro-batch and real-time processing into downstream ML models.",
      "Optimised PySpark pipeline performance with Z-Ordering and file compaction (Bin-packing) on Delta tables, reducing query latency by 40% through effective partition pruning.",
      "Implemented a data quality framework using Great Expectations and the Write-Audit-Publish pattern, cutting data quality incidents to under 10 per month and eliminating senior-leadership escalations.",
    ],
  },
  {
    company: "Everest",
    location: "Chennai, India",
    role: "Data Engineer",
    dates: "February 2020 - August 2022",
    bullets: [
      "Migrated legacy ETL to a Databricks Lakehouse medallion architecture, building idempotent PySpark pipelines that ingested 10GB daily from 5+ sources including Postgres, Google Analytics, MongoDB, and external APIs.",
      "Tuned Spark job performance by analysing Spark UI DAGs to identify stragglers, implementing broadcast joins for dimension lookups, and optimising shuffle partitions — reducing compute costs by $10,000 annually.",
    ],
  },
  {
    company: "Orkash Services",
    location: "Delhi, India",
    role: "Data Analyst",
    dates: "August 2018 - January 2020",
    bullets: [
      "Managed 100GB daily data volumes with scalable pipelines orchestrated using Airflow and cron jobs.",
      "Designed Kimball star-schema data models optimised for performance and scalability, improving query response time by 20%.",
    ],
  },
];

const resumeProjects = [
  {
    title: "Snowflake Iceberg Lakehouse Platform",
    meta: "Pets Choice · Senior Data Engineer · November 2024 - Present",
    description:
      "Architected a Snowflake Iceberg lakehouse unifying Finance, Sales, Procurement, and Operations data across 1,389 outlets — surfacing rebate leakage, trade spend patterns, and margin opportunities.",
  },
  {
    title: "Semantic Metrics & Unit Economics Layer",
    meta: "Pets Choice · Senior Data Engineer · November 2024 - Present",
    description:
      "Built a governed dbt semantic layer and unit-economics framework powering Power BI, Snowflake Intelligence, and ad-hoc SQL — consolidating five conflicting spreadsheets into one trusted metric layer contributing to GBP 2.2M revenue growth.",
  },
  {
    title: "Databricks Streaming ML Feature Platform",
    meta: "Tenacium DC · Data Engineer / Tech Lead · July 2023 - October 2024",
    description:
      "Architected Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming for 3 production ML models — cutting data quality incidents from 80 to under 10 per month.",
  },
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
    items: [
      "Snowflake",
      "Databricks",
      "dbt",
      "Spark",
      "Kafka",
      "Airflow",
      "Mage",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "AI Engineering",
    items: [
      "Snowflake Cortex Search",
      "Snowflake Cortex Analyst",
      "Snowflake Cortex Agent",
      "Snowflake Intelligence",
      "Streamlit in Snowflake",
      "RAG Pipelines",
      "MCP",
      "Vector Databases",
      "LLM Tooling",
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "Spark",
      "Hive",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Great Expectations",
      "Pytest",
    ],
  },
  {
    title: "Engineering Tools",
    items: ["Git", "Docker", "Terraform"],
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
            href={site.linkedin}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-panel px-4 py-2 text-sm font-medium text-foreground transition hover:border-muted hover:bg-panel-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View LinkedIn
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span>{site.location}</span>
          <Link
            href={`tel:${site.phone.replaceAll(" ", "")}`}
            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.phone}
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.email}
          </Link>
          <Link
            href={site.linkedin}
            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            linkedin.com/in/karanmanoharan23
          </Link>
          <Link
            href={site.github}
            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
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
              <article
                key={`${role.company}-${role.role}`}
                className="rounded-md border border-line bg-panel p-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {role.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {role.role} / {role.location}
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
              <article
                key={project.title}
                className="rounded-md border border-line bg-panel p-5"
              >
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-accent-soft">{project.meta}</p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Technical Skills
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-md border border-line bg-panel p-5"
              >
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
              <article
                key={item.institution}
                className="rounded-md border border-line bg-panel p-5"
              >
                <h3 className="font-semibold text-foreground">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
                <p className="mt-3 text-sm text-accent-soft">
                  {item.dates} / {item.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-line pt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Certifications
          </h2>
          <p className="font-mono mt-2 text-[10px] uppercase tracking-[0.22em] text-muted">
            § sync with linkedin.com/in/karanmanoharan23
          </p>
          <Link
            href="/certifications"
            className="font-mono mt-4 inline-flex text-[11px] uppercase tracking-[0.2em] text-accent-soft transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View all certifications
          </Link>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {featuredCertifications.slice(0, 6).map((cert, i) => (
              <article
                key={`${cert.name}-${i}`}
                className="rounded-md border border-line bg-panel p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                  §{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <p className="font-mono mt-3 text-xs uppercase tracking-[0.18em] text-accent-soft">
                  {cert.issued ? `Issued ${cert.issued}` : "Credential"}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
