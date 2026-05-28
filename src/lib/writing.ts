import fs from "node:fs/promises";
import path from "node:path";

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

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Writing posts must start with YAML-style frontmatter.");
  }

  const [, rawFrontmatter, content] = match;
  const data: Record<string, string | string[]> = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const [rawKey, ...rawValue] = line.split(":");
    const key = rawKey.trim();
    const value = rawValue.join(":").trim();

    if (!key) {
      continue;
    }

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^"|"$/g, "");
    }
  }

  const frontmatter: WritingFrontmatter = {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? "Draft"),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return { frontmatter, content };
}

export async function getWritingSlugs() {
  const entries = await fs.readdir(writingDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getWritingPost(slug: string): Promise<WritingPost> {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(source);

  return {
    slug,
    content,
    ...frontmatter,
  };
}

export async function getWritingPosts() {
  const slugs = await getWritingSlugs();
  const posts = await Promise.all(slugs.map((slug) => getWritingPost(slug)));

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
