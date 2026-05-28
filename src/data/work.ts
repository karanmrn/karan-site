export type CompanySystem = {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  architecture: string;
  influence: string;
  impact: string[];
  tags: string[];
};

export type PersonalSystem = {
  name: string;
  status: string;
  summary: string;
  proof: string[];
  tags: string[];
  href?: string;
};

export type GithubLab = {
  area: string;
  intent: string;
  repos: {
    name: string;
    href: string;
    note: string;
    type: "Original" | "Fork / implementation lab";
  }[];
};

export const companySystems: CompanySystem[] = [
  {
    company: "Pets Choice",
    role: "Senior Data Engineer",
    dates: "November 2024 - Present",
    location: "Blackburn, United Kingdom",
    summary:
      "Flagship data-platform work across Snowflake Iceberg, semantic metrics, self-serve analytics, and commercial decision systems.",
    architecture:
      "Snowflake Iceberg lakehouse, governed dbt semantic layer, Power BI, Snowflake Intelligence, and ad-hoc SQL serving Finance, Sales, Procurement, and Operations.",
    influence:
      "Defined the two-year data platform roadmap, consolidated competing spreadsheet logic into governed metrics, and shaped reusable deployment and validation patterns.",
    impact: [
      "Unified commercial data across 1,389 outlets.",
      "Contribution-margin and unit-economics work contributed to GBP 2.2M revenue growth and 15% commercial uplift.",
      "Self-serve analytics recovered 40+ analyst hours per month for 10+ Finance, Sales, and Ops stakeholders.",
      "Reusable deployment and validation patterns cut pipeline deployment from 3 days to under 2 hours.",
    ],
    tags: ["Snowflake", "Iceberg", "dbt", "Power BI", "Snowflake Intelligence"],
  },
  {
    company: "Tenacium DC",
    role: "Data Engineer / Tech Lead",
    dates: "July 2023 - October 2024",
    location: "London, United Kingdom",
    summary:
      "Streaming lakehouse and reliability work supporting feature and reporting datasets for production ML models.",
    architecture:
      "Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming, with Great Expectations and Write-Audit-Publish quality gates.",
    influence:
      "Led a 4-person analytics team from reactive firefighting toward structured delivery through architecture reviews and engineering standards.",
    impact: [
      "Improved throughput by 40% and reduced production bugs by 60%.",
      "Cut data quality incidents from 80 to under 10 per month.",
      "Created reliable feature and reporting datasets for 3 production ML models.",
    ],
    tags: ["Databricks", "Kafka", "Spark Streaming", "Great Expectations"],
  },
  {
    company: "Everest",
    role: "Data Engineer",
    dates: "February 2020 - August 2022",
    location: "Chennai, India",
    summary:
      "Product analytics and experimentation data work across funnels, cohorts, activation, retention, and conversion.",
    architecture:
      "Customer funnel, cohort, and experiment-analysis datasets standardising exposure, conversion, and retention logic for product and marketing analysis.",
    influence:
      "Turned behavioural event data into reusable datasets that made product and marketing experimentation easier to analyse consistently.",
    impact: [
      "Built activation, retention, and conversion datasets across 50k+ users.",
      "Contributed to a 25% conversion rate increase through reliable behavioural datasets.",
      "Reduced experiment analysis turnaround from weeks to days.",
    ],
    tags: ["Product Analytics", "Experimentation", "Cohorts", "A/B Testing"],
  },
  {
    company: "Orkash Services",
    role: "Data Analyst",
    dates: "August 2018 - January 2020",
    location: "Delhi, India",
    summary:
      "Dimensional modelling and commercial reporting foundation work.",
    architecture:
      "Kimball star-schema models over 100GB daily reporting pipelines for commercial reporting workflows.",
    influence:
      "Built the modelling foundation that made daily reporting faster and more usable for analysts.",
    impact: [
      "Cut report generation time by 60%.",
      "Enabled weekly commercial decisions for 15 analysts.",
    ],
    tags: ["Kimball", "Star Schema", "SQL", "Reporting"],
  },
];

