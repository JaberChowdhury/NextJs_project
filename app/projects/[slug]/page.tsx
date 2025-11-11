import { slug } from "@/content/projects/entry";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/projects/${slug}.mdx`);

  console.log({ dynamic_slug: slug });
  return <Post />;
}

export function generateStaticParams() {
  return slug;
}

export const dynamicParams = false;
