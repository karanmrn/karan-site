import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { getWritingPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing notes on data engineering, AI systems, analytics platforms, and experimentation.",
};

export default async function WritingPage() {
  const posts = await getWritingPosts();

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Writing"
          title="Notes on data systems and practical AI engineering."
          description="Short essays and working notes. This section is MDX-backed so longer technical pieces can grow over time."
        />
        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="block rounded-md border border-line bg-panel p-5 transition hover:border-muted hover:bg-panel-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <p className="text-sm text-accent-soft">{post.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{post.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
