import { promises as fs } from "fs";
import path from "path";

const SITE_URL = "https://next-mdx-blog.vercel.app";

async function getBlogSlugs(dir: string) {
  const slugs: string[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const filePath = path.join(dir, entry.name, "page.mdx");
        try {
          await fs.access(filePath);
          slugs.push(entry.name);
        } catch {
          console.log(`| No page.mdx in folder "${entry.name}", skipping...`);
        }
      }
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log(`| Directory "${dir}" does not exist, skipping blog slugs`);
    } else {
      console.error("| Error reading blog directory:", err);
    }
  }

  return slugs;
}

export default async function sitemap() {
  const blogsDirectory = path.join(process.cwd(), "app", "blogs");
  const slugs = await getBlogSlugs(blogsDirectory);

  const blogs = slugs.map((slug) => ({
    url: `${SITE_URL}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/experience", "/developer"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs];
}
