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
      className="group flex h-full flex-col rounded-md border border-line bg-panel p-5 transition hover:border-muted hover:bg-panel-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <p className="mt-8 text-sm text-accent-soft">{project.focus}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted">
        {project.summary}
      </p>
      <span className="mt-8 text-sm font-medium text-foreground transition group-hover:text-accent-soft">
        Read case study
      </span>
    </Link>
  );
}
