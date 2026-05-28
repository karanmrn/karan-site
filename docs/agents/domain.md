# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout

Single-context repo. One codebase, one domain (personal portfolio site for Karan Manoharan — Senior Data Engineer).

```
/
├── CONTEXT.md          ← domain language and glossary (create with /grill-with-docs when ready)
├── docs/adr/           ← architectural decisions (create as decisions are made)
└── src/
```

## Before exploring, read these

- **`CONTEXT.md`** at the repo root — domain language, key terms, and constraints.
- **`docs/adr/`** — read ADRs that touch the area you're about to work in.

If either doesn't exist yet, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The producer skill (`/grill-with-docs`) creates them lazily when terms or decisions actually get resolved.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0002 (…) — but worth reopening because…_
