# Codex Instructions — karan-site
**Stack:** Next.js 16, React 19, TypeScript 6, Tailwind CSS 4, next-mdx-remote
**Repo:** `src/` contains all application code. Key files listed per change below.

---

## What is already done — do NOT touch these

- All TODO placeholder text has been removed from `src/data/projects.ts`
- Cut from 6 to 3 projects — only Snowflake, Semantic Metrics, Databricks remain
- Active nav state is implemented in `src/components/Navbar.tsx` using `usePathname`
- `src/app/not-found.tsx` exists and is dark-themed
- Availability signal and contact CTA are in the hero (`src/app/page.tsx`)
- Writing post date is set to `2026-01-15` in the MDX frontmatter
- Resume PDF button has been changed to "View LinkedIn"
- Operating principles section has been moved above proof points on the home page

Do not re-implement any of the above. The design system (CSS variables, dark theme, grid overlay background) is correct — do not modify `src/app/globals.css` unless a specific change below requires it.

---

## Bug Fixes (small, quick)

### Fix 1 — Arrow characters in hero and 404 page

**File:** `src/app/page.tsx`, around line 76

Current:
```tsx
linkedin.com/in/karanmanoharan23 -&gt;
```
Change to:
```tsx
linkedin.com/in/karanmanoharan23 →
```

**File:** `src/app/not-found.tsx`, line 21

Current:
```tsx
&lt;- Back home
```
Change to:
```tsx
← Back home
```

---

### Fix 2 — Resume page projects section is out of sync

**File:** `src/app/resume/page.tsx`, lines 60–67

The `resumeProjects` array still only lists London Rental Intelligence Platform. The main portfolio now features three employer projects. Update the resume projects section to list all three portfolio case studies alongside the personal project. Replace the entire `resumeProjects` array and its rendered section with this:

```tsx
const resumeProjects = [
  {
    title: "Snowflake Iceberg Lakehouse Platform",
    meta: "Pets Choice · Senior Data Engineer · November 2024 - Present",
    description:
      "Architected a Snowflake Iceberg lakehouse unifying Finance, Sales, Procurement, and Operations data across 1,389 outlets — surfacing rebate leakage, trade spend patterns, and margin opportunities.",
  },
  {
    title: "Semantic Metrics & Unit Economics Layer",
    meta: "Pets Choice · Senior Data Engineer · November 2024 - Present",
    description:
      "Built a governed dbt semantic layer and unit-economics framework powering Power BI, Snowflake Intelligence, and ad-hoc SQL — consolidating five conflicting spreadsheets into one trusted metric layer contributing to GBP 2.2M revenue growth.",
  },
  {
    title: "Databricks Streaming ML Feature Platform",
    meta: "Tenacium DC · Data Engineer / Tech Lead · July 2023 - October 2024",
    description:
      "Architected Databricks Lakehouse pipelines processing 50M+ daily events via Kafka and Spark Structured Streaming for 3 production ML models — cutting data quality incidents from 80 to under 10 per month.",
  },
  {
    title: "London Rental Intelligence Platform",
    meta: "Personal Project · london.rent · 2026",
    description:
      "Built a London rental intelligence platform with 130+ live data ingestors, automated failure recovery, and postcode-level rent pressure scoring across a 500m grid.",
  },
];
```

---

## Font Loading

### Fix 3 — Load Geist font properly

**Problem:** `src/app/globals.css` lists Geist first in the font-family stack but there is no `next/font` import anywhere. The site is silently falling back to system fonts on every browser.

**Step 1:** Install the package:
```bash
npm install geist
```

**Step 2:** Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = { ... }; // keep existing, unchanged

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Step 3:** Update `src/app/globals.css` — replace the font-family stack in the `body` rule:

Current:
```css
font-family:
  Geist,
  Inter,
  ui-sans-serif,
  ...
```

Replace with:
```css
font-family:
  var(--font-geist-sans),
  ui-sans-serif,
  system-ui,
  -apple-system,
  sans-serif;
```

