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
  visual?: {
    logo?: {
      src: string;
      alt: string;
    };
    caption: string;
    products: {
      name: string;
      context: string;
      image?: string;
      accent?: string;
    }[];
  };
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
      "Lead technical voice on the platform rebuild: Snowflake Iceberg medallion lakehouse, governed semantic metrics, Cortex-native AI analytics, and unit-economics decision systems across 1,389 retail outlets.",
    architecture:
      "Snowflake Iceberg medallion lakehouse with pre-aggregated gold models and dbt semantic layer feeding Power BI, Snowflake Intelligence, Cortex Search, Cortex Analyst, Cortex Agent, and Streamlit-in-Snowflake apps for Finance, Sales, Procurement, and Operations.",
    influence:
      "Re-engineered 200+ ELT pipelines with observability and governance, shaped Cortex-native AI access on top of the trusted semantic layer, and mentored analysts on CI/CD and dbt testing standards.",
    impact: [
      "GBP 2.2M revenue growth (15%) and 5% trade-spend reduction across 1,389 retail outlets.",
      "Operational waste down 8% and forecast accuracy up 25% through the unit-economics framework.",
      "Power BI dashboard refresh from 30 minutes to under 1 minute via pre-aggregated gold models.",
      "Re-engineered 200+ ELT pipelines, eliminating 90% of failures.",
      "Cortex Search, Analyst, and Agent integrations gave Finance and Sales natural-language access to governed metrics.",
      "Streamlit-in-Snowflake apps replaced ad-hoc spreadsheet reviews for margin and rebate inspection.",
    ],
    tags: [
      "Snowflake",
      "Iceberg",
      "dbt",
      "Cortex Search",
      "Cortex Analyst",
      "Cortex Agent",
      "Streamlit",
      "Snowflake Intelligence",
    ],
    visual: {
      logo: {
        src: "https://www.petschoice.co.uk/wp-content/themes/petschoice/assets/images/logo.png",
        alt: "Pets Choice logo",
      },
      caption:
        "The platform supports commercial questions across real consumer-product brands, not abstract demo data.",
      products: [
        {
          name: "Webbox",
          context: "Sales, customer, brand and SKU performance",
          image:
            "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-webbox-new.png",
        },
        {
          name: "Bob Martin",
          context: "Finance, COGS, royalties and product-division logic",
          image:
            "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-bobmartin.png",
        },
        {
          name: "TastyBone",
          context: "Brand-level revenue, margin and trade-spend analysis",
          image:
            "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-tastybone.png",
        },
        {
          name: "Felight",
          context: "Product, channel and customer reporting surfaces",
          image:
            "https://www.petschoice.co.uk/wp-content/uploads/2024/06/logo-felight.png",
        },
      ],
    },
  },
  {
    company: "Tenacium DC",
    role: "Data Engineer / Tech Lead",
    dates: "July 2023 - October 2024",
    location: "London, United Kingdom",
    summary:
      "Greenfield Databricks Lakehouse platform ingesting 50M+ daily events for downstream ML, with hard reliability practices and a 4-person analytics team behind it.",
    architecture:
      "Databricks Lakehouse on Delta Lake with Kafka pub-sub and Spark Structured Streaming for micro-batch and real-time processing, Z-Ordering and Bin-packing for query performance, and Great Expectations + Write-Audit-Publish gates around critical pipelines.",
    influence:
      "Led technical direction for a 4-person analytics team — architecture reviews, code-quality standards, and engineering practices that moved delivery from reactive firefighting to structured shipping.",
    impact: [
      "Improved team delivery by 40% and reduced production bugs by 60%.",
      "Reduced query latency by 40% via Z-Ordering, Bin-packing, and partition pruning.",
      "Cut data quality incidents to under 10 per month.",
      "Built reliable feature and reporting datasets supporting downstream ML models.",
    ],
    tags: ["Databricks", "Delta Lake", "Kafka", "Spark Streaming", "Great Expectations"],
  },
  {
    company: "Everest",
    role: "Data Engineer",
    dates: "February 2020 - August 2022",
    location: "Chennai, India",
    summary:
      "Lakehouse migration and performance engineering — moving legacy ETL onto Databricks Medallion with measurable compute savings.",
    architecture:
      "Idempotent PySpark pipelines on Databricks Medallion architecture ingesting 10GB daily from Postgres OLTP, Google Analytics, MongoDB, and external APIs.",
    influence:
      "Tuned Spark jobs through DAG analysis, broadcast joins for dimension lookups, and shuffle-partition optimisation.",
    impact: [
      "Migrated legacy ETL to a Databricks Lakehouse Medallion architecture.",
      "Ingested 10GB daily across 5+ source systems.",
      "Reduced compute costs by $10,000 annually through Spark optimisation.",
    ],
    tags: ["Databricks", "PySpark", "Medallion", "Spark Optimisation"],
  },
  {
    company: "Orkash Services",
    role: "Data Analyst",
    dates: "August 2018 - January 2020",
    location: "Delhi, India",
    summary:
      "Pipeline orchestration and dimensional modelling foundation work — Airflow, cron, and Kimball star schemas at scale.",
    architecture:
      "Kimball star-schema models over 100GB daily data volumes with scalable pipelines orchestrated via Airflow and cron jobs.",
    influence:
      "Built the modelling foundation that made daily reporting faster and more usable for analysts.",
    impact: [
      "Managed 100GB daily data volumes with reliable orchestration.",
      "Improved query response time by 20% through optimised dimensional models.",
    ],
    tags: ["Kimball", "Star Schema", "Airflow", "SQL"],
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
