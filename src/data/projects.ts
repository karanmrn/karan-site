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
    focus: "Pets Choice · Senior Data Engineer",
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
          "The source facts confirm Snowflake Iceberg, 1,389 outlets, and cross-functional commercial data across Finance, Sales, Procurement, and Operations.",
          "TODO: add source-system list, data refresh requirements, governance constraints, and cost-control details.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The known architecture centers on a Snowflake Iceberg lakehouse that unifies commercial data for analytics and decision support.",
          "TODO: add architecture diagram.",
          "TODO: add technical implementation detail for ingestion, transformation, validation, and consumption layers.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Use Snowflake lakehouse patterns to create a clearer foundation for commercial analysis across outlet, finance, procurement, sales, and operational views.",
          "TODO: confirm table design, data modeling conventions, access patterns, and orchestration choices.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "A governed lakehouse asks for more upfront modeling and alignment, but reduces ambiguity when multiple teams are making commercial decisions from the same data.",
          "TODO: add specific delivery tradeoffs.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "Surfaced rebate leakage, trade spend patterns, and margin opportunities across the business.",
          "TODO: add additional proof point only if confirmed.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "The useful AI and analytics layer depends on the data platform beneath it: trusted models, governed access, and a shared understanding of commercial context.",
          "TODO: confirm the strongest implementation learning.",
        ],
      },
    ],
  },
  {
    slug: "semantic-metrics-unit-economics-layer",
    title: "Semantic Metrics & Unit Economics Layer",
    summary:
      "A governed dbt semantic layer and unit-economics framework powering Power BI, Snowflake Intelligence, and ad-hoc SQL.",
    focus: "Pets Choice · Senior Data Engineer",
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
          "The system needed to preserve a single governed definition layer while serving different consumption paths for stakeholders and analysts.",
          "TODO: add metric ownership model, approval process, and data quality constraints.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The known architecture is a dbt semantic layer powering Power BI, Snowflake Intelligence, and ad-hoc SQL use cases.",
          "TODO: add architecture diagram.",
          "TODO: add metric lineage and semantic model detail.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Consolidated five conflicting spreadsheets into one governed metric layer.",
          "Built a contribution-margin and unit-economics framework to support account and rebate decisions.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Centralizing metrics reduces local spreadsheet flexibility, but gives Finance, Sales, and analysts a more defensible shared source of truth.",
          "TODO: add specific adoption or migration tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "Helped Sales rebalance low-margin accounts and Finance optimise rebate structures.",
          "Contributed to £2.2M revenue growth and 15% commercial uplift.",
          "Reduced analyst bottlenecks by 30%.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Semantic systems work when the metric layer is treated as product infrastructure, not documentation beside the data warehouse.",
          "TODO: add screenshot or example metric contract.",
        ],
      },
    ],
  },
  {
    slug: "self-serve-analytics-platform",
    title: "Self-Serve Analytics Platform",
    summary:
      "A trusted commercial analytics platform shipped in under 8 weeks for Finance, Sales, and Operations stakeholders.",
    focus: "Pets Choice · Senior Data Engineer",
    tags: ["Self-Serve Analytics", "Power BI", "Snowflake", "Stakeholders"],
    status: "November 2024 - Present",
    sections: [
      {
        title: "Problem",
        body: [
          "Commercial teams needed trusted access to metrics without routing every question through analyst bottlenecks.",
          "Finance, Sales, and Operations stakeholders needed a platform that made commercial data easier to use and reason about.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "Self-serve analytics only works when the underlying data, metrics, and access patterns are trustworthy.",
          "The work connected platform engineering with stakeholder alignment and practical decision support.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The platform was shipped in under 8 weeks and served 10+ Finance, Sales, and Ops stakeholders.",
          "TODO: add delivery timeline breakdown, user workflows, and access-control requirements.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The source confirms a self-serve analytics platform backed by trusted commercial metrics.",
          "TODO: add architecture diagram.",
          "TODO: add dashboard, semantic layer, and data serving details.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Prioritized stakeholder access to trusted commercial metrics over ad-hoc spreadsheet workflows.",
          "TODO: confirm interface, dashboard structure, and validation checks.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Moving quickly required a focused first version, with deeper workflow polish and additional metrics left for later iteration.",
          "TODO: confirm scope intentionally deferred.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "Recovered 40+ analyst hours per month.",
          "Gave 10+ Finance, Sales, and Ops stakeholders trusted access to commercial metrics.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Self-serve analytics is less about dashboards and more about trust: consistent metrics, clear ownership, and fast answers to recurring business questions.",
          "TODO: add stakeholder quote or screenshot.",
        ],
      },
    ],
  },
  {
    slug: "databricks-streaming-ml-feature-platform",
    title: "Databricks Streaming ML Feature Platform",
    summary:
      "Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming for ML feature and reporting datasets.",
    focus: "Tenacium DC · Data Engineer / Tech Lead",
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
          "TODO: add latency requirements, data contracts, and failure-mode details.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The known architecture includes Kafka, Spark Structured Streaming, Databricks Lakehouse pipelines, and reliable feature and reporting datasets for 3 production ML models.",
          "TODO: add architecture diagram.",
          "TODO: add pipeline topology and storage-layer detail.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Implemented Great Expectations and Write-Audit-Publish quality gates across critical pipelines.",
          "Introduced architecture reviews and engineering standards for a 4-person analytics team.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Quality gates and architecture reviews add delivery discipline, but reduce the operational cost of firefighting and recurring production defects.",
          "TODO: add specific tradeoff around latency, quality checks, or team process.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "Improved team throughput by 40% and reduced production bugs by 60%.",
          "Cut data quality incidents from 80 to under 10 per month and eliminated senior-leadership escalations.",
          "Created reliable feature and reporting datasets for 3 production ML models.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Streaming ML data platforms need reliability practices as much as throughput: quality gates, auditability, and clear engineering standards keep downstream models usable.",
          "TODO: add technical implementation detail.",
        ],
      },
    ],
  },
  {
    slug: "london-rental-intelligence-platform",
    title: "London Rental Intelligence Platform",
    summary:
      "A personal project for london.rent with 130+ live data ingestors, automated failure recovery, and postcode-level rent pressure scoring.",
    focus: "Personal Project · london.rent · 2026",
    tags: ["Data Ingestion", "Automation", "Scoring", "Product Thinking"],
    status: "2026",
    sections: [
      {
        title: "Problem",
        body: [
          "London rental data is fragmented and difficult to convert into local, decision-ready intelligence.",
          "I am using this project to explore how live data collection and postcode-level scoring can make rent pressure easier to inspect.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "This is a featured personal project showing independent building, product thinking, data ingestion, and reliability concerns outside a workplace context.",
          "It keeps the site from being only employer-led while staying grounded in confirmed facts.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The confirmed scope includes 130+ live data ingestors, automated failure recovery, postcode-level rent pressure scoring, and a 500m grid.",
          "TODO: add deployment link.",
          "TODO: add GitHub link.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The known architecture includes live data ingestors, automated failure recovery, and postcode-level scoring over a 500m grid.",
          "TODO: add architecture diagram.",
          "TODO: add technical implementation detail without disclosing unsupported source or legal claims.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Built around ingestion reliability and local scoring rather than a static rental dashboard.",
          "TODO: confirm language, storage, orchestration, and scoring methodology.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Live collectors and recovery paths increase system complexity, but create a more resilient foundation for rental intelligence.",
          "TODO: add concrete tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add confirmed usage, launch status, or qualitative proof point.",
          "Do not infer revenue, users, customer adoption, or commercial status without confirmation.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Product-quality data systems need ingestion reliability, local context, and scoring models that users can inspect.",
          "TODO: add screenshot.",
        ],
      },
    ],
  },
  {
    slug: "ai-analytics-mcp-systems-lab",
    title: "AI Analytics / MCP Systems Lab",
    summary:
      "A practical systems lab exploring RAG pipelines, MCP, vector databases, Snowflake Cortex, Snowflake Intelligence, and LLM tooling.",
    focus: "AI systems trajectory",
    tags: ["MCP", "RAG", "Vector Databases", "Snowflake Cortex"],
    status: "Applied exploration",
    sections: [
      {
        title: "Problem",
        body: [
          "AI interfaces are only useful when they are grounded in trusted data, clear tools, and observable boundaries.",
          "I use this lab to explore how practical AI systems can sit on top of strong data platforms rather than replacing them.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "This case study represents the AI-native side of my positioning.",
          "The framing is deliberately practical: I am building at the intersection of data platforms and AI systems, not making inflated AI claims.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "Known technical areas include RAG Pipelines, MCP, Vector Databases, Snowflake Cortex, Snowflake Intelligence, and LLM Tooling.",
          "TODO: confirm project scope, runtime, and evaluation approach.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The intended architecture should show trusted data sources, retrieval, tool boundaries, model calls, evaluation loops, and user-facing analytics workflows.",
          "TODO: add architecture diagram.",
          "TODO: add technical implementation detail.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Keep AI systems grounded in governed metrics, validated data, and explicit tool surfaces.",
          "TODO: confirm exact MCP servers, vector database, and Snowflake Cortex usage.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Careful grounding and evaluation reduce open-ended flexibility, but make AI analytics workflows more defensible.",
          "TODO: add concrete tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add confirmed outcome.",
          "Do not overclaim production adoption, user count, revenue impact, or enterprise deployment.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "The strongest AI analytics systems treat the model as one component inside a broader data product: metrics, retrieval, governance, tools, and evaluation all matter.",
          "TODO: add example workflow.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
