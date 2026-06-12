# Plan 001: karanszn.com Portfolio Execution PRD

> **Executor instructions**: Treat this document as the product requirements document for the next execution phase of `karanszn.com`. Do not assume context from prior chats with Karan, Claude, or Codex. Preserve user/Claude changes unless this PRD explicitly asks to revise them. Do not invent metrics, dates, employers, production claims, adoption claims, or proof.
>
> **Drift check (run first)**: `git diff --stat a137537..HEAD -- src AGENTS.md README.md package.json next.config.ts docs plans`
>
> If any in-scope file changed since this PRD was written, review the live file before implementing and adjust only where the intent still applies.

## Status

- **Priority**: P1
- **Effort**: L
- **Risk**: MED
- **Depends on**: none
- **Category**: direction
- **Planned at**: commit `a137537`, 2026-06-12

## Product Objective

Build `karanszn.com` into a premium, technically credible hiring surface for Karan: a Senior Data Engineer with strong Snowflake, lakehouse, analytics platform, and data systems experience, moving toward practical AI Systems Engineering.

The target reader is a CTO, founder, staff engineer, hiring manager, or recruiter who should quickly understand:

- Karan can own real data platform work.
- Karan understands business constraints, stakeholder trust, governance, and delivery.
- Karan is credible in AI-native systems because he connects LLM interfaces to governed data systems, not because the site uses vague AI language.
- Karan has character and range without turning the site into a long personal archive.

## Current State

The repository is an initialized Next.js application with:

- Next.js App Router under `src/app`.
- TypeScript strict mode.
- Tailwind CSS v4.
- Filesystem-backed MDX writing via `gray-matter` and `next-mdx-remote/rsc`.
- Core routes for home, projects, case studies, writing, writing posts, about, resume, certifications, sitemap, robots, 404, and Open Graph image route.
- Reusable components for navigation, footer, project cards, case studies, badges, certifications, skills, company visuals, and academic proof.

The strongest current product choices are:

- A dark-first, restrained, typography-led visual direction.
- A proof-tiered Projects page separating flagship company work, company systems, personal systems, university projects, and GitHub labs.
- Case-study framing around architecture, constraints, decisions, tradeoffs, and learnings.
- Practical AI positioning around governed data systems, semantic layers, Cortex, RAG/MCP labs, and Snowflake Intelligence.

The most important gaps are:

- Quantified claims need explicit provenance and causality boundaries.
- The homepage is proof-rich but too dense; strongest evidence competes with lower-signal archive content.
- The site currently has three flagship case studies, while the original requirements call for four.
- The AI positioning occasionally reads stronger than the available public proof, especially standalone "AI Engineer" language.
- Certifications and university/personal work need to support seniority without diluting it.
- Repo tooling lacks explicit `typecheck`, `format`, route smoke tests, CI, and deployment verification docs.

## Non-Goals

- Do not create fake metrics, employers, achievements, production status, business adoption, or dates.
- Do not add loud gradients, glassmorphism, crypto aesthetics, decorative clutter, or generic portfolio-template sections.
- Do not ship a live LLM chatbot before the site content corpus and proof model are stable.
- Do not add animation libraries unless a later PRD proves native CSS cannot meet the interaction requirement.
- Do not make certifications, GitHub stats, badges, or university coursework the main hiring signal.

## Product Principles

1. **Proof beats decoration**: visuals should make real systems easier to understand.
2. **Data engineering first, AI systems second**: keep the 60/40 weighting across hero, resume, projects, and metadata.
3. **Causality matters**: distinguish built, led, contributed to, enabled, supported, and experimented with.
4. **Tier the evidence**: employer production work, personal systems, university projects, and labs must never look equivalent.
5. **Premium means restraint**: fewer louder sections, more spacing, stronger hierarchy, better type, and sharper writing.

## Personas

### Founder / CTO

Needs a fast answer to: "Can this person own messy data/AI systems and communicate clearly with business stakeholders?"

### Staff / Principal Data Or AI Engineer

Needs evidence of architecture judgment, tradeoffs, failure modes, governance, operational thinking, and honest boundaries.

