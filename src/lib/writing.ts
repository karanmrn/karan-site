import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const writingDirectory = path.join(process.cwd(), "src", "content", "writing");

export type WritingFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type WritingPost = WritingFrontmatter & {
  slug: string;
  content: string;
};

export async function getWritingSlugs() {
  const entries = await fs.readdir(writingDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getWritingPost(slug: string): Promise<WritingPost> {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  const frontmatter: WritingFrontmatter = {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? "Draft"),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return { slug, content, ...frontmatter };
}

export async function getWritingPosts() {
  const slugs = await getWritingSlugs();
  const posts = await Promise.all(slugs.map((slug) => getWritingPost(slug)));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
