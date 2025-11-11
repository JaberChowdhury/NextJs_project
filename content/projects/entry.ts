export interface ProjectType {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  links: {
    label: string;
    href: string;
  }[];
  status: boolean;
  tags: string[];
}
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Brewndo",
    slug: "brewndo", // static slug
    description: "A no BS productivity app.",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    links: [{ label: "Link", href: "#" }],
    status: true,
    tags: ["Personal", "Productivity"],
  },
  {
    id: 2,
    title: "Awesome Prompts",
    slug: "awesome-prompts", // static slug
    description:
      "A curated prompt library with optimized prompts for business and personal tasks across various domains like writing,...",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    links: [
      { label: "Visit", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    status: true,
    tags: ["AI", "Prompts", "Productivity"],
  },
  {
    id: 3,
    title: "AIWand",
    slug: "aiwand", // static slug
    description:
      "One API to rule them all - Unified OpenAI and Gemini interface with automatic provider switching and structured data extraction...",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    links: [{ label: "Github", href: "#" }],
    status: false,
    tags: ["AI"],
  },
  {
    id: 4,
    title: "Gitachat",
    slug: "gitachat", // static slug
    description: "Chat with Gita",
    image:
      "https://as1.ftcdn.net/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
    links: [{ label: "Link", href: "#" }],
    status: true,
    tags: ["Personal", "AI", "LLM", "Chat"],
  },
];

// Static entries for Next.js App Router
const slug = projects.map((project) => ({ slug: project.slug }));

console.log({ slug });

export { projects, slug };
