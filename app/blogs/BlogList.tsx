"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
interface Blog {
  title: string;
  description: string;
  date: string;
  tag: string;
  tagline?: string;
  image: string;
  slug: string;
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-6 cursor-none">
      {blogs.map((blog, idx) => (
        <FollowerPointerCard title={blog.title} key={idx}>
          <CardContainer className="overflow-hidden shadow-lg bg-neutral-200 hover-lift group inter-var">
            <CardBody className="bg-neutral-200 relative group/card  dark:hover:shadow-2xldark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
              <Link href={`/blogs/${blog.slug}`} className="block">
                <CardItem
                  translateZ="100"
                  className="aspect-video bg-muted relative group-hover:bg-muted/80 transition-colors"
                >
                  <CardItem
                    translateZ="100"
                    className="p-2 rounded-md overflow-hidden bg-neutral-200 "
                  >
                    <Image
                      width={800}
                      height={450}
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-md bg-muted group-hover:bg-muted/80 transition-colors"
                      loading="lazy"
                    />
                  </CardItem>
                  {blog.tagline && (
                    <CardItem
                      translateZ="100"
                      className="absolute bottom-4 left-4 bg-yellow-300 text-black px-3 py-1 rounded text-sm font-medium shadow-md"
                    >
                      {blog.tagline}
                    </CardItem>
                  )}
                </CardItem>

                <CardItem translateZ="100" className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors min-h-10">
                    {blog.title}
                  </h3>
                  <p className="text-sm min-h-10 text-muted-foreground">
                    {blog.description}
                  </p>

                  <CardItem
                    translateZ="100"
                    className="flex items-center justify-between pt-2"
                  >
                    <span className="text-sm text-muted-foreground">
                      {blog.date}
                    </span>
                    <Badge variant="default" className="shadow-sm">
                      {blog.tag}
                    </Badge>
                  </CardItem>
                </CardItem>
              </Link>
            </CardBody>
          </CardContainer>
        </FollowerPointerCard>
      ))}
    </div>
  );
}
