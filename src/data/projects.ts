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
    slug: "snowflake-lakehouse-platform",
    title: "Snowflake Lakehouse Platform",
    summary:
      "A data platform case study centered on Snowflake, lakehouse architecture, analytics reliability, and governed access patterns.",
    focus: "Data platform architecture",
    tags: ["Snowflake", "Lakehouse", "dbt", "Governance"],
    status: "TODO: confirm project status",
    sections: [
      {
        title: "Problem",
        body: [
          "Analytics teams need a dependable platform for ingesting, transforming, and serving trusted data without creating brittle handoffs between storage, transformation, and consumption layers.",
          "TODO: confirm source systems, platform scope, and ownership model.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "The work sits at the core of a modern data engineering practice: clear data contracts, predictable transformation paths, and a platform that can support analytics and downstream AI use cases.",
          "TODO: add business context and proof point.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The design needed to balance Snowflake cost control, data quality, access governance, and maintainability for teams working across analytics and engineering workflows.",
          "TODO: add concrete constraints, dates, and dependency details.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The architecture should show ingestion, storage, transformation, semantic layers, quality checks, and consumption paths across BI, analytics, and AI-facing workloads.",
          "TODO: add diagram.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Prioritize explicit modeling boundaries, environment separation, traceable transformations, and a governance model that keeps access decisions visible.",
          "TODO: confirm tooling choices and implementation details.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "A governed platform adds process and upfront modeling work, but it creates better conditions for reliable analytics and AI-ready data products.",
          "TODO: add specific tradeoffs made during delivery.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add metric.",
          "TODO: add stakeholder outcome or qualitative proof point without overstating adoption.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "The strongest data platforms make lineage, ownership, and operating costs visible enough that teams can reason about them before they become incidents.",
          "TODO: confirm the strongest technical learning.",
        ],
      },
    ],
  },
  {
    slug: "document-ai-extraction-system",
    title: "Document AI Extraction System",
    summary:
      "An AI-native document processing case study focused on extraction, validation, review loops, and downstream data usability.",
    focus: "LLM extraction workflows",
    tags: ["Document AI", "LLMs", "Validation", "Pipelines"],
    status: "TODO: confirm project status",
    sections: [
      {
        title: "Problem",
        body: [
          "Document-heavy workflows often turn structured decisions into manual review work, especially when inputs vary in layout, terminology, and quality.",
          "TODO: confirm document types and target users.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "The system connects practical AI capability with data engineering discipline: extraction is only useful when outputs are validated, traceable, and ready for operational or analytical use.",
          "TODO: add business context.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The design needed to account for uncertain model outputs, schema drift, human review, privacy expectations, and failure modes around partial or ambiguous documents.",
          "TODO: add risk and compliance constraints.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The architecture should show document intake, preprocessing, model extraction, structured validation, review queues, persistence, and downstream consumption.",
          "TODO: add diagram.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Use schemas and validation gates to separate model inference from accepted business data, keeping confidence, evidence, and review status attached to extracted fields.",
          "TODO: confirm model, orchestration, and storage choices.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Higher validation rigor may slow throughput, but it reduces the risk of treating model output as ground truth before it has enough evidence.",
          "TODO: add concrete tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add metric.",
          "TODO: add review-quality or workflow outcome.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "AI extraction systems need product-quality feedback paths as much as model prompts; the operating loop determines whether accuracy improves or quietly drifts.",
          "TODO: confirm learning from implementation.",
        ],
      },
    ],
  },
  {
    slug: "natural-language-analytics-layer",
    title: "Natural Language Analytics Layer",
    summary:
      "A semantic analytics case study exploring how natural-language questions can be grounded in governed metrics and trusted data models.",
    focus: "Semantic analytics",
    tags: ["Analytics", "Semantic Layer", "LLMs", "Snowflake"],
    status: "TODO: confirm project status",
    sections: [
      {
        title: "Problem",
        body: [
          "Natural-language analytics can create fast exploratory workflows, but only when the system understands approved metrics, grain, filters, and business definitions.",
          "TODO: confirm user group and analytics scope.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "The work bridges Karan's data systems background with AI-native interfaces: the core challenge is not text generation, it is grounding questions in trusted analytical context.",
          "TODO: add business context.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The layer needed guardrails for ambiguous questions, metric definitions, permissions, query safety, and explainability.",
          "TODO: confirm access-control and data-source constraints.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The architecture should show question intake, intent parsing, semantic retrieval, SQL generation or query planning, validation, execution, and answer rendering.",
          "TODO: add diagram.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Keep semantic definitions close to governed data models and require the interface to expose assumptions when questions are underspecified.",
          "TODO: confirm implementation details.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Constraining the assistant to known metrics reduces open-ended flexibility, but it makes the system more useful for repeatable analytical work.",
          "TODO: add concrete tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add metric.",
          "TODO: add stakeholder outcome or validation method.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Natural language is the interface, not the source of truth; the value comes from the semantic and data-engineering layer beneath it.",
          "TODO: confirm learning from implementation.",
        ],
      },
    ],
  },
  {
    slug: "mcp-agent-experiments",
    title: "MCP / Agent Experiments",
    summary:
      "A practical AI systems case study on tool-using agents, MCP servers, evaluation loops, and integration boundaries.",
    focus: "Agent infrastructure",
    tags: ["MCP", "Agents", "Tool Use", "Evaluation"],
    status: "TODO: confirm project status",
    sections: [
      {
        title: "Problem",
        body: [
          "Agent systems become useful when they can safely call tools, work with real context, and expose their assumptions rather than only generating text.",
          "TODO: confirm experiment goals and target workflows.",
        ],
      },
      {
        title: "Why it mattered",
        body: [
          "The experiments show a transition from data-platform work into AI systems engineering, with emphasis on practical integration and operational boundaries.",
          "TODO: add proof point or link.",
        ],
      },
      {
        title: "Constraints",
        body: [
          "The work needed to keep tool permissions explicit, preserve user control, avoid hidden side effects, and make failures inspectable.",
          "TODO: confirm tool stack and runtime constraints.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "The architecture should show model, agent loop, MCP server interfaces, tool schemas, local context, evaluation cases, and logging boundaries.",
          "TODO: add diagram.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "Treat tools as typed interfaces with narrow permissions, and keep the agent loop testable through repeatable tasks and expected outcomes.",
          "TODO: confirm exact MCP servers and evaluation approach.",
        ],
      },
      {
        title: "Tradeoffs",
        body: [
          "Narrow tool surfaces reduce raw agent flexibility, but they make behavior easier to reason about and safer to evaluate.",
          "TODO: add concrete tradeoff.",
        ],
      },
      {
        title: "Business impact",
        body: [
          "TODO: add metric.",
          "TODO: add practical outcome without implying production adoption.",
        ],
      },
      {
        title: "Learnings",
        body: [
          "Agent reliability depends less on clever prompting and more on clear tool boundaries, context design, and observable failure handling.",
          "TODO: confirm learning from experiments.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
