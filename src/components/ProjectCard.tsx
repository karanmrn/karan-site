import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/Badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface-line quiet-shadow group flex h-full min-h-[360px] flex-col rounded-md border border-line p-6 transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-panel-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono max-w-[14rem] text-[10px] uppercase tracking-[0.22em] text-muted">
          {project.focus}
        </p>
        {project.state ? (
          <span className="font-mono whitespace-nowrap rounded-sm border border-accent-warm/40 bg-accent-warm/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] text-accent-warm">
            {project.state}
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="text-muted transition group-hover:translate-x-1 group-hover:text-foreground"
          >
            →
          </span>
        )}
      </div>
      <h3 className="font-display mt-10 text-2xl leading-tight tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted">
        {project.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <span className="font-mono mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-accent-soft transition group-hover:text-foreground">
        Read case note <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
