"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

let preloaderCompleted = false;

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(!preloaderCompleted);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const progressDuration = shouldReduceMotion ? 500 : 6000;
    const holdDuration = shouldReduceMotion ? 0 : 1200;
    const fadeDuration = shouldReduceMotion ? 0 : 600;
    const startTime = performance.now();
    let rafId: number;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const raw = Math.min(elapsed / progressDuration, 1);

      const eased = 1 - Math.pow(1 - raw, 1.8);

      setProgress(eased * 100);

      if (raw >= 1) {
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            preloaderCompleted = true;
            setIsVisible(false);
          }, fadeDuration);
        }, holdDuration);
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
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
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
            className="h-full rounded-full bg-primary"
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
