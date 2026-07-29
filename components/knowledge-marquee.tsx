"use client";

import { useReducedMotion } from "framer-motion";

import { tools } from "@/content/knowledge-logos";
import { ToolCard } from "@/components/ui/tool-card";

export function KnowledgeMarquee() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 py-16">
            {tools.map((tool) => (
              <ToolCard key={tool.name} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const doubledTools = [...tools, ...tools];

  return (
    <div className="w-full">
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="group relative overflow-x-hidden overflow-y-hidden py-2 touch-pan-x touch-pinch-zoom"
              style={{ 
                WebkitMaskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                maskImage:"linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}>
          <div className="flex w-max gap-4 animate-marquee [--duration:70s] group-hover:[animation-play-state:paused] sm:gap-6">
            {doubledTools.map((tool, index) => (
              <ToolCard key={`${tool.name}-${index}`} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}