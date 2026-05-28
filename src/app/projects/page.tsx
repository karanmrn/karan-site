import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across Snowflake, lakehouse architecture, document AI, natural-language analytics, and agent infrastructure.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeader
          eyebrow="Projects"
          title="Selected systems and case studies."
          description="A portfolio weighted toward data engineering depth, with practical AI systems work layered on top."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
