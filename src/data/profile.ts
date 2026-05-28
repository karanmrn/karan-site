export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type SoftSkill = {
  name: string;
  proof: string;
};

export type UniversityProject = {
  title: string;
  dates?: string;
  association?: string;
  summary: string;
  methods: string[];
  skills: string[];
  href?: string;
  visual: "ml" | "cloud" | "forecasting" | "analytics" | "scraping";
};

export type ChatPrompt = {
  label: string;
  question: string;
  answer: string;
};

export const hardSkillGroups: SkillGroup[] = [
  {
    title: "Data Platforms",
    description: "Warehouse, lakehouse, modelling, orchestration, and BI systems.",
    items: [
      "Snowflake",
      "Iceberg",
      "dbt",
      "Databricks",
      "Spark",
      "Kafka",
      "Airflow",
      "Power BI",
      "Tableau",
      "Looker Studio",
    ],
  },
  {
    title: "Cloud & Engineering",
    description: "Cloud data services, deployment patterns, and production tooling.",
    items: [
      "Azure",
      "AWS",
      "Google Cloud",
      "Docker",
      "Terraform",
      "Git",
      "SQL Server",
      "PostgreSQL",
      "BigQuery",
      "MongoDB",
    ],
  },
  {
    title: "AI & Software",
    description: "Practical AI-native systems over trusted data products.",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "JavaScript",
      "GraphQL",
      "Snowflake Cortex",
      "RAG",
      "MCP",
      "Vector Databases",
      "Streamlit",
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Communication",
    proof:
      "Translate messy business problems into crisp architecture, tradeoffs, and stakeholder decisions.",
  },
  {
    name: "Leadership",
    proof:
      "Set technical direction, mentor analysts, and raise engineering standards without needing a title to do the work.",
  },
  {
    name: "Systems Thinking",
    proof:
      "Model incentives, failure modes, and feedback loops before choosing tools or abstractions.",
  },
  {
    name: "E2E Ownership",
    proof:
      "Own the path from source-system ambiguity to governed metrics, reliable pipelines, and usable decision surfaces.",
  },
  {
    name: "Bias for Action",
    proof:
      "Prototype quickly, ship the smallest useful version, then harden the system around real usage.",
  },
  {
    name: "Influence w/o Authority",
    proof:
      "Move teams by making the trusted path easier, clearer, and more useful than the improvised one.",
  },
  {
    name: "Dealing with Ambiguity",
    proof:
      "Create structure when requirements are incomplete, source systems disagree, or business language is overloaded.",
  },
];

