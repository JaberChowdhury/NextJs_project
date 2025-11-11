import { Badge } from "@/components/ui/badge";
import ExperienceTimeline from "./ExperienceTimeline";

const experiences = [
  {
    period: "Apr 2025 - Present",
    role: "Programming Trainer",
    company: "BU Computer Club",
    description: "Part-time (On-site)",
    responsibilities: [
      "Teach C++ programming, covering core concepts and problem solving techniques.",
      "Mentor students for competitive programming and university level contests.",
      "Design coding exercises and evaluate student performance through hands-on practice.",
    ],
    skills: ["C++ (Programming Language)", "Communication", "Teaching"],
  },
  {
    period: "Feb 2024- Apr 2025",
    company: "Lynkeus - 린케우스",
    role: "Intern",
    description: "Part-time (On-site)",
    responsibilities: [
      "Annotated and pre-processed 100,000+ images",
      "Prepared datasets and performed inference for training",
      "Developed a Pedestrian Detection Software Prototype using PyQt5",
      "Managed comprehensive technical documentation",
    ],
    skills: [
      "Dataset Preparation",
      "Python (Programming Language)",
      "PyQt5",
      "YOLOv8",
      "OpenCV",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16 overflow-y-auto">
      <div className="max-w-3xl mx-auto animate-fade-in space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-3">
          <h1 className="text-xl sm:text-2xl lg:text-3xl">
            Changelog from my journey
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            I've been working on Kay.ai for the past 1.5 years. Here's a
            timeline of my journey.
          </p>
        </div>

        {/* Timeline (Client Component) */}
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
