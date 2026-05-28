export type CaseStudySection = {
  title: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  tags: string[];
  status: string;
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "snowflake-iceberg-lakehouse-platform",
    title: "Snowflake Iceberg Lakehouse Platform",
    summary:
      "A Snowflake Iceberg lakehouse unifying Finance, Sales, Procurement, and Operations data across 1,389 outlets.",
    focus: "Pets Choice / Senior Data Engineer",
    tags: ["Snowflake", "Iceberg", "Lakehouse", "Commercial Data"],
    status: "November 2024 - Present",
    sections: [
      {
        title: "Problem",
        body: [
          "I needed to create a shared data foundation for Finance, Sales, Procurement, and Operations across 1,389 outlets.",
          "The real problem was not just moving data into Snowflake. It was reducing ambiguity around rebate leakage, trade spend patterns, and margin opportunities.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "This work is the foundation of my data engineering depth: governed commercial data, Snowflake architecture, and decision systems aligned to business teams.",
          "It also created the conditions for downstream semantic metrics, self-serve analytics, and practical AI-enabled analytics through Snowflake Intelligence.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The confirmed scope was a Snowflake Iceberg lakehouse across 1,389 outlets, spanning Finance, Sales, Procurement, and Operations data.",
          "The platform had to support commercial questions without creating another disconnected reporting layer.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "At a high level, the system brought commercial source data into a Snowflake Iceberg lakehouse, where it could be modelled into trusted analytical views for business teams.",
          "The platform served as the foundation for rebate leakage analysis, trade spend inspection, margin opportunity discovery, and later semantic analytics work.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "I used Snowflake lakehouse patterns to create a clearer foundation for commercial analysis across outlet, finance, procurement, sales, and operational views.",
          "The important decision was to treat the platform as decision infrastructure rather than a warehouse migration: the design had to make the trusted path easier than spreadsheet workarounds.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "A governed lakehouse asks for more upfront modelling and alignment, but it reduces ambiguity when multiple teams are making commercial decisions from the same data.",
          "The tradeoff was speed versus shared understanding: moving carefully on definitions created more reliable downstream analysis.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "The platform unified data across 1,389 outlets and surfaced rebate leakage, trade spend patterns, and margin opportunities.",
          "It became the foundation for later commercial metric, self-serve analytics, and Snowflake Intelligence work.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "The useful AI and analytics layer depends on the data platform beneath it: trusted models, governed access, and a shared understanding of commercial context.",
          "The more ambiguous the business problem, the more valuable it is to make lineage, ownership, and definitions visible early.",
        ],
      },
    ],
  },
  {
    slug: "semantic-metrics-unit-economics-layer",
    title: "Semantic Metrics & Unit Economics Layer",
    summary:
      "A governed dbt semantic layer and unit-economics framework powering Power BI, Snowflake Intelligence, and ad-hoc SQL.",
    focus: "Pets Choice / Senior Data Engineer",
    tags: ["dbt", "Semantic Layer", "Power BI", "Unit Economics"],
    status: "November 2024 - Present",
    sections: [
      {
        title: "Problem",
        body: [
          "I was dealing with five conflicting spreadsheets, inconsistent commercial definitions, and recurring analyst bottlenecks.",
          "Sales and Finance needed a more reliable way to reason about contribution margin, rebate structures, and low-margin accounts.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "This is the strongest business-impact case study because it connects governed metrics with concrete commercial decisions.",
          "The layer gave Power BI, Snowflake Intelligence, and ad-hoc SQL a common metric foundation.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The metric layer needed to preserve a single governed definition while serving different consumption paths for stakeholders and analysts.",
          "It had to be trustworthy enough for Finance, usable enough for Sales, and flexible enough for ad-hoc analysis.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The system centred on a dbt semantic layer that powered Power BI, Snowflake Intelligence, and ad-hoc SQL.",
          "The contribution-margin and unit-economics framework sat on top of governed commercial definitions so teams could reason from the same metrics rather than competing spreadsheets.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "I consolidated five conflicting spreadsheets into one governed metric layer.",
          "I built a contribution-margin and unit-economics framework to support account and rebate decisions, keeping the semantic layer close to the data models that defined commercial truth.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Centralising metrics reduces local spreadsheet flexibility, but gives Finance, Sales, and analysts a more defensible shared source of truth.",
          "The tradeoff was not purely technical: it required moving from individual spreadsheet ownership to shared semantic ownership.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "The framework helped Sales rebalance low-margin accounts and Finance optimise rebate structures.",
          "It contributed to GBP 2.2M revenue growth and 15% commercial uplift.",
          "The governed metric layer reduced analyst bottlenecks by 30%.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Semantic systems work when the metric layer is treated as product infrastructure, not documentation beside the data warehouse.",
          "Metrics shape behaviour. If definitions are unclear, teams will optimise locally; if the trusted path is clear, incentives start to align.",
        ],
      },
    ],
  },
  {
    slug: "databricks-streaming-ml-feature-platform",
    title: "Databricks Streaming ML Feature Platform",
    summary:
      "Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming for ML feature and reporting datasets.",
    focus: "Tenacium DC / Data Engineer and Tech Lead",
    tags: ["Databricks", "Kafka", "Spark Streaming", "Great Expectations"],
    status: "July 2023 - October 2024",
    sections: [
      {
        title: "Problem",
        body: [
          "The team needed reliable feature and reporting datasets for production ML use cases, supported by streaming data infrastructure.",
          "Delivery also needed to move from reactive firefighting toward structured engineering standards.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "This work demonstrates my platform engineering, ML data infrastructure, team leadership, and production reliability experience.",
          "The accurate claim is data infrastructure and datasets supporting ML models, not ownership of the ML models themselves.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The platform processed 50M+ daily events using Kafka and Spark Structured Streaming on Databricks Lakehouse pipelines.",
          "It supported reliable feature and reporting datasets for 3 production ML models, so quality and operational stability mattered as much as throughput.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The known architecture included Kafka, Spark Structured Streaming, Databricks Lakehouse pipelines, and downstream feature and reporting datasets.",
          "Great Expectations and Write-Audit-Publish quality gates were added around critical pipelines to make failures visible before bad data reached consumers.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "I implemented Great Expectations and Write-Audit-Publish quality gates across critical pipelines.",
          "I introduced architecture reviews and engineering standards for a 4-person analytics team to move delivery away from reactive firefighting.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Quality gates and architecture reviews add delivery discipline, but reduce the operational cost of firefighting and recurring production defects.",
          "The tradeoff was accepting a little more structure in delivery so the team could move faster without repeatedly paying for the same classes of failure.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "The work improved team throughput by 40% and reduced production bugs by 60%.",
          "It cut data quality incidents from 80 to under 10 per month and eliminated senior-leadership escalations.",
          "It created reliable feature and reporting datasets for 3 production ML models.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Streaming ML data platforms need reliability practices as much as throughput: quality gates, auditability, and clear engineering standards keep downstream models usable.",
          "The best operational fix was not one clever pipeline change; it was changing the delivery system around the pipelines.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
