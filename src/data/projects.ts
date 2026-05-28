export type CaseStudySection = {
  title: string;
  body: string[];
};

export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type ArchitectureDiagram = {
  title: string;
  note: string;
  steps: ArchitectureStep[];
};

export type EvidenceImage = {
  src: string;
  alt: string;
  caption: string;
};

export type EvidenceGallery = {
  title: string;
  note: string;
  images: EvidenceImage[];
};

export type ProjectState =
  | "SHIPPED · PRODUCTION"
  | "IN PROGRESS"
  | "PERSONAL"
  | "LAB";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  tags: string[];
  status: string;
  state?: ProjectState;
  architecture?: ArchitectureDiagram;
  evidence?: EvidenceGallery;
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
    state: "SHIPPED · PRODUCTION",
    architecture: {
      title: "What I built",
      note: "Production commercial data platform moving Business Central and operational data into Snowflake, modelled through dbt, and exposed to BI, Streamlit apps, SQL users, and Snowflake Intelligence / Cortex agents.",
      steps: [
        {
          label: "Production sources",
          detail:
            "Business Central / NAV SQL Server tables, finance cubes, customer, sales, item, warehouse, purchase, vendor, rebate, budget, and forecast data.",
        },
        {
          label: "Export layer",
          detail:
            "SQL Server parquet-export views normalised source table and column shapes so downstream ingestion did not depend directly on fragile production schemas.",
        },
        {
          label: "Ingestion",
          detail:
            "Azure Data Factory pipelines loaded daily parquet extracts into ADLS Gen2 containers, with previous runs moved into archive folders for file-level history.",
        },
        {
          label: "Lakehouse storage",
          detail:
            "Snowflake external volumes and PETSCHOICE_LAKEHOUSE_DB bronze tables, including Iceberg tables for customer, item, sales, purchase, vendor, warehouse, and finance domains.",
        },
        {
          label: "Transformation",
          detail:
            "dbt split intermediate models into silver and marts into gold, covering sales, finance, items, customers, inventory, outstanding orders, shorting, budget, and forecast models.",
        },
        {
          label: "Consumption",
          detail:
            "Gold facts, semantic views, Power BI, Streamlit in Snowflake apps, ad-hoc SQL, and Snowflake Cortex / Intelligence agents for Finance, Sales, Procurement, and Operations.",
        },
        {
          label: "Controls",
          detail:
            "dbt tests, dynamic tables, Snowflake tasks, grants, alerting scripts, and role-based access kept refresh, quality, and access patterns explicit.",
        },
      ],
    },
    evidence: {
      title: "Platform evidence",
      note: "Public repository screenshots and brand context make the work feel tangible without exposing internal dashboards or sensitive data.",
      images: [
        {
          src: "https://github.com/user-attachments/assets/0ff562b8-6cbe-4ece-8bb7-42ff26db5ff5",
          alt: "Snowflake data platform repository screenshot",
          caption: "Snowflake platform repository evidence",
        },
        {
          src: "https://github.com/user-attachments/assets/1ca2430a-1f20-428a-bfe4-051846303eb9",
          alt: "Azure portal resources for Pets Choice data platform",
          caption: "Azure resources behind the ingestion layer",
        },
        {
          src: "https://github.com/user-attachments/assets/13781164-ba03-463c-9668-8bcded488828",
          alt: "Azure Data Lake Gen2 containers for Pets Choice data platform",
          caption: "ADLS Gen2 containers for parquet landing zones",
        },
      ],
    },
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
    state: "SHIPPED · PRODUCTION",
    architecture: {
      title: "Metric operating layer",
      note: "Governed metric layer built on top of the Snowflake lakehouse so Finance, Sales, Power BI, SQL users, and Snowflake Intelligence reasoned from the same commercial definitions.",
      steps: [
        {
          label: "Trusted facts",
          detail:
            "Gold finance and sales models consolidated actuals, budget, forecast, outstanding orders, rebates, COGS, trade spend, net sales, gross margin, and case-volume logic.",
        },
        {
          label: "Dimensions",
          detail:
            "Customer, item, product, channel, ASM, class, calendar, brand, site, species, and product-division dimensions gave the metrics consistent slicing rules.",
        },
        {
          label: "Semantic layer",
          detail:
            "dbt and Snowflake semantic views defined Finance Performance, Sales Transactions, Budget Analysis, Customer Analytics, Inventory OOD, Outstanding Orders, and Production Shorting.",
        },
        {
          label: "AI interface",
          detail:
            "Cortex Analyst and Snowflake Agents translated natural-language questions into governed metric queries instead of letting each interface invent its own business logic.",
        },
        {
          label: "Consumption",
          detail:
            "Power BI, Snowflake Intelligence, Streamlit apps, and ad-hoc SQL all pointed back to the same governed definitions for commercial analysis.",
        },
        {
          label: "Governance",
          detail:
            "Role grants, semantic-view ownership, dbt tests, and scheduled dbt tasks made the trusted path repeatable across Finance, Sales, and Operations.",
        },
      ],
    },
    evidence: {
      title: "Commercial metric surface",
      note: "The system turns product, customer, finance, rebate, and forecast data into a governed decision layer for commercial teams.",
      images: [
        {
          src: "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-webbox-new.png",
          alt: "Webbox brand logo",
          caption: "Product and customer metrics across retail brands",
        },
        {
          src: "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-bobmartin.png",
          alt: "Bob Martin brand logo",
          caption: "Finance and margin reporting for product divisions",
        },
        {
          src: "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-tastybone.png",
          alt: "TastyBone brand logo",
          caption: "Brand and SKU-level performance analysis",
        },
      ],
    },
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
    state: "SHIPPED · PRODUCTION",
    architecture: {
      title: "Streaming reliability path",
      note: "Streaming lakehouse pattern for reliable feature and reporting datasets: ingest events, process with Spark, publish curated Delta datasets, and protect downstream consumers with quality gates.",
      steps: [
        {
          label: "Event sources",
          detail:
            "High-volume application and operational events published into Kafka topics for downstream feature and reporting use cases.",
        },
        {
          label: "Streaming ingestion",
          detail:
            "Spark Structured Streaming jobs on Databricks read Kafka streams and landed raw events into Delta Lake bronze tables.",
        },
        {
          label: "Transformation",
          detail:
            "PySpark pipelines normalised event payloads, joined reference data, compacted files, and shaped silver datasets for reliable downstream use.",
        },
        {
          label: "Quality gates",
          detail:
            "Great Expectations and Write-Audit-Publish checks validated critical datasets before publication to reduce recurring data-quality incidents.",
        },
        {
          label: "Serving",
          detail:
            "Curated feature and reporting datasets supported production ML model inputs, operational reporting, and analytical workflows.",
        },
        {
          label: "Operating model",
          detail:
            "Architecture reviews, coding standards, monitoring, and incident patterns moved the team away from reactive firefighting.",
        },
      ],
    },
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
