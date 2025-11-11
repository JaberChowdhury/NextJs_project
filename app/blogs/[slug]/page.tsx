import { entry } from "@/content/blogs/entry";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/blogs/${slug}.mdx`);

  console.log({ dynamic_slug: slug });
  return <Post  />;
}

export function generateStaticParams() {
  return entry;
}

export const dynamicParams = false;
