"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Square } from "lucide-react";
import { useState } from "react";

const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

export function VideoContainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.div
      animate={animate}
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-[0_1px_2px_rgba(17,24,39,0.04)] lg:aspect-[4/3]"
      initial={initial}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 size-48 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative flex flex-col items-center gap-4">
        {isPlaying ? (
          <>
            <div className="flex items-center gap-1">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:0.2s]" />
              <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:0.4s]" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Video placeholder — playing</p>
          </>
        ) : (
          <>
            <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/20 hover:shadow-md">
              <Play aria-hidden="true" className="size-6 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Self-introduction video</p>
          </>
        )}
      </div>

      <button
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-xl border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={() => setIsPlaying((p) => !p)}
        type="button"
      >
        {isPlaying ? <Square aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
      </button>
    </motion.div>
  );
}