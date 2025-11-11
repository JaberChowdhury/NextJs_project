"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { AnimatedStats } from "@/components/ui/animated-stats";
import { heroVariants, textRevealVariants, buttonVariants } from "@/lib/motion";
import { ArrowRight, Users, Code2, Trophy } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Active Members", target: 10000, suffix: "K+", prefix: "" },
    { label: "Solved Problems", target: 500, suffix: "+", prefix: "" },
    { label: "Monthly Contests", target: 50, suffix: "+", prefix: "" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <FloatingIcons />

      <motion.div
        className="container mx-auto px-4 py-20 text-center relative z-10"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        {/* Main Title with Typewriter */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          variants={textRevealVariants}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <TypewriterText
              text="Competitive Programming Club"
              speed={40}
              delay={0.2}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          variants={textRevealVariants}
        >
          Master algorithms, conquer contests, and join a community of
          passionate coders pushing the boundaries of problem-solving
          excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={textRevealVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Users className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Stats */}
        <AnimatedStats stats={stats} />

        {/* Quick Indicators */}
        <motion.div
          className="flex justify-center space-x-8 mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-primary" />
            10+ Languages
          </span>
          <span className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-secondary" />
            Weekly Contests
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