### Recruiter / Hiring Manager

Needs clear role targeting, concise resume alignment, recognizable stack, contact paths, and enough proof to advance Karan.

### Karan As Maintainer

Needs a site that is easy to update with new proof, writing, screenshots, case studies, and certifications without copy drift.

## Required Workstreams

### 1. Claim Provenance System

**Problem**: Large metrics such as revenue growth, event volume, incident reduction, pipeline failure reduction, and saved hours appear across the homepage and resume without visible source context.

**Requirement**: Add a typed claim/proof model before expanding content.

Each quantified or high-stakes claim should track:

- `claim`: exact public-facing wording.
- `metric`: optional numeric value.
- `sourceContext`: employer-confirmed, resume-claimed, public-repo-backed, personal-unverified, academic-certificate, or TODO.
- `role`: built, led, contributed to, enabled, supported, prototype, or TODO.
- `scope`: employer production, company internal system, personal project, university project, GitHub lab, or writing.
- `confidence`: confirmed, needs-review, private-proof-only, or TODO.
- `publicProof`: URL, screenshot path, document path, or TODO.

**Acceptance criteria**:

- No public metric appears without source/proof metadata.
- Resume and homepage use softer causality when Karan did not directly own the business outcome.
- Personal and lab claims are visibly labeled as personal, prototype, lab, or forked where relevant.
- Missing proof uses internal TODO content or a private review field, not unsupported public certainty.

### 2. Positioning And Copy Alignment

**Problem**: The current proof supports "Senior Data Engineer building AI-native data systems" better than standalone "AI Engineer."

**Requirement**: Normalize role language across the site.

Preferred language:

- "Senior Data Engineer building AI-native data systems."
- "Data platforms, semantic layers, Snowflake, Databricks, dbt, and practical LLM interfaces."
- "Open to Senior Data Engineer, Analytics Platform, AI Systems, and Staff-track data roles."

Use standalone "AI Engineer" only where adjacent copy names the actual AI system surface and proof level.

**Acceptance criteria**:

- Home, About, Resume, metadata, and project intros preserve 60% data engineering / 40% AI-native systems.
- AI claims name interface, data foundation, governance mechanism, and status.
- No page implies broad production AI ownership where the proof only supports infrastructure, experimentation, or prototypes.

### 3. Homepage Information Architecture

**Problem**: The homepage has too many proof surfaces competing at equal visual weight.

**Requirement**: Make the homepage a high-conversion route into deeper evidence, not a full archive.

Recommended structure:

1. Hero: identity, positioning, strongest proof, CTAs.
2. "Systems I Build": three concise lanes for Lakehouse Platforms, Semantic/Analytics Systems, AI-Native Data Interfaces.
3. Featured Employer Case Studies: 2-3 strongest case studies with proof-tier labels.
4. Proof Strip: only highest-confidence metrics with provenance.
5. Character / Operating Style: concise, human, senior.
6. Writing / Certifications preview: small supporting section.

**Acceptance criteria**:

- First viewport clearly communicates identity, role target, and strongest proof.
- Top half prioritizes employer/company systems.
- Certifications, labs, and university projects are previews only, linking to deeper pages.
- No more than two primary card styles on the homepage.

### 4. Projects And Case Studies

**Problem**: The Projects page has the right proof-tier idea, but the case-study set and hierarchy need tightening.

**Requirement**: Preserve the separation of project types and upgrade flagship work.

Flagship case studies should include:

- Problem.
- Why it mattered.
- Constraints.
- Architecture.
- Technical decisions.
- Tradeoffs.
- Business impact.
- Learnings.
- Role boundaries.
- Proof status.
- What cannot be shown publicly.

Current flagship set should be reviewed:

- Snowflake / Iceberg Lakehouse Platform.
- Semantic Metrics / Natural Language Analytics Layer.
- Databricks Streaming / Forecasting Data Infrastructure.
- Add a fourth AI Systems case study, likely MCP / Agent Experiments or a governed RAG / Snowflake Cortex system, framed honestly as production, internal, personal, or lab depending on proof.

**Acceptance criteria**:

