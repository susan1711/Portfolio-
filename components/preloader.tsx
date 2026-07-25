"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

let preloaderCompleted = false;

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(!preloaderCompleted);

  useEffect(() => {
    if (!isVisible) return;

    const duration = shouldReduceMotion ? 500 : 6000;
    const startTime = performance.now();
    let rafId: number;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const raw = Math.min(elapsed / duration, 1);

      let eased: number;
      if (raw <= 0.55) {
        const t = raw / 0.55;
        eased = 0.50 * (1 - Math.pow(1 - t, 3));
      } else if (raw <= 0.80) {
        const t = (raw - 0.55) / 0.25;
        eased = 0.50 + 0.33 * t;
      } else if (raw <= 0.93) {
        const t = (raw - 0.80) / 0.13;
        eased = 0.83 + 0.14 * (1 - Math.pow(1 - t, 3));
      } else {
        eased = 0.97;
      }

      setProgress(eased * 100);

      if (raw >= 1) {
        setProgress(100);
        setTimeout(() => {
          preloaderCompleted = true;
          setIsVisible(false);
        }, 400);
      } else {
        rafId = requestAnimationFrame(update);
      }
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, shouldReduceMotion]);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex items-center gap-0.5 overflow-hidden">
        <span className="font-heading text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          Sudharsan
        </span>
        <span className="font-heading text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">
          .
        </span>
      </div>

      <div className="mt-8 w-48 sm:w-64">
        <div className="h-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm tabular-nums text-muted-foreground">
          {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
}