---

## Open Graph Image

### Fix 4 — Add OG image so LinkedIn and Slack previews aren't blank

**Problem:** `src/app/layout.tsx` has `openGraph` metadata but no `images` array. When this URL is shared on LinkedIn, Slack, or iMessage, the preview card is blank.

**Step 1:** Create `public/og.png` — a 1200×630px image. It should:
- Use the same near-black background as the site (`#07080a`)
- Show "Karan Manoharan" in large white text
- Show "Senior Data Engineer" in the muted accent colour below
- Keep it simple — no icons or decoration needed

If you cannot generate an image file directly, create a Next.js route at `src/app/og/route.tsx` using `ImageResponse` from `next/og` to generate it dynamically:

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07080a",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <p style={{ color: "#9fb8c7", fontSize: "24px", margin: 0 }}>
          Senior Data Engineer
        </p>
        <h1
          style={{
            color: "#f3f0e8",
            fontSize: "96px",
            fontWeight: 600,
            margin: "16px 0 0",
            lineHeight: 1,
          }}
        >
          Karan Manoharan
        </h1>
        <p style={{ color: "#a8aaa3", fontSize: "28px", marginTop: "24px" }}>
          Snowflake · dbt · Databricks
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
```

**Step 2:** Add the image to metadata in `src/app/layout.tsx`:

```tsx
openGraph: {
  title: `${site.name} - Senior Data Engineer`,
  description: site.description,
  url: site.url,
  siteName: site.name,
  type: "website",
  images: [
    {
      url: "/og", // points to the route handler above, or "/og.png" if using a static file
      width: 1200,
      height: 630,
      alt: "Karan Manoharan — Senior Data Engineer",
    },
  ],
},
```

---

## Writing Infrastructure

### Fix 5 — Replace fragile frontmatter parser with gray-matter

**Problem:** `src/lib/writing.ts` has a hand-rolled YAML parser that splits on `:`. Any writing post with a colon in its title (e.g. `"dbt: the missing layer"`) will silently corrupt the parsed data or throw.

**Step 1:** Install:
```bash
npm install gray-matter
```

**Step 2:** Rewrite `src/lib/writing.ts`:

```ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const writingDirectory = path.join(process.cwd(), "src", "content", "writing");

export type WritingFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type WritingPost = WritingFrontmatter & {
  slug: string;
  content: string;
};

