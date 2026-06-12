export type ClaimSourceContext =
  | "employer-confirmed"
  | "resume-claimed"
  | "public-repo-backed"
  | "personal-unverified"
  | "academic-certificate"
  | "TODO";

export type ClaimRole =
  | "built"
  | "led"
  | "contributed to"
  | "enabled"
  | "supported"
  | "prototype"
  | "TODO";

export type ClaimScope =
  | "employer production"
  | "company internal system"
  | "personal project"
  | "university project"
  | "GitHub lab"
  | "writing";

export type ClaimConfidence =
  | "confirmed"
  | "needs-review"
  | "private-proof-only"
  | "TODO";

export type ProofClaim = {
  id: string;
  claim: string;
  metric?: string;
  sourceContext: ClaimSourceContext;
  role: ClaimRole;
  scope: ClaimScope;
  confidence: ClaimConfidence;
  publicProof: string;
  provenanceLabel: string;
};

export const proofClaims: ProofClaim[] = [
  {
    id: "pets-choice-outlets",
    claim:
      "Snowflake Iceberg lakehouse work unified commercial data across 1,389 retail outlets.",
    metric: "1,389",
    sourceContext: "resume-claimed",
    role: "built",
    scope: "employer production",
    confidence: "private-proof-only",
    publicProof: "Private employer context; public-safe architecture notes on case study.",
    provenanceLabel: "Employer production / private proof",
  },
  {
    id: "pets-choice-revenue-contribution",
    claim:
      "Unit-economics and governed metrics work contributed to GBP 2.2M revenue growth analysis.",
    metric: "GBP 2.2M",
    sourceContext: "resume-claimed",
    role: "contributed to",
    scope: "company internal system",
    confidence: "private-proof-only",
    publicProof: "Private resume proof; public wording keeps causality bounded.",
    provenanceLabel: "Company outcome / contribution",
  },
  {
    id: "tenacium-events",
    claim:
      "Databricks streaming pipelines processed 50M+ daily events for downstream ML and reporting datasets.",
    metric: "50M+",
    sourceContext: "resume-claimed",
    role: "built",
    scope: "employer production",
    confidence: "private-proof-only",
    publicProof: "Private employer context; public-safe architecture notes on case study.",
    provenanceLabel: "Employer production / private proof",
  },
  {
    id: "tenacium-incident-reduction",
    claim:
      "Reliability practices reduced monthly data quality incidents from 80 to under 10.",
    metric: "80 -> <10",
    sourceContext: "resume-claimed",
    role: "led",
    scope: "company internal system",
    confidence: "private-proof-only",
    publicProof: "Private resume proof; public wording keeps reliability scope explicit.",
    provenanceLabel: "Reliability metric / private proof",
  },
];

export const homepageProofClaims = proofClaims;
