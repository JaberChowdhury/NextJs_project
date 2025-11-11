"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Copy, Check } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Index() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mahtabulsourav@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <BackgroundRippleEffect cols={40} rows={19} cellSize={50} />

      <div className="max-w-3xl w-full space-y-8 animate-fade-in relative z-10 px-4 sm:px-6">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Hi, I'm Mahtabul Shourav
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
            Aspiring Software Engineer
          </p>
        </div>

        {/* Linkedin Card */}
        <Card className="p-4 flex items-center justify-between border shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3">
            <X className="w-5 h-5" />
            <span className="text-sm">
              Connect with me on LinkedIn for SWE insights
            </span>
          </div>
          <Button
            variant="default"
            size="sm"
            className="hover:bg-primary/90 transition-colors"
          >
            Connect
          </Button>
        </Card>

        {/* Description */}
        <div className="space-y-6 text-sm sm:text-base">
          <p>
            I turn fuzzy ideas into live Products{" "}
            <span className="italic">(quickly)</span> — full-stack AI Builder.
          </p>

          <div className="space-y-2">
            <p>
              Currently working as a Founding Engineer at{" "}
              <a
                href="https://kay.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium"
              >
                kay.ai
              </a>
            </p>
            <p>
              I have built multiple products in the past 5 years.{" "}
              <span className="link-underline font-medium">Raised $100K</span>{" "}
              for my startup{" "}
              <a href="#" className="link-underline font-medium">
                Dreamboat.ai
              </a>
              , built{" "}
              <a href="#" className="link-underline font-medium">
                Engagebud
              </a>
              ,{" "}
              <a href="#" className="link-underline font-medium">
                Influencerbit
              </a>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">
              You can talk to me about Backend, new ideas, life, or anything
              else.
            </p>
            <p>
              Say Hi on{" "}
              <a
                href="https://linkedin.com/in/mahtabul-shourav"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={handleCopy}
              className={`relative w-32 h-12 bg-[#161616] text-white rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                copied
                  ? "border-green-500 bg-[#1f1f1f]"
                  : "border-transparent hover:bg-[#2a2a2a] active:bg-[#3a3a3a]"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Email</span>
                  </>
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
