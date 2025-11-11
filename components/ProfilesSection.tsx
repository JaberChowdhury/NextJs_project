"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "./ProfileCard";
import mentorsData from "@/data/mentors.json";
import developersData from "@/data/developers.json";
import { sectionVariants } from "@/lib/motion";

export default function ProfilesSection() {
  // In Next.js 16, we can directly import JSON in server components
  const mentors = mentorsData;
  const developers = developersData;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Mentors Section */}
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            variants={sectionVariants}
          >
            Expert Mentors
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={sectionVariants}
          >
            Learn from world-class competitive programmers who've mastered the
            art of algorithmic thinking
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {mentors.map((mentor, index) => (
              <ProfileCard key={mentor.id} {...mentor} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Development Team Section */}
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            variants={sectionVariants}
          >
            Development Team
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={sectionVariants}
          >
            The engineers building the platform that powers your competitive
            programming journey
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {developers.map((developer, index) => (
              <ProfileCard key={developer.id} {...developer} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