- Four flagship case-study routes exist or the PRD explicitly downgrades the original four-case-study requirement.
- Each flagship case study has an architecture diagram or visual system map.
- Employer production work is visually and textually distinct from personal, university, and GitHub lab work.
- Forked or educational repositories are labeled clearly.
- Case-study mobile architecture visuals do not cause page-level horizontal overflow.

### 5. Visual Design And Frontend Polish

**Problem**: The design is strong but too uniformly carded. Section hierarchy needs more editorial variation.

**Requirement**: Make the site feel premium through hierarchy, not decoration.

Design requirements:

- Keep dark-first, restrained, typography-led direction.
- Reduce repeated bordered cards where full-width editorial layouts would be stronger.
- Reserve mono uppercase labels for metadata and navigation aids.
- Use real evidence images where available: architecture screenshots, SQL snippets, product/system imagery, certificate screenshots, company/product context.
- Decorative visuals must be `aria-hidden` or have meaningful accessible labels.
- Add `prefers-reduced-motion` support for smooth scrolling, pulses, hover translations, and nonessential transitions.
- Keep all primary destinations reachable on mobile, including Certifications.

**Acceptance criteria**:

- Desktop, tablet, and mobile screenshots pass visual QA for home, projects, one case study, writing post, about, resume, and certifications.
- No text overlap, accidental horizontal scrolling, or unstable image layout.
- Focus states are visible.
- Color contrast remains acceptable.
- The homepage visibly privileges flagship systems over archive material.

### 6. Writing As Technical Proof

**Problem**: Writing exists, but it should become a stronger trust layer.

**Requirement**: Expand MDX posts into practical technical essays tied to projects.

Target writing themes:

- How governed semantic layers make LLM analytics safer.
- Why data platforms are incentive systems.
- Tradeoffs in Snowflake / Iceberg / dbt / Databricks architecture.
- MCP and agent experiments with honest boundaries.
- Lessons from analytics platform reliability and stakeholder trust.

Each post should include:

- A clear technical claim.
- Example architecture or system pattern.
- Tradeoffs.
- What Karan would do differently next time.
- Related project links.

**Acceptance criteria**:

- At least three posts are substantive enough to support senior technical judgment.
- Each post has frontmatter: title, date, summary, tags.
- Writing index groups posts by theme or recency without clutter.

### 7. Resume, About, Skills, And Certifications

**Problem**: These pages should support the hiring story without competing with flagship proof.

**Requirement**: Align all supporting surfaces with the claim provenance system.

Resume:

- Keep printable and scannable.
- Use role-accurate verbs.
- Avoid unsupported direct causality for business outcomes.
- Label personal projects and prototypes clearly.

About:

- Show character: London, systems thinking, leadership, communication, Formula 1 / NBA / music only if it feels intentional and not distracting.
- Use Cardiff Student Academic Representative proof to support communication and representation, not broad professional leadership claims.

Skills:

- Split hard skills and soft skills.
- Hard skills should be grouped by platform: Data Platform, Analytics Engineering, AI Systems, Cloud/Infra, BI, Programming.
- Soft skills should include Communication, Leadership, Systems Thinking, E2E Ownership, Bias for Action, Influence without Authority, and Dealing with Ambiguity.

Certifications:

- Feature only highest-signal items on the homepage.
- Full certification archive can remain on its own page.
- Group certifications by discipline rather than presenting a long undifferentiated list.

**Acceptance criteria**:

- Resume claims match homepage and case-study claims.
- Skills are scannable and not badge spam.
- Certifications are secondary proof, not the primary story.
- Contact details are intentionally public or moved into a configurable content module.

### 8. Chatbot / "Ask Karan" Feature

**Problem**: A chatbot could showcase AI-native thinking, but a gimmicky bot would hurt the premium hiring signal.

**Requirement**: Treat chatbot as a later productized feature, not a quick widget.

Recommended phases:

1. Static guided assistant prototype: curated questions and answers drawn from the site content.
2. Retrieval-backed assistant: answer only from resume, case studies, writing, certifications, and selected GitHub content.
3. Optional live LLM assistant: only after prompt boundaries, logging policy, rate limits, and fallback behavior are defined.

