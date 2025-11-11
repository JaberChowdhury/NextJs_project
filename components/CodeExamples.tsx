"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { codeSnippets, type CodeSnippet } from "@/lib/code-snippets";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { codeEditorVariants, slideVariants } from "@/lib/motion";
import { Circle, Play, Pause, ChevronRight, Zap } from "lucide-react";

// Custom theme using CSS variables
const customTheme = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: "var(--card)",
    color: "var(--card-foreground)",
  },
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: "var(--card)",
    border: "1px solid var(--border)",
  },
  comment: {
    color: "var(--muted-foreground)",
  },
  string: {
    color: "var(--chart-2)",
  },
  keyword: {
    color: "var(--primary)",
  },
  number: {
    color: "var(--chart-3)",
  },
  function: {
    color: "var(--chart-4)",
  },
};

const languages = [
  { id: "python", label: "Python", color: "text-chart-4" },
  { id: "cpp", label: "C++", color: "text-chart-3" },
  { id: "c", label: "C", color: "text-chart-2" },
  { id: "java", label: "Java", color: "text-chart-1" },
  { id: "rust", label: "Rust", color: "text-chart-5" },
];

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState("python");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-rotate languages
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = languages.findIndex((l) => l.id === prev);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / 80; // 80 ticks over 4 seconds
      });
    }, 50);

    return () => clearInterval(timer);
  }, [activeTab, isPlaying]);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Master Any Language
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
            Elegant solutions in every language
          </p>
        </motion.div>

        <motion.div
          variants={codeEditorVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-2 border-border shadow-lg">
            {/* Progress Bar */}
            <motion.div
              className="h-1 bg-primary origin-left"
              style={{ scaleX: progress / 100, scaleY: 1 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: "linear", duration: 0.05 }}
            />

            {/* Header with Controls */}
            <div className="bg-muted p-3 flex items-center justify-between border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <Circle className="h-3 w-3 fill-destructive text-destructive" />
                  <Circle className="h-3 w-3 fill-chart-3 text-chart-3" />
                  <Circle className="h-3 w-3 fill-chart-4 text-chart-4" />
                </div>

                {/* Play/Pause */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="ml-4 p-1 rounded-lg hover:bg-background transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Play className="h-4 w-4 text-muted-foreground" />
                  )}
                </motion.button>

                {/* Progress Indicators */}
                <div className="flex space-x-1 ml-2">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.id}
                      onClick={() => {
                        setActiveTab(lang.id);
                        setProgress(0);
                      }}
                      className={`h-1 w-8 rounded-full transition-all ${
                        activeTab === lang.id
                          ? "bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      animate={{
                        width: activeTab === lang.id ? "2rem" : "1.5rem",
                        opacity: activeTab === lang.id ? 1 : 0.5,
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 text-chart-3" />
                <span className="text-xs text-muted-foreground font-mono">
                  {codeSnippets[activeTab].complexity}
                </span>
              </div>
            </div>

            {/* Tabs with animated content */}
            <Tabs
              value={activeTab}
              onValueChange={(val) => {
                setActiveTab(val);
                setProgress(0);
              }}
              className="w-full"
            >
              <TabsList className="w-full justify-start bg-card p-2 border-b border-border">
                {languages.map((lang) => (
                  <TabsTrigger
                    key={lang.id}
                    value={lang.id}
                    className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 hover:bg-muted transition-all ${
                      activeTab === lang.id ? lang.color + " font-semibold" : ""
                    }`}
                  >
                    {lang.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Slide transition for code content */}
              <div className="relative h-80 overflow-hidden">
                <AnimatePresence mode="wait" custom={activeTab}>
                  {languages.map((lang) => (
                    <TabsContent key={lang.id} value={lang.id} className="m-0">
                      {activeTab === lang.id && (
                        <motion.div
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 },
                          }}
                          className="absolute inset-0"
                        >
                          <CodeEditor
                            snippet={codeSnippets[lang.id]}
                            fileName={codeSnippets[lang.id].fileName}
                          />
                        </motion.div>
                      )}
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </div>
            </Tabs>

            {/* Footer */}
            <motion.div
              className="bg-muted/50 p-2 flex items-center justify-between border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xs text-muted-foreground">
                {codeSnippets[activeTab].fileName}
              </span>
              <motion.button
                onClick={() => {
                  const currentIndex = languages.findIndex(
                    (l) => l.id === activeTab,
                  );
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setActiveTab(languages[nextIndex].id);
                  setProgress(0);
                }}
                className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Next Language</span>
                <ChevronRight className="h-3 w-3" />
              </motion.button>
            </motion.div>
          </Card>
        </motion.div>

        {/* Feature tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            "Syntax Highlighting",
            "Auto-Rotate",
            "5 Languages",
            "Copy Code",
            "Performance Stats",
          ].map((tag) => (
            <motion.span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CodeEditor({
  snippet,
  fileName,
}: {
  snippet: CodeSnippet;
  fileName: string;
}) {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        <SyntaxHighlighter
          language={snippet.language}
          style={customTheme}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "13px",
            lineHeight: "1.4",
            fontFamily: "var(--font-mono)",
          }}
          showLineNumbers
          lineNumberStyle={{
            color: "var(--muted-foreground)",
            paddingRight: "0.75rem",
            userSelect: "none",
            fontSize: "12px",
          }}
        >
          {snippet.compactCode}
        </SyntaxHighlighter>
      </div>

      {/* View Full Code Button */}
      <motion.div
        className="p-3 border-t border-border"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
          asChild
        >
          <a
            href={`#${snippet.language}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Code →
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
