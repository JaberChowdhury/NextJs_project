"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

type PropsType = {
  main: string; // Input Hex (e.g. #6750A4)
  opposite: string; // Complementary Hex
  materialSource: string; // The Tone 40 "Materialized" Hex from props
  id: number;
};

const HexDisplay = ({ color, label }: { color: string; label: string }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[9px] uppercase font-bold tracking-tighter opacity-40">
      {label}
    </span>
    <span className="font-mono text-sm font-semibold tracking-tight">
      {color}
    </span>
  </div>
);

function Card({ main, opposite, materialSource, id }: PropsType) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link href={`/colors/info/${main.replace("#", "")}`} className="flex m-2">
      <BlurFade delay={0.25 + (id / 5) * 0.05} className="w-full">
        <MagicCard
          className="group min-w-64 p-0 flex flex-col overflow-hidden border-muted-foreground/10 transition-all hover:shadow-2xl"
          gradientColor={isDark ? "#262626" : "#D9D9D955"}
        >
          {/* 1. Top Visual Split */}
          <div className="relative h-24 w-full">
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${main} 50%, ${opposite} 50%)`,
              }}
            />
            {/* Overlay Badge */}
            <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-md rounded-full px-2 py-1 text-[10px] text-white font-medium border border-white/20">
              Ref: {id}
            </div>
          </div>

          {/* 2. Content Body */}
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-end">
              <div className="space-y-3">
                <HexDisplay label="Input Color" color={main} />
                <HexDisplay label="Material Primary" color={materialSource} />
              </div>

              {/* Lightness Gauge */}
              <div className="relative size-12">
                <AnimatedCircularProgressBar
                  max={100}
                  min={0}
                  value={65} // Example: Pass a 'chroma' or 'tone' value here
                  gaugePrimaryColor={materialSource}
                  gaugeSecondaryColor={isDark ? "#333" : "#eee"}
                  className="text-[9px] font-bold"
                />
              </div>
            </div>

            {/* 3. Material Tonal Strip (Visualizing the system) */}
            <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-muted">
              <div
                className="h-full flex-1"
                style={{ backgroundColor: main, opacity: 0.2 }}
                title="Tone 90"
              />
              <div
                className="h-full flex-1"
                style={{ backgroundColor: main, opacity: 0.5 }}
                title="Tone 70"
              />
              <div
                className="h-full flex-1"
                style={{ backgroundColor: main, opacity: 0.8 }}
                title="Tone 40"
              />
              <div
                className="h-full flex-1"
                style={{ backgroundColor: main, opacity: 1.0 }}
                title="Tone 20"
              />
            </div>
          </div>

          {/* Footer Decoration */}
          <div
            className="h-1 w-full"
            style={{ backgroundColor: materialSource }}
          />
        </MagicCard>
      </BlurFade>
    </Link>
  );
}

export default Card;
