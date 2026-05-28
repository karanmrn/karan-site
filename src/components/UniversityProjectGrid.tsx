import Link from "next/link";
import { Badge } from "@/components/Badge";
import type { UniversityProject } from "@/data/profile";

type UniversityProjectGridProps = {
  projects: UniversityProject[];
  limit?: number;
};

const visualStyles: Record<UniversityProject["visual"], string> = {
  ml: "from-accent/25 via-accent-deep/10 to-transparent",
  cloud: "from-sky-300/20 via-accent/10 to-transparent",
  forecasting: "from-accent-warm/25 via-accent-warm-deep/10 to-transparent",
  analytics: "from-emerald-300/20 via-accent/10 to-transparent",
  scraping: "from-accent-soft/20 via-accent-deep/10 to-transparent",
};

function ProjectVisual({ visual, title }: Pick<UniversityProject, "visual" | "title">) {
  return (
    <div
      className={`relative h-28 overflow-hidden rounded border border-line bg-gradient-to-br ${visualStyles[visual]}`}
      aria-label={`${title} project visual`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,240,232,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(243,240,232,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="block h-2 w-16 rounded-full bg-foreground/70" />
          <span className="block h-2 w-24 rounded-full bg-muted/40" />
          <span className="block h-2 w-12 rounded-full bg-accent-warm/70" />
        </div>
        <div className="grid h-14 w-20 grid-cols-4 items-end gap-1">
          {[35, 58, 42, 76].map((height) => (
            <span
              key={height}
              className="rounded-sm bg-accent-soft/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function UniversityProjectGrid({
  projects,
  limit,
}: UniversityProjectGridProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <article
          key={project.title}
          className="surface-line quiet-shadow group flex h-full flex-col rounded-md border border-line p-5 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong"
        >
          <ProjectVisual visual={project.visual} title={project.title} />
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                § {project.dates ?? "academic project"}
              </p>
              <h3 className="font-display mt-3 text-xl leading-tight tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>
          </div>
          {project.association ? (
            <p className="mt-2 text-xs leading-5 text-muted">
              {project.association}
            </p>
          ) : null}
          <p className="mt-4 text-sm leading-6 text-muted">{project.summary}</p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
            {project.methods.slice(0, 2).map((method) => (
              <li key={method} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{method}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.slice(0, 4).map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <div className="mt-auto pt-5">
            {project.href ? (
              <Link
                href={project.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft transition group-hover:text-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                View GitHub
              </Link>
            ) : (
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Link unavailable
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
