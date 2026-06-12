# Codex Instructions V2 — karan-site
**Stack:** Next.js 16, React 19, TypeScript 6, Tailwind CSS 4, next-mdx-remote
**Repo:** `src/` contains all application code.

---

## What is already done — do NOT touch these

All of the following were completed by a previous Codex session:

- 3-project portfolio (Snowflake Iceberg, Semantic Metrics, Databricks Streaming) — correct, do not add or remove projects
- `src/data/work.ts` with `companySystems`, `personalSystems`, `githubLabs`, `characterNotes`
- `src/app/page.tsx` restructured with company systems, proof points, operating principles, personal systems, and GitHub labs sections
- `src/app/projects/page.tsx` updated to use `work.ts` data
- `src/components/Navbar.tsx` — active nav state with `usePathname` is correct
- `src/app/not-found.tsx` — dark-themed 404 page exists
- Availability signal and 3-button CTA in hero (`src/app/page.tsx`)
- Operating principles above proof points on home page
- Resume "View LinkedIn" button and full experience section in `src/app/resume/page.tsx`
- Design system CSS variables in `src/app/globals.css` — correct, do not change colour tokens

Do not re-implement any of the above.

---

## Bug Fixes (AFK — implement exactly as written)

### Fix 1 — Three arrow character bugs

**File: `src/app/page.tsx`, line 77**

Current:
```tsx
linkedin.com/in/karanmanoharan23 -&gt;
```
Change to:
```tsx
linkedin.com/in/karanmanoharan23 →
```

**File: `src/app/page.tsx`, line 24 (proofPoints array)**

Current:
```ts
value: "80 -> <10",
```
Change to:
```ts
value: "80 → <10",
```

**File: `src/app/not-found.tsx`, line 21**

Current:
```tsx
&lt;- Back home
```
Change to:
```tsx
← Back home
```

---

### Fix 2 — Geist font is not loading

`globals.css` lists `Geist` first in the font stack but the package is not installed and never imported. The site silently falls back to system fonts on every browser.

**Step 1:** Install the package:
```bash
npm install geist
```

**Step 2:** Update `src/app/layout.tsx` — add the import and apply the CSS variable:

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  // keep all existing metadata unchanged
};

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

**Step 3:** Update `src/app/globals.css` — replace only the `font-family` stack inside the `body` rule:

Current:
```css
font-family:
  Geist,
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
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

Do NOT change any other part of `globals.css`.

---

### Fix 3 — Add OG image so LinkedIn and Slack previews are not blank

**Step 1:** Create `src/app/og/route.tsx`:

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

**Step 2:** Update the `openGraph` block in `src/app/layout.tsx` — add `images`:

```tsx
openGraph: {
  title: `${site.name} - Senior Data Engineer`,
  description: site.description,
  url: site.url,
  siteName: site.name,
  type: "website",
  images: [
    {
      url: "/og",
      width: 1200,
      height: 630,
      alt: "Karan Manoharan — Senior Data Engineer",
    },
  ],
},
```

---

### Fix 4 — Replace fragile writing.ts frontmatter parser with gray-matter

**Step 1:** Install:
```bash
npm install gray-matter
```

**Step 2:** Fully replace `src/lib/writing.ts` with:

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

### Fix 5 — Resume Projects section out of sync

**File: `src/app/resume/page.tsx`**

The `resumeProjects` array only has London Rental. It must include all three portfolio case studies.

Replace the `resumeProjects` array (currently ~lines 60–67) with:

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

### Fix 6 — Replace vague badge in About page

**File: `src/app/about/page.tsx`**

In the `strengths` array, replace:
```ts
"Experimentation datasets",
```
With:
```ts
"Kafka and Spark Structured Streaming",
```

---

## Content Work (requires Karan — do NOT fabricate)

These three items require real content that only Karan can provide. Codex should scaffold the structure but leave `TODO:` placeholders for all specific details.

### Content 1 — Deepen Architecture sections in case studies

**File: `src/data/projects.ts`**

Each project's `Architecture` section currently has 2 abstract sentences. Expand each to 4–5 sentences describing the actual data flow:

```
source systems → ingestion layer → transformation → serving layer → how business teams consume
```

For each project, expand the `Architecture` body array to match this structure. Keep the sentences accurate — do not invent specifics not already confirmed in the existing content. Use `TODO: confirm [detail]` for anything uncertain.

Also expand `Constraints` from 2 sentences to 3–4, covering: what the system had to handle, what failure modes mattered, what stakeholders required.

### Content 2 — Add "What failed" section to all three case studies

**File: `src/data/projects.ts`**

After the `"Learnings"` section in each project's `sections` array, add:

```ts
{
  title: "What failed",
  body: [
    "TODO: Write 2-3 sentences describing what specifically broke or went wrong. Format: 'The initial [decision] did not account for [problem]. This caused [consequence] in [timeframe]. We fixed it by [solution], which [tradeoff].'",
  ],
},
```

This is the most differentiating section for senior DE hiring. Leave as TODO — Karan must fill in the real failures.

### Content 3 — Two new writing posts

Create two new MDX files in `src/content/writing/`. Each must start with YAML frontmatter in this exact format:

```mdx
---
title: "Your title here"
date: "2026-MM-DD"
summary: "One sentence summary."
tags: ["Tag1", "Tag2"]
---
```

**Post 1:** `src/content/writing/governed-metric-layer.mdx`
- Title: `"How I replaced five conflicting spreadsheets with a governed metric layer"`
- Structure: problem (5 spreadsheets, conflicting definitions) → approach (dbt semantic layer) → tradeoff (central ownership vs local flexibility) → what changed
- Leave body as `TODO: Karan to write — minimum 500 words, concrete and specific`

**Post 2:** `src/content/writing/data-platforms-as-incentive-systems.mdx`
- Title: `"Data platforms are incentive systems, not just data models"`
- Structure: the observation that teams optimise for what's available → how a good platform changes incentives → reference to operating principles
- Leave body as `TODO: Karan to write — minimum 500 words, opinionated and direct`

---

## Summary of all changes

| # | File | What | Type |
|---|---|---|---|
| 1 | `src/app/page.tsx` | Fix `->` → `→` in LinkedIn link | Bug / 1 line |
| 2 | `src/app/page.tsx` | Fix `80 -> <10` → `80 → <10` in proofPoints | Bug / 1 line |
| 3 | `src/app/not-found.tsx` | Fix `<-` → `←` in back link | Bug / 1 line |
| 4 | `src/app/layout.tsx` + `globals.css` | Load Geist via `next/font` | Bug / ~10 lines |
| 5 | `src/app/og/route.tsx` + `layout.tsx` | OG image route + metadata | Bug / ~40 lines |
| 6 | `src/lib/writing.ts` | Replace custom parser with gray-matter | Bug / full file rewrite |
| 7 | `src/app/resume/page.tsx` | Add all 3 portfolio projects to resumeProjects | Bug / ~20 lines |
| 8 | `src/app/about/page.tsx` | Replace vague badge | Enhancement / 1 line |
| 9 | `src/data/projects.ts` | Deepen Architecture + add "What failed" scaffold | Content scaffold |
| 10 | `src/content/writing/*.mdx` | Create 2 new post files with TODO placeholders | Content scaffold |

Items 1–8 are pure code changes — implement exactly as written. Items 9–10 are scaffolds — create the structure with TODO placeholders.

---

## What Codex must NOT change

- `src/app/globals.css` colour tokens (CSS variables) — correct, do not modify
- `src/data/work.ts` — complete and correct, do not touch
- `src/data/projects.ts` project selection — 3 projects is correct, do not add or remove
- `src/components/*` — all components are correct
- `src/app/sitemap.ts` and `src/app/robots.ts` — correct
- The overall layout and section order on any page
- The resume experience section — all 4 roles are correct