export async function getWritingSlugs() {
  const entries = await fs.readdir(writingDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getWritingPost(slug: string): Promise<WritingPost> {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  const frontmatter: WritingFrontmatter = {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? "Draft"),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return { slug, content, ...frontmatter };
}

export async function getWritingPosts() {
  const slugs = await getWritingSlugs();
  const posts = await Promise.all(slugs.map((slug) => getWritingPost(slug)));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
```

---

## Content — Case Studies (most important for hiring managers)

### Fix 6 — Deepen all three case studies

**File:** `src/data/projects.ts`

Each case study needs two improvements:
1. The `Architecture` and `Constraints` sections currently have 2 thin sentences each. They need to be expanded to describe the actual system shape — what data flows where, what the layers are, what the real constraints were.
2. A new `"What failed"` section should be added to each project. This is the most differentiating section a data engineering portfolio can have. Senior engineers document failure. Hiring managers at scale-ups look for this explicitly.

**Add this section to each project's `sections` array** (after "Learnings"):

For `snowflake-iceberg-lakehouse-platform`:
```ts
{
  title: "What failed",
  body: [
    "Write 2-3 sentences here about what specifically broke or went wrong during this project, how you caught it, and what you changed as a result.",
    "Example format: 'The initial schema design did not account for X. This caused Y in week 3. We fixed it by Z, which added two weeks to delivery but made the downstream models stable.'",
  ],
},
```

Repeat the same pattern for `semantic-metrics-unit-economics-layer` and `databricks-streaming-ml-feature-platform`.

Also expand the `Architecture` body for each project from 2 sentences to 4-5 sentences that describe: source systems → ingestion → transformation → serving layer → how business teams consume. The current descriptions are too abstract to demonstrate system design thinking.

---

## Content — Writing

### Fix 7 — Write two real posts before promoting the Writing section

**Current state:** One post exists at `src/content/writing/ai-native-data-systems.mdx`. It has real content but is short. The Writing nav link is visible but the section is very thin for a hiring manager who clicks through.

**Action:** Create two new MDX files in `src/content/writing/`. Each file must start with YAML frontmatter in this exact format:

```mdx
---
title: "Your title here"
date: "2026-MM-DD"
summary: "One sentence summary."
tags: ["Tag1", "Tag2", "Tag3"]
---

## Section heading

Content...
```

**Suggested post 1:** `src/content/writing/governed-metric-layer.mdx`
- Title: `"How I replaced five conflicting spreadsheets with a governed metric layer"`
- Write about the Pets Choice semantic metrics work: the problem (5 spreadsheets, conflicting definitions), the approach (dbt semantic layer, single source of truth), the tradeoff (central ownership vs local flexibility), and what changed for the team
- Minimum 500 words, concrete and specific

**Suggested post 2:** `src/content/writing/data-platforms-as-incentive-systems.mdx`
- Title: `"Data platforms are incentive systems, not just data models"`
- Write about the observation that teams optimise for the data and workflows available to them — and that a good platform changes incentives by making the trusted path easier than the improvised one
- Reference the operating principles visible on the home page
- Minimum 500 words, opinionated and direct

---

## About Page

### Fix 8 — Tighten the strengths badges

**File:** `src/app/about/page.tsx`, the `strengths` array

Current:
```ts
const strengths = [
  "Snowflake Iceberg lakehouses",
  "dbt semantic layers",
  "Databricks streaming pipelines",
  "Experimentation datasets",         // ← vague, doesn't match positioning
  "Snowflake Intelligence and Cortex",
  "RAG, MCP, and vector databases",
];
```

Replace `"Experimentation datasets"` with something more specific to the case studies:
```ts
"Write-Audit-Publish data quality",
```

Or remove it and add:
```ts
"Kafka and Spark Structured Streaming",
```

The badges should directly reflect the three case studies and the skills on the resume. "Experimentation datasets" is vague and doesn't appear anywhere else on the site.

---

## Summary of all changes

| # | File | What | Size |
|---|---|---|---|
| 1 | `src/app/page.tsx` | Fix `-&gt;` → `→` in LinkedIn link | 1 line |
| 2 | `src/app/not-found.tsx` | Fix `&lt;-` → `←` in back link | 1 line |
| 3 | `src/app/resume/page.tsx` | Update `resumeProjects` to list all 4 projects | ~20 lines |
| 4 | `src/app/layout.tsx` + `globals.css` | Load Geist via `next/font`, update font-family | ~10 lines |
| 5 | `src/app/og/route.tsx` + `layout.tsx` | Create OG image route and add to metadata | ~40 lines |
| 6 | `src/lib/writing.ts` | Replace custom parser with gray-matter | Full file rewrite |
| 7 | `src/data/projects.ts` | Deepen Architecture sections, add "What failed" to all 3 | Content work |
| 8 | `src/content/writing/*.mdx` | Write 2 real posts | Content work |
| 9 | `src/app/about/page.tsx` | Fix one vague badge in `strengths` array | 1 line |

Items 1–6 are code changes. Items 7–9 are content that only Karan can write — Codex can scaffold the structure but the actual details (what broke, specific architectural decisions, essay content) must come from Karan.

---

## What Codex should NOT change

- `src/app/globals.css` design tokens (CSS variables) — the colour system is correct
- `src/components/*` — all components are clean
- `src/data/projects.ts` project selection — 3 projects is correct, do not add more
- `src/app/sitemap.ts` and `src/app/robots.ts` — both are correct
- The overall page layout and section order on any page
