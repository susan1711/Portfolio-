"use client";

import { useReducedMotion } from "framer-motion";

import { knowledgeLogos } from "@/content/knowledge-logos";

export function KnowledgeMarquee() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {knowledgeLogos.map((logo) => (
          <div
            key={logo.id}
            aria-label={logo.name}
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: logo.svg }}
          />
        ))}
      </div>
    );
  }

  const doubledLogos = [...knowledgeLogos, ...knowledgeLogos];

  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-marquee [--duration:40s] group-hover:[animation-play-state:paused]">
        {doubledLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            aria-label={logo.name}
            className="flex shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
            dangerouslySetInnerHTML={{ __html: logo.svg }}
          />
        ))}
      </div>
    </div>
  );
}
