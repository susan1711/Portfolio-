"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("preloaderPlayed");
    if (hasPlayed) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("preloaderPlayed", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex items-center gap-0.5 overflow-hidden">
        <motion.span
          animate={shouldReduceMotion ? {} : { x: 0, opacity: 1 }}
          className="font-heading text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl"
          initial={{ x: 0, opacity: 1 }}
          key="preloader-left"
          style={{ transformOrigin: "right center" }}
        >
          Sudharsan
        </motion.span>
        <motion.span
          animate={shouldReduceMotion ? {} : { scaleX: 1, opacity: 1 }}
          className="font-heading text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl"
          initial={{ scaleX: 1, opacity: 1 }}
          key="preloader-dot"
          style={{ transformOrigin: "center" }}
        >
          .
        </motion.span>
      </div>

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scaleX: [1, 1.5, 2.5],
                opacity: [0, 0.5, 0],
              }
        }
        className="absolute bottom-1/4 h-0.5 w-12 rounded-full bg-primary/40"
        initial={{ scaleX: 0, opacity: 0 }}
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.6, 1],
              }
        }
      />
    </motion.div>
  );
}