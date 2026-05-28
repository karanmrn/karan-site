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
        <p className="max-w-[14rem] text-xs uppercase tracking-[0.18em] text-accent-soft">
          {project.focus}
        </p>
        <span aria-hidden="true" className="text-muted transition group-hover:translate-x-1 group-hover:text-foreground">
          →
        </span>
      </div>
      <h3 className="mt-10 text-2xl font-semibold leading-tight text-foreground">
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
      <span className="mt-8 text-sm font-medium text-foreground transition group-hover:text-accent-soft">
        Read case study
      </span>
    </Link>
  );
}
