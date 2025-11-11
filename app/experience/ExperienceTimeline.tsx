"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export default function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - rect.top) / (rect.height + windowHeight / 2)
        )
      );

      setLineHeight(scrollProgress * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      {/* Static Line */}
      <div className="hidden sm:block absolute left-[9px] top-12 bottom-0 w-0.5 bg-accent/20 shadow-sm" />

      {/* Animated Line */}
      <div
        className="hidden sm:block absolute left-[9px] top-12 w-0.5 bg-accent shadow-sm transition-all duration-300 ease-out"
        style={{ height: `${lineHeight}%` }}
      />

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="relative flex gap-4 sm:gap-8 mb-12 sm:mb-16 group"
        >
          {/* Timeline Dot */}
          <div className="hidden sm:block relative flex-shrink-0">
            <div className="w-5 h-5 rounded-full border-4 border-accent bg-background mt-1 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {/* Date */}
              <div className="text-muted-foreground text-sm sm:text-base">
                {exp.period}
              </div>

              {/* Details */}
              <div className="sm:col-span-2 space-y-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {exp.role} · {exp.company}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {exp.description}
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-accent text-accent-foreground hover:bg-accent/80 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