export const universityProjects: UniversityProject[] = [
  {
    title: "Breast Cancer Detection",
    dates: "Oct 2023",
    association: "Cardiff University / Prifysgol Caerdydd",
    summary:
      "Classification project predicting malignant vs benign cancer diagnosis using EDA, model comparison, and hyperparameter tuning.",
    methods: [
      "Exploratory analysis with seaborn and matplotlib.",
      "Compared Logistic Regression, Random Forest, SVM, and Decision Tree models.",
      "Reported model accuracy results from the notebook: 0.96, 0.98, 0.96, and 0.92 respectively.",
    ],
    skills: ["Classification", "EDA", "Model Evaluation", "Python"],
    href: "https://github.com/karanmrn/Breast-Cancer-Detection",
    visual: "ml",
  },
  {
    title: "Uber Data Engineering Project",
    dates: "Sep 2023",
    association: "Cardiff University / Prifysgol Caerdydd",
    summary:
      "End-to-end analytics pipeline for TLC trip data using GCP Storage, Python, Mage, BigQuery, and Looker Studio.",
    methods: [
      "Ingested public TLC trip-record data.",
      "Used Mage as the modern data pipeline layer.",
      "Modeled analytics-ready data in BigQuery for dashboarding in Looker Studio.",
    ],
    skills: ["GCP", "Mage", "BigQuery", "Looker Studio"],
    href: "https://github.com/karanmrn/UberGCP",
    visual: "cloud",
  },
  {
    title: "Time Series Forecasting",
    dates: "Jan 2023",
    summary:
      "Forecasting practice with ARIMA and Seasonal ARIMA on champagne-sales style time-series data.",
    methods: [
      "Visualized the time series and stationarity characteristics.",
      "Used correlation and autocorrelation plots for model selection.",
      "Constructed ARIMA/SARIMA models for prediction.",
    ],
    skills: ["ARIMA", "SARIMA", "Forecasting", "Python"],
    href: "https://github.com/karanmrn/TimeSeriesForecasting",
    visual: "forecasting",
  },
  {
    title: "House Price Prediction",
    summary:
      "Machine-learning pipeline project based on Kaggle's House Prices: Advanced Regression Techniques dataset.",
    methods: [
      "Structured the project around the data-science lifecycle.",
      "Covered data analysis, feature engineering, feature selection, model building, and deployment framing.",
      "Focused on creating reusable ML pipeline habits rather than a single notebook result.",
    ],
    skills: ["Regression", "Feature Engineering", "ML Pipelines", "Kaggle"],
    href: "https://github.com/karanmrn/HousePricePrediction",
    visual: "ml",
  },
  {
    title: "Reddit and YouTube Scraping",
    summary:
      "Collected Reddit and YouTube data for exploratory analysis of top posts, videos, and channel performance.",
    methods: [
      "Worked with API keys and external data sources.",
      "Performed EDA to identify high-performing posts and videos.",
      "Explored social-content analytics workflows.",
    ],
    skills: ["APIs", "Scraping", "EDA", "BI"],
    href: "https://github.com/karanmrn/RedditScrapper",
    visual: "scraping",
  },
  {
    title: "Twitter Scraping",
    summary:
      "Airflow-based pipeline for collecting, transforming, and storing tweet data in cloud buckets.",
    methods: [
      "Collected tweets using API keys.",
      "Transformed and staged data through an orchestration flow.",
      "Used Apache Airflow to schedule the pipeline.",
    ],
    skills: ["Airflow", "APIs", "Cloud Storage", "Data Collection"],
    href: "https://github.com/karanmrn/TwitterAirflow",
    visual: "scraping",
  },
  {
    title: "YouTube Exploratory Data Analysis",
    summary:
      "EDA project over a global YouTube statistics dataset to understand relationships across channel and content metrics.",
    methods: [
      "Explored distributions and relationships between dataset columns.",
      "Built visual analysis with Python plotting libraries.",
      "Used the project to practise analytics storytelling from raw Kaggle data.",
    ],
    skills: ["Data Analytics", "Data Visualization", "EDA", "Python"],
    href: "https://github.com/karanmrn/Youtube",
    visual: "analytics",
  },
];

export const chatPrompts: ChatPrompt[] = [
  {
    label: "AI systems",
    question: "What does Karan know about AI systems?",
    answer:
      "Karan's AI direction is practical: governed data, semantic layers, Snowflake Cortex, RAG patterns, MCP experiments, and agent interfaces that sit on trusted business metrics rather than ungrounded demos.",
  },
  {
    label: "Data engineering",
    question: "Where is Karan strongest as a data engineer?",
    answer:
      "The strongest signal is modern data-platform work: Snowflake Iceberg, dbt, Databricks, Spark, Kafka, orchestration, dimensional modelling, quality checks, and BI-ready gold layers.",
  },
  {
    label: "Software engineering",
    question: "How does Karan approach software engineering?",
    answer:
      "Karan thinks in systems: small reliable interfaces, clear ownership, testable transformations, observability, and product-facing surfaces such as Streamlit apps, APIs, and AI-assisted analytics workflows.",
  },
  {
    label: "Character",
    question: "What is Karan like to work with?",
    answer:
      "High-agency, direct, and systems-minded. The pattern across the work is reducing ambiguity, aligning people around trusted definitions, and building the structure that lets teams move faster.",
  },
];
