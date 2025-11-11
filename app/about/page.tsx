import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";

const techStack = [
  "Python",
  "JavaScript",
  "PyQt",
  "FastAPI",
  "Postgres",
  "Git",
  "N8N",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16">
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Mahtabul Shourav
          </h1>
          <p className="text-sm sm:text-sm lg:text-sm text-muted-foreground">
            ASPIRING SWE • BACKEND • DATABASE • COFFEE • MUSIC • F1
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-4 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Who I Am</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Aman, a Bengaluru-based engineer passionate about
              building tools that simplify people's lives. I've been coding
              since 2018, writing about AI, LLMs, frontend, backend, Rails and
              databases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">What I Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              Currently a Founding Engineer at{" "}
              <a href="https://kay.ai" className="link-underline font-medium">
                Kay.ai
              </a>
              , building workflow automation for insurance brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Co-founder of Dreamboat.ai, Engagebud and Influencerbit — led
              product development and design across multiple startups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              LLMs and AI will automate the mundane and reshape how we work. I
              strive to stay at the forefront of this transformation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Beyond Code</h2>
            <p className="text-muted-foreground leading-relaxed">
              Love techno & house music, follow F1 (Max) and play chess.
            </p>
          </section>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            size="lg"
            className="hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Get in Touch
          </Button>

          {/* Client-side button */}
          <CopyEmailButton />
        </div>
      </div>
    </div>
  );
}