**Acceptance criteria**:

- Assistant clearly states whether it is static, retrieval-backed, or live.
- It never invents claims about Karan.
- It cites source pages or sections.
- It can answer: "What systems has Karan built?", "What AI work has Karan done?", "What proof exists?", "What roles is he targeting?", and "What should I read first?"
- It has a graceful fallback: "I do not have proof for that yet."

### 9. Repo Hygiene, Tooling, And Deployment

**Problem**: The app has a working base but lacks explicit verification and deployment hygiene.

**Requirement**: Establish a stronger execution baseline.

Recommended changes:

- Add `typecheck`: `tsc --noEmit`.
- Add `format` or document formatting expectations.
- Add a route smoke test or scripted route checklist.
- Add CI for lint, typecheck, and build.
- Add `.env.example` if any runtime configuration is introduced.
- Pin Node version through `.nvmrc`, `.node-version`, or documented Vercel setting.
- Update README with setup, verification, local dev, deploy target, and content-editing workflow.
- Decide whether `CODEX_BRIEF.md`, `CODEX_INSTRUCTIONS*.md`, `SKILLS_INVENTORY.txt`, `skills-lock.json`, `.agents/`, and `.claude/` should stay public, move under docs, or be ignored.
- Update `AGENTS.md` to match the actual site state and the current proof-tier model.

**Acceptance criteria**:

- `npm run lint` exits 0.
- `npm run build` exits 0.
- `npm run typecheck` exits 0 after the script is added.
- No generated artifacts are tracked.
- Sitemap includes all intended project and writing routes.
- Public repo does not expose private operational notes unintentionally.

## Execution Priority

### Phase 0: Baseline And Decisions

1. Review this PRD with Karan.
2. Decide public/private status for internal agent and instruction files.
3. Run current lint/build and record baseline.
4. Update README and AGENTS only after agreeing on the execution direction.

### Phase 1: Trust And Claim Integrity

1. Add claim provenance data model.
2. Audit homepage, projects, resume, and about claims.
3. Soften or relabel risky claims.
4. Add TODO/proof placeholders where proof is missing.

### Phase 2: Information Architecture

1. Tighten homepage.
2. Preserve Projects as the proof archive.
3. Add/plan fourth AI Systems case study.
4. Align Resume and About.

### Phase 3: Visual Polish

1. Reduce card repetition.
2. Add richer evidence visuals.
3. Improve mobile navigation and case-study architecture UX.
4. Add reduced-motion support.

### Phase 4: Writing And Chatbot

1. Expand writing into technical proof.
2. Build static "Ask Karan" prototype only after content is stable.
3. Consider live retrieval assistant later.

## Verification Commands

Current commands available:

| Purpose | Command | Expected Result |
|---------|---------|-----------------|
| Install | `npm install` | exit 0 |
| Local dev | `npm run dev` | Next dev server starts |
| Lint | `npm run lint` | exit 0 |
| Build | `npm run build` | exit 0 |

Commands to add:

| Purpose | Command | Expected Result |
|---------|---------|-----------------|
| Typecheck | `npm run typecheck` | `tsc --noEmit` exits 0 |
| Route smoke | `npm run smoke` or documented equivalent | all core routes return 200 |

## Open Questions For Karan

1. Which metrics can be publicly defended with proof, screenshots, docs, or resume confirmation?
2. Should internal Codex/Claude planning files remain in the public repository?
3. What is the strongest real fourth AI Systems case study: MCP agents, Snowflake Cortex, RAG, Snowflake Intelligence, or another project?
4. Should the chatbot start as a curated static assistant or a retrieval-backed AI feature?
5. Which personal details belong on About: F1, NBA, London, concerts/music, Cardiff leadership, or a smaller selection?
6. Should the site target UK roles, global remote roles, or both?

## Done Criteria For This PRD

- [ ] Karan reviews and approves priority order.
- [ ] Claude/Codex agree on which phase to execute first.
- [ ] Claim provenance work starts before further visual expansion.
- [ ] Execution changes are made in small PR-sized chunks.
- [ ] Lint and build pass after every implementation phase.
