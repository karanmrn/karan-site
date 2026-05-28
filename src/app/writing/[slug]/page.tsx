import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import {
  getWritingPost,
  getWritingSlugs,
  type WritingFrontmatter,
} from "@/lib/writing";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getWritingSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getWritingPost(slug);

    return {
      title: post.title,
      description: post.summary,
    };
  } catch {
    return {};
  }
}

export default async function WritingPostPage({ params }: WritingPageProps) {
  const { slug } = await params;
  let post: WritingFrontmatter & { content: string };

  try {
    post = await getWritingPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <Link
          href="/writing"
          className="text-sm text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Back to writing
        </Link>
        <article className="mt-10">
          <p className="text-sm text-accent-soft">{post.date}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {post.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="prose-matter mt-12 border-t border-line pt-10">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </Container>
    </main>
  );
}
