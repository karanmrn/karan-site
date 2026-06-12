# Portfolio Site — Codex Brief
**Site:** karanszn.com | **Stack:** Next.js 16, React 19, TypeScript 6, Tailwind CSS 4, next-mdx-remote
**Goal:** Senior/Staff Data Engineer at a Series B-D scale-up contacts me after seeing this alongside my CV.
**User flow:** Recruiter skims 30s → forwards to hiring manager → hiring manager reads case studies → advocates for interview.

---

## Context

The site is built and deployed. Design system is solid — dark theme, typography, layout are all good. The problems are:
1. Placeholder TODO text is rendering live to real visitors right now
2. The recruiter skim layer (hero) is missing a contact CTA and availability signal
3. 6 case studies exist but only 3 are worth keeping — the others are too incomplete
4. Several technical issues (broken 404, no active nav, font not loading, no OG image)
5. The writing section has one stub post with "TODO: confirm date" visible on screen

Everything below is prioritised. Phase A first — get something clean live. Phase B is the content work that makes the site actually earn its keep.

---

## Phase A — Ship This Week

### 1. Strip all TODO text (critical — it's live right now)

Every case study section in `src/data/projects.ts` has paragraphs that begin with `"TODO:"`. These render directly on the page. Remove every TODO paragraph entirely. Do not replace them with other placeholder text. If a section only had TODO content, remove the section from the `sections` array for that project.

Same for:
- `src/app/resume/page.tsx` line that reads `"TODO: add resume.pdf to public folder and confirm this link."` — delete this `<p>` element entirely
- `src/content/writing/ai-native-data-systems.mdx` — the `date` frontmatter field reads `"TODO: confirm date"` — change it to `"2026-01-15"` (or any real date)

### 2. Cut from 6 case studies to 3

In `src/data/projects.ts`, keep only these three projects:
- `snowflake-iceberg-lakehouse-platform`
- `semantic-metrics-unit-economics-layer`
- `databricks-streaming-ml-feature-platform`

Remove these three entirely from the `projects` array:
- `self-serve-analytics-platform` (overlaps with the Semantic Metrics case study)
- `london-rental-intelligence-platform` (too incomplete, personal project not ready)
- `ai-analytics-mcp-systems-lab` (too speculative, no real outcomes yet)

The `projects` export is used on `/`, `/projects`, and `/projects/[slug]` — cutting the array handles all three automatically.

### 3. Add contact CTA and availability signal to the hero

In `src/app/page.tsx`, the hero section currently has three buttons: View Projects, Read Writing, Resume.

Add a fourth button after Resume:
```tsx
<Button href="mailto:karanmanoharann@gmail.com" variant="ghost">
  Get in Touch
</Button>
```

Also add a one-line availability signal just above the button row, after the descriptive paragraph:
```tsx
<p className="mt-4 text-sm font-medium text-accent-soft">
  Open to Senior / Staff Data Engineer roles in the UK.
</p>
```

### 4. Add LinkedIn link to the hero

In the hero section of `src/app/page.tsx`, add a LinkedIn link somewhere visible — either as a fifth ghost button or as a small inline link beneath the availability line:
```tsx
<a
  href="https://www.linkedin.com/in/karanmanoharan23"
  className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-foreground"
  target="_blank"
  rel="noopener noreferrer"
>
  linkedin.com/in/karanmanoharan23 →
</a>
```

### 5. Fix the 404 page

Create `src/app/not-found.tsx`. The current Next.js default 404 is white with no styling — completely breaks the dark theme. The new one should:
- Use the same dark background as the rest of the site
- Include the Navbar and Footer (or at minimum match the visual style)
- Show a simple message and a link back home

```tsx
import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="py-32">
      <Container>
        <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">Page not found.</h1>
        <p className="mt-4 text-base text-muted">
          This page does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm text-muted transition hover:text-foreground"
        >
          ← Back home
        </Link>
      </Container>
    </main>
  );
}
```

### 6. Add active nav state

In `src/components/Navbar.tsx`, import `usePathname` from `next/navigation` and mark the current page's nav link visually. The component needs `"use client"` directive since `usePathname` is a client hook.

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/95">
      <Container size="wide" className="flex min-h-16 items-center justify-between">
        <Link href="/" ...>Karan</Link>
        <nav>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded px-2.5 py-2 text-sm transition ... ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