export const personalSystems: PersonalSystem[] = [
  {
    name: "London Nervous System",
    status: "Personal system in progress",
    summary:
      "A broader city-intelligence direction: turning fragmented London signals into local, decision-ready intelligence.",
    proof: [
      "Planned as the umbrella for rental intelligence, postcode-level signals, and future urban data products.",
      "Positioned as independent product-building proof rather than an employer case study.",
    ],
    tags: ["City Intelligence", "Product Thinking", "Data Ingestion"],
  },
  {
    name: "London Rental Intelligence Platform",
    status: "Personal project / london.rent / 2026",
    summary:
      "A rental intelligence platform with 130+ live data ingestors, automated failure recovery, and postcode-level rent pressure scoring across a 500m grid.",
    proof: [
      "Shows live ingestion, recovery paths, local scoring, and product thinking.",
      "Needs deployment/GitHub proof before it becomes a flagship public case study.",
    ],
    tags: ["Live Ingestion", "Failure Recovery", "Scoring", "Geospatial Analysis"],
  },
  {
    name: "AI Analytics Systems Lab",
    status: "Applied exploration",
    summary:
      "A practical lab for RAG pipelines, MCP, vector databases, Snowflake Cortex, Snowflake Intelligence, and LLM tooling.",
    proof: [
      "Frame as careful AI systems exploration over trusted data, not production adoption.",
      "Best used to show trajectory into AI engineering once examples are implemented and documented.",
    ],
    tags: ["RAG", "MCP", "Vector Databases", "Snowflake Cortex"],
  },
];

export const githubLabs: GithubLab[] = [
  {
    area: "Data engineering and cloud pipelines",
    intent:
      "Public implementation trail across cloud ingestion, streaming, Spark, dbt, and orchestration.",
    repos: [
      {
        name: "Azure-Databricks-Project",
        href: "https://github.com/karanmrn/Azure-Databricks-Project",
        note: "Azure Data Factory, Data Lake, Databricks, Spark, Synapse, and Power BI pattern.",
        type: "Original",
      },
      {
        name: "Kafka-Real-Time-Stock-Market-Project",
        href: "https://github.com/karanmrn/Kafka-Real-Time-Stock-Market-Project",
        note: "Kafka producer/consumer pattern with AWS S3 and Athena-style analytics.",
        type: "Original",
      },
      {
        name: "TaskDE",
        href: "https://github.com/karanmrn/TaskDE",
        note: "Data cleaning, feature engineering, and gold-standard dataset work.",
        type: "Original",
      },
    ],
  },
  {
    area: "Data science and experimentation",
    intent:
      "Foundational notebooks showing experimentation, EDA, forecasting, and behavioural analysis.",
    repos: [
      {
        name: "A-B-testing",
        href: "https://github.com/karanmrn/A-B-testing",
        note: "Experiment-analysis foundation connected to product analytics interests.",
        type: "Original",
      },
      {
        name: "TimeSeriesForecasting",
        href: "https://github.com/karanmrn/TimeSeriesForecasting",
        note: "ARIMA and SARIMA forecasting practice.",
        type: "Original",
      },
      {
        name: "RedditScrapper",
        href: "https://github.com/karanmrn/RedditScrapper",
        note: "API/data collection and exploratory analysis pattern.",
        type: "Original",
      },
    ],
  },
  {
    area: "Machine learning foundations",
    intent:
      "Classical ML work across classification, anomaly detection, regression, and recommendation patterns.",
    repos: [
      {
        name: "HousePricePrediction",
        href: "https://github.com/karanmrn/HousePricePrediction",
        note: "Regression lifecycle across analysis, feature engineering, feature selection, model building, and deployment framing.",
        type: "Original",
      },
      {
        name: "CreditFraudDetection",
        href: "https://github.com/karanmrn/CreditFraudDetection",
        note: "Imbalanced anomaly detection with fraud data.",
        type: "Original",
      },
      {
        name: "Breast-Cancer-Detection",
        href: "https://github.com/karanmrn/Breast-Cancer-Detection",
        note: "Classification model comparison and evaluation practice.",
        type: "Original",
      },
    ],
  },
  {
    area: "AI systems and implementation labs",
    intent:
      "Forks and experiments that will become implementation proof as they are rebuilt and documented.",
    repos: [
      {
        name: "LLMSeniorDE",
        href: "https://github.com/karanmrn/LLMSeniorDE",
        note: "Early LLM/data-engineering experiment.",
        type: "Original",
      },
      {
        name: "llm-zoomcamp",
        href: "https://github.com/karanmrn/llm-zoomcamp",
        note: "Q&A and LLM systems learning trail.",
        type: "Fork / implementation lab",
      },
      {
        name: "openai-cookbook",
        href: "https://github.com/karanmrn/openai-cookbook",
        note: "Reference implementation base for OpenAI API patterns.",
        type: "Fork / implementation lab",
      },
    ],
  },
];

export const characterNotes = [
  "I finished an MSc in Data Science and Analytics at Cardiff University, which gives the AI and ML work a real analytical base.",
  "I follow systems outside work too: Formula 1 strategy, basketball spacing, music scenes, and how groups coordinate under pressure.",
  "That shows up in how I think about platforms: incentives, feedback loops, constraints, and the decisions a system makes easy or hard.",
];
