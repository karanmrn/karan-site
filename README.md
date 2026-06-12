# karanszn.com

Personal portfolio for Karan, a Senior Data Engineer moving toward practical AI Systems Engineering.

## Positioning

The site should make a recruiter, founder, CTO, or staff engineer quickly see:

- Senior data engineering depth: Snowflake, Databricks, dbt, lakehouse systems, semantic layers, orchestration, reliability, and BI-ready data products.
- Practical AI systems direction: LLM interfaces, Snowflake Cortex, RAG/MCP experiments, and agent-style workflows over governed data.
- Builder judgment: first-principles thinking, business constraints, stakeholder trust, and delivery under ambiguity.

Default weighting: roughly 60% senior data engineering, 40% AI-native systems.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

Run these before handing off meaningful changes:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content Workflow

- Site constants live in `src/lib/site.ts`.
- Employer, personal, and GitHub lab proof lives in `src/data/work.ts`.
- Flagship case studies live in `src/data/projects.ts`.
- Claim provenance lives in `src/data/claims.ts`.
- Writing posts live in `src/content/writing`.

## Proof Integrity

- Do not invent metrics, employers, dates, production status, adoption, or business impact.
- Keep company production work, personal projects, university work, and GitHub labs visibly separate.
- Use bounded causality: `built`, `led`, `enabled`, `supported`, or `contributed to` should match the actual proof.
- AI claims should name the data foundation, governance mechanism, interface, and proof status.
- Missing proof should be represented as an internal TODO or private review note, not public certainty.

## Deployment

Target: Vercel.

Node is pinned with `.node-version`. Match the Vercel project setting to that version where possible.
