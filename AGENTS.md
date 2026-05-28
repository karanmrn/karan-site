# AGENTS.md

## Project

Personal portfolio site for Karan.
Domain: karanszn.com.
Deploy target: Vercel.

Karan is a Senior Data Engineer transitioning into AI Systems Engineering.

## Positioning

Primary identity:
Senior Data Engineer with strong Snowflake, lakehouse, analytics platform, and data systems experience.

Trajectory:
AI Systems Engineering, focused on practical AI-native systems rather than aspirational claims.

Weighting:
60% data-engineering depth, 40% AI-native systems.

Tone:
Confident, accurate, understated, technically mature.

Avoid:
- startup hype
- inflated claims
- fake metrics
- generic portfolio language
- motivational fluff

## Hard Rules

1. Never invent metrics, achievements, dates, employers, or production claims.
2. Use TODO placeholders for missing numbers, dates, links, architecture diagrams, and proof points.
3. Do not imply production scale, business adoption, or quantified impact unless explicitly provided.
4. Dark-first, minimal, typography-led design.
5. No loud gradients, no glassmorphism, no crypto aesthetic, no visual clutter.
6. Mobile-first, responsive, accessible.
7. Use semantic HTML, correct heading order, visible focus states, and aria-labels on icon links.
8. Avoid unnecessary dependencies. Prefer native CSS transitions before adding animation libraries.

## Stack

- Next.js latest stable
- App Router
- TypeScript
- Tailwind CSS
- src directory
- MDX for Writing section
- next/font using Geist or Inter fallback
- Vercel deployment

## Design Direction

Inspired by:
- OpenAI
- Linear
- Vercel
- Stripe

Design should be:
- dark-first
- minimal
- premium
- calm
- typography-led
- spacious
- restrained

Baseline tokens:
- near-black background
- off-white foreground
- one low-saturation cool accent
- max prose width around 720-960px
- wider layout for project grids

## Site Structure

Pages:
- Home
- Projects index
- 4 project case studies
- Writing index
- MDX post pages
- About
- Resume

Projects:
- Snowflake Lakehouse Platform
- Document AI Extraction System
- Natural Language Analytics Layer
- MCP / Agent Experiments

Case study structure:
- Problem
- Why it mattered
- Constraints
- Architecture
- Technical decisions
- Tradeoffs
- Business impact
- Learnings

## Components

Create typed reusable components:
- Navbar
- Footer
- Button
- ProjectCard
- SectionHeader
- Container
- Badge
- CaseStudyLayout

## SEO

Use metadata exports where appropriate:
- title
- description
- openGraph

Add:
- favicon
- robots
- sitemap if straightforward

## Content Integrity

Do not silently fabricate anything.

When uncertain, write:
TODO: confirm detail
TODO: add metric
TODO: add diagram
TODO: add link

## Done Means

Before finishing a task:
- run lint/build where possible
- fix TypeScript errors
- summarize changed files
- list unresolved TODOs

## Agent skills

### Issue tracker

Issues live in GitHub Issues at github.com/karanmrn/karan-site (uses the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
