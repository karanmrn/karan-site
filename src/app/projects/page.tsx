import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across Snowflake Iceberg lakehouses, semantic metrics, and Databricks streaming reliability.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Projects"
          title="Selected systems and case studies."
          description="Three proof-led systems weighted toward data platform credibility, commercial decision quality, and reliable ML data infrastructure."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
