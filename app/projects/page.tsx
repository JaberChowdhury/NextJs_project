// app/blogs/page.tsx
import Link from "next/link";
import Projectlist from "./ProjectList";

import { projects } from "@/content/projects/entry";

import { Temp } from "./temp";
export default function BlogsPage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4 sm:p-8 lg:p-16">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Pensieve
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            A collection of thoughts, ideas, and musings. You can check more of
            my writings on my{" "}
            <Link href="#" className="text-blue-600 link-underline">
              Medium
            </Link>
            profile.
          </p>
        </div>
        <Temp />
        {/*<Projectlist projects={projects} />*/}
      </div>
    </div>
  );
}
