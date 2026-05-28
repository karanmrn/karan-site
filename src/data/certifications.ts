export type CertificationIssuer =
  | "dbt Labs"
  | "DataCamp"
  | "LinkedIn"
  | "HackerRank"
  | "HackerRank Campus Club, AUFS";

export type CertificationDiscipline =
  | "Data Engineering"
  | "SQL & Analytics"
  | "Cloud & Platform"
  | "Python & Programming"
  | "BI & Product"
  | "Professional";

export type Certification = {
  name: string;
  issuer: CertificationIssuer;
  issued?: string;
  expires?: string;
  href?: string;
  skills?: string[];
  discipline: CertificationDiscipline;
  featured?: boolean;
  attachment?: string;
};

export const certifications: Certification[] = [
  {
    name: "Dbt",
    issuer: "dbt Labs",
    href: "https://credentials.getdbt.com/16695058-7201-434c-8ac1-3374737ec3b8#gs.7l8zze",
    skills: ["dbt", "Analytics Engineering"],
    discipline: "Data Engineering",
    featured: true,
  },
  {
    name: "Datacamp Intermediate SQL",
    issuer: "DataCamp",
    issued: "Nov 2023",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
    featured: true,
    attachment: "DataCamp Intermediate SQL.pdf",
  },
  {
    name: "Datacamp Tableau Certification",
    issuer: "DataCamp",
    skills: ["Data Visualization", "Business Intelligence"],
    discipline: "BI & Product",
    featured: true,
    attachment: "TableauCertification.pdf",
  },
  {
    name: "HackerRank SQL Advanced Certification",
    issuer: "HackerRank Campus Club, AUFS",
    issued: "Oct 2023",
    href: "https://www.hackerrank.com/certificates/iframe/43ca607041ff",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
    featured: true,
  },
  {
    name: "HackerRank SQL Intermediate Certification",
    issuer: "HackerRank",
    issued: "Oct 2023",
    href: "https://www.hackerrank.com/certificates/iframe/21043c57ff09",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
    featured: true,
  },
  {
    name: "HackerRank SQL Basic Certification",
    issuer: "HackerRank",
    issued: "Nov 2023",
    expires: "Dec 2033",
    href: "https://www.hackerrank.com/certificates/6b3d423a5d5a",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "HackerRank Python Basic Certification",
    issuer: "HackerRank",
    issued: "Nov 2023",
    href: "https://www.hackerrank.com/certificates/a5f2c65b6761",
    skills: ["Python"],
    discipline: "Python & Programming",
    featured: true,
  },
  {
    name: "HackerRank Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issued: "Oct 2023",
    href: "https://www.hackerrank.com/certificates/73a12f8ba7a4",
    discipline: "Python & Programming",
  },
  {
    name: "HackerRank Problem Solving",
    issuer: "HackerRank",
    issued: "Oct 2023",
    href: "https://www.hackerrank.com/certificates/iframe/ae19d11a5da3",
    discipline: "Python & Programming",
  },
  {
    name: "Learning SnowflakeDB",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Snowflake"],
    discipline: "Data Engineering",
    featured: true,
  },
  {
    name: "Advanced Snowflake: Deep Dive Cloud Data Warehousing and Analytics",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Snowflake"],
    discipline: "Data Engineering",
    featured: true,
  },
  {
    name: "Azure Data Engineer Associate (DP-203) Cert Prep: 1 Design and Implement Data Storage",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Azure", "Data Engineering"],
    discipline: "Cloud & Platform",
    featured: true,
  },
  {
    name: "Azure Data Engineer Associate (DP-203) Cert Prep: 2 Design and Develop Data Processing",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Azure", "Data Engineering"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Amazon Web Services: Data Services",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Amazon Web Services"],
    discipline: "Cloud & Platform",
  },
  {
    name: "DevOps with AWS",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Amazon Web Services"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Kubernetes: Microservices",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Kubernetes"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Big Data Analytics with Hadoop and Apache Spark",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Spark", "Hadoop"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Cloud Hadoop: Scaling Apache Spark",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Spark", "Hadoop"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Stream Processing Design Patterns with Spark",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Spark", "Stream Processing"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Using Apache Spark with .NET",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Spark", ".NET"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Apache PySpark by Example",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["PySpark"],
    discipline: "Cloud & Platform",
  },
  {
    name: "Advanced BigQuery",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["BigQuery"],
    discipline: "Data Engineering",
  },
  {
    name: "SQL Server Integration Services",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["SSIS"],
    discipline: "Data Engineering",
  },
  {
    name: "Data Engineering Foundations",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Data Engineering"],
    discipline: "Data Engineering",
  },
  {
    name: "Advance Your Data Engineering Skills",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Data Engineering"],
    discipline: "Data Engineering",
  },
  {
    name: "SQL Essential Training",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Advanced SQL for Data Science: Time Series",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Master SQL for Data Science",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Advanced SQL for Data Scientists",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Data Analysis", "SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Advanced SQL for Query Tuning and Performance Optimization (2019)",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "SQL: Data Reporting and Analysis",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Data Analysis", "SQL"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Data Analytics"],
    discipline: "SQL & Analytics",
  },
  {
    name: "Level Up: Advanced Python",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Python"],
    discipline: "Python & Programming",
  },
  {
    name: "Python Data Structures and Algorithms",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Python"],
    discipline: "Python & Programming",
  },
  {
    name: "Advanced Python: Working With Data",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    skills: ["Python"],
    discipline: "Python & Programming",
  },
  {
    name: "Becoming a Product Manager: A Complete Guide",
    issuer: "LinkedIn",
    issued: "Nov 2023",
    discipline: "BI & Product",
  },
  {
    name: "Career Wellness Nano Tips with Shade Zahrai",
    issuer: "LinkedIn",
    issued: "Jan 2022",
    discipline: "Professional",
  },
];

export const featuredCertifications = certifications.filter(
  (cert) => cert.featured,
);

export const certificationDisciplines: CertificationDiscipline[] = [
  "Data Engineering",
  "SQL & Analytics",
  "Cloud & Platform",
  "Python & Programming",
  "BI & Product",
  "Professional",
];
