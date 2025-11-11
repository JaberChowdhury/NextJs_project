// Server Component
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CodeExamples from "@/components/CodeExamples";
import ProfilesSection from "@/components/ProfilesSection";
import { pageVariants } from "@/lib/motion";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    // <motion.div
    //   variants={pageVariants}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    // >
    <>
      <Header />
      <main>
        <Hero />
        <CodeExamples />
        <ProfilesSection />
      </main>
    </>
    // </motion.div>
  );
}