```

### 7. Fix the resume PDF button

In `src/app/resume/page.tsx`, the "Download PDF" button links to `/resume.pdf` which 404s.

Two options — pick one:
- **Option A (preferred):** Change the link to point to the LinkedIn profile until a PDF exists: `href={site.linkedin}`and change the label to "View LinkedIn"
- **Option B:** Add an actual `resume.pdf` file to the `public/` folder

Do not leave the button pointing to a 404.

### 8. Fix the writing post date

In `src/content/writing/ai-native-data-systems.mdx`, change:
```
date: "TODO: confirm date"
```
to a real date, e.g.:
```
date: "2026-01-15"
```

---

## Phase B — Content Work (Next 3 Weeks)

This is what makes the site earn its keep. The structure is right. The content is not there yet.

### 9. Write the 3 case studies properly

For each of the three kept projects in `src/data/projects.ts`, every section needs real content. The sections that matter most for a technical hiring manager:

**Architecture** — describe the actual system. What are the source systems? What does data flow through? What are the layers (ingestion → transformation → serving)? A Mermaid diagram or even a well-described ASCII architecture is better than a placeholder. At minimum, write 3-5 sentences that explain the actual shape of the system.

**Constraints** — what were the real constraints? Timeline, team size, cost limits, latency requirements, data volume, stakeholder politics. These are what prove you worked on a real system, not a toy.

**Technical decisions** — why these tools specifically? Why Snowflake and not Redshift? Why Kafka and not Kinesis? Why Spark Structured Streaming? The reasoning matters more than the choice.

**Tradeoffs** — the honest version of what you sacrificed. What did you defer? What broke first? What would you do differently? This is the section hiring managers at scale-ups read most carefully — it proves senior judgment.

**Learnings** — one paragraph, personal and specific. What would you tell your past self before starting this project? Generic learnings ("communication is important") are noise. Specific ones ("I underestimated the cost of schema drift across 1,389 outlets and had to rebuild the validation layer three weeks in") are signal.

**What failed (add this section)** — not currently in the data model, but worth adding. Real senior engineers document failure. One paragraph: what broke, how you found it, what you changed. This is the most differentiating section a portfolio can have, and almost nobody includes it.

To add the new section, update the `CaseStudySection` type in `src/data/projects.ts` if needed, and add a `{ title: "What failed", body: [...] }` entry to each project's `sections` array.

### 10. Load Geist font properly

`src/app/globals.css` lists Geist first in the font stack but there is no `next/font` import loading it. The site is silently falling back to system fonts.

In `src/app/layout.tsx`, add:
```tsx
import { GeistSans } from "geist/font/sans";
```
Or use `next/font/google` with Inter as a fallback if Geist isn't available as a package. Apply the font class to the `<html>` element.

### 11. Add Open Graph image

`src/app/layout.tsx` sets Open Graph metadata but has no image. When the site is shared on LinkedIn or Slack, the preview is blank — this matters when a recruiter forwards the link to a hiring manager.

Create `public/og.png` (1200×630px) with your name, title, and a clean version of the dark background. Then add to the metadata in `layout.tsx`:
```tsx
openGraph: {
  images: [{ url: "/og.png", width: 1200, height: 630 }],
}
```

### 12. Move operating principles higher on the home page

In `src/app/page.tsx`, the "Positioning" section with the four operating principles (elegant simplicity, first principles, etc.) is currently the last section on the page, below all the project cards.

Move it to be the second section — directly after the hero, before the proof points. This is the strongest differentiation signal on the site. A hiring manager who reads "First principles before fashionable architecture" and "Situational awareness before premature optimisation" immediately understands how you think. It should be one of the first things they see, not the last.

### 13. Writing section — write 2 real posts before relinking

The writing section currently has one stub post. Do not add it back to the nav as a featured link until there are at least 2 real posts with actual content.

Good candidates for real posts:
- **"How I replaced five conflicting spreadsheets with a governed metric layer"** — specific, practical, searchable, directly tied to the Semantic Metrics case study
- **"Why I treat data platform design as an incentives problem"** — opinionated, directly tied to the operating principles, differentiating

Each post should be at minimum 600 words with a clear thesis, concrete examples from your work (no proprietary details, but reference the patterns), and a specific takeaway.

### 14. Replace the hand-rolled frontmatter parser

`src/lib/writing.ts` has a custom YAML parser that splits on `:`. It will break on any title containing a colon (e.g. `"dbt: the missing layer"`). Replace it with `gray-matter`:

```bash
npm install gray-matter
```

Then update `src/lib/writing.ts` to use `matter(source)` instead of the custom `parseFrontmatter` function.

---

## File Map — What Changes Where

| File | Phase | What changes |
|---|---|---|
| `src/data/projects.ts` | A | Remove 3 projects, strip all TODO paragraphs |
| `src/app/page.tsx` | A | Add contact CTA, availability line, LinkedIn link |
| `src/app/page.tsx` | B | Move operating principles section up |
| `src/app/resume/page.tsx` | A | Remove TODO line, fix PDF button |
| `src/app/not-found.tsx` | A | Create — dark theme 404 page |
| `src/components/Navbar.tsx` | A | Add `usePathname` active state |
| `src/content/writing/ai-native-data-systems.mdx` | A | Fix date frontmatter |
| `src/data/projects.ts` | B | Write real content for 3 case studies |
| `src/app/layout.tsx` | B | Load Geist font, add OG image to metadata |
| `public/og.png` | B | Create OG image (1200×630) |
| `public/resume.pdf` | B | Add actual PDF (or skip and use LinkedIn link) |
| `src/lib/writing.ts` | B | Replace custom parser with gray-matter |
| `src/content/writing/*.mdx` | B | Write 2 real posts |

---

## What Not to Change

- The design system (CSS variables, dark theme, grid overlay) — it's good, leave it alone
- The overall page structure and layout — hero, proof points, case studies, footer all work
- The component architecture — Button, Container, Badge, SectionHeader, CaseStudyLayout are all clean
- The proof-point numbers on the home page (1,389 / 50M+ / £2.2M / 130+) — these are strong, keep them exactly as-is

---

## Success Criteria for Phase A

When Phase A is done, a visitor to the site should see:
- No "TODO:" text anywhere on any page
- Only 3 project cards on the home page and /projects
- An email link and availability signal in the hero
- A working 404 page that matches the site's dark theme
- Active nav highlighting on the current page
- A writing post with a real date

That is the minimum bar. Phase B is what gets the site to actually close interviews.
